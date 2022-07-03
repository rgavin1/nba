from sqlalchemy import Column, Integer, String
from .database import Base

class Player(Base):
    __tablename__ = "players"

    id = Column(Integer, primary_key=True, index=True)
    player = Column(String, nullable=False)
    height = Column(String, nullable=True)
    weight = Column(String, nullable=True)
    collage = Column(String, nullable=True)
    born = Column(String, nullable=True)
    birth_city = Column(String, nullable=True)
    birth_state = Column(String, nullable=True)

class PlayerData(Base):
    __tablename__ = "players_data"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    year_start = Column(String, nullable=True)
    year_end = Column(String, nullable=True)
    position = Column(String, nullable=True)
    height = Column(String, nullable=True)
    weight = Column(String, nullable=True)
    birth_date = Column(String, nullable=True)
    college = Column(String, nullable=True)

class SeasonStat(Base):
    __tablename__ = "season_stats"

    id = Column(Integer, primary_key=True, index=True)
    season_year = Column(String, nullable=True)
    player_name = Column(String, nullable=True)
    position = Column(String, nullable=True)
    age = Column(String, nullable=True)
    team = Column(String, nullable=True)
    games = Column(String, nullable=True)
    games_started = Column(String, nullable=True)
    minutes_played = Column(String, nullable=True)
    player_efficiency_rating = Column(String, nullable=True)
    true_shooting_percentage = Column(String, nullable=True)
    three_point_attempt_rate = Column(String, nullable=True)
    free_throw_rate = Column(String, nullable=True)
    offensive_rebound_percentage = Column(String, nullable=True)
    defensive_rebound_percentage = Column(String, nullable=True)
    total_rebound_percentage = Column(String, nullable=True)
    assist_percentage = Column(String, nullable=True)
    steal_percentage = Column(String, nullable=True)
    block_percentage = Column(String, nullable=True)
    turnover_percentage = Column(String, nullable=True)
    usage_percentage = Column(String, nullable=True)
    offensive_win_shares = Column(String, nullable=True)
    defensive_win_shares = Column(String, nullable=True)
    win_shares = Column(String, nullable=True)
    win_shares_per_48 = Column(String, nullable=True)
    offensive_box_plus_minus = Column(String, nullable=True)
    defensive_box_plus_minus = Column(String, nullable=True)
    box_plus_minus = Column(String, nullable=True)
    value_over_replacement = Column(String, nullable=True)
    field_goal = Column(String, nullable=True)
    field_goal_attempt = Column(String, nullable=True)
    field_goal_per = Column(String, nullable=True)
    three_point_field_goals = Column(String, nullable=True)
    three_point_field_attempts = Column(String, nullable=True)
    three_point_field_percentage = Column(String, nullable=True)
    two_point = Column(String, nullable=True)
    two_point_attempts = Column(String, nullable=True)
    two_point_percentage = Column(String, nullable=True)
    effective_field_goal_percentage = Column(String, nullable=True)
    free_throws = Column(String, nullable=True)
    free_throw_attempts = Column(String, nullable=True)
    free_throw_percentage = Column(String, nullable=True)
    offensive_rebounds = Column(String, nullable=True)
    defensive_rebounds = Column(String, nullable=True)
    total_rebounds = Column(String, nullable=True)
    assists = Column(String, nullable=True)
    steals = Column(String, nullable=True)
    blocks = Column(String, nullable=True)
    turnovers = Column(String, nullable=True)
    personal_fouls = Column(String, nullable=True)
    points = Column(String, nullable=True)

class TeamData(Base):
    __tablename__ = "teams_data"

    id = Column(Integer, primary_key=True, index=True)
    team = Column(String, nullable=False)
    team_name = Column(String, nullable=False)
    logo_image = Column(String, nullable=False)