import type { Scheme } from '../types';

export const mockSchemes: Scheme[] = [
  {
    id: 'scheme-edu-001',
    code: 'MH-EDU-SCH-2026',
    title: {
      en: 'Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna',
      mr: 'राजर्षी छत्रपती शाहू महाराज शिक्षण शुल्क शिष्यवृत्ती योजना',
      hi: 'राजर्षि छत्रपति शाहू महाराज शिक्षण शुल्क छात्रवृत्ति योजना',
    },
    department: {
      en: 'Higher & Technical Education Department',
      mr: 'उच्च व तंत्र शिक्षण विभाग',
      hi: 'उच्च और तकनीकी शिक्षा विभाग',
    },
    category: 'education',
    description: {
      en: 'Financial assistance and fee reimbursement for economically backward students pursuing higher education (Degree/Diploma) in Maharashtra.',
      mr: 'महाराष्ट्रात उच्च शिक्षण (पदवी/पदविका) घेणाऱ्या आर्थिकदृष्ट्या दुर्बल घटकातील विद्यार्थ्यांसाठी शिक्षण शुल्क प्रतिपूर्ती योजना.',
      hi: 'महाराष्ट्र में उच्च शिक्षा (डिग्री/डिप्लोमा) प्राप्त करने वाले आर्थिक रूप से कमजोर छात्रों के लिए शिक्षण शुल्क प्रतिपूर्ति योजना।',
    },
    eligibilitySummary: {
      en: 'Domicile of Maharashtra, annual family income <= ₹8.00 Lakh, minimum 50% attendance in previous course.',
      mr: 'महाराष्ट्राचा रहिवासी, कौटुंबिक वार्षिक उत्पन्न ₹८ लाख किंवा त्यापेक्षा कमी, मागील वर्षात ५०% हजेरी.',
      hi: 'महाराष्ट्र का निवासी, वार्षिक पारिवारिक आय <= ₹8.00 लाख, पिछले पाठ्यक्रम में न्यूनतम 50% उपस्थिति।',
    },
    targetBeneficiaries: {
      en: 'Undergraduate & Postgraduate Students (EBC/General/SEBC/OBC)',
      mr: 'पदवी व पदव्युत्तर विद्यार्थी (EBC / सर्वसाधारण / SEBC / OBC)',
      hi: 'स्नातक और स्नातकोत्तर छात्र (EBC / सामान्य / SEBC / OBC)',
    },
    benefits: {
      en: '50% to 100% Tuition Fee & Exam Fee reimbursement directly transferred via DBT.',
      mr: '५०% ते १००% शिक्षण शुल्क आणि परीक्षा शुल्क थेट डीबीटीद्वारे खात्यात जमा.',
      hi: '50% से 100% शिक्षण शुल्क और परीक्षा शुल्क सीधे डीबीटी के माध्यम से बैंक खाते में।',
    },
    documents: [
      {
        id: 'doc-aadhaar',
        name: {
          en: 'Aadhaar Card linked with Bank Account',
          mr: 'बँक खात्याशी जोडलेले आधार कार्ड',
          hi: 'बैंक खाते से जुड़ा आधार कार्ड',
        },
        isMandatory: true,
        status: 'ready',
        issuingAuthority: 'UIDAI',
      },
      {
        id: 'doc-income-cert',
        name: {
          en: 'Valid Family Income Certificate (Issued by Tahsildar)',
          mr: 'तहसीलदारांनी दिलेला उत्पन्नाचा दाखला (चालू आर्थिक वर्ष)',
          hi: 'तहसीलदार द्वारा जारी पारिवारिक आय प्रमाण पत्र',
        },
        isMandatory: true,
        status: 'missing',
        prerequisiteServiceId: 'service-income-cert',
        prerequisiteServiceName: {
          en: 'Obtain Income Certificate from Revenue Dept (Aaple Sarkar)',
          mr: 'महसूल विभागाकडून उत्पन्नाचा दाखला मिळवा (आपले सरकार)',
          hi: 'राजस्व विभाग से आय प्रमाण पत्र प्राप्त करें (आपले सरकार)',
        },
        issuingAuthority: 'Revenue Department, Govt of Maharashtra',
      },
      {
        id: 'doc-domicile',
        name: {
          en: 'Maharashtra Domicile Certificate',
          mr: 'महाराष्ट्र अधिवास दाखला (Domicile Certificate)',
          hi: 'महाराष्ट्र अधिवास प्रमाण पत्र (Domicile Certificate)',
        },
        isMandatory: true,
        status: 'ready',
        issuingAuthority: 'Revenue Department',
      },
      {
        id: 'doc-marksheet',
        name: {
          en: 'SSC / HSC & Previous Semester Marksheet',
          mr: 'इयत्ता १० वी / १२ वी व मागील सत्राची गुणपत्रिका',
          hi: '10वीं / 12वीं एवं पिछले सेमेस्टर की अंकतालिका',
        },
        isMandatory: true,
        status: 'ready',
        issuingAuthority: 'MSBSHSE / Board',
      },
      {
        id: 'doc-cap-allotment',
        name: {
          en: 'CAP Allotment Letter (For Professional Courses)',
          mr: 'कॅप अलॉटमेंट पत्र (व्यावसायिक अभ्यासक्रमांसाठी)',
          hi: 'कैप अलॉटमेंट पत्र (व्यावसायिक पाठ्यक्रमों के लिए)',
        },
        isMandatory: false,
        status: 'optional',
        issuingAuthority: 'State CET Cell',
      },
    ],
    deadline: '2026-10-31',
    officialSource: 'MahaDBT Portal (Government of Maharashtra)',
    officialPortalUrl: 'https://mahadbt.maharashtra.gov.in',
    status: 'active',
    lastVerifiedDate: '2026-09-01',
    matchScore: 94,
    integrationStatus: 'OFFICIAL_HANDOFF',
    applicationSteps: [
      {
        en: 'Obtain Income Certificate from Tahsildar (Prerequisite Step)',
        mr: 'तहसीलदारांकडून उत्पन्नाचा दाखला प्राप्त करा (पहिली आवश्यक पायरी)',
        hi: 'तहसीलदार से आय प्रमाण पत्र प्राप्त करें (प्रारंभिक चरण)',
      },
      {
        en: 'Verify Aadhaar e-KYC on MahaDBT Portal',
        mr: 'महाडीबीटी पोर्टलवर आधार ई-केवायसी पूर्ण करा',
        hi: 'महाडीबीटी पोर्टल पर आधार ई-केवाईसी पूरा करें',
      },
      {
        en: 'Upload Income & Domicile Certificates',
        mr: 'उत्पन्न व अधिवास प्रमाणपत्रे अपलोड करा',
        hi: 'आय और अधिवास प्रमाण पत्र अपलोड करें',
      },
      {
        en: 'Submit online form to Institute Verification Officer',
        mr: 'ऑनलाइन अर्ज संस्थेच्या पडताळणी अधिकाऱ्याकडे सादर करा',
        hi: 'संस्थान के सत्यापन अधिकारी को ऑनलाइन आवेदन जमा करें',
      },
    ],
    dependencies: ['service-income-cert'],
  },

  {
    id: 'scheme-agri-002',
    code: 'MH-AGRI-SHE-2026',
    title: {
      en: 'Namo Shetkari MahaSanman Nidhi Yojna',
      mr: 'नमो शेतकरी महासन्मान निधी योजना',
      hi: 'नमो शेतकरी महासम्मान निधि योजना',
    },
    department: {
      en: 'Agriculture Department',
      mr: 'कृषी विभाग',
      hi: 'कृषि विभाग',
    },
    category: 'agriculture',
    description: {
      en: 'Financial income support of ₹6,000 per year provided to landholding farmers in Maharashtra in addition to PM-KISAN.',
      mr: 'महाराष्ट्रातील भूधारक शेतकऱ्यांना पंतप्रधान किसान योजनेव्यतिरिक्त दरवर्षी ₹६,००० अतिरिक्त आर्थिक मदत.',
      hi: 'महाराष्ट्र के भूधारक किसानों को पीएम-किसान के अतिरिक्त ₹6,000 प्रति वर्ष की वित्तीय सहायता।',
    },
    eligibilitySummary: {
      en: 'Farmer registered under PM-KISAN, holding agricultural land in Maharashtra, e-KYC completed.',
      mr: 'पीएम-किसान योजनेत नोंदणीकृत शेतकरी, महाराष्ट्रात शेतजमीन असावी, ई-केवायसी पूर्ण असावे.',
      hi: 'पीएम-किसान में पंजीकृत किसान, महाराष्ट्र में कृषि भूमि धारक, ई-केवाईसी पूर्ण।',
    },
    targetBeneficiaries: {
      en: 'Small and Marginal Farmers of Maharashtra',
      mr: 'महाराष्ट्रातील अल्प व अत्यल्प भूधारक शेतकरी',
      hi: 'महाराष्ट्र के छोटे और सीमांत किसान',
    },
    benefits: {
      en: '₹6,000 per annum paid in 3 equal installments of ₹2,000 directly into Aadhaar-seeded bank account.',
      mr: 'दरवर्षी ₹६,००० थेट आधार-लिंक बँक खात्यात ३ हप्त्यांमध्ये जमा.',
      hi: '₹6,000 प्रति वर्ष 3 समान किश्तों में सीधे आधार से जुड़े बैंक खाते में।',
    },
    documents: [
      {
        id: 'doc-712-extract',
        name: {
          en: '7/12 Land Extract & 8A Receipt',
          mr: '७/१२ उतारा आणि ८ अ नोंदणी',
          hi: '7/12 खतौनी और 8A रसीद',
        },
        isMandatory: true,
        status: 'ready',
        issuingAuthority: 'Mahabhulekh / Revenue',
      },
      {
        id: 'doc-aadhaar',
        name: {
          en: 'Aadhaar Card e-KYC Verification',
          mr: 'आधार कार्ड ई-केवायसी पडताळणी',
          hi: 'आधार कार्ड ई-केवाईसी सत्यापन',
        },
        isMandatory: true,
        status: 'ready',
        issuingAuthority: 'UIDAI',
      },
      {
        id: 'doc-pmkisan-id',
        name: {
          en: 'PM-KISAN Registration ID',
          mr: 'पंतप्रधान किसान नोंदणी क्रमांक (PM-KISAN ID)',
          hi: 'पीएम-किसान पंजीकरण आईडी',
        },
        isMandatory: true,
        status: 'ready',
        issuingAuthority: 'Ministry of Agriculture',
      },
    ],
    deadline: null,
    officialSource: 'MahaDBT Agriculture Portal',
    officialPortalUrl: 'https://krishi.maharashtra.gov.in',
    status: 'active',
    lastVerifiedDate: '2026-08-25',
    matchScore: 88,
    integrationStatus: 'REAL',
    applicationSteps: [
      {
        en: 'Verify PM-KISAN Status on Central Portal',
        mr: 'केंद्रीय पोर्टलवर पीएम-किसान नोंदणी तपासा',
        hi: 'केंद्रीय पोर्टल पर पीएम-किसान स्थिति की जांच करें',
      },
      {
        en: 'Link 7/12 Land Extract via MahaDBT Agriculture module',
        mr: 'महाडीबीटी कृषी विभागावर ७/१२ उतारा लिंक करा',
        hi: 'महाडीबीटी कृषि मॉड्यूल के माध्यम से 7/12 खतौनी जोड़ें',
      },
      {
        en: 'Complete Aadhaar e-KYC biometric/OTP verification',
        mr: 'आधार ई-केवायसी बायोमॅट्रिक/ओटीपीद्वारे पूर्ण करा',
        hi: 'आधार ई-केवाईसी बायोमेट्रिक/ओटीपी सत्यापन पूरा करें',
      },
    ],
  },

  {
    id: 'scheme-wom-003',
    code: 'MH-WOM-LAK-2026',
    title: {
      en: 'Mukhyamantri Majhi Ladki Bahin Yojna',
      mr: 'मुख्यमंत्री माझी लाडकी बहीण योजना',
      hi: 'मुख्यमंत्री माझी लाडकी बहिन योजना',
    },
    department: {
      en: 'Women and Child Development Department',
      mr: 'महिला व बाल विकास विभाग',
      hi: 'महिला एवं बाल विकास विभाग',
    },
    category: 'women_child',
    description: {
      en: 'Direct monthly financial empowerment assistance of ₹1,500 for eligible women aged 21 to 65 years in Maharashtra.',
      mr: 'महाराष्ट्रातील २१ ते ६५ वयोगटातील पात्र महिलांसाठी दरमहा ₹१,५०० थेट आर्थिक मदत.',
      hi: 'महाराष्ट्र में 21 से 65 वर्ष की पात्र महिलाओं के लिए ₹1,500 प्रति माह प्रत्यक्ष वित्तीय सहायता।',
    },
    eligibilitySummary: {
      en: 'Resident woman of Maharashtra aged 21-65 years, annual family income <= ₹2.50 Lakh, not a government employee or income tax payer.',
      mr: 'महाराष्ट्रातील २१ ते ६५ वयोगटातील महिला रहिवासी, कौटुंबिक उत्पन्न ₹२.५० लाखांपेक्षा कमी, आयकरदाता नसावी.',
      hi: 'महाराष्ट्र की 21-65 वर्ष की महिला निवासी, वार्षिक पारिवारिक आय <= ₹2.50 लाख, आयकर दाता न हो।',
    },
    targetBeneficiaries: {
      en: 'Married, Unmarried, Divorced, Abandoned & Destitute Women of Maharashtra',
      mr: 'महाराष्ट्रातील विवाहित, अविवाहित, घटस्फोटित व निराधार महिला',
      hi: 'महाराष्ट्र की विवाहित, अविवाहित, परित्यक्ता और निराश्रित महिलाएं',
    },
    benefits: {
      en: '₹1,500 transferred directly every month into Aadhaar-seeded bank account.',
      mr: 'दरमहा ₹१,५०० थेट आधार-लिंक केलेल्या बँक खात्यात जमा.',
      hi: '₹1,500 प्रति माह सीधे आधार से जुड़े बैंक खाते में।',
    },
    documents: [
      {
        id: 'doc-aadhaar',
        name: {
          en: 'Aadhaar Card of Applicant',
          mr: 'अर्जदार महिलेचे आधार कार्ड',
          hi: 'आवेदक महिला का आधार कार्ड',
        },
        isMandatory: true,
        status: 'ready',
        issuingAuthority: 'UIDAI',
      },
      {
        id: 'doc-ration-card',
        name: {
          en: 'Yellow / Orange Ration Card or Income Certificate',
          mr: 'पिवळे / केसरी रेशन कार्ड किंवा उत्पन्नाचा दाखला',
          hi: 'पीला / नारंगी राशन कार्ड या आय प्रमाण पत्र',
        },
        isMandatory: true,
        status: 'ready',
        issuingAuthority: 'Food & Civil Supplies Dept',
      },
      {
        id: 'doc-domicile',
        name: {
          en: 'Domicile / Birth Certificate in Maharashtra',
          mr: 'महाराष्ट्र रहिवासी दाखला किंवा जन्म दाखला',
          hi: 'महाराष्ट्र अधिवास प्रमाण पत्र या जन्म प्रमाण पत्र',
        },
        isMandatory: true,
        status: 'ready',
        issuingAuthority: 'Revenue / Gram Panchayat',
      },
      {
        id: 'doc-bank-passbook',
        name: {
          en: 'Aadhaar Linked Bank Account Details',
          mr: 'आधारशी जोडलेले बँक पासबुक',
          hi: 'आधार से जुड़ा बैंक खाता पासबुक',
        },
        isMandatory: true,
        status: 'ready',
        issuingAuthority: 'Bank',
      },
    ],
    deadline: '2026-12-31',
    officialSource: 'Nari Shakti Doot Portal / WCD Maharashtra',
    officialPortalUrl: 'https://ladkibahin.maharashtra.gov.in',
    status: 'active',
    lastVerifiedDate: '2026-09-05',
    matchScore: 96,
    integrationStatus: 'REAL',
    applicationSteps: [
      {
        en: 'Download Nari Shakti Doot App or visit Official Ladki Bahin Portal',
        mr: 'नारी शक्ती दूत अ‍ॅप किंवा लाडकी बहीण पोर्टलला भेट द्या',
        hi: 'नारी शक्ति दूत ऐप या आधिकारिक लाडकी बहिन पोर्टल पर जाएं',
      },
      {
        en: 'Enter Mobile Number & OTP Verification',
        mr: 'मोबाईल नंबर टाकून ओटीपी पडताळणी करा',
        hi: 'मोबाइल नंबर दर्ज करके ओटीपी सत्यापन करें',
      },
      {
        en: 'Upload Aadhaar, Ration Card & Photo',
        mr: 'आधार कार्ड, रेशन कार्ड आणि फोटो अपलोड करा',
        hi: 'आधार कार्ड, राशन कार्ड और फोटो अपलोड करें',
      },
      {
        en: 'Submit for Anganwadi Sevika / Gram Sevak Verification',
        mr: 'अंगणवाडी सेविका / ग्रामसेवक पडताळणीसाठी सादर करा',
        hi: 'आंगनवाड़ी सेविका / ग्राम सेवक सत्यापन के लिए जमा करें',
      },
    ],
  },

  {
    id: 'scheme-emp-004',
    code: 'MH-EMP-YUV-2026',
    title: {
      en: 'Mukhyamantri Yuva Karya Prashikshan Yojna (Internship Scheme)',
      mr: 'मुख्यमंत्री युवा कार्य प्रशिक्षण योजना (इंटर्नशिप योजना)',
      hi: 'मुख्यमंत्री युवा कार्य प्रशिक्षण योजना (इन्टर्नशिप योजना)',
    },
    department: {
      en: 'Skill Development, Employment & Innovation Department',
      mr: 'कौशल्य विकास, रोजगार आणि नाविन्यता विभाग',
      hi: 'कौशल विकास, रोजगार और नवाचार विभाग',
    },
    category: 'employment',
    description: {
      en: 'Stipend-backed 6-month hands-on industrial internship for youth who passed 12th, ITI, Diploma, or Degree in Maharashtra.',
      mr: '१२ वी, आयटीआय, पदविका किंवा पदवी उत्तीर्ण तरुणांसाठी महिन्याला ₹६,००० ते ₹१०,००० विद्यावेतनासह ६ महिन्यांची प्रात्यक्षिक इंटर्नशिप.',
      hi: '12वीं, आईटीआई, डिप्लोमा या डिग्री उत्तीर्ण युवाओं के लिए ₹6,000 से ₹10,000 प्रतिमाह वजीफे के साथ 6 महीने की इंटर्नशिप।',
    },
    eligibilitySummary: {
      en: 'Resident of Maharashtra, Age 18-35 years, Educational qualification: 12th Pass / ITI / Diploma / Graduate / Postgraduate.',
      mr: 'महाराष्ट्राचा रहिवासी, वय १८ ते ३५ वर्षे, शैक्षणिक पात्रता: १२ वी / ITI / पदविका / पदवीधरांसाठी.',
      hi: 'महाराष्ट्र का निवासी, आयु 18-35 वर्ष, शैक्षणिक योग्यता: 12वीं / ITI / डिप्लोमा / स्नातक।',
    },
    targetBeneficiaries: {
      en: 'Unemployed Youth of Maharashtra seeking work experience',
      mr: 'नोकरीच्या शोधात असलेले महाराष्ट्रातील तरुण',
      hi: 'महाराष्ट्र के बेरोजगार युवा',
    },
    benefits: {
      en: 'Monthly stipend: 12th Pass (₹6,000), ITI/Diploma (₹8,000), Degree (₹10,000) directly paid by Government.',
      mr: 'मासिक विद्यावेतन: १२ वी (₹६,०००), ITI/पदविका (₹८,०००), पदवीधर (₹१०,०००) थेट खात्यात.',
      hi: 'मासिक वजीफा: 12वीं (₹6,000), ITI/डिप्लोमा (₹8,000), डिग्री (₹10,000) सीधे सरकारी बैंक खाते में।',
    },
    documents: [
      {
        id: 'doc-education-cert',
        name: {
          en: '12th / ITI / Diploma / Degree Passing Certificate',
          mr: '१२ वी / ITI / पदविका / पदवी उत्तीर्ण प्रमाणपत्र',
          hi: '12वीं / ITI / डिप्लोमा / डिग्री पास प्रमाण पत्र',
        },
        isMandatory: true,
        status: 'ready',
        issuingAuthority: 'Board / University',
      },
      {
        id: 'doc-aadhaar',
        name: {
          en: 'Aadhaar Card',
          mr: 'आधार कार्ड',
          hi: 'आधार कार्ड',
        },
        isMandatory: true,
        status: 'ready',
        issuingAuthority: 'UIDAI',
      },
      {
        id: 'doc-employment-reg',
        name: {
          en: 'Rojgar Mahaswayam Registration Number',
          mr: 'रोजगार महास्वयं नोंदणी क्रमांक',
          hi: 'रोजगार महास्वयं पंजीकरण संख्या',
        },
        isMandatory: true,
        status: 'ready',
        issuingAuthority: 'MahaSwayam Portal',
      },
    ],
    deadline: '2026-11-15',
    officialSource: 'MahaSwayam Employment Portal',
    officialPortalUrl: 'https://rojgar.mahaswayam.gov.in',
    status: 'active',
    lastVerifiedDate: '2026-08-30',
    matchScore: 90,
    integrationStatus: 'OFFICIAL_HANDOFF',
    applicationSteps: [
      {
        en: 'Register profile on MahaSwayam Employment Portal',
        mr: 'महास्वयं रोजगार पोर्टलवर प्रोफाईल नोंदणी करा',
        hi: 'महास्वयं रोजगार पोर्टल पर प्रोफाइल पंजीकृत करें',
      },
      {
        en: 'Select preferred sector and industry employer',
        mr: 'आवडीचे क्षेत्र आणि उद्योग कंपनी निवडा',
        hi: 'अपनी पसंद का क्षेत्र और नियोक्ता कंपनी चुनें',
      },
      {
        en: 'Attend online/offline matching interview',
        mr: 'ऑनलाइन / ऑफलाईन मॅचिंग मुलाखतीस उपस्थित राहा',
        hi: 'ऑनलाइन या ऑफलाइन मैचिंग साक्षात्कार में भाग लें',
      },
    ],
  },

  {
    id: 'service-income-cert',
    code: 'MH-REV-INC-2026',
    title: {
      en: 'Prerequisite Service: Income Certificate (Revenue Dept)',
      mr: 'पहिली आवश्यक सेवा: उत्पन्नाचा दाखला (महसूल विभाग)',
      hi: 'प्रारंभिक सेवा: आय प्रमाण पत्र (राजस्व विभाग)',
    },
    department: {
      en: 'Revenue Department, Government of Maharashtra',
      mr: 'महसूल विभाग, महाराष्ट्र शासन',
      hi: 'राजस्व विभाग, महाराष्ट्र सरकार',
    },
    category: 'revenue',
    description: {
      en: 'Official certificate issued by Tahsildar declaring annual family income, required as a prerequisite for most state scholarships and welfare schemes.',
      mr: 'तहसीलदारांनी दिलेला अधिकृत उत्पन्नाचा दाखला, जो बहुतेक शिष्यवृत्ती आणि शासकीय योजनांसाठी आवश्यक असतो.',
      hi: 'तहसीलदार द्वारा जारी आधिकारिक आय प्रमाण पत्र, जो अधिकांश छात्रवृत्ति और कल्याणकारी योजनाओं के लिए आवश्यक है।',
    },
    eligibilitySummary: {
      en: 'Any resident citizen of Maharashtra applying for welfare or scholarship schemes.',
      mr: 'महाराष्ट्रातील कोणताही रहिवासी नागरिक.',
      hi: 'महाराष्ट्र का कोई भी निवासी नागरिक।',
    },
    targetBeneficiaries: {
      en: 'All citizens of Maharashtra requiring income proof',
      mr: 'महाराष्ट्रातील सर्व नागरिक ज्यांना उत्पन्नाच्या दाखल्याची गरज आहे',
      hi: 'महाराष्ट्र के सभी नागरिक जिन्हें आय प्रमाण पत्र की आवश्यकता है',
    },
    benefits: {
      en: 'Official 1-Year or 3-Year Tahsildar Income Certificate.',
      mr: 'तहसीलदारांचा १ वर्ष किंवा ३ वर्षांचा अधिकृत उत्पन्नाचा दाखला.',
      hi: 'तहसीलदार का आधिकारिक 1-वर्ष या 3-वर्षीय आय प्रमाण पत्र।',
    },
    documents: [
      {
        id: 'doc-talahti-report',
        name: {
          en: 'Talathi Income Verification Report / Self-Declaration',
          mr: 'तलाठी उत्पन्न अहवाल / स्व-घोषणापत्र',
          hi: 'तलाठी आय रिपोर्ट / स्वयं-घोषणा पत्र',
        },
        isMandatory: true,
        status: 'ready',
        issuingAuthority: 'Talathi / Revenue Officer',
      },
      {
        id: 'doc-aadhaar',
        name: {
          en: 'Applicant Aadhaar Card',
          mr: 'अर्जदाराचे आधार कार्ड',
          hi: 'आवेदक का आधार कार्ड',
        },
        isMandatory: true,
        status: 'ready',
        issuingAuthority: 'UIDAI',
      },
      {
        id: 'doc-salary-slip',
        name: {
          en: 'Form 16 / Salary Slip or Tax Receipt (If applicable)',
          mr: 'फॉर्म १६ / पगार पावती किंवा कर पावती',
          hi: 'फॉर्म 16 / वेतन पर्ची या कर रसीद',
        },
        isMandatory: false,
        status: 'optional',
        issuingAuthority: 'Employer / IT Dept',
      },
    ],
    deadline: null,
    officialSource: 'Aaple Sarkar Services Portal',
    officialPortalUrl: 'https://aaplesarkar.mahaonline.gov.in',
    status: 'active',
    lastVerifiedDate: '2026-09-08',
    matchScore: 99,
    integrationStatus: 'REAL',
    applicationSteps: [
      {
        en: 'Log in to Aaple Sarkar Citizen Portal',
        mr: 'आपले सरकार नागरिक पोर्टलवर लॉगिन करा',
        hi: 'आपले सरकार नागरिक पोर्टल पर लॉगिन करें',
      },
      {
        en: 'Fill Tahsildar Income Certificate application form',
        mr: 'तहसीलदार उत्पन्न प्रमाणपत्र अर्ज भरा',
        hi: 'तहसीलदार आय प्रमाण पत्र आवेदन पत्र भरें',
      },
      {
        en: 'Upload Talathi report or Self-Declaration',
        mr: 'तलाठी अहवाल किंवा स्व-घोषणापत्र अपलोड करा',
        hi: 'तलाठी रिपोर्ट या स्वयं-घोषणा पत्र अपलोड करें',
      },
      {
        en: 'Receive digitally signed certificate within 7 working days',
        mr: '७ कामकाजाच्या दिवसांत डिजिटल स्वाक्षरी असलेले प्रमाणपत्र मिळवा',
        hi: '7 कार्य दिवसों में डिजिटल रूप से हस्ताक्षरित प्रमाण पत्र प्राप्त करें',
      },
    ],
  },
];
