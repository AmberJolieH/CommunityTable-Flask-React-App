from app.models import db, Resource, User, Location
from faker import Faker
import random

def seed_locations():
    goodwill = Location(
        name= 'Goodwill',
        state = 'Texas',
        city = 'Houston',
        latitude = 29.743030,
        longitude = -95.409230,
    )
    db.session.add(goodwill)

    church = Location(
        name= 'Bethel Church of Houston',
        state = 'Texas',
        city = 'Houston',
        latitude = 29.757721,
        longitude = -95.479607,
    )
    db.session.add(church)

    college = Location(
        name= 'University of Houston',
        state = 'Texas',
        city = 'Houston',
        latitude = 29.718700,
        longitude = -95.337760,
    )
    db.session.add(college)

    downtown = Location(
        name= 'DownTown Houston',
        state = 'Texas',
        city = 'Houston',
        latitude = 29.756106,
        longitude = -95.357752,
    )
    db.session.add(downtown)

    times = 0
    while times < 100:
        new_location = Location(
            name= 'DownTown Houston',
            state = 'Texas',
            city = 'Houston',
            latitude = 29.756106,
            longitude = -95.357752,
        )

        times = times + 1
        db.session.add(new_location)

    db.session.commit()

def undo_locations():
    db.session.execute('TRUNCATE locations;')
    db.session.commit()
