from flask import Blueprint, jsonify, redirect
from app.models import Resource

resource_routes = Blueprint('resources', __name__)


@resource_routes.route('/resources')
#get all resources
def resources():
    resources = Resource.query.all()
    return {"resources": [resource.to_dict() for resource in resources]}


@resource_routes.route('/resources/<int:id>')
#get a single resource
def resource(id):
    resource = Resource.query.get(id)
    return resource.to_dict()

@resource_routes.route('/resources', methods=['POST'])
#create a resource
def create_resource():
    form = ResourceForm()
    if form.validate_on_submit():
        resource = Resource(
            posterId=form.data['posterId'],
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
        return redirect('/')
    return {'errors': validation_errors_to_error_messages(form.errors)}
