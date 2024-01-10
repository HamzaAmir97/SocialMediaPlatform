# 📸 Ecogram – Instagram Clone

Ecogram is a modern full-stack Instagram-style social media platform built with React, Appwrite, and Tailwind CSS. It enables users to create, like, and explore posts in a sleek, responsive UI while leveraging powerful features like authentication, real-time updates, and content bookmarking.

## 🗂 Screenshots

<div align="center">
<img src="/screenshots/banner.png" alt="Screen 1" width="100%"/>
</div>


<div align="center">

<table>
  <tr>
    <td><img src="/screenshots/ecogram (1).png" alt="Screen 1" width="200"/></td>
    <td><img src="/screenshots/ecogram (2).png" alt="Screen 2" width="200"/></td>
    <td><img src="/screenshots/ecogram (3).png" alt="Screen 3" width="200"/></td>
  </tr>
  <tr>
    <td><img src="/screenshots/ecogram (4).png" alt="Screen 4" width="200"/></td>
    <td><img src="/screenshots/ecogram (5).png" alt="Screen 5" width="200"/></td>
    <td><img src="/screenshots/ecogram (6).png" alt="Screen 6" width="200"/></td>
  </tr>
</table>

</div>


---

## 🗂 Table of Contents

1. [📖 Overview](#-overview)
2. [✨ Features](#-features)
3. [⚙️ Tech Stack](#-tech-stack)
4. [📁 Project Structure](#-project-structure)
5. [🚀 Getting Started](#-getting-started)
6. [📦 Deployment](#-deployment)
7. [📄 License](#-license)
8. [🔮 Future Improvements](#-future-improvements)

---

## 📖 Overview

**Ecogram** allows users to:

* Sign in securely with Appwrite Auth
* Post images with captions
* Like, bookmark, and explore posts
* Edit or delete personal posts
* View other user profiles
* Enjoy a mobile-friendly, modern UI

---

## ✨ Features

* 🔐 **Secure Auth** – Appwrite handles sign-in, sign-up, and sessions
* 📝 **Create/Edit Posts** – Upload images with captions
* 🏠 **Home Feed** – Displays posts from all users
* 🔍 **Explore Page** – Discover trending posts
* ❤️ **Like & Bookmark** – Interact and save posts
* 👤 **User Profiles** – View user-specific posts
* 📷 **Media Uploads** – Image storage with Appwrite
* 📱 **Responsive UI** – Works beautifully on all screen sizes

---

## ⚙️ Tech Stack

| Area                  | Tech Used                                                                                                  |
| --------------------- | ---------------------------------------------------------------------------------------------------------- |
| ⚛️ Frontend           | ![React](https://img.shields.io/badge/React-20232A?logo=react\&logoColor=61DAFB)                           |
| ⏱ Build Tool          | ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite\&logoColor=white)                               |
| 🎨 Styling            | ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwind-css)                         |
| 🔐 Auth & Backend     | ![Appwrite](https://img.shields.io/badge/Appwrite-F02E65?logo=appwrite\&logoColor=white)                   |
| 📦 Forms & Validation | React Hook Form + Zod                                                                                      |
| 🔄 State Management   | ![@tanstack/react-query](https://img.shields.io/badge/ReactQuery-FF4154?logo=react-query\&logoColor=white) |
| 🧩 UI Components      | Radix UI + Lucide Icons                                                                                    |

---

## 📁 Project Structure

```bash
Ecogram/
├── public/                  # Static assets
│   └── screenshots/         # Project screenshots
├── src/
│   ├── _auth/               # Auth pages and logic
│   ├── components/
│   │   ├── forms/           # Forms like PostForm
│   │   └── ui/shared/       # Header, Sidebar, Loader, etc.
│   ├── constants/           # App-wide constants
│   ├── context/             # React contexts
│   ├── hooks/               # Custom hooks
│   ├── lib/
│   │   ├── appwrite/        # Appwrite integration
│   │   └── react-query/     # React Query setup
│   ├── root/pages/          # Page-level components
│   └── types/               # TypeScript types
├── index.html
├── package.json
├── tailwind.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

* Node.js v18+
* pnpm, npm, or yarn

### Installation

```bash
git clone https://github.com/your-username/ecogram.git
cd ecogram
pnpm install
pnpm dev
```

Then open your browser at: [http://localhost:5173](http://localhost:5173)

---

## 📦 Deployment

1. **Build for production:**

```bash
pnpm build
```

2. **Preview locally:**

```bash
pnpm preview
```

3. **Deploy on platforms like:**

* Vercel
* Netlify
* Docker or custom server

---

## 📄 License

This project is open-source. Please review or add a LICENSE file if needed.

---

## 🔮 Future Improvements

* Real-time chat
* Push notifications
* Dark mode & theme switch
* Advanced analytics & engagement stats
* Progressive Web App (PWA) support

---

> Built with 💖 using cutting-edge web tech to bring a pixel-perfect social experience to life. Share, explore, connect!
