import numpy as np

def simulate_policy_impact(base_aqi, policies):
    total_reduction = abs(sum(p[1] for p in policies))
    projected_aqi = max(base_aqi - total_reduction, 50)
    return projected_aqi, total_reduction


def generate_12_month_forecast(base_aqi, reduction):
    end_aqi = base_aqi - reduction
    return list(np.linspace(base_aqi, end_aqi, 12).astype(int))
