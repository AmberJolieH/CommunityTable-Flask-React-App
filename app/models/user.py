from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    phonenumber = db.Column(db.BigInteger)
    email = db.Column(db.String(255), nullable=False, unique=True)
    firstname = db.Column(db.String(40), nullable=False)
    lastname = db.Column(db.String(40), nullable=False)
    isOrg = db.Column(db.Boolean, default=False)
    hashed_password = db.Column(db.String(255), nullable=False)

    resources = db.relationship('Resource', back_populates='user')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email
        }


class Location(db.Model):
    __tablename__ = 'locations'

    id = db.Column(db.Integer, primary_key=True)
    state = db.Column(db.String(30), nullable=False)
    city = db.Column(db.String(30), nullable=False)
    latitude = db.Column(db.Numeric(10, 8), nullable=False)
    longitude = db.Column(db.Numeric(11, 8), nullable=False)

    resources = db.relationship('Resource', back_populates='location')


class Resource(db.Model):
    __tablename__= 'resources'

    id = db.Column(db.Integer, primary_key=True)
    posterId = db.Column(db.Integer, db.ForeignKey('users.id'))
    name = db.Column(db.String(40), nullable=False)
    description = db.Column(db.String(2000), nullable=False)
    image = db.Column(db.String(2000))
    quantity = db.Column(db.Integer, nullable=False)
    catName = db.Column(db.String(50), nullable=False)
    startsAt = db.Column(db.Date, nullable=False)
    endsAt = db.Column(db.Date, nullable=False)
    locationId = db.Column(db.Integer, db.ForeignKey('locations.id'))

    user = db.relationship('User', back_populates='resources')
    location = db.relationship('Location', back_populates='resources')

# class ClaimStatus(db.Model):
#     __tablename__='claimStatus'

#     id = db.Column(db.Integer, primary_key=True)
#     claimUserId = db.Column(db.Integer, db.ForeignKey('users.id'))
#     resourceId = db.Column(db.Integer, db.ForeignKey('resources.id'))
#     quantity = db.Column(db.Integer, nullable=False)


claimStatus = db.Table(
  'claimStatus',
  db.Column(
    'claimUserId', 
    db.Integer,
    db.ForeignKey('users.id'),
    primary_key=True
  ),
  db.Column(
    'resourceId',
    db.Integer,
    db.ForeignKey('resources.id'),
    primary_key=True
  ),
  db.Column(
    'quantity',
    db.Integer,
    nullable=False
  )
)

