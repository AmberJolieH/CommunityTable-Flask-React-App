from werkzeug.security import generate_password_hash
from app.models import db, User
import faker
import bcrypt

# Adds a demo user, you can add other users here if you want
def seed_users():
    password = 'password'
    
    demo = User(
        username='Demo', 
        email='demo@aa.io',
        phoneNumber=1235550123,
        firstName='Demo',
        lastName='User',
        isOrg=False,
        hashedPassword=bcrypt.hashpw(password.encode('utf8'), bcrypt.gensalt()))
    db.session.add(demo)
    
    times = 0
    while times < 30:
        newUser = User(
            userName= faker.internet.userName(),
            firstName= faker.name.firstName(),
            lastName= faker.name.lastName(),
            email= faker.internet.email(),
            irOrg=False,
            hashedPassword= bcrypt.hashpw(f'password{times}'.encode('utf8'), bcrypt.gensalt()),
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