from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from server.database import get_db

router = APIRouter(
    prefix="/players-data",
    tags=["Players Data"]
)


router.get("/")
def getAllPlayersData(db: Session = Depends(get_db)):
    return True