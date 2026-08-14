# 🔗 URL Shortener

A full-stack URL shortener application built with a Node.js/Express backend and a Vite-powered frontend, using MongoDB for data persistence.

---

## 📁 Project Structure

```
url-shortener/
├── backend/
│   ├── server.js
│   ├── .env
│   └── package.json
└── frontend/
    ├── src/
    └── package.json
```

---

## ⚙️ Local Installation & Setup

### 1. Backend Setup

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder and add the following environment variables:

```env
MONGO_URI=mongodb://localhost:27017/urlshortener
PORT=8080
```

Start the backend server:

```bash
npm run dev
# or
node server.js
```

---

### 2. Frontend Setup

Open a new terminal, navigate to the frontend directory, and install dependencies:

```bash
cd frontend
npm install
```

Start the Vite development server:

```bash
npm run dev
```

---

## 🔌 API Endpoints

### 1. Create Short URL

| Property | Value |
|---|---|
| **URL** | `/api/url/shorten` |
| **Method** | `POST` |

**Request Body:**

```json
{
  "original_url": "https://www.example.com/very-long-url"
}
```

**Success Response:** `201 Created`

---

### 2. Redirect

| Property | Value |
|---|---|
| **URL** | `/:shortId` |
| **Method** | `GET` |
| **Description** | Redirects the client to the original URL and increments the click counter by 1. |

---

### 3. Analytics

| Property | Value |
|---|---|
| **URL** | `/api/url/analytics/:shortId` |
| **Method** | `GET` |

**Success Response:**

```json
{
  "totalClicks": 5
}
```

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Frontend:** React, Vite
- **Database:** MongoDB

---

## 👤 Author

**Piyush Kadam**
