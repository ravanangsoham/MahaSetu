import type { Scheme, Language } from '../types';
import { mockSchemes } from '../data/schemes';

export interface AIResponse {
  message: { en: string; mr: string; hi: string };
  intent: string;
  matchedSchemes?: Scheme[];
  askingQuestions?: {
    field: string;
    question: { en: string; mr: string; hi: string };
    options?: string[];
  }[];
  prerequisiteAlert?: {
    missingDoc: string;
    recommendedService: string;
    serviceId: string;
  };
}

class AIService {
  private openAiApiKey: string | undefined;

  constructor() {
    this.openAiApiKey = import.meta.env.VITE_OPENAI_API_KEY;
  }

  public isRealAiAvailable(): boolean {
    return Boolean(this.openAiApiKey && this.openAiApiKey.trim().length > 0);
  }

  /**
   * Main entrypoint for processing user queries in Demo Mode or Real OpenAI mode
   */
  public async processQuery(queryText: string, _currentLang: Language = 'mr'): Promise<AIResponse> {
    const text = queryText.toLowerCase().trim();

    // 1. Marathi query matching: "माझ्या मुलीच्या शिक्षणासाठी काही सरकारी योजना आहेत का?"
    if (text.includes('शिक्षणासाठी') || text.includes('मुलीच्या') || text.includes('scholarship') || text.includes('छात्रवृत्ति')) {
      const eduScheme = mockSchemes.find((s) => s.id === 'scheme-edu-001') || mockSchemes[0];
      return {
        intent: 'EDUCATION_SCHOLARSHIP_SEARCH',
        message: {
          mr: 'होय. तुमच्या गरजेनुसार महाराष्ट्र शासनाच्या उच्च शिक्षण विभागाच्या शिष्यवृत्ती योजना उपलब्ध आहेत. मी तुम्हाला योग्य योजना आणि संभाव्य पात्रता दाखवत आहे.',
          en: 'Yes. Based on your requirement, Higher Education Department scholarship schemes are available. I am showing you matching schemes and indicative eligibility.',
          hi: 'हां। आपकी आवश्यकता के अनुसार उच्च शिक्षा विभाग की छात्रवृत्ति योजनाएं उपलब्ध हैं। मैं आपको उपयुक्त योजना और सम्भावित पात्रता दिखा रहा हूं।',
        },
        matchedSchemes: [eduScheme],
        askingQuestions: [
          {
            field: 'studentAge',
            question: {
              en: 'What is the student’s current age and education level?',
              mr: 'विद्यार्थ्याचे सध्याचे वय आणि शिक्षणाचा स्तर काय आहे?',
              hi: 'छात्र की वर्तमान आयु और शिक्षा का स्तर क्या है?',
            },
            options: ['12th Pass / Undergraduate', 'Diploma Student', 'Postgraduate'],
          },
          {
            field: 'familyIncome',
            question: {
              en: 'Is your annual family income less than ₹8.00 Lakh?',
              mr: 'तुमचे कौटुंबिक वार्षिक उत्पन्न ₹८ लाखांपेक्षा कमी आहे का?',
              hi: 'क्या आपकी वार्षिक पारिवारिक आय ₹8.00 लाख से कम है?',
            },
            options: ['Yes ( Below ₹8.00 Lakh )', 'No ( Above ₹8.00 Lakh )'],
          },
        ],
        prerequisiteAlert: {
          missingDoc: 'Family Income Certificate',
          recommendedService: 'Income Certificate from Revenue Dept (Aaple Sarkar)',
          serviceId: 'service-income-cert',
        },
      };
    }

    // 2. Agriculture / Farmer query
    if (text.includes('शेतकऱ्यांसाठी') || text.includes('farmer') || text.includes('कृषि') || text.includes('नमो शेतकरी')) {
      const agriScheme = mockSchemes.find((s) => s.id === 'scheme-agri-002') || mockSchemes[1];
      return {
        intent: 'FARMER_SCHEME_SEARCH',
        message: {
          mr: 'होय, शेतकऱ्यांसाठी "नमो शेतकरी महासन्मान निधी" आणि इतर कृषी सहाय्य योजना उपलब्ध आहेत. खालील तपशील पहा.',
          en: 'Yes, for landholding farmers, "Namo Shetkari MahaSanman Nidhi" and other agriculture schemes are active. Details below.',
          hi: 'हां, किसानों के लिए "नमो शेतकरी महासम्मान निधि" और अन्य कृषि सहायता योजनाएं उपलब्ध हैं। विवरण नीचे देखें।',
        },
        matchedSchemes: [agriScheme],
      };
    }

    // 3. Women / Ladki Bahin query
    if (text.includes('महिला') || text.includes('मुलीसाठी') || text.includes('ladki') || text.includes('बहीण') || text.includes('women')) {
      const womScheme = mockSchemes.find((s) => s.id === 'scheme-wom-003') || mockSchemes[2];
      return {
        intent: 'WOMEN_EMPOWERMENT_SEARCH',
        message: {
          mr: 'होय, २१ ते ६५ वयोगटातील महिलांसाठी "मुख्यमंत्री माझी लाडकी बहीण योजना" अंतर्गत दरमहा ₹१,५०० आर्थिक मदत उपलब्ध आहे.',
          en: 'Yes, "Mukhyamantri Majhi Ladki Bahin Yojna" provides ₹1,500 monthly direct support for eligible women aged 21-65 years.',
          hi: 'हां, 21 से 65 वर्ष की महिलाओं के लिए "मुख्यमंत्री माझी लाडकी बहिन योजना" के तहत ₹1,500 प्रतिमाह सहायता उपलब्ध है।',
        },
        matchedSchemes: [womScheme],
      };
    }

    // 4. Document / Income Certificate query
    if (text.includes('कागदपत्रे') || text.includes('documents') || text.includes('दस्तावेज') || text.includes('उत्पन्नाचा')) {
      const incomeService = mockSchemes.find((s) => s.id === 'service-income-cert') || mockSchemes[4];
      return {
        intent: 'DOCUMENT_PREREQUISITE_INFO',
        message: {
          mr: 'शासकीय योजनांसाठी लागणाऱ्या कागदपत्रांमध्ये उत्पन्नाचा दाखला सर्वात महत्त्वाचा आहे. तो आपले सरकार पोर्टलवरून कसा मिळवायचा त्याची माहिती खालीलप्रमाणे आहे.',
          en: 'Income Certificate from Tahsildar is a mandatory prerequisite for most schemes. You can apply for it directly on Aaple Sarkar portal.',
          hi: 'सरकारी योजनाओं के लिए आय प्रमाण पत्र सबसे महत्वपूर्ण दस्तावेज है। इसे आप Aaple Sarkar पोर्टल से प्राप्त कर सकते हैं।',
        },
        matchedSchemes: [incomeService],
      };
    }

    // Default Fallback
    return {
      intent: 'GENERAL_SERVICE_ASSISTANCE',
      message: {
        mr: 'मी महासेतू AI आहे. मी तुम्हाला महाराष्ट्रातील शिक्षण, कृषी, महिला विकास आणि इतर शासकीय योजना शोधण्यात आणि अर्ज प्रक्रियेत मदत करू शकतो.',
        en: 'I am MahaSetu AI. I can assist you in discovering Maharashtra Government education, agriculture, women empowerment, and revenue schemes.',
        hi: 'मैं महासेतु AI हूं। मैं आपको महाराष्ट्र सरकार की शिक्षा, कृषि, महिला विकास और अन्य योजनाओं को खोजने और आवेदन करने में मदद कर सकता हूं।',
      },
      matchedSchemes: mockSchemes.slice(0, 3),
    };
  }

  /**
   * Explains indicative eligibility without claiming official government decision
   */
  public explainEligibilityBoundary(scheme: Scheme, lang: Language): string {
    const notice = {
      en: `MahaSetu AI calculates an indicative match of ${scheme.matchScore}%. Final decision authority belongs exclusively to ${scheme.department.en}.`,
      mr: `महासेतू AI द्वारे दर्शवलेली ${scheme.matchScore}% ही एक संभाव्य जुळणी आहे. अंतिम निर्णय अधिकार फक्त ${scheme.department.mr} कडे आहे.`,
      hi: `महासेतु AI द्वारा दर्शाया गया ${scheme.matchScore}% एक सम्भावित मिलान है। अंतिम निर्णय का अधिकार केवल ${scheme.department.hi} के पास है।`,
    };
    return notice[lang];
  }
}

export const aiService = new AIService();
