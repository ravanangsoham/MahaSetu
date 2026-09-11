# Implementation Plan - MahaSetu AI Prototype (SIH26129)

MahaSetu AI ("One Citizen. One Conversation. One Government Journey.") is an intelligent citizen-facing orchestration and interoperability layer connecting citizens with Government of Maharashtra digital platforms without replacing authoritative departmental portals ("Connect, Don't Replace").

## User Review Required

> [!IMPORTANT]
> **Core Positioning & Boundaries**:
> 1. **Connect, Don't Replace**: MahaSetu AI acts as an interoperability layer. Official departmental portals remain authoritative for final submission and approval.
> 2. **Demo Mode vs Real AI**: The app operates fully offline using robust mock data and deterministic AI simulation for presentation reliability, with optional OpenAI API key fallback via `.env`.
> 3. **Clear Status Labels**: Integration nodes and status metrics will be explicitly labeled as **REAL**, **DEMO/SIMULATED**, or **FUTURE INTEGRATION**.

## Open Questions

> [!NOTE]
> None at present. All requirements, design specs, branding, languages (English, Marathi, Hindi), and interactive workflows have been specified in the user request.

## Proposed Architecture & Structure

```
MahaSetuDemo/
├── public/
│   ├── favicon.ico
│   └── maharashtra-emblem.svg
├── src/
│   ├── api/                  # Service interfaces & simulated backends
│   │   ├── aiService.ts       # AI Service Abstraction (Demo + OpenAI fallback)
│   │   ├── connectorService.ts# Interoperability & API Setu / DigiLocker connectors
│   │   └── trackingService.ts # Application status & tracking API
│   ├── components/           # Reusable UI components
│   │   ├── layout/
│   │   │   ├── Navbar.tsx     # Header with emblem, tabs, lang selector, demo toggle
│   │   │   ├── Footer.tsx     # Standard Govt-tech footer & SIH credits
│   │   │   └── MobileNav.tsx  # Responsive bottom & hamburger navigation
│   │   ├── ai/
│   │   │   ├── AskAIModal.tsx # Full-featured AI assistant with voice UI & prompt suggestions
│   │   │   ├── ChatMessage.tsx# Multilingual AI response card with action chips
│   │   │   └── VoiceUI.tsx    # Speech recognition interface with visual wave fallback
│   │   ├── schemes/
│   │   │   ├── SchemeCard.tsx # Scheme card with "Indicative Match" badge & details trigger
│   │   │   ├── SchemeDetailsModal.tsx # Full scheme breakdown & decision boundary
│   │   │   └── EligibilityWizard.tsx # 5-step interactive eligibility checker
│   │   ├── journey/
│   │   │   ├── JourneyTimeline.tsx # 7-stage horizontal/vertical interactive timeline
│   │   │   ├── DocumentChecklist.tsx# Doc readiness + Dependency Intelligence recommendation
│   │   │   └── PrerequisiteModal.tsx# Income Certificate prerequisite flow modal
│   │   ├── tracking/
│   │   │   └── ApplicationTracker.tsx # Status search & step progress visualizer
│   │   ├── interoperability/
│   │   │   ├── InteropDiagram.tsx     # Visual architecture node map (API Setu, DigiLocker, etc.)
│   │   │   └── ConnectorDashboard.tsx # Live sync & connector status cards
│   │   ├── grievance/
│   │   │   └── GrievanceAssistant.tsx # Delayed application & grievance routing wizard
│   │   ├── analytics/
│   │   │   └── AdminDashboard.tsx     # SIH Judge analytics view
│   │   └── common/
│   │       ├── LanguageSwitcher.tsx  # English / मराठी / हिंदी toggle
│   │       ├── DemoModeBanner.tsx    # Judge 2-minute instant demo trigger
│   │       ├── StatusBadge.tsx       # REAL / DEMO / FUTURE pill badges
│   │       └── NotificationCenter.tsx# Real-time alert tray
│   ├── data/
│   │   ├── schemes.ts        # Comprehensive Marathi & English govt schemes
│   │   ├── connectors.ts     # System connectors & API Setu metadata
│   │   ├── grievances.ts     # Grievance routing data
│   │   └── translations.ts   # English, Marathi, and Hindi UI dictionaries
│   ├── hooks/
│   │   ├── useLanguage.ts    # Language state & context
│   │   ├── useDemoMode.ts    # Demo journey state runner
│   │   └── useSpeech.ts      # Web Speech API hook
│   ├── types/
│   │   └── index.ts          # TypeScript interfaces for Schemes, Journeys, Connectors
│   ├── App.tsx               # Main application routing & tab manager
│   ├── index.css             # Custom CSS tokens, glassmorphism, animations
│   └── main.tsx              # React entrypoint
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── .env.example
└── README.md
```

