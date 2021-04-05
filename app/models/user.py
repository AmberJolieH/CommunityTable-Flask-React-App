from .db import db
from werkzeug.security import generate_password_hash, check_password_hash  # noqa
from flask_login import UserMixin  # noqa


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
    claimedResources = db.relationship(
        'ClaimStatus',
        lazy='joined', backref=db.backref('user')
    )

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
    name = db.Column(db.String(50), nullable=False)
    state = db.Column(db.String(30), nullable=False)
    city = db.Column(db.String(30), nullable=False)
    latitude = db.Column(db.Numeric(10, 8), nullable=False)
    longitude = db.Column(db.Numeric(11, 8), nullable=False)

    resources = db.relationship('Resource', back_populates='location')

    def to_dict(self):
        return {
            "name": self.name,
            "state": self.state,
            "city": self.city,
            "lat": str(self.latitude),
            "long": str(self.longitude)
        }


class Resource(db.Model):
    __tablename__ = 'resources'

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

    user = db.relationship('User', lazy="joined", back_populates='resources')
    location = db.relationship(
        'Location', lazy="joined", back_populates='resources'
    )
    resourceClaimees = db.relationship(
        'ClaimStatus', lazy='joined', backref=db.backref('resources'))
    # resourceClaimees = db.relationship(
    #     'User', secondary='claimStatus',
    #     lazy='joined', backref=db.backref('claimedResource')
    # )

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "image": self.image,
            "posterId": self.posterId,
            "quantity": self.quantity,
            "catName": self.catName,
            "startsAt": self.startsAt,
            "endsAt": self.endsAt,
            "locationId": self.locationId,
            "location": self.location.to_dict()
        }

    def to_location(self):
        return{
            "location": self.location.to_dict()
        }

class ClaimStatus(db.Model):
    __tablename__='claimStatus'

    id = db.Column(db.Integer, primary_key=True)
    claimUserId = db.Column(db.Integer, db.ForeignKey('users.id'))
    resourceId = db.Column(db.Integer, db.ForeignKey('resources.id'))
    quantity = db.Column(db.Integer, nullable=False)

   