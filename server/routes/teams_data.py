from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from server import models

from server.database import get_db

router = APIRouter(
    prefix="/teams",
    tags=["Teams"]
)

@router.get("/")
def getAllTeams(db: Session = Depends(get_db)):
    teams = db.query(models.TeamData).all()
    return teams

@router.get("/{team_abbrev}")
def getAllTeams(team_abbrev: str, db: Session = Depends(get_db)):
    team = db.query(models.TeamData).filter(models.TeamData.team == team_abbrev).first()
    
    if not team:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Team with the abbrev: {team_abbrev} was not found.")
    return team