---

## Proposed Changes

### Configuration & Tooling Setup
- Setup Vite with React, TypeScript, Tailwind CSS, Autoprefixer, Lucide React, and clsx/tailwind-merge.
- Configure Tailwind with Government of Maharashtra color palette:
  - Primary Navy: `#0B2545` / `#13315C`
  - Accent Saffron: `#FF6B00` / `#E65100`
  - Subtle Green: `#1B8755`
  - Warm White/Slate: `#F8FAFC`
- Create `.env.example` with `VITE_OPENAI_API_KEY=` and `VITE_ENABLE_DEMO_MODE=true`.

### Core Data & Translations (`src/data/`)
- `schemes.ts`: Include realistic Maharashtra schemes (Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna, Namo Shetkari MahaSanman Nidhi, Ladki Bahin Yojna, Post-Matric Scholarship, MahaDBT pre-requisites).
- `translations.ts`: Full translation keys for English, Marathi (मराठी), and Hindi (हिंदी) across all navigation labels, hero text, journey steps, eligibility prompts, and disclaimer footers.

### Service Abstraction Layer (`src/api/`)
- `aiService.ts`: `analyzeIntent()`, `findSchemes()`, `askFollowUp()`, `explainEligibility()`, `explainDocuments()`, `identifyDependency()`, `generateJourney()`. Checks if `VITE_OPENAI_API_KEY` is present; falls back seamlessly to offline rule-based NLP simulator.

### Page Components & Features
1. **Landing Hero**: Headline, subheadline, visual architecture flow chart, stats counter, CTA buttons, and "Connect, Don't Replace" disclaimer.
2. **Problem vs Solution**: Visual side-by-side flow comparison ("Before MahaSetu" vs "After MahaSetu") with animated transition arrows and 6 problem cards.
3. **Ask MahaSetu AI**: Interactive multi-lingual assistant with quick prompt buttons, voice input, step-by-step query builder, and intent extraction.
4. **Scheme Hub & Details**: Search, category filters, "Indicative Match" tags, comprehensive scheme modal with Government Decision Boundary illustration.
5. **Interactive Eligibility Checker**: 5-step wizard calculating indicative match scores with clear breakdown of fulfilled criteria and missing inputs.
6. **Document Readiness & Prerequisite Engine**: Checklist with status pills and smart dependency resolution (e.g. prompt user to get Income Certificate first before applying for Scholarship).
7. **Unified Journey Planner**: 7-stage interactive timeline (`DISCOVER → UNDERSTAND → QUALIFY → PREPARE → APPLY → TRACK → RESOLVE`) tracking citizen progress.
8. **Application Tracker**: Input Application Reference ID (`DEMO-EDU-2026-001`) to render lifecycle progress bar, step statuses, and official portal handoff link.
9. **Interoperability Visualizer & Connector Dashboard**: Node map showing API Setu, DigiLocker, MahaDBT, and state departmental APIs with status indicators (**REAL**, **DEMO**, **FUTURE**).
10. **Grievance Assistant**: AI-guided delay diagnosis and official Aaple Sarkar Grievance Portal handoff.
11. **Admin Analytics**: Judge-facing dashboard with demand charts, missing doc metrics, and department bottlenecks.
12. **Judge Demo Mode**: Prominent top banner with 1-click trigger to execute the full 2-minute Marathi student scholarship demo flow automatically.

---

## Verification Plan

### Automated Build & Type Checks
- Execute `npm run build` using Vite TypeScript compiler (`tsc && vite build`) to confirm zero compilation or typing errors.

### Manual Verification & UI Validation
- Test Language Switcher across English, Marathi, and Hindi.
- Run "Try Demo Journey" 1-click sequence to verify automated navigation through AI -> Scheme Match -> Eligibility -> Prerequisite -> Journey Planner -> Track -> Grievance.
- Test responsive layouts at Desktop (1440px), Tablet (768px), and Mobile (390px).
- Verify dark/light contrast ratios and semantic HTML accessibility elements.
