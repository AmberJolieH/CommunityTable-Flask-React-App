from flask import Blueprint, jsonify, redirect, request
from app.models import db, Resource
from app.forms.resource_form import ResourceForm

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
    print('=====================', [resource.to_dict()
                                    for resource in resources])
    return {"resources": [resource.to_dict() for resource in resources]}


@resource_routes.route('/create_resource', methods=['POST'])
# create a resource
def create_resource():
    form = ResourceForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        resource = Resource(
            posterId=2,
            name=form.data['name'],
            description=form.data['description'],
            image=form.data['image'],
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


@resource_routes.route('/posted_resources')
# get all resources a user has posted
def get_posted_resources():
    posted_resources = Resource.query
