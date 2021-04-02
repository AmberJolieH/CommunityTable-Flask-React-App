from app.models import db, Resource, User, Location
from faker import Faker  # noqa
from faker.providers import BaseProvider  # noqa
import random
import datetime


def seed_resources():
    faker = Faker('en_PH')

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

    catslen = len(cats)

    times = 0
    while times < 100:
        category = cats[random.randrange(catslen)]
        new_resource = Resource(
            posterId=random.randrange(1, users),
            name=faker.random_company_product(),
            description='My resource description',
            image=componentMap[category],
            quantity=random.randrange(1, 30),
            catName=category,
            startsAt=datetime.datetime.now(),
            endsAt=datetime.datetime(2021, 5, 10),
            locationId=random.randrange(1, locations)
        )

        times = times + 1
        db.session.add(new_resource)

    db.session.commit()


def undo_resources():
    db.session.execute('TRUNCATE resources;')
    db.session.commit()
