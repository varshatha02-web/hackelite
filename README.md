**🌆 Urban Policy Decision Engine**

AI-powered simulation system to reminding the impact of urban air-pollution policies.

This project has:

✅ FastAPI backend (simulation engine)
✅ HTML + JS frontend (dashboard UI)
✅ Policy recommendation logic
✅ AQI impact simulation

📁 Project Structure
project-root/
│
├── backend/
│   ├── main.py
│   ├── models.py
│   ├── simulator.py
│   ├── policy_engine.py
│   ├── data/
│   │   ├── tamil_nadu.csv
│   │   ├── kerala.csv
│   │   ├── andhra.csv
│   │   └── goa.csv
│   └── venv/
│
├── frontend/
│   └── perp2.html
│
└── README.md

⚙️ Backend Setup (FastAPI)
1️⃣ Go to backend folder
cd backend

2️⃣ Create virtual environment
python -m venv venv

3️⃣ Activate environment

Windows: venv\Scripts\activate
Mac/Linux: source venv/bin/activate

4️⃣ Install dependencies
pip install fastapi uvicorn pandas

5️⃣ Run backend server
python -m uvicorn main:app --reload

Server will run at: http://127.0.0.1:8000

🎨 Frontend Setup

Just open: frontend/perp2.html in browser.

▶️ How Simulation Works

Frontend sends POST request to backend: POST /api/simulate

Example request:

{
  "state": "Tamil_Nadu",
  "city": "Chennai",
  "date": "2024-01-01"
}


Backend returns: current AQI, projected AQI, policy recommendations, forecast, hotspot data

🚀 Features

Real AQI dataset simulation

Policy impact modelling

Forecast generation

Interactive dashboard UI

Multi-state data support

🛠 Tech Stack
Backend: FastAPI, Pandas, Python

Frontend: HTML, Tailwind CSS, Chart.js, Vanilla JavaScript

📌 Notes

Backend must be running before frontend simulation works.

State names must match CSV file keys.

Date format must match dataset.

💡 Future Improvements

Real-time sensor integration

GIS heatmaps

ML prediction models

User input forms

Deployment to cloud
