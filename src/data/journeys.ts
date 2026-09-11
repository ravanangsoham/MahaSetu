import type { CitizenJourney } from '../types';

export const mockDefaultJourneys: CitizenJourney[] = [
  {
    id: 'journey-edu-demo',
    goal: {
      en: 'Apply for Higher Education Scholarship for Daughter',
      mr: 'मुलीच्या उच्च शिक्षणासाठी शिष्यवृत्ती अर्ज करणे',
      hi: 'बेटी की उच्च शिक्षा के लिए छात्रवृत्ति आवेदन',
    },
    schemeId: 'scheme-edu-001',
    schemeName: {
      en: 'Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Yojna',
      mr: 'राजर्षी छत्रपती शाहू महाराज शिक्षण शुल्क योजना',
      hi: 'राजर्षि छत्रपति शाहू महाराज शिक्षण शुल्क योजना',
    },
    currentStage: 'QUALIFY',
    progressPercent: 55,
    applicationRef: 'DEMO-EDU-2026-001',
    updatedAt: '2026-09-11',
    steps: [
      {
        stage: 'DISCOVER',
        title: {
          en: 'Scheme Discovery via MahaSetu AI',
          mr: 'महासेतू AI द्वारे योग्य योजना शोधली',
          hi: 'महासेतु AI द्वारा योजना की खोज',
        },
        description: {
          en: 'Identified EBC Rajarshi Shahu Maharaj Scholarship matching 12th pass student requirement.',
          mr: '१२ वी उत्तीर्ण विद्यार्थिनीसाठी राजर्षी शाहू महाराज योजना निवडली.',
          hi: '12वीं पास छात्रा के लिए राजर्षि शाहू महाराज योजना का चयन किया।',
        },
        status: 'completed',
        department: 'Higher Education Dept',
      },
      {
        stage: 'UNDERSTAND',
        title: {
          en: 'Scheme Rules & Benefits Review',
          mr: 'योजनेचे नियम आणि लाभ समजून घेतले',
          hi: 'योजना के नियम और लाभ समझे',
        },
        description: {
          en: '50% tuition fee reimbursement confirmed for annual income <= ₹8.00 Lakh.',
          mr: 'वार्षिक उत्पन्न ₹८ लाखांपेक्षा कमी असल्यास ५०% शुल्क प्रतिपूर्ती.',
          hi: 'वार्षिक आय <= ₹8.00 लाख होने पर 50% शुल्क प्रतिपूर्ति दी जाएगी।',
        },
        status: 'completed',
        department: 'MahaDBT Intelligence',
      },
      {
        stage: 'QUALIFY',
        title: {
          en: 'Indicative Eligibility Verification',
          mr: 'संभाव्य पात्रता पडताळणी पूर्ण',
          hi: 'संभावित पात्रता सत्यापन पूर्ण',
        },
        description: {
          en: 'Age, Domicile, and Educational criteria satisfied. Income certificate needed.',
          mr: 'वय, अधिवास आणि शैक्षणिक अटी पूर्ण. उत्पन्नाचा दाखला आवश्यक.',
          hi: 'आयु, अधिवास और शैक्षणिक मानदंड पूरे। आय प्रमाण पत्र की आवश्यकता।',
        },
        status: 'current',
        nextAction: {
          en: 'Obtain Income Certificate from Tahsildar',
          mr: 'तहसीलदारांकडून उत्पन्नाचा दाखला प्राप्त करा',
          hi: 'तहसीलदार से आय प्रमाण पत्र प्राप्त करें',
        },
      },
      {
        stage: 'PREPARE',
        title: {
          en: 'Prerequisite Document Readiness',
          mr: 'पहिली आवश्यक कागदपत्रे तयारी',
          hi: 'प्रारंभिक दस्तावेज तैयारी',
        },
        description: {
          en: 'Prerequisite Alert: Income Certificate missing. Redirecting to Revenue Service.',
          mr: 'कागदपत्र सूचना: उत्पन्नाचा दाखला उपलब्ध नाही. महसूल सेवेकडे वर्ग केले.',
          hi: 'दस्तावेज सूचना: आय प्रमाण पत्र उपलब्ध नहीं। राजस्व सेवा पर निर्देशित।',
        },
        status: 'action_required',
        prerequisiteAlert: {
          missingDoc: 'Family Income Certificate',
          recommendedService: 'Income Certificate from Revenue Dept (Aaple Sarkar)',
          serviceId: 'service-income-cert',
        },
      },
      {
        stage: 'APPLY',
        title: {
          en: 'Application Handoff to MahaDBT Portal',
          mr: 'महाडीबीटी अधिकृत पोर्टलवर अर्ज',
          hi: 'महाडीबीटी आधिकारिक पोर्टल पर आवेदन',
        },
        description: {
          en: 'Pre-filled data forwarded to official MahaDBT portal for final submission.',
          mr: 'भरलेली माहिती अधिकृत महाडीबीटी पोर्टलवर सबमिट केली जाईल.',
          hi: 'भरा हुआ विवरण अंतिम जमा करने के लिए महाडीबीटी पोर्टल पर भेजा जाएगा।',
        },
        status: 'pending',
        officialUrl: 'https://mahadbt.maharashtra.gov.in',
      },
      {
        stage: 'TRACK',
        title: {
          en: 'Unified Lifecycle Status Tracking',
          mr: 'अर्ज स्थितीचा एकत्रित मागोवा',
          hi: 'आवेदन स्थिति का एकीकृत ट्रैकिंग',
        },
        description: {
          en: 'Real-time status updates from Higher Education Department database.',
          mr: 'उच्च शिक्षण विभागाकडून अद्ययावत स्थिती.',
          hi: 'उच्च शिक्षा विभाग से अद्यतन स्थिति।',
        },
        status: 'pending',
      },
      {
        stage: 'RESOLVE',
        title: {
          en: 'Grievance & Delay Resolution',
          mr: 'तक्रार व निवारण सुविधा',
          hi: 'शिकायत व निवारण सुविधा',
        },
        description: {
          en: 'Guided official grievance routing if application exceeds 30-day SLA.',
          mr: 'अर्ज विलंब झाल्यास अधिकृत तक्रार निवारण मार्गदर्शन.',
          hi: 'आवेदन में देरी होने पर आधिकारिक शिकायत निवारण मार्गदर्शन।',
        },
        status: 'pending',
      },
    ],
  },
];
