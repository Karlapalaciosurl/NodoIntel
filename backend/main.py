from fastapi import FastAPI
from models import Transaction, transactions_db
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

@app.post("/transactions")
def add_transaction(transaction: Transaction):
    transactions_db.append(transaction)
    return{"data": transaction}

@app.get("/transactions")
def get_transactions():
    return transactions_db

@app.get("/transactions/summary")
def summary():
    total_income = sum(t.amount for t in transactions_db if t.amount > 0)
    total_expense = sum(t.amount for t in transactions_db if t.amount < 0)
    net_total = total_income + total_expense

    return {
        "total_income": total_income,
        "total_expense": total_expense,
        "net_total": net_total
    }