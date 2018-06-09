from flask import (Flask, render_template, redirect, request, flash, session, jsonify)
from model import User, Message, connect_to_db, db
from jinja2 import StrictUndefined
from flask_debugtoolbar import DebugToolbarExtension
import hashlib

"""My Project App"""

app = Flask(__name__)

# Required to use Flask sessions and the debug toolbar
app.secret_key = "shhh"

# Normally, if you use an undefined variable in Jinja2, it fails
# silently. This is horrible. Fix this so that, instead, it raises an
# error.
app.jinja_env.undefined = StrictUndefined

@app.route('/')
def index():
    """Homepage."""

    if 'login' in session:
        #condition is not working as expected
        if session['login'] == True:
            return render_template('homepage_signedin.html')
        else:
            return render_template("homepage.html")
    else:
        return render_template("homepage.html")

@app.route('/users')
def user_list():
    """Show list of users."""

    users = User.query.all()
    return render_template("user_list.html", users=users)

@app.route('/users/<user_id>')
def display_user_profile(user_id):
    """returns the given user's info"""

    user = User.query.get(user_id)
    user_ratings = user.ratings

    return render_template("user_profile.html", user=user, user_ratings=user_ratings)

@app.route('/logins', methods=['POST'])
def logins():
    """need to parse request.body ie parse json to a hash"""

    email = request.form.get("email")
    password = request.form.get("password")

    user = User.query.filter_by(userEmail=email).one()
    hash = hashlib.sha256(password.encode('utf-8')).hexdigest()

    if not user or user.digest != hash:
        return render_json([success: False, message: "User/Password does not exist"])

    """call json stringify"""
    return render_json([success: True, message: "Login Successful!"])


@app.route('/register', methods=['POST'])
def register_form_post():
    email = request.form.get("userEmail")
    password = request.form.get("password")

    #check if in db, else add to db
    if User.query.filter_by(userEmail=userEmail).one():
        flash("User already exists")

    else:
        hash = hashlib.sha256(password.encode('utf-8')).hexdigest()
        new_user = User(userEmail=userEmail, digest=hash)

        db.session.add(new_user)
        db.session.commit()
        new_user = User.query.filter_by(email=email).one()

        flash("You have successfully signed up!")
        session['login'] = True
        session['user_id'] = new_user.user_id
        return render_json([success: True, message: "Register Successful!"])
        # return redirect('/users/{}'.format(session['user_id']))
    return render_json([success: False, message: "Register Successful!"])
    # return render_template("register_form.html")

@app.route('/register', methods=['GET'])
def register_form():
    return render_template("register_form.html")


@app.route('/check-login.json')
def get_user_login():

    userEmail = request.args.get('userEmail')
    password = request.args.get('password')

    current_user = User.query.filter_by(userEmail=userEmail).all()

    user_validation = {}

    if current_user:
        if current_user[0].password == password:
            session['login'] = True
            session['user_id'] = current_user[0].user_id
            user_validation['valid'] = True
    else:
        user_validation['valid'] = False

    return jsonify(user_validation)


@app.route('/logout')
def log_out():

    session.pop('user_id', None)
    session['login'] = False

    return render_template("homepage.html")

if __name__ == "__main__":
    # We have to set debug=True here, since it has to be True at the
    # point that we invoke the DebugToolbarExtension
    app.debug = True
    # make sure templates, etc. are not cached in debug mode
    app.jinja_env.auto_reload = app.debug

    connect_to_db(app)

    # Use the DebugToolbar
    DebugToolbarExtension(app)

    app.run(port=5000, host='0.0.0.0')
