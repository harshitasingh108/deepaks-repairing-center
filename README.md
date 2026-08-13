# 🔧 Deepak Repairing Center — Full-Stack Web App with AI

[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-Express_5-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Gemini AI](https://img.shields.io/badge/AI-Google_Gemini-4285F4?logo=google&logoColor=white)](https://ai.google.dev/)
[![License](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)

A modern, high-performance, full-stack web application built for **Deepak Repairing Center**. The platform provides customers with instant service bookings, live repair status tracking, multi-language accessibility (English & Hindi), and an interactive **AI Assistant** powered by Google Gemini AI, alongside a secure **Admin Management Portal**.

---

## 🌟 Key Features

- 🤖 **AI-Powered Virtual Assistant**: Integrated chatbot powered by Google Gemini API to answer customer queries, assist with troubleshooting, and provide service estimates.
- 🔍 **Live Repair Tracking**: Real-time status tracking for customer repair requests using unique Request IDs or phone numbers.
- 🌐 **Bilingual Support (i18n)**: Instant language switcher for **English** and **Hindi** (हिंदी) using `react-intl`.
- 🌓 **Dynamic Dark / Light Mode**: Seamless theme switching with custom design system tokens and glowing cursor interaction (`CursorGlow`).
- 🛠️ **Service & Product Showcase**: Interactive galleries and catalog detailing electronics repair services, spare parts, and pricing.
- 🔐 **Protected Admin Panel**: Secure JWT authentication and dashboard for managing incoming repair requests, updating status, and maintaining services/products catalog.
- 📱 **Fully Responsive & Modern Design**: Crafted using Tailwind CSS, glassmorphism UI elements, subtle micro-animations, and fast page load times with Vite.

---

## 🏗️ Tech Stack

### Frontend
- **Framework**: [React 19](https://react.dev/) with [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), Custom CSS Animations
- **Icons & UI**: `lucide-react`, `react-icons`
- **Routing**: `react-router-dom` (v7)
- **Internationalization**: `react-intl` (English & Hindi)
- **State & Context**: React Context API (`ThemeContext`)

### Backend
- **Runtime**: [Node.js](https://nodejs.org/) + [Express 5](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/) ODM
- **Authentication**: JSON Web Tokens (`jsonwebtoken`) & `bcryptjs` password hashing
- **AI Integration**: `@google/genai` (Google Gemini AI API) / OpenAI API
- **Utilities**: `cors`, `dotenv`, `nodemon`

---

## 📁 Repository Structure

```text
deepak-repairing/
├── backend/                  # Express API Backend
│   ├── src/
│   │   ├── config/           # Database Connection (MongoDB)
│   │   ├── controllers/      # Request Controllers (Products, Services, Repairs, Auth, AI)
│   │   ├── middleware/       # Auth & Validation Middlewares
│   │   ├── models/           # Mongoose Data Schemas
│   │   ├── routes/           # Express Route Definitions
│   │   └── server.js         # Entry Point
│   ├── .env                  # Environment Variables (backend)
│   └── package.json
├── src/                      # React Frontend Source
│   ├── about/                # About Us Page
│   ├── admin/                # Admin Login & Management Dashboard
│   ├── components/           # Reusable UI (Navbar, Footer, AIChatbot, CursorGlow)
│   ├── constants/            # Static maps & location configuration
│   ├── contact/              # Contact & Inquiry Sections
│   ├── context/              # Global Context Providers (ThemeContext)
│   ├── gallery/              # Service Showcase Gallery
│   ├── home/                 # Landing Page Sections (Hero, Location, CTA)
│   ├── i18n/                 # Localization JSONs (en.json, hi.json)
│   ├── routes/               # Client-Side Routing setup (AppRoutes.jsx)
│   ├── services/             # Repair Services Overview & Booking
│   ├── track/                # Live Repair Tracking System
│   ├── App.jsx               # Root Component
│   ├── index.css             # Base Styles & Tailwind Imports
│   └── main.jsx              # React DOM Entry
├── public/                   # Static Assets & Images
├── vercel.json               # Vercel Deployment Configuration
├── wrangler.jsonc            # Cloudflare Workers / Assets Configuration
├── tailwind.config.js        # Tailwind Configuration
├── vite.config.js            # Vite Configuration
└── package.json              # Frontend Dependencies & Scripts
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- [npm](https://www.npmjs.com/) (v9.0.0 or higher)
- [MongoDB](https://www.mongodb.com/) database (Cloud Cluster or Local instance)

---

### 📥 Installation & Setup

#### 1. Clone the Repository
```bash
git clone https://github.com/harshitasingh108/deepaks-repairing-center.git
cd "deepak repairing"
```

#### 2. Setup Backend

Navigate to the `backend` folder and install dependencies:
```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key
GEMINI_API_KEY=your_google_gemini_api_key
VITE_API_URL=http://localhost:5000
```

Start the backend server in development mode:
```bash
npm run dev
```
The server will start at `http://localhost:5000` 🚀

#### 3. Setup Frontend

Open a new terminal window, navigate back to the root directory, and install dependencies:
```bash
cd ..
npm install
```

Start the Vite development server:
```bash
npm run dev
```
Open your browser at `http://localhost:5173` to view the application.

---

## 📡 API Endpoints Overview

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/health` | Health Check API | No |
| `GET` | `/api/products` | Fetch all products & spare parts | No |
| `GET` | `/api/services` | List repair services | No |
| `POST` | `/api/repair-requests` | Submit a new repair request | No |
| `GET` | `/api/repair-requests/:id` | Track repair status by ID/phone | No |
| `POST` | `/api/auth/login` | Admin login & token generation | No |
| `GET` | `/api/repair-requests` | View all customer repair requests | Yes (JWT) |
| `POST` | `/api/ai/chat` | Send prompt to Gemini AI assistant | No |

---

## ⚡ NPM Scripts

### Frontend Scripts (Root)
- `npm run dev`: Launch Vite development server with HMR.
- `npm run build`: Build production bundle into `/dist`.
- `npm run preview`: Locally preview production build.
- `npm run lint`: Run ESLint checks.

### Backend Scripts (`/backend`)
- `npm run dev`: Run server using `nodemon` for auto-reloading.
- `npm start`: Run server with standard Node.js process.

---

## 🌐 Deployment Configuration

The application is pre-configured for smooth deployment across major platforms:

- **Frontend**:
  - **Vercel**: Pre-configured `vercel.json` rewrite rules for single-page routing (`SPA`).
  - **Cloudflare Workers / Pages**: Pre-configured `wrangler.jsonc` assets routing.
- **Backend**: Ready to deploy on **Render**, **Railway**, or **Heroku**.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check the [Issues page](https://github.com/harshitasingh108/deepaks-repairing-center/issues).

---

## 📄 License

This project is licensed under the [ISC License](LICENSE).

