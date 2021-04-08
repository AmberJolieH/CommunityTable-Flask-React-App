"""empty message

Revision ID: ec798f6092c5
Revises: 9c4b53e06c1c
Create Date: 2021-04-07 13:16:57.960848

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ec798f6092c5'
down_revision = '9c4b53e06c1c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    # op.add_column('claimStatus', sa.Column('claimedResourceId', sa.Integer(), nullable=False))
    # op.drop_constraint('claimStatus_resourceId_fkey', 'claimStatus', type_='foreignkey')
    op.create_foreign_key(None, 'claimStatus', 'resources', ['claimedResourceId'], ['id'])
    # op.drop_column('claimStatus', 'resourceId')
    # op.add_column('locations', sa.Column('address', sa.String(length=120), nullable=False))
    # op.alter_column('locations', 'name',
    #            existing_type=sa.VARCHAR(length=50),
    #            nullable=True)
    # op.drop_column('locations', 'city')
    # op.drop_column('locations', 'state')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    # op.add_column('locations', sa.Column('city', sa.VARCHAR(length=30), autoincrement=False, nullable=False))
    # op.add_column('locations', sa.Column('state', sa.VARCHAR(length=30), autoincrement=False, nullable=False))
    # op.alter_column('locations', 'name',
            #    existing_type=sa.VARCHAR(length=50),
            #    nullable=False)
    op.drop_column('locations', 'address')
    op.add_column('claimStatus', sa.Column('resourceId', sa.INTEGER(), autoincrement=False, nullable=False))
    # op.drop_constraint(None, 'claimStatus', type_='foreignkey')
    op.create_foreign_key('claimStatus_resourceId_fkey', 'claimStatus', 'resources', ['resourceId'], ['id'])
    op.drop_column('claimStatus', 'claimedResourceId')
    # ### end Alembic commands ###