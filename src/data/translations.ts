import type { Language } from '../types';

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Branding & Taglines
    appName: 'MahaSetu AI',
    appTagline: 'One Citizen. One Conversation. One Government Journey.',
    govtName: 'Government of Maharashtra',
    platformTag: 'Citizen Service Interoperability Platform',
    connectNotReplace: 'Connect, Don’t Replace',
    connectExplanation: 'MahaSetu operates as an intelligent orchestration layer above existing government systems. Existing departmental portals remain authoritative.',
    boundaryTitle: 'Government Decision Boundary',
    boundaryAssist: 'AI Assists',
    boundaryValidate: 'Rules Validate',
    boundaryDecide: 'Government Decides',

    // Navigation
    navHome: 'Home',
    navAskAI: 'Ask MahaSetu AI',
    navSchemes: 'Scheme Hub',
    navJourney: 'My Journey',
    navTrack: 'Track Application',
    navInterop: 'Interoperability',
    navGrievance: 'Grievance',
    navAnalytics: 'Analytics',
    navTrust: 'Trust & Security',
    tryDemoBtn: '⚡ Try MahaSetu Journey',
    demoActiveBadge: 'DEMO MODE ACTIVE',

    // Hero Section
    heroTitleLine1: 'Your Government Services.',
    heroTitleLine2: 'One Intelligent Journey.',
    heroSubhead: 'MahaSetu AI connects fragmented government services through one simple, multilingual citizen experience.',
    heroSupport: 'Tell us what you need. MahaSetu helps you discover the right scheme, understand eligibility, prepare documents, apply through the official portal, track progress and resolve issues.',
    ctaAskAI: 'Ask MahaSetu AI',
    ctaExploreSchemes: 'Explore Schemes',
    statServices: '100+ Govt Services Connected',
    statLanguages: '3 Official Languages (EN/MR/HI)',
    statMatch: 'AI-Powered Indicative Match',
    statTracking: 'Unified Application Tracking',
    statHandoff: 'Official Portal Handoff',
    statPrivacy: 'Consent & Privacy First',

    // Visual Flow Labels
    flowCitizen: 'CITIZEN',
    flowMahaSetu: 'MAHASETU AI',
    flowIntent: 'INTENT UNDERSTANDING',
    flowKnowledge: 'VERIFIED GOVERNMENT KNOWLEDGE',
    flowService: 'SERVICE / SCHEME',
    flowOrchestration: 'WORKFLOW ORCHESTRATION',
    flowPortals: 'EXISTING GOVERNMENT SYSTEMS',
    flowUnified: 'UNIFIED CITIZEN JOURNEY',

    // Problem Section
    problemHeaderTitle: 'The problem is fragmentation, not the absence of services.',
    problemHeaderSub: 'Citizens often have to navigate multiple government portals, departments, documents and procedures to complete a single goal. MahaSetu brings these fragmented experiences together into one guided journey.',
    beforeTitle: 'BEFORE MAHASETU',
    afterTitle: 'AFTER MAHASETU (ORCHESTRATED)',
    probCard1Title: 'Too Many Portals',
    probCard1Desc: 'Citizens must navigate dozens of department websites with separate logins.',
    probCard2Title: 'Confusing Dependencies',
    probCard2Desc: 'Unclear which prerequisite documents (like Income Certificate) are needed first.',
    probCard3Title: 'Duplicate Document Requests',
    probCard3Desc: 'Re-uploading Aadhaar, Caste, and Income proof for every separate application.',
    probCard4Title: 'Complex Eligibility Rules',
    probCard4Desc: 'Difficult to decipher official government criteria written in dense legal terminology.',
    probCard5Title: 'Disconnected Status Tracking',
    probCard5Desc: 'No central place to check where an application is currently stuck.',
    probCard6Title: 'Complex Grievance Navigation',
    probCard6Desc: 'Unclear official channel to escalate delayed applications.',

    // Ask AI Section
    askHeaderTitle: 'Ask MahaSetu AI',
    askHeaderSub: 'Tell us what you need in your own language.',
    askInputPlaceholder: 'Type your question in English, मराठी, or हिंदी... (e.g. Am I eligible for education schemes?)',
    askVoiceBtn: 'Voice Input',
    askListening: 'Listening... Speak your requirement in your language',
    askSuggestedTitle: 'Suggested Prompts:',
    prompt1: 'Am I eligible for any scholarship?',
    prompt2: 'माझ्या मुलीच्या शिक्षणासाठी काही सरकारी योजना आहेत का?',
    prompt3: 'मला शेतकऱ्यांसाठी उपलब्ध योजना पाहिजेत.',
    prompt4: 'Which documents do I need for income certificate?',
    prompt5: 'I submitted my scholarship application. How can I track it?',

    // AI Results
    indicativeMatch: 'Indicative Match',
    potentiallyEligible: 'Potentially Eligible',
    disclaimerEligibility: 'Final eligibility and approval are determined by the concerned government department.',
    applyOnOfficialPortal: 'Apply on Official Portal',
    viewDetails: 'View Details',
    startJourney: 'Start Journey',
    checkEligibility: 'Check My Eligibility',
    prepareDocuments: 'Prepare Documents',

    // Scheme Hub
    schemeHubTitle: 'Scheme & Service Hub',
    schemeHubSub: 'Browse verified Government of Maharashtra schemes filtered by department and category.',
    searchPlaceholder: 'Search schemes by keyword, department, or benefit...',
    filterAllCategories: 'All Categories',
    filterAllDepts: 'All Departments',
    noSchemesFound: 'No schemes found matching your search criteria.',

    // Eligibility Checker
    eligibilityTitle: 'Interactive Eligibility Assessment',
    stepAge: '1. Age',
    stepEducation: '2. Education',
    stepLocation: '3. Location',
    stepIncome: '4. Income / Category',
    stepCriteria: '5. Specific Criteria',
    wizardResultTitle: 'Indicative Eligibility Result',
    whyBreakdown: 'Why this result:',
    criterionMatched: 'Satisfied / Appears Matched',
    criterionNeeded: 'Requires Further Verification / Input',

    // Document & Dependency
    docReadinessTitle: 'Document Readiness Checklist',
    docPrerequisiteAlert: 'Prerequisite Required!',
    docPrerequisiteDesc: 'You may need to obtain an Income Certificate before continuing with this scholarship application.',
    btnStartPrerequisite: 'View Prerequisite Service',
    prerequisiteJourneyFlow: 'Income Certificate → Document Ready → Scholarship Application',
    docStatusReady: 'Ready',
    docStatusMissing: 'Missing',
    docStatusOptional: 'Optional',
    docStatusVerify: 'Needs Verification',

    // Journey Stages
    stageDiscover: 'DISCOVER',
    stageUnderstand: 'UNDERSTAND',
    stageQualify: 'QUALIFY',
    stagePrepare: 'PREPARE',
    stageApply: 'APPLY',
    stageTrack: 'TRACK',
    stageResolve: 'RESOLVE',

    // My Journey Dashboard
    myJourneyTitle: 'My Citizen Dashboard',
    activeJourneysTab: 'Active Journeys',
    applicationsTab: 'Applications',
    documentsTab: 'My Documents',
    notificationsTab: 'Notifications',

    // Application Tracking
    trackTitle: 'Track Application Lifecycle',
    trackSub: 'Enter your Reference ID or Application Number to view unified progress across portals.',
    trackInputPlaceholder: 'Enter Reference ID (e.g. DEMO-EDU-2026-001)',
    trackBtn: 'Track Application',
    trackLiveUnavailable: 'Live status is currently unavailable from government server.',
    trackLastVerified: 'Last verified status from portal:',
    btnOpenOfficialPortal: 'Open Official Portal',

    // Interoperability & Connectors
    interopTitle: 'Interoperability Architecture Layer',
    interopSub: 'How MahaSetu connects existing government infrastructure without replacing departmental databases.',
    badgeReal: 'REAL INTEGRATION',
    badgeDemo: 'DEMO CONNECTOR',
    badgeOfficialHandoff: 'OFFICIAL HANDOFF',
    badgeFuture: 'FUTURE INTEGRATION',

    // Grievance Assistant
    grievanceTitle: 'Grievance & Delay Guidance',
    grievanceSub: 'AI-guided official grievance routing for delayed or stuck applications.',
    grievanceNotice: 'MahaSetu cannot change government decisions, but helps you reach the official grievance escalation channel.',
    btnOpenOfficialGrievance: 'Open Official Grievance Portal',

    // Admin Analytics
    analyticsTitle: 'Platform Analytics & Demand Insights',
    analyticsSub: 'Real-time aggregated demand trends, missing document bottlenecks, and service activity.',
    analyticsNotice: 'Aggregated & privacy-preserved citizen platform metrics.',

    // Footer & Credits
    footerTag: 'Connect • Assist • Empower',
    footerLegal: 'AI-powered citizen service orchestration platform. MahaSetu AI functions as an orchestration layer above existing departmental systems; official government decisions remain exclusively with authoritative departmental portals.',
  },
  mr: {
    // Branding & Taglines
    appName: 'महासेतू AI',
    appTagline: 'एक नागरिक. एक संवाद. एक शासकीय प्रवास.',
    govtName: 'महाराष्ट्र शासन',
    platformTag: 'नागरिक सेवा संकलन मंच',
    connectNotReplace: 'जोडा, जागा घेऊ नका',
    connectExplanation: 'महासेतू ही एक जोडणारी आणि सुलभ करणारी यंत्रणा आहे. अधिकृत निर्णय आणि अर्ज प्रक्रिया मूळ शासकीय पोर्टलवरच होते.',
    boundaryTitle: 'शासकीय निर्णय सीमा',
    boundaryAssist: 'AI मदत करते',
    boundaryValidate: 'नियम पडताळतात',
    boundaryDecide: 'शासन निर्णय घेते',

    // Navigation
    navHome: 'मुख्य पृष्ठ',
    navAskAI: 'महासेतू AI ला विचारा',
    navSchemes: 'योजना केंद्र',
    navJourney: 'माझा प्रवास',
    navTrack: 'अर्ज स्थिती पहा',
    navInterop: 'इंटरऑपरेबिलिटी',
    navGrievance: 'तक्रार निवारण',
    navAnalytics: 'विश्लेषण',
    navTrust: 'सुरक्षा व विश्वास',
    tryDemoBtn: '⚡ महासेतू प्रवास पहा',
    demoActiveBadge: 'डेमो मोड सक्रिय',

    // Hero Section
    heroTitleLine1: 'तुमच्या सर्व शासकीय सेवा.',
    heroTitleLine2: 'एक सुलभ, बुद्धिमत्तापूर्ण प्रवास.',
    heroSubhead: 'महासेतू AI विखुरलेल्या शासकीय सेवांना एका सोप्या, बहुभाषी नागरिक अनुभवामध्ये जोडते.',
    heroSupport: 'तुम्हाला काय हवे आहे ते सांगा. महासेतू योग्य योजना शोधण्यात, पात्रता समजून घेण्यात, कागदपत्रे तयार करण्यात, अधिकृत पोर्टलवर अर्ज करण्यात आणि अर्जाचा मागोवा घेण्यात मदत करते.',
    ctaAskAI: 'महासेतू AI ला विचारा',
    ctaExploreSchemes: 'योजना शोधा',
    statServices: '१००+ जोडलेल्या शासकीय सेवा',
    statLanguages: '३ अधिकृत भाषा (मराठी/हिंदी/इंग्रजी)',
    statMatch: 'AI-आधारित संभाव्य पात्रता',
    statTracking: 'एकत्रित अर्ज ट्रॅकिंग',
    statHandoff: 'अधिकृत पोर्टल हस्तांतरण',
    statPrivacy: 'गोपनीयता आणि संमती प्रथम',

    // Visual Flow Labels
    flowCitizen: 'नागरिक',
    flowMahaSetu: 'महासेतू AI',
    flowIntent: 'उद्देश समजणे',
    flowKnowledge: 'पडताळलेली शासकीय माहिती',
    flowService: 'सेवा / योजना',
    flowOrchestration: 'प्रक्रिया संयोजन',
    flowPortals: 'सध्याची शासकीय प्रणाली',
    flowUnified: 'एकत्रित नागरिक प्रवास',

    // Problem Section
    problemHeaderTitle: 'समस्या सेवा नसणे ही नाही, तर सेवा विखुरलेली असणे ही आहे.',
    problemHeaderSub: 'नागरिकांना एकाच उद्दिष्टासाठी अनेक शासकीय पोर्टल्स, विभाग आणि कागदपत्रांचा प्रवास करावा लागतो. महासेतू या विखुरलेल्या अनुभवांना एका मार्गदर्शित प्रवासात जोडतो.',
    beforeTitle: 'महासेतू आधी (विखुरलेली यंत्रणा)',
    afterTitle: 'महासेतू नंतर (एकत्रित प्रवास)',
    probCard1Title: 'अनेक वेगवेगळी पोर्टल्स',
    probCard1Desc: 'वेगवेगळ्या विभागांसाठी स्वतंत्र संकेतस्थळे आणि लॉगिन लक्षात ठेवावे लागतात.',
    probCard2Title: 'कागदपत्रांची गुंतागुंत',
    probCard2Desc: 'कोणते आधीचे प्रमाणपत्र (उदा. उत्पन्नाचा दाखला) आधी काढणे आवश्यक आहे ते समजत नाही.',
    probCard3Title: 'तीच कागदपत्रे पुन्हा अपलोड करणे',
    probCard3Desc: 'प्रत्येक अर्जासाठी आधार, जात आणि उत्पन्नाचा दाखला पुन्हा सादर करावा लागतो.',
    probCard4Title: 'क्लिष्ट पात्रता नियम',
    probCard4Desc: 'शासकीय भाषेतील कठीण अटी आणि नियमांचा अर्थ समजणे कठीण जाते.',
    probCard5Title: 'विखुरलेले अर्ज ट्रॅकिंग',
    probCard5Desc: 'अर्ज सध्या कोणत्या टप्प्यावर प्रलंबित आहे हे पाहण्यासाठी एकच जागा उपलब्ध नसते.',
    probCard6Title: 'तक्रार निवारणाचा गोंधळ',
    probCard6Desc: 'अर्ज रेंगाळल्यास योग्य तक्रार निवारण मार्ग शोधणे कठीण होते.',

    // Ask AI Section
    askHeaderTitle: 'महासेतू AI ला विचारा',
    askHeaderSub: 'तुमच्या स्वतःच्या भाषेत तुमची गरज सांगा.',
    askInputPlaceholder: 'तुमचा प्रश्न मराठी, English किंवा हिंदीमध्ये लिहा... (उदा. माझ्या मुलीच्या शिक्षणासाठी योजना आहेत का?)',
    askVoiceBtn: 'आवाज इनपुट',
    askListening: 'ऐकत आहे... तुमची गरज बोला',
    askSuggestedTitle: 'सुचवलेले प्रश्न:',
    prompt1: 'Am I eligible for any scholarship?',
    prompt2: 'माझ्या मुलीच्या शिक्षणासाठी काही सरकारी योजना आहेत का?',
    prompt3: 'मला शेतकऱ्यांसाठी उपलब्ध योजना पाहिजेत.',
    prompt4: 'उत्त्पनाच्या दाखल्यासाठी कोणती कागदपत्रे लागतात?',
    prompt5: 'मी शिष्यवृत्तीचा अर्ज भरला आहे. त्याची स्थिती कशी पाहू?',

    // AI Results
    indicativeMatch: 'संभाव्य पात्रता जुळणी',
    potentiallyEligible: 'संभाव्य पात्र',
    disclaimerEligibility: 'अंतिम पात्रता आणि मंजूरी संबंधित शासकीय विभागाद्वारेच निश्चित केली जाते.',
    applyOnOfficialPortal: 'अधिकृत पोर्टलवर अर्ज करा',
    viewDetails: 'सविस्तर माहिती पहा',
    startJourney: 'प्रवास सुरू करा',
    checkEligibility: 'पात्रता तपासा',
    prepareDocuments: 'कागदपत्रे तयार करा',

    // Scheme Hub
    schemeHubTitle: 'योजना आणि सेवा केंद्र',
    schemeHubSub: 'विभाग आणि वर्गवारीनुसार महाराष्ट्र शासनाच्या पडताळलेल्या योजना शोधा.',
    searchPlaceholder: 'योजनेचे नाव, विभाग किंवा लाभानुसार शोधा...',
    filterAllCategories: 'सर्व वर्गवारी',
    filterAllDepts: 'सर्व विभाग',
    noSchemesFound: 'तुमच्या शोधानुसार कोणतीही योजना आढळली नाही.',

    // Eligibility Checker
    eligibilityTitle: 'संवादी पात्रता पडताळणी',
    stepAge: '१. वय',
    stepEducation: '२. शिक्षण',
    stepLocation: '३. स्थान',
    stepIncome: '४. उत्पन्न / प्रवर्ग',
    stepCriteria: '५. विशेष अटी',
    wizardResultTitle: 'संभाव्य पात्रता निकाल',
    whyBreakdown: 'हा निकाल का आला:',
    criterionMatched: 'पात्रता अटी पूर्ण झाल्या',
    criterionNeeded: 'अजून पडताळणी / माहिती आवश्यक',

    // Document & Dependency
    docReadinessTitle: 'कागदपत्र तयारी यादी',
    docPrerequisiteAlert: 'पहिली आवश्यक सेवा आवश्यक!',
    docPrerequisiteDesc: 'या शिष्यवृत्ती अर्जासाठी तुम्हाला प्रथम उत्पन्नाचा दाखला मिळवणे आवश्यक आहे.',
    btnStartPrerequisite: 'पहिली आवश्यक सेवा पहा',
    prerequisiteJourneyFlow: 'उत्पन्नाचा दाखला → कागदपत्र तयार → शिष्यवृत्ती अर्ज',
    docStatusReady: 'तयार आहे',
    docStatusMissing: 'उपलब्ध नाही',
    docStatusOptional: 'ऐच्छिक',
    docStatusVerify: 'पडताळणी आवश्यक',

    // Journey Stages
    stageDiscover: 'शोध',
    stageUnderstand: 'समजून घेणे',
    stageQualify: 'पात्रता',
    stagePrepare: 'तयारी',
    stageApply: 'अर्ज करणे',
    stageTrack: 'मागोवा',
    stageResolve: 'निवारण',

    // My Journey Dashboard
    myJourneyTitle: 'माझे नागरिक डॅशबोर्ड',
    activeJourneysTab: 'सक्रिय प्रवास',
    applicationsTab: 'माझे अर्ज',
    documentsTab: 'माझी कागदपत्रे',
    notificationsTab: 'सूचना',

    // Application Tracking
    trackTitle: 'अर्ज स्थितीचा मागोवा',
    trackSub: 'विविध पोर्टल्सवरील अर्जाची स्थिती पाहण्यासाठी तुमचा संदर्भ क्रमांक टाका.',
    trackInputPlaceholder: 'संदर्भ क्रमांक टाका (उदा. DEMO-EDU-2026-001)',
    trackBtn: 'स्थिती पहा',
    trackLiveUnavailable: 'शासकीय सर्व्हरवरून थेट स्थिती सध्या उपलब्ध नाही.',
    trackLastVerified: 'पोर्टलवरून शेवटची नोंदवलेली स्थिती:',
    btnOpenOfficialPortal: 'अधिकृत पोर्टल उघडा',

    // Interoperability & Connectors
    interopTitle: 'इंटरऑपरेबिलिटी रचना',
    interopSub: 'महासेतू मूळ डेटाबेस न बदलता सध्याच्या शासकीय यंत्रणेशी कसा जोडला जातो.',
    badgeReal: 'प्रत्यक्ष एकत्रीकरण',
    badgeDemo: 'डेमो कनेक्टर',
    badgeOfficialHandoff: 'अधिकृत पोर्टल हस्तांतरण',
    badgeFuture: 'भविष्यातील एकत्रीकरण',

    // Grievance Assistant
    grievanceTitle: 'तक्रार व विलंब मार्गदर्शन',
    grievanceSub: 'रेंगाळलेल्या अर्जांसाठी AI द्वारे अधिकृत तक्रार निवारण मार्गदर्शक.',
    grievanceNotice: 'महासेतू शासकीय निर्णय बदलू शकत नाही, परंतु अधिकृत तक्रार निवारण पोर्टलकडे अचूक मार्गदर्शन करतो.',
    btnOpenOfficialGrievance: 'अधिकृत तक्रार निवारण पोर्टल उघडा',

    // Admin Analytics
    analyticsTitle: 'प्लॅटफॉर्म विश्लेषण आणि मागणी',
    analyticsSub: 'नागरिकांची मागणी, कागदपत्रांमधील अडचणी आणि सेवा वापराचे विश्लेषण.',
    analyticsNotice: 'नागरिक सेवा वापराची एकत्रित आकडेवारी.',

    // Footer & Credits
    footerTag: 'जोडा • मदत करा • सक्षम करा',
    footerLegal: 'AI-आधारित नागरिक सेवा संकलन प्लॅटफॉर्म. अंतिम शासकीय निर्णय मूळ विभागाच्या अधिकृत पोर्टलवरच होतात.',
  },
  hi: {
    // Branding & Taglines
    appName: 'महासेतु AI',
    appTagline: 'एक नागरिक। एक संवाद। एक सरकारी यात्रा।',
    govtName: 'महाराष्ट्र सरकार',
    platformTag: 'नागरिक सेवा एकीकरण मंच',
    connectNotReplace: 'जोड़ें, स्थान न लें',
    connectExplanation: 'महासेतु एक अंतर-संचालनीयता और सुगमीकरण परत है। आधिकारिक निर्णय संबंधित विभागीय पोर्टल द्वारा ही लिया जाता है।',
    boundaryTitle: 'सरकारी निर्णय सीमा',
    boundaryAssist: 'AI सहायता करता है',
    boundaryValidate: 'नियम जांचते हैं',
    boundaryDecide: 'सरकार निर्णय लेती है',

    // Navigation
    navHome: 'मुख्य पृष्ठ',
    navAskAI: 'महासेतु AI से पूछें',
    navSchemes: 'योजना केंद्र',
    navJourney: 'मेरी यात्रा',
    navTrack: 'आवेदन ट्रैक करें',
    navInterop: 'इंटरऑपरेबिलिटी',
    navGrievance: 'शिकायत निवारण',
    navAnalytics: 'विश्लेषण',
    navTrust: 'सुरक्षा और विश्वास',
    tryDemoBtn: '⚡ महासेतु यात्रा देखें',
    demoActiveBadge: 'डेमो मोड सक्रिय',

    // Hero Section
    heroTitleLine1: 'आपकी सभी सरकारी सेवाएं।',
    heroTitleLine2: 'एक सरल, बुद्धिमान यात्रा।',
    heroSubhead: 'महासेतु AI बिखरी हुई सरकारी सेवाओं को एक सरल, बहुभाषी नागरिक अनुभव से जोड़ता है।',
    heroSupport: 'बताएं आपको क्या चाहिए। महासेतु सही योजना खोजने, पात्रता समझने, दस्तावेज तैयार करने, आधिकारिक पोर्टल पर आवेदन करने और स्थिति ट्रैक करने में सहायता करता है।',
    ctaAskAI: 'महासेतु AI से पूछें',
    ctaExploreSchemes: 'योजनाएं खोजें',
    statServices: '100+ जुड़े हुए सरकारी पोर्टल',
    statLanguages: '3 आधिकारिक भाषाएं (हिंदी/मराठी/अंग्रेजी)',
    statMatch: 'AI-आधारित संभावित पात्रता',
    statTracking: 'एकीकृत आवेदन ट्रैकिंग',
    statHandoff: 'आधिकारिक पोर्टल हस्तांतरण',
    statPrivacy: 'गोपनीयता और सहमति सर्वोपरि',

    // Visual Flow Labels
    flowCitizen: 'नागरिक',
    flowMahaSetu: 'महासेतु AI',
    flowIntent: 'उद्देश्य समझना',
    flowKnowledge: 'सत्यापित सरकारी ज्ञान',
    flowService: 'सेवा / योजना',
    flowOrchestration: 'प्रक्रिया संयोजन',
    flowPortals: 'मौजूदा सरकारी प्रणाली',
    flowUnified: 'एकीकृत नागरिक यात्रा',

    // Problem Section
    problemHeaderTitle: 'समस्या सेवाओं की कमी नहीं, बल्कि उनका बिखराव है।',
    problemHeaderSub: 'नागरिकों को एक ही उद्देश्य के लिए कई सरकारी पोर्टलों, विभागों और दस्तावेजों का चक्कर लगाना पड़ता है। महासेतु इन बिखरे हुए अनुभवों को एक निर्देशित यात्रा में जोड़ता है।',
    beforeTitle: 'महासेतु से पहले (बिखरी प्रणाली)',
    afterTitle: 'महासेतु के बाद (एकीकृत यात्रा)',
    probCard1Title: 'अत्यधिक पोर्टल',
    probCard1Desc: 'विभिन्न विभागों के लिए अलग-अलग वेबसाइट और लॉगिन याद रखने पड़ते हैं।',
    probCard2Title: 'दस्तावेजों की उलझन',
    probCard2Desc: 'यह स्पष्ट नहीं होता कि कौन सा पूर्व-आवश्यक दस्तावेज (जैसे आय प्रमाण पत्र) पहले चाहिए।',
    probCard3Title: 'बार-बार वही दस्तावेज जमा करना',
    probCard3Desc: 'हर आवेदन के लिए आधार, जाति और आय प्रमाण दोबारा अपलोड करना पड़ता है।',
    probCard4Title: 'जटिल पात्रता नियम',
    probCard4Desc: 'सरकारी शब्दावली में लिखे कठिन नियमों का अर्थ समझना मुश्किल होता है।',
    probCard5Title: 'बिखरी हुई ट्रैकिंग',
    probCard5Desc: 'आवेदन किस चरण पर अटका है, यह जांचने के लिए कोई एक केंद्रीय स्थान नहीं है।',
    probCard6Title: 'शिकायत निवारण का भ्रम',
    probCard6Desc: 'आवेदन में देरी होने पर सही शिकायत चैनल खोजना कठिन होता है।',

    // Ask AI Section
    askHeaderTitle: 'महासेतु AI से पूछें',
    askHeaderSub: 'अपनी भाषा में अपनी आवश्यकता बताएं।',
    askInputPlaceholder: 'अपना प्रश्न हिंदी, मराठी या English में लिखें... (उदा. क्या मेरी बेटी की शिक्षा के लिए योजनाएं हैं?)',
    askVoiceBtn: 'आवाज इनपुट',
    askListening: 'सुन रहा है... अपनी आवश्यकता बोलें',
    askSuggestedTitle: 'सुझाए गए प्रश्न:',
    prompt1: 'Am I eligible for any scholarship?',
    prompt2: 'माझ्या मुलीच्या शिक्षणासाठी काही सरकारी योजना आहेत का?',
    prompt3: 'मला शेतकऱ्यांसाठी उपलब्ध योजना पाहिजेत.',
    prompt4: 'आय प्रमाण पत्र के लिए कौन से दस्तावेज चाहिए?',
    prompt5: 'मैंने छात्रवृत्ति आवेदन जमा किया है। इसकी स्थिति कैसे देखूं?',

    // AI Results
    indicativeMatch: 'संभावित पात्रता मिलान',
    potentiallyEligible: 'संभावित पात्र',
    disclaimerEligibility: 'अंतिम पात्रता और स्वीकृति संबंधित सरकारी विभाग द्वारा ही निर्धारित की जाती है।',
    applyOnOfficialPortal: 'आधिकारिक पोर्टल पर आवेदन करें',
    viewDetails: 'विवरण देखें',
    startJourney: 'यात्रा शुरू करें',
    checkEligibility: 'पात्रता जांचें',
    prepareDocuments: 'दस्तावेज तैयार करें',

    // Scheme Hub
    schemeHubTitle: 'योजना और सेवा केंद्र',
    schemeHubSub: 'विभाग और श्रेणी के अनुसार महाराष्ट्र सरकार की सत्यापित योजनाएं खोजें।',
    searchPlaceholder: 'योजना के नाम, विभाग या लाभ से खोजें...',
    filterAllCategories: 'सभी श्रेणियां',
    filterAllDepts: 'सभी विभाग',
    noSchemesFound: 'आपकी खोज के अनुसार कोई योजना नहीं मिली।',

    // Eligibility Checker
    eligibilityTitle: 'संवादात्मक पात्रता जांच',
    stepAge: '1. आयु',
    stepEducation: '2. शिक्षा',
    stepLocation: '3. स्थान',
    stepIncome: '4. आय / वर्ग',
    stepCriteria: '5. विशेष शर्तें',
    wizardResultTitle: 'संभावित पात्रता परिणाम',
    whyBreakdown: 'यह परिणाम क्यों आया:',
    criterionMatched: 'शर्तें पूरी हुईं',
    criterionNeeded: 'अतिरिक्त सत्यापन / जानकारी आवश्यक',

    // Document & Dependency
    docReadinessTitle: 'दस्तावेज तैयारी सूची',
    docPrerequisiteAlert: 'प्रारंभिक सेवा आवश्यक!',
    docPrerequisiteDesc: 'इस छात्रवृत्ति आवेदन को जारी रखने से पहले आपको आय प्रमाण पत्र प्राप्त करना होगा।',
    btnStartPrerequisite: 'प्रारंभिक सेवा देखें',
    prerequisiteJourneyFlow: 'आय प्रमाण पत्र → दस्तावेज तैयार → छात्रवृत्ति आवेदन',
    docStatusReady: 'तैयार है',
    docStatusMissing: 'उपलब्ध नहीं',
    docStatusOptional: 'वैकल्पिक',
    docStatusVerify: 'सत्यापन आवश्यक',

    // Journey Stages
    stageDiscover: 'खोज',
    stageUnderstand: 'समझना',
    stageQualify: 'पात्रता',
    stagePrepare: 'तैयारी',
    stageApply: 'आवेदन',
    stageTrack: 'स्थिति',
    stageResolve: 'निवारण',

    // My Journey Dashboard
    myJourneyTitle: 'मेरा नागरिक डैशबोर्ड',
    activeJourneysTab: 'सक्रिय यात्राएं',
    applicationsTab: 'मेरे आवेदन',
    documentsTab: 'मेरे दस्तावेज',
    notificationsTab: 'सूचनाएं',

    // Application Tracking
    trackTitle: 'आवेदन स्थिति ट्रैकिंग',
    trackSub: 'विभिन्न पोर्टलों पर अपने आवेदन की स्थिति देखने के लिए संदर्भ संख्या दर्ज करें।',
    trackInputPlaceholder: 'संदर्भ संख्या दर्ज करें (उदा. DEMO-EDU-2026-001)',
    trackBtn: 'स्थिति जांचें',
    trackLiveUnavailable: 'सरकारी सर्वर से लाइव स्थिति फिलहाल उपलब्ध नहीं है।',
    trackLastVerified: 'पोर्टल से अंतिम दर्ज स्थिति:',
    btnOpenOfficialPortal: 'आधिकारिक पोर्टल खोलें',

    // Interoperability & Connectors
    interopTitle: 'इंटरऑपरेबिलिटी आर्किटेक्चर',
    interopSub: 'महासेतु मूल डेटाबेस बदले बिना मौजूदा सरकारी प्रणाली से कैसे जुड़ता है।',
    badgeReal: 'वास्तविक एकीकरण',
    badgeDemo: 'डेमो कनेक्टर',
    badgeOfficialHandoff: 'आधिकारिक पोर्टल हस्तांतरण',
    badgeFuture: 'भविष्य का एकीकरण',

    // Grievance Assistant
    grievanceTitle: 'शिकायत व देरी मार्गदर्शन',
    grievanceSub: 'अटके हुए आवेदनों के लिए AI द्वारा आधिकारिक शिकायत निवारण मार्गदर्शक।',
    grievanceNotice: 'महासेतु सरकारी निर्णय नहीं बदल सकता, लेकिन आधिकारिक शिकायत निवारण पोर्टल तक सही मार्गदर्शन करता है।',
    btnOpenOfficialGrievance: 'आधिकारिक शिकायत निवारण पोर्टल खोलें',

    // Admin Analytics
    analyticsTitle: 'मंच विश्लेषण और मांग',
    analyticsSub: 'नागरिक मांग, दस्तावेजों की कमी और सेवा उपयोग का विश्लेषण।',
    analyticsNotice: 'नागरिक सेवा उपयोग के एकीकृत आंकड़े।',

    // Footer & Credits
    footerTag: 'जोड़ें • सहायता करें • सशक्त बनाएं',
    footerLegal: 'AI-आधारित नागरिक सेवा एकीकरण मंच। अंतिम निर्णय आधिकारिक विभागीय पोर्टल द्वारा ही लिया जाता है।',
  },
};
