from flask import Blueprint, jsonify, redirect, request  # noqa
from app.models import db, Resource, User
from flask_login import current_user  # noqa
from app.forms.resource_form import ResourceForm
from app.aws import (
    upload_file_to_s3, allowed_file, get_unique_filename)
import json

resource_routes = Blueprint('resources', __name__)


@resource_routes.route('/')
# get all resources
def resources():
    resources = Resource.query.all()
    # for resource in resources:
    #     loc_obj = resource.location.to_dict()
    #     print(loc_obj['lat'])
    return {"resources": [resource.to_dict() for resource in resources]}


@resource_routes.route('/<int:id>')
# get a single resource
def resource(id):
    resource = Resource.query.get(id)
    return resource.to_dict()


@resource_routes.route('/categories/<int:id>')
# get resources by category type
def categories(id):
    cats = [
        'Non-Perishable Food',
        'Perishable Food',
        'Water and beverages',
        'Baby care',
        'Children toys',
        'Clothing',
        'Electronics',
        'Books',
        'School Supplies',
        'Furniture',
        'Shelter',
        'Services (Barber, shower, etc)',
        'Other'
    ]
    category = cats[id - 1]
    resources = Resource.query.filter(Resource.catName == category)
    print('=====================', [
        resource.to_dict() for resource in resources
        ])
    return {"resources": [resource.to_dict() for resource in resources]}


@resource_routes.route('/create_resource', methods=['POST'])
# create a resource
def create_resource():
    form = ResourceForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        if 'image' not in request.files:
            componentMap = {
                'Non-Perishable Food': "https://resourceimage.s3-us-west-2.amazonaws.com/cans.svg",
                'Perishable Food': "https://resourceimage.s3-us-west-2.amazonaws.com/parishable.svg",
                'Water and beverages': "https://resourceimage.s3-us-west-2.amazonaws.com/WATER.svg",
                'Baby care': "https://resourceimage.s3-us-west-2.amazonaws.com/diapers.svg",
                'Children toys': "https://resourceimage.s3-us-west-2.amazonaws.com/CHILDS-toys.svg",
                'Clothing': "https://resourceimage.s3-us-west-2.amazonaws.com/cloth.svg",
                'Electronics': "https://resourceimage.s3-us-west-2.amazonaws.com/elec.svg",
                'Books': "https://resourceimage.s3-us-west-2.amazonaws.com/books.svg",
                'School Supplies': "https://resourceimage.s3-us-west-2.amazonaws.com/schoolSupplies.svg",
                'Furniture': "https://resourceimage.s3-us-west-2.amazonaws.com/furn.svg",
                'Shelter': "https://resourceimage.s3-us-west-2.amazonaws.com/shelter.svg",
                'Services (Barber, shower, etc)': "https://resourceimage.s3-us-west-2.amazonaws.com/services.svg",
                'Other': "https://resourceimage.s3-us-west-2.amazonaws.com/etc.svg",
            }
            url = componentMap[form.catName]
        else:
            image = request.files["image"]
            if not allowed_file(image.filename):
                return {"errors": "file type not permitted"}, 400
            image.filename = get_unique_filename(image.filename)
            upload = upload_file_to_s3(image)
            if "url" not in upload:
                upload['url'] = {'error': 'file failed to upload, try again'}
            url = upload['url']
        resource = Resource(
            posterId=current_user,
            name=form.data['name'],
            description=form.data['description'],
            image=url,
            quantity=form.data['quantity'],
            catName=form.data['catName'],
            startsAt=form.data['startsAt'],
            endsAt=form.data['endsAt'],
            locationId=form.data['locationId'],
        )
        db.session.add(resource)
        db.session.commit()
        return resource.to_dict()
    print(form.errors)
    return {'errors': form.errors}


@resource_routes.route('/claim', methods=['POST'])
def claim_resource():
    user = User.query.get(current_user.id)
    decoded = json.loads(request.data.decode("UTF-8"))
    resourceId = decoded['resourceId']
    quantity = decoded['quantity']
    resource = Resource.query.get(resourceId)
    resource.quantity = resource.quantity - quantity
    db.session.commit()
    print("-------------------resourceId and quanitty", resourceId, quantity)
    return({"Success": "Resources have been claimed."})
