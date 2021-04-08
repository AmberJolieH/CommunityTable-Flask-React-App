from app.models import db, Resource, User, Location
from faker import Faker
import random


def seed_locations():
    goodwill = Location(
        name='Goodwill',
        address='2030 Westheimer Rd, Houston, TX 77019',
        # state = 'Texas',
        # city = 'Houston',
        latitude=29.743030,
        longitude=-95.409230,
    )
    db.session.add(goodwill)

    church = Location(
        name='Bethel Church of Houston',
        address='825 Bering Dr, Houston, TX 77057',
        # state = 'Texas',
        # city = 'Houston',
        latitude=29.757721,
        longitude=-95.479607,
    )
    db.session.add(church)

    college = Location(
        name='University of Houston',
        address='4800 Calhoun Rd, Houston, TX 77004',
        # state = 'Texas',
        # city = 'Houston',
        latitude=29.718700,
        longitude=-95.337760,
    )
    db.session.add(college)

    downtown = Location(
        name='DownTown Houston',
        address='609 Crawford St, Houston, TX 77002',
        # state = 'Texas',
        # city = 'Houston',
        latitude=29.756106,
        longitude=-95.357752,
    )
    db.session.add(downtown)

    times = 0
    while times < 20:
        newLat = 29.256106 + (round(random.random(), 6))
        newLong = -95.857752 + (round(random.random(), 5))
        new_location = Location(
            name='DownTown Houston',
            address='fake address',
            # state = 'Texas',
            # city = 'Houston',
            latitude=newLat,
            longitude=newLong,
        )

        times = times + 1
        db.session.add(new_location)

    db.session.commit()


def undo_locations():
    db.session.execute('TRUNCATE locations;')
    db.session.commit()
