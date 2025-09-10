# SafarEasy
SafarEasy brings real-time bus tracking! See live bus locations and get accurate ETAs for public transport. Plan your journey with confidence and make your daily safar easy and stress-free. No more guessing, just go!

# Table of Index:
* [Why We Chose This Problem Statement?](#-Why-We-Chose-This-Problem-Statement?-:)


# Why We Chose This Problem Statement? :
In recent years, urbanization in Punjab has increased significantly, with smaller cities and tier-2 towns experiencing rapid population growth. While metropolitan cities like Delhi or Mumbai have access to advanced public transport systems equipped with GPS tracking, automated scheduling, and real-time commuter information, smaller cities in Punjab still largely rely on traditional public transport networks. This leads to significant challenges for both commuters and transport authorities.
Commuters often face unpredictable bus schedules, resulting in wasted time, overcrowding at bus stops, and a general reluctance to use public transport. According to the Urban Mobility India Report 2024, more than 60% of commuters in tier-2 towns experience delays, leading to increased dependence on private vehicles. This has a cascading effect: higher traffic congestion, elevated pollution levels, and increased fuel costs.
From a systemic perspective, authorities lack visibility into the real-time locations of buses, which makes fleet management, scheduling, and resource allocation inefficient. This inefficiency directly impacts commuter satisfaction, the sustainability of public transport, and the economic productivity of the region.
The core motivation behind choosing this problem statement was to bridge the digital gap in small-city transport systems. Our goal is to create a solution that is cost-effective, scalable, and easy to deploy, targeting cities in Punjab that do not yet have sophisticated transport tracking infrastructure. By providing real-time information to commuters and actionable insights to authorities, we aim to transform the way public transport is used and managed in these regions.

# How We Got the Idea
The idea emerged from direct observation and research. Visiting smaller towns in Punjab, we noticed that commuters often gather at bus stops without knowing when the next bus will arrive. During peak hours, buses are overcrowded, while other buses on the same route might run nearly empty. Drivers themselves have no easy way to report delays, and authorities have no real-time data to manage routes dynamically.
A major inspiration came from smart mobility solutions in bigger cities, like app-based tracking in Delhi or Bangalore, where commuters can see live bus locations and plan their journey. However, the challenge was to adapt such solutions for smaller cities, where budgets are limited, internet bandwidth may be lower, and commuters may rely on basic smartphones rather than high-end devices.
We realized that most modern smartphones are capable of GPS tracking and that cloud services can handle real-time updates at scale. Combining these insights, we envisioned a solution that leverages the drivers’ smartphones as the tracking device, eliminating the need for expensive IoT trackers, while simultaneously providing real-time information to commuters via mobile apps and bus stop display boards.
The QR code system idea came from the need for secure and accurate vehicle identification. Instead of relying on manual input, drivers simply scan a QR code placed in the bus to start their trip, which automatically syncs vehicle identity and route with the backend system. This small but crucial innovation ensures that the system is user-friendly for drivers and reduces human error.

# How the App Works
The system consists of three main components: the Driver App, the Consumer App, and the Backend Platform with ETA calculation and display boards. Here’s a step-by-step explanation of how it functions:
1. Driver App
* Each bus is assigned a QR code containing an encrypted vehicle ID and route information.
* Before starting the trip, the driver scans this QR code using the app. This automatically verifies the vehicle and route, eliminating manual entry errors.
* Once verified, the driver taps Start Trip, which triggers real-time GPS tracking.
* The driver can also stop the trip manually or it automatically ends when the bus reaches the last stop and remains idle for a defined period (e.g., 5 minutes).
* GPS data is streamed securely to the backend using MQTT over TLS or WebSocket Secure (WSS), ensuring low latency and reliability even in areas with modest network coverage.
2. Backend Platform
* The backend receives GPS data from all active buses in real time.
* Trip Service handles authentication, maps the bus to the correct route, and applies geofencing rules to detect deviations or delays.
* The ETA Engine, built using a combination of rule-based algorithms and ML models (e.g., XGBoost), calculates estimated arrival times for all stops on the bus’s route.
* ETAs are continuously updated based on live GPS, traffic conditions from Google Maps API, and historical travel patterns.
* Redis Cache holds “hot ETAs” for fast access by apps and display boards, while Postgres + PostGIS stores historical telemetry for reporting and analytics.
3. Consumer App
* Commuters open the app to see a live map showing all buses on their route.
* They can search by route or stop to see buses passing by their location.
* Each bus shows an ETA at the upcoming stops, enabling commuters to plan their arrival at the bus stop instead of waiting for indefinite periods.
* Push notifications alert commuters to delays or arrivals, reducing crowding at stops.
4. Bus Stop Display Boards
* Installed at major bus stops, these LED/LCD boards automatically display the next bus arrivals at that location.
* They fetch ETAs via a secure REST API from the backend every 30–60 seconds.
* This ensures commuters without smartphones can still benefit from real-time updates.
5. Authority Dashboard
* Transport authorities can access a web dashboard to monitor fleet positions, route performance, and KPIs.
* Historical and live data help optimize scheduling, reduce delays, and identify peak congestion times.
* This enables data-driven decision-making and smarter allocation of resources.

# How It Will Help Punjab Transportation
The proposed system will have multiple benefits for Punjab’s public transport ecosystem:
1. Reduce Waiting Times: Commuters can see exact bus locations and ETAs, which reduces the time spent waiting at stops. They can plan their arrival more accurately, improving daily commuting efficiency.
2. Balance Passenger Load & Reduce Overcrowding: By knowing the arrival of multiple buses, commuters can distribute themselves across vehicles, preventing overloading. Overcrowding is a major issue in cities like Ludhiana, Jalandhar, and Amritsar during peak hours, and this system addresses it directly.
3. Improve Reliability & Trust: Real-time updates increase confidence in the public transport system, encouraging more people to shift from private vehicles to buses, reducing traffic and emissions.
4. Enable Data-Driven Transport Planning: Authorities can analyze historical and live bus data to identify problem routes, peak travel times, and delays. This allows for optimized scheduling, additional buses during high-demand periods, and resource allocation.
5. Cost-Effective Implementation: The system uses drivers’ smartphones as trackers, avoiding expensive IoT devices or GPS trackers for each bus. Display boards at bus stops are optional but inexpensive. This makes the solution affordable for small cities and scalable to multiple routes.
6. Enhanced Commuter Experience: Features like route search, live map, ETA alerts, and stop board visibility make commuting predictable, safe, and convenient. It encourages greater reliance on public transport, which is a key goal for sustainable urban mobility in Punjab.
7. Support for Smart Cities Initiatives: This system aligns with Punjab’s smart city projects and national urban mobility goals, promoting digital infrastructure in transport management.

# Conclusion
In summary, the idea for this project emerged from observing real challenges faced by commuters and drivers in smaller cities of Punjab, combined with lessons from advanced transport systems in larger cities. The solution is simple yet effective: use driver smartphones as GPS trackers, combine them with a smart backend for ETA calculations, and provide live updates to commuters and authorities.
The app addresses key issues like unpredictable bus schedules, overcrowding, wasted commuter time, and inefficient fleet management. For Punjab, where many small and tier-2 cities still rely on traditional transport systems, this project can transform daily commuting, promote public transport, and provide authorities with actionable data.
The solution is scalable, cost-effective, and practical, making it ideal for SIH and real-world deployment, ultimately contributing to a smarter, greener, and more commuter-friendly Punjab.
