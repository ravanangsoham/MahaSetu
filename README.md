# MahaSetu AI (महासेतू AI)
> **"One Citizen. One Conversation. One Government Journey."**

![MahaSetu AI Platform](https://img.shields.io/badge/Platform-MahaSetu_AI-orange?style=for-the-badge)
![Government of Maharashtra](https://img.shields.io/badge/Government_of_Maharashtra-Interoperability-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Production_Ready-emerald?style=for-the-badge)

---

## 📌 Project Overview

**MahaSetu AI** is an intelligent, citizen-facing service orchestration and interoperability platform for Government of Maharashtra digital services.

### 🏛️ Central Principle: **"CONNECT, DON’T REPLACE."**
MahaSetu AI is **NOT** a replacement for existing government web portals (MahaDBT, Aaple Sarkar, Mahabhulekh, Krishi Department). Instead, it operates above existing departmental platforms as a unified conversational intelligence & interoperability bridge.

---

## 🎯 The Core Problem Solved

> *"System integration and interoperability among government digital platforms, resolving fragmented service delivery."*

### Citizen Challenges Resolved by MahaSetu:
- ❌ Dozens of separate department portals requiring separate logins.
- ❌ Confusing prerequisite document dependencies (e.g. not knowing an Income Certificate is required before applying for a scholarship).
- ❌ Re-uploading Aadhaar, Income, and Domicile certificates for every application.
- ❌ Dense, legalistic eligibility criteria in official documents.
- ❌ No central, unified application tracking view.
- ❌ Unclear grievance escalation paths for delayed applications.

---

## 💡 Solution: The MahaSetu AI Journey

MahaSetu AI unifies citizen interaction into a 7-stage lifecycle:
```
DISCOVER → UNDERSTAND → QUALIFY → PREPARE → APPLY → TRACK → RESOLVE
```

### Key Features:
1. **Multilingual AI Assistant** (English / मराठी / हिंदी) with text and voice UI.
2. **Indicative Match Engine** (explicitly disclaims official authority — "Potentially Eligible").
3. **Dependency Intelligence Engine** (detects missing prerequisites like Income Certificate and guides citizens to get them first).
4. **Official Portal Handoff** (redirects citizens to authoritative state portals for final submission).
5. **Unified Status Tracker** (queries API Setu / state adapters or falls back gracefully to last verified status).
6. **AI-Guided Grievance Escalation** (routes stuck applications to official Aaple Sarkar Grievance channels).

---

## 🏗️ Architecture & Boundaries

```
                    MAHASETU AI
                         │
              API / CONNECTOR LAYER
                         │
        ┌────────────────┼────────────────┐
        ▼                ▼                ▼
    API Setu        DigiLocker      State APIs
        ▼                ▼                ▼
   Government      Documents       Maharashtra
     Services        Platform        Systems
```

### Government Decision Boundary Rule:
```
AI ASSISTS  ──►  RULES VALIDATE  ──►  GOVERNMENT DECIDES
```

| Boundary Category | Status | Explanation |
| :--- | :--- | :--- |
| **DigiLocker / Aaple Sarkar** | **REAL / DEMO** | Direct e-KYC and revenue connector verification. |
| **MahaDBT Scholarship Handoff** | **OFFICIAL HANDOFF** | Citizen pre-filled intent handed off to official portal. |
| **Legacy Dept Adapters** | **FUTURE** | Standardized SOAP/REST wrappers planned for future integration. |

---

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4 (Maharashtra Govt palette: Deep Navy `#0B2545`, Saffron `#FF6B00`, Green `#1B8755`)
- **Icons**: Lucide React
- **Voice UI**: Web Speech API (`mr-IN` / `en-IN`) with fallback simulator
- **AI Abstraction**: Demo Mode (offline rule-based NLP) + optional OpenAI API Integration

---

## 🚀 Local Setup Instructions

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

### Step-by-Step Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/MahaSetuDemo.git
   cd MahaSetuDemo
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
   *(Note: Leaving `VITE_OPENAI_API_KEY` empty automatically enables **DEMO MODE**, allowing full offline usage).*

4. **Run the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

---

## ⚡ Try MahaSetu Journey Demo

Click the top banner button:
```
⚡ Try MahaSetu Journey
```
This automatically populates the student query (*"माझ्या मुलीच्या शिक्षणासाठी काही सरकारी योजना आहेत का?"*) and guides users through:
1. Intent Understanding
2. Scheme Recommendation (Rajarshi Shahu Maharaj Scholarship)
3. Indicative Eligibility Calculation
4. Document Readiness & Missing Income Certificate Alert
5. Prerequisite Service Guidance (Aaple Sarkar Revenue Dept)
6. 7-Stage Journey Timeline
7. Application Tracking (`DEMO-EDU-2026-001`)
8. Grievance Guidance Handoff

---

## 📦 Build & Vercel Deployment

### Build Command
To compile the TypeScript project for production:
```bash
npm run build
```

### GitHub Push & Vercel Deployment

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial release of MahaSetu AI platform"
   git branch -M main
   git remote add origin https://github.com/your-username/MahaSetuDemo.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Log in to [Vercel](https://vercel.com).
   - Import your `MahaSetuDemo` GitHub repository.
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Click **Deploy**.

---

## 📜 Disclaimer

MahaSetu AI functions as an orchestration layer above existing departmental systems; official government decisions, final approvals, and submissions remain exclusively with authoritative departmental portals.
