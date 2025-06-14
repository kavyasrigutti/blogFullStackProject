# 🧠 AI-Powered Blog Platform (MERN Stack)

A full-stack blog platform built using **MongoDB**, **Express.js**, **React.js**, and **Node.js**, with integrated **AI content generation** powered by **Google GenAI**. The app includes a user-facing blog reader and a full admin dashboard to manage blogs and comments.

---

## 🚀 Features

### 👥 User Features
- 📰 View all published blogs
- 📄 Read full blog posts with title, subtitle, image, and content
- 💬 Post comments on any blog
- 📱 Responsive and mobile-friendly design

### 🛠 Admin Dashboard
- ✍️ Add new blogs (title, subtitle, image, category, description)
- 🧠 Generate blog content using **AI (Google GenAI)**
- 🗂 View all blogs (published & drafts)
- 🗑 Delete blogs and manage drafts
- 📬 View all blog comments
- ✅ Approve or ❌ delete user comments
- 📊 See dashboard stats (total blogs, drafts, comments, recent blogs)

### 🤖 AI Integration
- ✨ Generate full blog descriptions using Google GenAI
- 💡 Smart assistance for writing high-quality content
- ⚡ Quickly produce draft ideas or full posts

---

## 🛠 Tech Stack

| Layer        | Technology                |
|--------------|---------------------------|
| Frontend     | React.js, Tailwind CSS    |
| Backend      | Node.js, Express.js       |
| Database     | MongoDB, Mongoose         |
| AI Service   | Google GenAI API          |
| Auth         | JWT (JSON Web Token)      |
| Tools        | Axios, React Hot Toast, Quill.js, Vite |

---

## 📦 Getting Started

### 1. Clone the Repository

git clone https://github.com/kavyasrigutti/blogFullStackProject.git

cd blogFullStackProject
### 2. Setup Backend

cd server

npm install

#### Create a .env file in server/ and add:

PORT=5000

MONGODB_URI=your_mongodb_uri

JWT_SECRET=your_jwt_secret

GENAI_API_KEY=your_google_genai_api_key

Start the backend server:  npm start

### 3. Setup Frontend

cd client

npm install

npm run dev

