from werkzeug.security import generate_password_hash  # noqa
from app.models import db, User
from faker import Faker  # noqa


# Adds a demo user, you can add other users here if you want
def seed_users():
    faker = Faker()
    password = 'password'

    demo = User(
        username='Demo',
        email='demo@aa.io',
        phonenumber=1235550123,
        firstname='Demo',
        lastname='User',
        isOrg=False,
        password=password
    )
    db.session.add(demo)

    times = 0
    while times < 30:
        newUser = User(
            username=faker.user_name(),
            firstname=faker.first_name(),
            lastname=faker.last_name(),
            # phonenumber=faker.random_int(0000000000, 9999999999),
            email=faker.email(),
            isOrg=False,
            password=(f'password{times}')
        )
        times = times + 1
        db.session.add(newUser)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
