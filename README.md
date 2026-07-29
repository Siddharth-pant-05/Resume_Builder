# AI Resume Builder

A full-stack MERN web application that helps users create, manage, and share professional, ATS-friendly resumes with the help of AI-generated content.

**Live Demo:** https://resume-builder-uo7v.vercel.app/

---

## About This Project

I built this project to get hands-on experience with the full MERN stack — going beyond frontend UI work to also design a real backend: authentication, database schemas, file uploads, and a third-party AI API integration, then deploying the whole thing end-to-end.

<<<<<<< HEAD
The idea was simple: resume writing is repetitive and most people struggle to phrase their experience well. So I built a tool that lets users manage multiple resumes and uses AI to help generate stronger, ATS-optimized content for summaries and experience descriptions.


---

## Features

**Authentication & Security**
- Email/password registration and login with input validation
- JWT-based authentication with secure, HTTP-only cookies
- Passwords hashed with bcrypt — never stored in plain text
- Forgot/reset password flow with time-limited, hashed reset tokens emailed via Nodemailer
- Protected routes using authentication middleware

**Resume Management**
- Create, edit, and delete multiple resumes per account
- Add personal info, education, projects, experience, skills, and certifications
- Each resume managed and stored independently in MongoDB

**AI-Powered Assistance**
- AI-generated professional summaries
- AI-enhanced experience/job descriptions
- Skill suggestions based on profile content
- Content optimized for ATS (Applicant Tracking System) readability

**File Handling & Storage**
- Profile image and asset uploads via Multer
- Cloud storage and optimized delivery through ImageKit

**Sharing & Export**
- Shareable public resume links (no login required to view)
- Download and print resumes directly from the browser

**UI/UX**
- Fully responsive design (desktop, tablet, mobile)
- Built with Tailwind CSS, toast notifications, and clean iconography
- Global state managed with Redux Toolkit for predictable auth and resume state

---

## Tech Stack

**Frontend:** React 19, Vite, Redux Toolkit, React Router DOM, Tailwind CSS, Axios, React Hot Toast, Lucide React

**Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt, Cookie Parser, CORS, Nodemailer, Multer, ImageKit

**AI:** OpenAI SDK (used for resume content generation)

**Deployment:** Vercel (CI/CD on every push to `main`)

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Siddharth-pant-05/Resume_Builder
cd Resume_Builder
```

### 2. Install dependencies
=======
```text
 https://resume-builder-uo7v.vercel.app/
