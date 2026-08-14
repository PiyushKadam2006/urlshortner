# 🔗 MERN Stack URL Shortener

A full-stack URL shortening application built with the MERN stack (MongoDB, Express.js, React, Node.js). This project takes long web addresses and converts them into short, manageable links, complete with click analytics and a seamless user interface.

## 🚀 Features

*   **URL Shortening:** Converts any long URL into a unique, short ID using `nanoid`.
*   **Redirection System:** Instantly routes users from the short link to the original destination.
*   **Click Analytics:** Tracks and stores the total number of times a short link has been clicked.
*   **One-Click Copy:** Frontend features a clipboard integration to easily copy the generated short link.
*   **RESTful API:** Clean and structured backend endpoints for creating and fetching URLs.

## 🛠️ Tech Stack

**Frontend:**
*   React.js (Vite)
*   Axios (for API requests)
*   CSS

**Backend:**
*   Node.js
*   Express.js
*   MongoDB (Database)
*   Mongoose (ODM)
*   nanoid (ID generation)
*   CORS & dotenv

## 📁 Folder Structure

```text
urlshortner/
├── backend/
│   ├── src/
│   │   ├── models/
│   │   │   └── Url.js
│   │   ├── routes/
│   │   │   └── urlRoutes.js
│   │   └── app.js
│   ├── .env
│   └── server.js
└── frontend/
    ├── src/
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json


⚙️ Local Installation & Setup
1. Backend Setup
Navigate to the backend directory, install dependencies, and set up your environment variables.

Bash
cd backend
npm install
Create a .env file in the backend folder and add your MongoDB connection string:

Code snippet
MONGO_URI=mongodb://localhost:27017/urlshortener
PORT=8080
Start the backend server:

Bash
npm run dev
# or
node server.js
2. Frontend Setup
Open a new terminal, navigate to the frontend directory, and install dependencies.

Bash
cd frontend
npm install
Start the Vite development server:

Bash
npm run dev
🔌 API Endpoints
1. Create Short URL
URL: /api/url/shorten

Method: POST

Body:

JSON
{
  "original_url": "[https://www.example.com/very-long-url](https://www.example.com/very-long-url)"
}
Success Response: 201 Created

2. Redirect
URL: /:shortId

Method: GET

Description: Redirects the client to the original URL and increments the click counter by 1.

3. Analytics
URL: /api/url/analytics/:shortId

Method: GET

Success Response:

JSON
{
  "totalClicks": 5
}
Author: Piyush Kadam
