export type Language = 'en' | 'mr' | 'hi';

export type IntegrationStatus = 'REAL' | 'DEMO' | 'OFFICIAL_HANDOFF' | 'FUTURE';

export type SchemeCategory =
  | 'education'
  | 'agriculture'
  | 'women_child'
  | 'employment'
  | 'health'
  | 'social_welfare'
  | 'housing'
  | 'revenue'
  | 'senior_citizens'
  | 'scholarships'
  | 'other';

export interface DocumentRequirement {
  id: string;
  name: { en: string; mr: string; hi: string };
  isMandatory: boolean;
  status?: 'ready' | 'missing' | 'optional' | 'needs_verification';
  prerequisiteServiceId?: string;
  prerequisiteServiceName?: { en: string; mr: string; hi: string };
  issuingAuthority?: string;
}

export interface Scheme {
  id: string;
  code: string;
  title: { en: string; mr: string; hi: string };
  department: { en: string; mr: string; hi: string };
  category: SchemeCategory;
  description: { en: string; mr: string; hi: string };
  eligibilitySummary: { en: string; mr: string; hi: string };
  targetBeneficiaries: { en: string; mr: string; hi: string };
  benefits: { en: string; mr: string; hi: string };
  documents: DocumentRequirement[];
  deadline: string | null;
  officialSource: string;
  officialPortalUrl: string;
  status: 'active' | 'upcoming' | 'closed';
  lastVerifiedDate: string;
  matchScore?: number; // 0 - 100 for indicative match
  integrationStatus: IntegrationStatus;
  applicationSteps: { en: string; mr: string; hi: string }[];
  dependencies?: string[]; // IDs of required prerequisite services
}

export type JourneyStage =
  | 'DISCOVER'
  | 'UNDERSTAND'
  | 'QUALIFY'
  | 'PREPARE'
  | 'APPLY'
  | 'TRACK'
  | 'RESOLVE';

export interface JourneyStep {
  stage: JourneyStage;
  title: { en: string; mr: string; hi: string };
  description: { en: string; mr: string; hi: string };
  status: 'completed' | 'current' | 'pending' | 'action_required';
  department?: string;
  nextAction?: { en: string; mr: string; hi: string };
  officialUrl?: string;
  prerequisiteAlert?: {
    missingDoc: string;
    recommendedService: string;
    serviceId: string;
  };
}

export interface CitizenJourney {
  id: string;
  goal: { en: string; mr: string; hi: string };
  schemeId: string;
  schemeName: { en: string; mr: string; hi: string };
  currentStage: JourneyStage;
  progressPercent: number;
  steps: JourneyStep[];
  applicationRef?: string;
  updatedAt: string;
}

export interface ApplicationRecord {
  referenceId: string;
  schemeId: string;
  schemeTitle: string;
  department: string;
  submittedDate: string;
  currentStatus: string;
  progressPercent: number;
  lastUpdated: string;
  expectedResolutionDate?: string;
  isLiveApiAvailable: boolean;
  officialPortalUrl: string;
  timeline: {
    title: string;
    date: string;
    status: 'completed' | 'current' | 'pending';
    notes?: string;
  }[];
}

export interface ConnectorSystem {
  id: string;
  name: string;
  category: 'api_setu' | 'digilocker' | 'state_api' | 'legacy_adapter' | 'portal_handoff';
  status: 'active' | 'demo' | 'planned';
  integrationStatus: IntegrationStatus;
  description: string;
  dataExchanged: string[];
  lastSyncTime: string;
  uptime: string;
  latencyMs: number;
}

export interface GrievanceRecord {
  id: string;
  applicationRef: string;
  department: string;
  serviceName: string;
  issueType: string;
  status: 'draft' | 'guided' | 'submitted_to_official_portal';
  officialGrievancePortal: string;
  escalationPath: string[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: { en: string; mr: string; hi: string } | string;
  timestamp: string;
  intent?: string;
  suggestedSchemes?: Scheme[];
  askingQuestions?: {
    field: string;
    question: { en: string; mr: string; hi: string };
    options?: string[];
  }[];
  journeyAction?: boolean;
}

export interface NotificationItem {
  id: string;
  title: { en: string; mr: string; hi: string };
  message: { en: string; mr: string; hi: string };
  date: string;
  type: 'alert' | 'update' | 'prerequisite' | 'success';
  read: boolean;
  linkTab?: string;
}
