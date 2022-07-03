from fastapi import APIRouter, Depends, status, HTTPException
from sqlalchemy.orm import Session

from server.database import get_db
from .. import models

router = APIRouter(
    prefix="/players/player",
    tags=["Players Data"]
)


@router.get("/{name}")
def getAllPlayersData(name: str, db: Session = Depends(get_db)):
    playerData = db.query(models.PlayerData).filter(models.PlayerData.name == name).first()
    if not playerData:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Player with the name: {name} was not found")
    return playerData