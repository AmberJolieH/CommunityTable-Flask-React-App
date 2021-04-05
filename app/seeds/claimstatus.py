from app.models import db, Resource, User, Location, claimStatus
import random


def seed_claimStatus():
    users = len(User.query.all())
    resources = len(Resource.query.all())

    times = 0
    while times < 10:
        new_claim = claimStatus(
            claimUserId=random.randrange(1, users),
            resourceId=random.randrange(1, resources),
            quantity=random.randrange(30),
        )

        times = times + 1
        db.session.add(new_claim)

    db.session.commit()


def undo_claimStatus():
    db.session.execute('TRUNCATE claimStatus;')
    db.session.commit()
