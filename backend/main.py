from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd

from models import SimulationRequest
from policy_engine import recommend_policies
from simulator import simulate_policy_impact, generate_12_month_forecast

app = FastAPI(title="Urban Policy Decision Engine")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

STATE_FILES = {
    "goa": "data/goa.csv",
    "andhra": "data/andhra.csv",
    "tamil_nadu": "data/tamil_nadu.csv",
    "kerala": "data/kerala.csv"
}

def load_state_data(state):
    if state not in STATE_FILES:
        raise HTTPException(status_code=404, detail="State not found")
    return pd.read_csv(STATE_FILES[state])

@app.post("/api/simulate")
def simulate(request: SimulationRequest):
    df = load_state_data(request.state.lower())

    row = df[
        (df["City"] == request.city) &
        (df["Date"] == request.date)
    ]

    if row.empty:
        raise HTTPException(status_code=404, detail="Data not found")

    row = row.iloc[0]
    base_aqi = int(row["AQI"])

    policies = recommend_policies(row)
    projected_aqi, reduction = simulate_policy_impact(base_aqi, policies)

    return {
        "state": request.state,
        "city": request.city,
        "date": request.date,
        "current_aqi": base_aqi,
        "projected_aqi": projected_aqi,
        "reduction": reduction,
        "policies": [
            {
                "name": p[0],
                "impact": p[1],
                "description": p[2]
            } for p in policies
        ],
        "forecast": generate_12_month_forecast(base_aqi, reduction),
        "hotspot": {
            "city": request.city,
            "aqi": base_aqi + 10
        }
    }