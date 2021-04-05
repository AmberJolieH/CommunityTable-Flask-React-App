from flask.cli import AppGroup  # noqa
from .users import seed_users, undo_users
from .resources import seed_resources, undo_resources
from .locations import seed_locations, undo_locations
# from .claimstatus import seed_claimStatus, undo_claimStatus

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_locations()
    seed_resources()
    # seed_claimStatus()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_locations()
    undo_resources()
    # undo_claimStatus()
    # Add other undo functions here
