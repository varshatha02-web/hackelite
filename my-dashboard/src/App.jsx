// src/App.jsx
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Truck, Bus, TrafficCone } from "lucide-react";

function GlassCard({ children }) {
  return (
    <motion.div
      className="rounded-2xl border border-white/30 bg-white/10 backdrop-blur-lg shadow-2xl p-6 mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}

// Sample AQI data
const data = [
  { day: "Mon", aqi: 58 },
  { day: "Tue", aqi: 73 },
  { day: "Wed", aqi: 65 },
  { day: "Thu", aqi: 80 },
  { day: "Fri", aqi: 70 },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-6">Urban Policy Dashboard</h1>

      {/* AQI Overview card */}
      <GlassCard>
        <h2 className="text-xl font-bold">AQI Overview</h2>
        <p>PM2.5: 58 µg/m³</p>
        <p>NO₂: 73 µg/m³</p>
      </GlassCard>

      {/* AQI Graph card */}
      <GlassCard>
        <h2 className="text-xl font-bold mb-4">AQI Trend</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="day" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="aqi"
              stroke="#38bdf8"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </GlassCard>

      {/* Policy Recommendation cards */}
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <GlassCard>
          <div className="flex items-center gap-2 mb-2">
            <Truck className="w-6 h-6 text-cyan-400" />
            <h2 className="text-lg font-bold">Truck Restrictions</h2>
          </div>
          <p>Limit heavy-duty trucks in city zones to reduce PM2.5.</p>
        </GlassCard>

        <GlassCard>
          <div className="flex items-center gap-2 mb-2">
            <Bus className="w-6 h-6 text-green-400" />
            <h2 className="text-lg font-bold">Bus Electrification</h2>
          </div>
          <p>Transition buses to electric fleets to cut NO₂ emissions.</p>
        </GlassCard>

        <GlassCard>
          <div className="flex items-center gap-2 mb-2">
            <TrafficCone className="w-6 h-6 text-yellow-400" />
            <h2 className="text-lg font-bold">Traffic Optimization</h2>
          </div>
          <p>Smart signals reduce congestion and improve air quality.</p>
        </GlassCard>
      </div>

      {/* Impact Simulation cards */}
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <GlassCard>
          <h2 className="text-lg font-bold mb-2">Before Policy</h2>
          <p className="text-4xl font-extrabold text-red-400">168</p>
          <p className="text-sm text-gray-300">Forecasted Avg AQI</p>
        </GlassCard>

        <GlassCard>
          <h2 className="text-lg font-bold mb-2">After Policy</h2>
          <p className="text-4xl font-extrabold text-green-400">154</p>
          <p className="text-sm text-gray-300">Forecasted Avg AQI</p>
          <p className="mt-2 text-green-300">Improvement: -14 points (25%)</p>
        </GlassCard>
      </div>
    </div>
  );
}
