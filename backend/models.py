from pydantic import BaseModel 
from typing import List

class Transaction(BaseModel): 
    id: int 
    date: str 
    description: str 
    amount: float 
    category: str


transactions_db: List[Transaction] = []       