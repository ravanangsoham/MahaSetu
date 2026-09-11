import type { ApplicationRecord } from '../types';

export const mockApplications: Record<string, ApplicationRecord> = {
  'DEMO-EDU-2026-001': {
    referenceId: 'DEMO-EDU-2026-001',
    schemeId: 'scheme-edu-001',
    schemeTitle: 'Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Yojna',
    department: 'Higher & Technical Education Department',
    submittedDate: '2026-08-15',
    currentStatus: 'Document Verification at Institute',
    progressPercent: 60,
    lastUpdated: '2026-09-02 14:30 IST',
    expectedResolutionDate: '2026-09-30',
    isLiveApiAvailable: true,
    officialPortalUrl: 'https://mahadbt.maharashtra.gov.in',
    timeline: [
      {
        title: 'Application Submitted Online',
        date: '2026-08-15',
        status: 'completed',
        notes: 'Submitted via MahaDBT portal handoff.',
      },
      {
        title: 'Aadhaar e-KYC & Bank Seeding Check',
        date: '2026-08-18',
        status: 'completed',
        notes: 'Verified via UIDAI / DigiLocker connector.',
      },
      {
        title: 'College Document Scrutiny Officer Review',
        date: '2026-09-02',
        status: 'current',
        notes: 'Verification in progress by Principal / Nodal Officer.',
      },
      {
        title: 'Joint Director Sanction & DBT Order',
        date: 'Pending',
        status: 'pending',
        notes: 'Direct Benefit Transfer disbursement.',
      },
    ],
  },
  'DEMO-AGRI-2026-088': {
    referenceId: 'DEMO-AGRI-2026-088',
    schemeId: 'scheme-agri-002',
    schemeTitle: 'Namo Shetkari MahaSanman Nidhi Yojna',
    department: 'Agriculture Department',
    submittedDate: '2026-07-20',
    currentStatus: '7/12 Land Verification Completed',
    progressPercent: 85,
    lastUpdated: '2026-08-28 11:15 IST',
    expectedResolutionDate: '2026-09-15',
    isLiveApiAvailable: false,
    officialPortalUrl: 'https://krishi.maharashtra.gov.in',
    timeline: [
      {
        title: 'Application Registered',
        date: '2026-07-20',
        status: 'completed',
      },
      {
        title: '7/12 Mahabhulekh Land Validation',
        date: '2026-08-10',
        status: 'completed',
      },
      {
        title: 'Installment Disbursement Order',
        date: '2026-08-28',
        status: 'current',
        notes: 'Live status currently unavailable from state gateway. Last reported: Approved for Installment #3.',
      },
    ],
  },
};

export class TrackingService {
  public static async trackApplication(refId: string): Promise<ApplicationRecord | null> {
    const cleaned = refId.trim().toUpperCase();
    if (mockApplications[cleaned]) {
      return mockApplications[cleaned];
    }
    // Generic fallback for any other ID typed by user
    return {
      referenceId: cleaned,
      schemeId: 'scheme-gen-999',
      schemeTitle: 'Government Service Application',
      department: 'Concerned Maharashtra Department',
      submittedDate: '2026-08-20',
      currentStatus: 'Submitted to Departmental Portal',
      progressPercent: 40,
      lastUpdated: '2026-09-01 10:00 IST',
      isLiveApiAvailable: false,
      officialPortalUrl: 'https://aaplesarkar.mahaonline.gov.in',
      timeline: [
        {
          title: 'Submitted on Official Portal',
          date: '2026-08-20',
          status: 'completed',
        },
        {
          title: 'Departmental Verification',
          date: '2026-09-01',
          status: 'current',
          notes: 'Live status is currently unavailable from departmental API. Click below to verify on official portal.',
        },
      ],
    };
  }
}
