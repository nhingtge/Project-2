# import necessary libraries
import os
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

from sqlalchemy.ext.automap import automap_base
from sqlalchemy import create_engine
from sqlalchemy.orm import Session

from config import username, password

#engine = create_engine(os.environ.get('DATABASE_URL', ''))


engine = create_engine(f'postgresql://{username}:{password}@localhost:5432/Project2')

Base = automap_base()
Base.prepare(engine, reflect=True)

Bball = Base.classes.Basketball

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


# create route that renders index.html template
@app.route("/")
def home():
    return render_template("static/index.html")

# Query the database and send the jsonified results
@app.route("/api/bball")
def Basketball():

    session = Session(engine)

    results = session.query(Bball.League, Bball.Season, Bball.Player).all()

    league = [result[0] for result in results]
    season = [result[1] for result in results]
    player = [result[2] for result in results]

    bball_data = {
        "league": league,
        "season": season,
        "player": player
    }

    session.close()

    print(league)
    return(jsonify(bball_data))



if __name__ == "__main__":
    app.run()
