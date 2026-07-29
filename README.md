# AI Resume Builder

A full-stack MERN web application that helps users create, manage, and share professional, ATS-friendly resumes with the help of AI-generated content.

**Live Demo:** https://resume-builder-uo7v.vercel.app/

---

## About This Project

I built this project to get hands-on experience with the full MERN stack — going beyond frontend UI work to also design a real backend: authentication, database schemas, file uploads, and a third-party AI API integration, then deploying the whole thing end-to-end.

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

**Siddharth Pant**
[GitHub](https://github.com/Siddharth-pant-05)
