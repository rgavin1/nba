from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from server.database import get_db
from .. import models
router = APIRouter(
    prefix="/seasons",
    tags=['Seasons']
)

@router.get("/")
def getAllSeasons(db: Session = Depends(get_db)):
    results = db.query(models.SeasonStat).limit(100)
    return results

@router.get("/player/{name}")
def getAllSeasonsByPlayersName(name: str, db: Session = Depends(get_db)):
    results = db.query(models.SeasonStat).filter(models.SeasonStat.player_name == name).order_by(models.SeasonStat.season_year.desc()).all()
    return results

    # SELECT id, season_year, player_name, "position", age, team, games, games_started, minutes_played, player_efficiency_rating, true_shooting_percentage, three_point_attempt_rate, free_throw_rate, offensive_rebound_percentage, defensive_rebound_percentage, total_rebound_percentage, assist_percentage, steal_percentage, block_percentage, turnover_percentage, usage_percentage, offensive_win_shares, defensive_win_shares, win_shares, win_shares_per_48, offensive_box_plus_minus, defensive_box_plus_minus, box_plus_minus, value_over_replacement, field_goal, field_goal_attempt, field_goal_per, three_point_field_goals, three_point_field_attempts, three_point_field_percentage, two_point, two_point_attempts, two_point_percentage, effective_field_goal_percentage, free_throws, free_throw_attempts, free_throw_percentage, offensive_rebounds, defensive_rebounds, total_rebounds, assists, steals, blocks, turnovers, personal_fouls, points
	# FROM public.season_stats WHERE player_name = 'Stephen Curry' ORDER BY season_year DESC;