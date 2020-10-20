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
    return render_template("index.html")

@app.route("/teams")
def teams():
    return render_template("teams.html")

@app.route("/individuals")
def individuals():
    return render_template("individuals.html")

@app.route("/table")
def table():
    return render_template("table.html")

@app.route("/api/datatable")
def datatable():

    session = Session(engine)
    datatable=[]
    results = session.query(Bball.League,Bball.Season,Bball.Stage,Bball.League,Bball.Team,Bball.GP,Bball.MIN,Bball.FGA,Bball.REB,Bball.AST).all()
    league = [result[0] for result in results]
    datatable.append(league)
    season = [result[1] for result in results]
    datatable.append(season)
    stage = [result[2] for result in results]
    datatable.append(stage)
    player = [result[3] for result in results]
    datatable.append(player)
    team = [result[4] for result in results]
    datatable.append(team)
    games_played = [result[5] for result in results]
    datatable.append(games_played)
    mins_played = [result[6] for result in results]
    datatable.append(mins_played)
    field_goals = [result[7] for result in results]
    datatable.append(field_goals)
    rebounds = [result[8] for result in results]
    datatable.append(rebounds)
    assists = [result[9] for result in results]
    datatable.append(assists)
    dataresults={"results": datatable}
    return jsonify (dataresults) 

# Query the database and send the jsonified results
@app.route("/api/bball")
def Basketball():

    session = Session(engine)

    results = session.query(
        Bball.League,Bball.Season,Bball.Stage,Bball.League,Bball.Team,Bball.GP,Bball.MIN,Bball.FGA,Bball.REB,Bball.AST).all()

    league = [result[0] for result in results]
    season = [result[1] for result in results]
    stage = [result[2] for result in results]
    player = [result[3] for result in results]
    team = [result[4] for result in results]
    games_played = [result[5] for result in results]
    mins_played = [result[6] for result in results]
    field_goals = [result[7] for result in results]
    rebounds = [result[8] for result in results]
    assists = [result[9] for result in results]

    bball_data = {
        "league": league,
        "season": season,
        "stage": stage,
        "player": player,
        "team": team,
        "games_played": games_played,
        "mins_played": mins_played,
        "field_goals": field_goals,
        "rebounds": rebounds,
        "assists": assists
    }

    session.close()

    print(league)
    return(jsonify(bball_data))



if __name__ == "__main__":
    app.run()
