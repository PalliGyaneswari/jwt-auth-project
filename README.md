#  JWT Authentication System (React + Express)

This project is a **Full-Stack JWT Authentication System** built using **React (Vite)** for the frontend and **Node.js (Express)** for the backend.  
It implements **secure user authentication** using JSON Web Tokens (JWT) to verify and protect user routes.

---

## Project Overview

The purpose of this project is to show how frontend and backend communicate securely using JWT tokens.  
When a user logs in, the backend verifies credentials and generates a **token**.  
That token is then stored securely in the frontend, which uses it to access **protected routes** (like the profile page).  

This project covers the complete cycle — from **login → token generation → verification → secure access**.

---

## Tech Stack

**Frontend (React + Vite):**
- React (Vite)
- Axios
- React Router DOM

**Backend (Node.js + Express):**
- Express.js
- bcryptjs (for password encryption)
- jsonwebtoken (for token generation & verification)
- cors (for cross-origin requests)

---

## Features

✅ User login with JWT-based authentication  
✅ Token stored securely in localStorage  
✅ Protected routes accessible only with a valid token  
✅ Proper error handling for invalid/missing tokens  
✅ Logout clears token and redirects to login  
✅ Simple, minimal UI  

---

##  Folder Structure

jwt-auth-project/
│
├── backend/
│ ├── server.js # Express backend server
│ ├── package.json
│
├── frontend/
│ ├── src/
│ │ ├── App.jsx
│ │ ├── Login.jsx
│ │ ├── Profile.jsx
│ │ └── main.jsx
│ ├── package.json
│ └── vite.config.js
│
└── README.md


---

##  How to Run the Project

###  Backend Setup
```bash
cd backend
npm install
node server.js
The backend runs on "http://localhost:5000"

---
### Frontend setup

cd frontend
npm install
npm run dev
The frontend runs on "http://localhost:5173"

---

Testing the API (optional)

You can test the backend using Thunder Client or Postman.
Login Request

POST :http://localhost:5000/login
In the body i.r in the JSON
{
  "email": "user@example.com",
  "password": "password"
}
You’ll receive a JWT token in response.
Use that token to access the /profile route with a Bearer Token.

---

Protected Route

GET: http://localhost:5000/profile

Add this to header:
Authorization: Bearer <your_token>


If valid, you’ll get a response like:

{
  "message": "Access granted",
  "user": {
    "id": 1,
    "email": "user@example.com"
  }
}
---
Key Learning Points

1.JWT token generation and verification
2.Protecting frontend routes using tokens
3.Secure token storage and validation
4.Full-stack communication between React and Express
 
---
Author

Palli Gyaneswari
Full-Stack Developer | JWT Authentication Project
Email: user@example.com

