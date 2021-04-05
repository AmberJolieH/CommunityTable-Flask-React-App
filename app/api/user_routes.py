from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Resource

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:userId>/posted_resources')
@login_required
# get all resources a user has posted
def get_posted_resources(userId):
    posted_resources = Resource.query.filter(Resource.posterId == userId).all()

    return {"posted_resources": [resource.to_dict()
                                 for resource in posted_resources]}
