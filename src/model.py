"""Models and database functions for project."""

from flask_sqlalchemy import SQLAlchemy

# This is the connection to the PostgreSQL database; we're getting this through
# the Flask-SQLAlchemy helper library. On this, we can find the `session`
# object, where we do most of our interactions (like committing, etc.)

db = SQLAlchemy()


##############################################################################
# Model definitions

class User(db.Model):
    """User data"""

    __tablename__ = "users"

    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    fname = db.Column(db.String(64), nullable=False)
    email = db.Column(db.String(64), nullable=False)
    digest = db.Column(db.String(64), nullable=False))
    

    def __repr__(self):
        """Returns relevant info about user object"""

        return "<frame: {} userEmail: {} userID: {}>".format(self.frame, self.userEmail, self.userId)


class Message(db.Model):
    """Messages data"""

    __tablename__ = "messages"

    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.userId'), nullable=False)
    subject = db.Column(db.String(140), nullable=False)
    message = db.Column(db.String(400), nullable=False)
    messageDatetime = db.Column(db.DateTime, nullable=False)

    #Define relationship to user
    user = db.relationship("User",
                       backref=db.backref("messages",
                                          order_by=messageID))

    def __repr__(self):
        """Returns relevant info about Message object"""
        return "<MessageDatetime: {} Subject:{}> Message: {}".format(self.messageDatetime, self.subject, self.message)


##############################################################################
# Helper functions

def connect_to_db(app):
    """Connect the database to our Flask app."""

    # Configure to use our PstgreSQL database
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///project'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.app = app
    db.init_app(app)


if __name__ == "__main__":
    # As a convenience, if we run this module interactively, it will leave
    # you in a state of being able to work with the database directly.

    from server import app
    connect_to_db(app)
    print "Connected to DB."
