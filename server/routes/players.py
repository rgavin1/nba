from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from .. import models
from server.database import get_db

router = APIRouter(
    prefix="/players",
    tags=["Player"]
)

@router.get("/")
def getAllPlayersInformation(db: Session = Depends(get_db)):
    results = db.query(models.Player).all()
    return { "data": results }

@router.get("/id/{id}")
def getPlayerInformationById(id: str, db: Session = Depends(get_db)):
    player = db.query(models.Player).filter(models.Player.id == id).first()

    if not player:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Player with the id: {id} not found")

    return player

@router.get("/name/{name}")
def getPlayersInformationByName(name: str, db: Session = Depends(get_db)):
    player = db.query(models.Player).filter(models.Player.player.ilike(f'%{name}%')).all()

    if not player:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Player with the name: {name} not found")

    return player