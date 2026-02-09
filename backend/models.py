from pydantic import BaseModel

class PollutionRecord(BaseModel):
    Date: str              # YYYY-MM
    City: str
    PM2_5: float
    PM10: float
    NO2: float
    SO2: float
    CO: float
    AQI: int
    Temperature_C: float
    Humidity_pct: float
    Rainfall_mm: float
    WindSpeed_kmph: float
    Pressure_hPa: float


class SimulationRequest(BaseModel):
    state: str
    city: str
    date: str              # YYYY-MM


class PolicyResult(BaseModel):
    name: str
    impact: int
    description: str
