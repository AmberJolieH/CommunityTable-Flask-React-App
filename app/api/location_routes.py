from flask import Blueprint, jsonify, redirect, request  # noqa
from app.models import db, Location
import json

location_routes = Blueprint('locations', __name__)


@location_routes.route('', methods=['POST'])
# add a new location
def add_location():
    decoded = json.loads(request.data.decode("UTF-8"))
    print(decoded['address'], '==============data =====')
    location = Location(
        # name=decoded['name'],
        address=decoded['address'],
        latitude=decoded['lat'],
        longitude=decoded['lng']
    )
    db.session.add(location)
    db.session.commit()
    print(location.to_dict(), '...........................============')
    return {"location": location.to_dict()}
