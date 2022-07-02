from pydantic import BaseModel


class PlayerBase(BaseModel):
    id: str
    player: str
    height: str
    weight: str
    collage: str
    born: str
    birth_city: str
    birth_state: str