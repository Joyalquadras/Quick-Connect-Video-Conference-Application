# 🚀 QuickConnect – Video Conferencing Application

A full-stack **real-time video conferencing web application** that enables users to connect instantly with video, audio, chat, and screen sharing.

🌐 **Live Demo:**
https://quick-connect-video-conference-appl.vercel.app/

---

## 📌 Features

* 🎥 Real-time video calling
* 🎙️ Audio communication
* 💬 Live chat during meetings
* 🖥️ Screen sharing
* 🔐 User authentication (Login/Register)
* 🔗 Join meetings using unique room codes

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Material UI

### Backend

* Node.js
* Express.js

### Real-Time Communication

* WebRTC
* Socket.IO

### Database

* MongoDB Atlas

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## ⚙️ Project Structure

```
Quick-Connect-Video-Conference-Application/
│
├── frontend/        # React frontend
│   ├── src/
│   ├── public/
│
├── backend/         # Node.js backend
│   ├── src/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│
└── README.md
```

---

## 🚀 Getting Started (Local Setup)

### 1️⃣ Clone the repository

```
git clone https://github.com/Joyalquadras/Quick-Connect-Video-Conference-Application.git
cd Quick-Connect-Video-Conference-Application
```

---

### 2️⃣ Setup Backend

```
cd backend
npm install
```

Create a `.env` file inside **backend/**:

```
MONGO_URI=your_mongodb_connection_string
PORT=8000
```

Run backend:

```
npm start
```

---

### 3️⃣ Setup Frontend

```
cd frontend
npm install
```

Create a `.env` file inside **frontend/**:

```
REACT_APP_SERVER=http://localhost:8000
```

Run frontend:

```
npm start
```

---

## 🌐 Deployment

* Frontend deployed on **Vercel**
* Backend deployed on **Render**
* MongoDB hosted on **MongoDB Atlas**

---

## 📚 What I Learned

* Building real-time applications using WebRTC
* Managing bidirectional communication using Socket.IO
* Handling environment variables securely
* Deploying full-stack applications
* Debugging CORS and production issues

---

## 🔮 Future Improvements

* 👥 Participant list in meetings
* 📹 Recording feature
* 🔔 Notifications
* 🎨 Improved UI/UX
* 🔒 Better authentication (JWT, OAuth)
* 🌍 Multi-user scalability

---

## 📬 Connect With Me

* 👤 **Joyal Quadras**
* 🔗 [LinkedIn](https://www.linkedin.com/in/joyal-quadras-499991324)
* 💻 [GitHub](https://github.com/Joyalquadras)

Let’s connect and build something amazing 🚀

---

⭐ If you like this project, give it a star!
