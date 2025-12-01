# ⚡ QuickChat – Realtime MERN Chat Application

[🚀 Live Demo](https://quick-chat-six-gamma.vercel.app/login)

## 📌 Overview  
QuickChat is a full-stack realtime messaging application built using the MERN stack with Socket.io. It supports live one-to-one chat, online/offline presence, image sharing, message status updates, secure authentication, profile editing, and a clean responsive UI.  
The backend is deployed on **Google Cloud (GCE)** and the frontend is hosted on **Vercel**.

## ✨ Features

### 💬 Realtime Chat  
- Instant messaging using **Socket.io**  
- Live message updates with no page reload  
- Message seen/unseen tracking  
- Online/offline indicator for each user  
- Auto-scroll to latest message  

### 👤 User System  
- User signup & login (JWT authentication)  
- Edit profile (avatar, name, bio)  
- Authentication stored securely  
- Logout handling  

### 📨 Messaging Features  
- Send text messages  
- Upload & send images  
- Chat list with latest message preview  
- Timestamp formatting  
- Media stored efficiently  
- Smooth, fast rendering  

### 🧭 UI / UX  
- Sidebar with user list, search, and status  
- Chat container with message bubbles  
- Right sidebar for user profile  
- Mobile responsive layout  
- Clean, modern design  

### 🛠️ Tech Stack

#### Frontend  
- React.js (Vite)  
- React Router DOM  
- Context API  
- Axios  
- Socket.io Client  
- Tailwind CSS  
- React Hot Toast  
- Day.js for date formatting  

#### Backend  
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- Socket.io (Realtime events)  
- Bcrypt for password hashing  
- JWT for authentication  
- Multer for image upload  
- Dotenv  

#### Deployment  
- **Frontend:** Vercel  
- **Backend:** Google Cloud (GCE)  
- **Database:** MongoDB Atlas  

## 📁 Project Structure

quickchat/  
│  
├── client/  
│   ├── src/  
│   │   ├── assets/  
│   │   ├── components/  
│   │   ├── context/  
│   │   ├── pages/  
│   │   ├── utils/  
│   │   ├── App.jsx  
│   │   └── main.jsx  
│   ├── index.html  
│   └── package.json  
│  
└── server/  
    ├── models/  
    ├── routes/  
    ├── controllers/  
    ├── middleware/  
    ├── config/  
    ├── uploads/  
    ├── server.js  
    └── package.json

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository  
git clone <your-repository-url>  
cd quickchat  

### 2️⃣ Install Dependencies

#### Frontend  
cd client  
npm install  

#### Backend  
cd server  
npm install  

## 🔐 Environment Variables

### Client `/client/.env`  
VITE_BACKEND_URL="your_gce_backend_url"  

### Server `/server/.env`  
MONGO_URI=your_mongodb_url  
JWT_SECRET=your_jwt_secret  
CLOUDINARY_CLOUD_NAME=your_cloud  
CLOUDINARY_API_KEY=your_api_key  
CLOUDINARY_API_SECRET=your_api_secret  

## ▶️ Running the Application

### Start Backend  
cd server  
npm start  

### Start Frontend  
cd client  
npm run dev  

Frontend: http://localhost:5173  
Backend: http://localhost:5000  

## 🔌 Socket Events Used  
- **connection** – Initialize socket  
- **add-user** – Register user for realtime  
- **send-msg** – Emit message to receiver  
- **msg-recieve** – Receive live messages  
- **typing indicator** (if enabled)  
- **disconnect** – Handle offline  

## 📦 Core Modules

### Authentication  
- Register / Login  
- JWT token handling  
- Protected routes  

### Chat  
- Realtime messaging  
- Seen/unseen updates  
- Image upload  
- Conversation list  
- Latest message preview  

### Profile  
- Update avatar  
- Update name & bio  
- View user profile from sidebar  

## 🚀 Deployment Notes  
- Frontend deployed on **Vercel**  
- Backend deployed on **Google Compute Engine (GCE)**  
- Make sure your GCE firewall allows ports **5000** and **socket port**  
- Update `VITE_BACKEND_URL` in frontend env  
- Use Nginx or PM2 on GCE for stable backend  
- MongoDB Atlas used for production database  

## 🔗 Live Demo  
[🚀 QuickChat Live](https://quick-chat-six-gamma.vercel.app/login)

## 📝 License  
This project is licensed under the MIT License.

## 💡 Notes  
- Enable CORS correctly for WebSocket + REST API  
- Keep environment variables hidden  
- Protect file uploads & sanitize image types  
- Always serve backend over HTTPS in production  
- Optimize image sizes for better performance
