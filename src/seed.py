"""Utility file to seed database from data in seed_data/"""

from sqlalchemy import func
from model import User, Rating, Movie
import datetime
# from model import Rating
# from model import Movie

from model import connect_to_db, db
from server import app


def load_users():
    """Load users from u.user into database."""

    print "Users"

    # Delete all rows in table, so if we need to run this a second time,
    # we won't be trying to add duplicate users
    User.query.delete()

    # Read u.user file and insert data
    for row in open("seed_data/u.user"):
        row = row.rstrip()
        userId, fname, username, password = row.split("|")

        user = User(userId=userId,
                    fname=fname,
                    username=username)

        # We need to add to the session or it won't ever be stored
        db.session.add(user)

    # Once we're done, we should commit our work
    db.session.commit()


def load_page_data():
    """Load page data from u.page into database."""

    Page.query.delete()

    for row in open("seed_data/u.page"):
        row = row.strip()
        page_list = row.split("|")
        page_list = page_list[:5]

        pageID, pageTitle = page_list

        page = Page(pageID=pageID, title=pageTitle)

        db.session.add(page)

    db.session.commit()


def set_val_userId():
    """Set value for the next userId after seeding database"""

    # Get the Max userId in the database
    result = db.session.query(func.max(User.userId)).one()
    max_id = int(result[0])

    # Set the value for the next userId to be max_id + 1
    query = "SELECT setval('users.userId_seq', :new_id)"
    db.session.execute(query, {'new_id': max_id + 1})
    db.session.commit()


if __name__ == "__main__":
    connect_to_db(app)

    # In case tables haven't been created, create them
    db.create_all()

    # Import different types of data
    load_users()
    load_page_data()
    set_val_userId()