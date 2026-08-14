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
