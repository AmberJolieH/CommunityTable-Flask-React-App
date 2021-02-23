from app.models import db, Resource, User, Location
from faker import Faker
import random
import datetime

def seed_resources():
    faker = Faker()

    users = len(User.query.all())
    locations = len(Location.query.all())
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
    catslen = len(cats)

    times = 0
    while times < 5:
        new_resource = Resource(
            posterId = random.randrange(1, users),
            name = 'My resource',
            description = 'My resource description',
            # image = ,
            quantity = random.randrange(30),
            catName = cats[random.randrange(catslen)],
            startsAt = datetime.datetime.now(),
            endsAt = datetime.datetime(2021,5,10),
            locationId = random.randrange(1, 9)
        )

        times = times + 1
        db.session.add(new_resource)

    db.session.commit()

def undo_resources():
    db.session.execute('TRUNCATE resources;')
    db.session.commit()
