# 🩺 Medora — Telehealth Platform for Global & Remote Medical Access

Medora is a full-stack telemedicine application designed to provide **borderless, real-time video consultations** between patients and doctors. Born out of a personal experience with chronic illness and inspired by the challenges of healthcare discontinuity, Medora aims to bring trust, accessibility, and continuity in global medical care.

---

## 🚀 Features

- 🔒 Secure role-based login (patients, doctors, admins)
- 📅 Appointment scheduling with calendar-based availability
- 📹 In-built video consultation interface (mic/cam controls, hang up)
- 💳 Subscription system for long-term care continuity
- 📂 Doctor dashboards for session management and withdrawals
- 📋 Admin portal for doctor verification and platform oversight
- 🧑‍⚕️ Find doctors by specialization and availability
- 🌐 Fully responsive UI with Tailwind CSS & Framer Motion

---

## 📸 Project Screenshots

<!-- Replace the links below with your own uploaded image URLs -->
![Home Page](https://your-image-url.com/homepage.png)
![Video Call Interface](https://your-image-url.com/consultation.png)
![Doctor Dashboard](https://your-image-url.com/doctor-dashboard.png)

---

## 📁 Project Structure (Simplified)
```
/app
├── /auth → Login/Register flows
├── /dashboard → Doctor & Admin dashboards
├── /consult → Video call interface
├── /components → UI components
├── /lib → Utility functions
└── /prisma → DB schema and config
```


---

## ✨ Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/code0xA/Medora.git
   cd Medora

2. **Install dependencies**
    ```bash
    npm install

3. **Add your environment variables**
- env.local for frontend keys
- env for backend keys (NeonDB, Clerk, Vonage, etc.)

4. **Run the development server**
    ```bash
    npm run dev

## 📌 Future Enhancements
- Patient medical history record system
- E-prescription support
- Multi-language interface
- Doctor review and feedback system

## 🧠 Inspiration
Medora was inspired by a personal need for medical continuity while relocating globally, and a broader mission to make healthcare more accessible in underserved regions.

## 📬 Contact
Created with ❤️ by Anam Saeed
[LinkedIn](https://www.linkedin.com/in/anam-s-636553251) | [GitHub](https://github.com/code0xA)