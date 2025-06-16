# 🖥️ System Dashboard – Live View

## 📘 About This Project

This project is a comprehensive full-stack System Dashboard application, developed as a real-time monitoring tool that displays essential system metrics with a clean and intuitive interface.The main goal of this dashboard is to offer live system performance insights, which can be useful for developers, system administrators, or anyone who wants to keep an eye on their system resources in a visually engaging way.

🔹 Frontend (React)
The frontend is built using React.js, offering a modern, component-based architecture. It connects to the backend via REST APIs and updates the dashboard in real-time using periodic data fetching. Key highlights:
Responsive and minimal UI using standard CSS
Displays system stats like:
CPU usage and load
Total and used memory
Disk space
Uptime
Easy-to-understand visual layout for instant analysis

🔹 Backend (Node.js + Express)
The backend is a lightweight and efficient Node.js server using Express, responsible for retrieving the actual system data. It leverages the systeminformation library to gather a wide array of metrics directly from the host machine. 
Features include:
Exposes RESTful endpoints for system stats
Uses CORS and .env for flexibility
Lightweight and fast, ideal for both local and deployed environments

---

## 🚀 Features

- Real-time system stats (CPU, memory, disk, etc.)
- Clean and responsive UI
- REST API backend using `systeminformation`
- Easily deployable on Render or any Node+React stack

---

## 🧩 Technologies Used

### Frontend:
- React.js
- Axios (for API calls)
- Vanilla CSS

### Backend:
- Node.js
- Express.js
- systeminformation (for system metrics)
- CORS and dotenv

---

## 📁 Installation Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Nithya2900/System-dashboard-live.git
cd System-dashboard-live

2. Start the Backend
cd server
npm install
node server.js

By default, it runs at:
http://localhost:5000

3. Start the Frontend
Open a new terminal:
cd ../client
npm install
npm start
The frontend will be available at:
http://localhost:3000
 ```
## 🌐 Live Deployment

Frontend (Netlify):
🔗 https://system-dashboard-frontend.netlify.app/

Backend (Render):
🔗 https://system-dashboard-backend-wl6q.onrender.com


<img src="https://github.com/user-attachments/assets/41268459-dab0-4286-b46f-fa9b67c85bb5" alt="Dashboard Screenshot" width="700"/>

## 📂 Related Repositories

🔗https://github.com/Nithya2900/System-dashboard-frontend.git

🔗 https://github.com/Nithya2900/System-dashboard-backend.git
