def recommend_policies(row):
    policies = []

    if row["PM2.5"] > 60:
        policies.append(("Heavy Truck Ban", -14, "Reduce diesel freight emissions"))

    if row["PM10"] > 100:
        policies.append(("Construction Control", -10, "Dust suppression & timing"))

    if row["NO2"] > 35:
        policies.append(("Traffic Signal Optimization", -6, "Reduce idling time"))

    if row["CO"] > 1.5:
        policies.append(("Car Reduction", -8, "Congestion pricing zones"))

    policies.append(("Bike Lanes", -6, "Promote non-motorized transport"))

    return policies
