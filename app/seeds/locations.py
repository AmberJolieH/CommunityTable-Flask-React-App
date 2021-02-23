from app.models import db, Resource, User, Location
from faker import Faker
import random

def seed_locations():
    faker = Faker()

    times = 0
    while times < 10:
        new_location = Location(
            state = 'Texas',
            city = 'Huston',
            latitude = faker.coordinate(center= 29.7604, radius =.01),
            longitude = faker.coordinate(center=-95.3697, radius=.01),
        )
        times = times + 1
        db.session.add(new_location)

    db.session.commit()

def undo_locations():
    db.session.execute('TRUNCATE locations;')
    db.session.commit()
