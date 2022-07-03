from fastapi import APIRouter, Depends, HTTPException, status
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
    if not results:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Player with the name: {name} season stats were not found")
    return results