```

---

# 📖 Overview

AI Resume Builder is a modern full-stack web application that helps users create professional resumes quickly and efficiently with the help of Artificial Intelligence.

The platform provides:

- 🔐 Secure Authentication
- 🤖 AI-Powered Resume Writing
- 📄 Resume Creation & Management
- ☁️ Cloud Storage Integration
- 📤 Resume Sharing & Downloading
- 📱 Fully Responsive User Interface

The application is designed for students, job seekers, and professionals who want to build ATS-friendly resumes with minimal effort.

---

# ✨ Features

# 🔐 Authentication System

### User Registration
- Create an account securely.
- Email and password-based authentication.
- Validation for invalid credentials.

### User Login
- JWT-based authentication.
- Secure cookie handling.
- Persistent login sessions.

### Password Security
- Password hashing using bcrypt.
- Protected against plain-text password storage.

### Route Protection
- Middleware-based authorization.
- Private pages accessible only to authenticated users.

---

# 👤 User Management

### User Profiles
- Store personal information.
- Maintain authentication state.
- Easy login/logout functionality.

### Session Management
- Automatic authentication persistence.
- Secure session handling.

---

# 📄 Resume Management

### Create Resume
Users can:

✅ Create multiple resumes.

✅ Add personal information.

✅ Add education details.

✅ Add projects and experience.

✅ Add skills and certifications.

---

### Edit Resume
- Update resume information anytime.
- Modify sections independently.

---

### Delete Resume
- Remove unwanted resumes permanently.

---

### Multiple Resume Support
- Store multiple resumes under a single account.
- Manage resumes independently.

---

# 🤖 AI Resume Assistance

The application's biggest feature is AI-powered resume generation.

### AI Features

#### Professional Summary Generation
Generate impressive professional summaries instantly.

#### Experience Enhancement
Improve job descriptions using AI.

#### Skills Suggestions
Receive relevant skills based on your profile.

#### Content Optimization
Generate ATS-friendly content and professional wording.

#### Reduced Manual Effort
Create professional resumes in minutes instead of hours.

---

# ☁️ File Upload & Storage

### Image Upload Support
- Upload profile images.
- Upload resume assets.

### ImageKit Integration
- Secure cloud storage.
- Optimized image delivery.
- Fast loading.

### Multer Integration
- Secure file handling.
- Backend upload management.

---

# 📤 Resume Sharing & Export

### Share Resume
- Generate public links.
- Share resumes with recruiters.

### Public Resume Viewing
- Recruiters can access resumes directly.

### Download & Print
- Download resumes.
- Print directly from the browser.

---

# 🎨 Modern User Interface

### Responsive Design
- Desktop support.
- Tablet support.
- Mobile support.

### User Experience
- Beautiful UI with Tailwind CSS.
- Smooth navigation.
- Toast notifications.
- Modern icons.

---

# ⚡ State Management

### Redux Toolkit
- Centralized state management.
- Authentication state.
- Resume state management.
- Predictable data flow.

---

# 🛠️ Tech Stack

# 🎨 Frontend

| Technology | Purpose |
|------------|----------|
| ⚛️ React 19 | User Interface |
| ⚡ Vite | Development & Build Tool |
| 🎨 Tailwind CSS | Styling |
| 🧭 React Router DOM | Routing |
| 📦 Redux Toolkit | State Management |
| 🔄 React Redux | Redux Integration |
| 🌐 Axios | API Communication |
| 🔔 React Hot Toast | Notifications |
| 🎯 Lucide React | Icons |
| 🎨 React Icons | Additional Icons |

---

# 🖥️ Backend

| Technology | Purpose |
|------------|----------|
| 🟢 Node.js | Runtime Environment |
| 🚂 Express.js | Backend Framework |
| 🍃 MongoDB | Database |
| 🗄️ Mongoose | ODM |
| 🔑 JWT | Authentication |
| 🔒 bcrypt | Password Security |
| 🍪 Cookie Parser | Cookie Handling |
| 🌍 CORS | Cross-Origin Communication |
| 📧 Nodemailer | Email Services |
| 📂 Multer | File Upload |
| ☁️ ImageKit | Cloud Storage |
| 🤖 OpenAI SDK | AI Features |

---


# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Siddharth-pant-05/Resume_Builder
cd Resume_Builder
```

---

## 2️⃣ Install Frontend Dependencies

>>>>>>> 9f96e6e5df6a2324b2f9c16e67b4f495f640e945
```bash
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
```

### 3. Set up environment variables

**server/.env**
```
PORT=5000
MONGODB_URI=
JWT_SECRET=
OPENAI_API_KEY=
OPENAI_BASE_URL=
OPEN_AI_MODEL=

IMAGEKIT_PRIVATE_KEY=

EMAIL=
EMAIL_PASSWORD=

NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

**client/.env**
```
VITE_BASE_URL=http://localhost:5000
```

### 4. Run the app
```bash
# Backend
cd server
npm run server

# Frontend (in a separate terminal)
cd client
npm run dev
```

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

---

## Application Flow

```
User Registration/Login
        ↓
JWT Authentication (HTTP-only cookie)
        ↓
Create/Edit Resume
        ↓
Stored in MongoDB
        ↓
AI-Assisted Content Generation
        ↓
Download / Share Resume
```

---

## What I'd Improve Next

- Multiple resume templates
- Custom PDF export styling
- Dark mode
- ATS score checker
- Resume version history
- Basic usage analytics

---

## Author

<<<<<<< HEAD
**Siddharth Pant**
[GitHub](https://github.com/Siddharth-pant-05)
=======
- 📄 Multiple Resume Templates
- 🎨 PDF Export Customization
- 🌙 Dark Mode
- 📊 Resume Analytics
- 🖱️ Drag and Drop Sections
- 🤖 ATS Score Checker
- 🕒 Resume Version History
- 🌍 Multi-language Support
>>>>>>> 9f96e6e5df6a2324b2f9c16e67b4f495f640e945
