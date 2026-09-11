import type { GrievanceRecord } from '../types';

export const mockGrievances: GrievanceRecord[] = [
  {
    id: 'grv-001',
    applicationRef: 'DEMO-EDU-2026-001',
    department: 'Higher & Technical Education Department',
    serviceName: 'Rajarshi Chhatrapati Shahu Maharaj Scholarship',
    issueType: 'Application verification pending over 30 days at institute level',
    status: 'guided',
    officialGrievancePortal: 'https://grievance.maharashtra.gov.in',
    escalationPath: [
      'Level 1: College Verification Officer / Principal',
      'Level 2: Joint Director of Higher Education (Regional Office)',
      'Level 3: Director of Higher Education, Pune (Aaple Sarkar Grievance Portal)',
    ],
  },
  {
    id: 'grv-002',
    applicationRef: 'DEMO-AGRI-2026-088',
    department: 'Agriculture Department',
    serviceName: 'Namo Shetkari Nidhi Installment Delay',
    issueType: 'e-KYC land linkage mismatch',
    status: 'submitted_to_official_portal',
    officialGrievancePortal: 'https://krishi.maharashtra.gov.in/grievance',
    escalationPath: [
      'Level 1: Taluka Krishi Adhikari (TKA)',
      'Level 2: District Superintending Agriculture Officer (SAO)',
    ],
  },
];
