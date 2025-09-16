// Mock data for Kisan Mitra app
export const roles = [
  {
    id: 'visitor',
    name: 'Visitor',
    description: 'Explore basic farming information and resources',
    moduleOrder: [6, 2, 1]
  },
  {
    id: 'farmer',
    name: 'Farmer',
    description: 'Complete farm management and productivity tools',
    moduleOrder: [1, 2, 3, 4, 5, 7, 8, 9, 10]
  },
  {
    id: 'veterinarian',
    name: 'Veterinarian',
    description: 'Animal health and vaccination management',
    moduleOrder: [3, 4, 5, 9, 10, 1]
  },
  {
    id: 'compliance',
    name: 'Compliance Manager',
    description: 'Regulatory compliance and documentation',
    moduleOrder: [5, 7, 8, 1]
  },
  {
    id: 'admin',
    name: 'Administrator',
    description: 'Full system access and management',
    moduleOrder: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }
];

export const modules = [
  {
    id: 1,
    title: 'Farm Information Capture',
    description: 'Record and manage farm location, livestock details, and operational data',
    icon: 'MapPin',
    badges: ['Offline', 'Forms'],
    category: 'data-capture',
    features: [
      'Digital farm registration forms',
      'Livestock inventory management',
      'Location-based data collection'
    ],
    actions: ['Add Farm Details', 'Update Livestock', 'Generate Report'],
    dataModel: {
      farm: {
        name: 'string',
        location: 'string',
        district: 'string',
        herdSize: 'number',
        issues: 'array'
      }
    }
  },
  {
    id: 2,
    title: 'Weather & Alerts',
    description: 'Real-time weather updates and farming alerts for better decision making',
    icon: 'Cloud',
    badges: ['Real-time', 'Alerts'],
    category: 'monitoring',
    features: [
      'Weather forecast integration',
      'Customizable farming alerts',
      'Seasonal recommendations'
    ],
    actions: ['View Forecast', 'Set Alerts', 'View History'],
    dataModel: {
      alert: {
        type: 'string',
        severity: 'string',
        message: 'string',
        timestamp: 'date'
      }
    }
  },
  {
    id: 3,
    title: 'Vaccination Scheduling',
    description: 'Plan and track livestock vaccination schedules and productivity metrics',
    icon: 'Calendar',
    badges: ['Scheduling', 'Health'],
    category: 'health',
    features: [
      'Automated vaccination reminders',
      'Productivity tracking charts',
      'Health record management'
    ],
    actions: ['Schedule Vaccine', 'Track Progress', 'View Calendar'],
    dataModel: {
      vaccination: {
        animalId: 'string',
        vaccine: 'string',
        scheduledDate: 'date',
        status: 'string'
      }
    }
  },
  {
    id: 4,
    title: 'Feed Management',
    description: 'Optimize feed inventory and create balanced nutrition plans for livestock',
    icon: 'Wheat',
    badges: ['Inventory', 'Nutrition'],
    category: 'nutrition',
    features: [
      'Feed inventory tracking',
      'Nutrition plan calculator',
      'Cost optimization tools'
    ],
    actions: ['Add Feed Stock', 'Create Ration', 'Calculate Costs'],
    dataModel: {
      feed: {
        type: 'string',
        quantity: 'number',
        unit: 'string',
        nutritionValue: 'object'
      }
    }
  },
  {
    id: 5,
    title: 'Visitor Tracking',
    description: 'Monitor farm visitors and maintain security logs for compliance',
    icon: 'Users',
    badges: ['Security', 'Compliance'],
    category: 'security',
    features: [
      'Visitor registration system',
      'Digital badge generation',
      'Access control logs'
    ],
    actions: ['Register Visitor', 'Generate Badge', 'Export Logs'],
    dataModel: {
      visitor: {
        name: 'string',
        purpose: 'string',
        checkIn: 'datetime',
        checkOut: 'datetime'
      }
    }
  },
  {
    id: 6,
    title: 'Educational Content',
    description: 'Access training materials and best practices for modern farming',
    icon: 'BookOpen',
    badges: ['Learning', 'Offline'],
    category: 'education',
    features: [
      'Interactive training modules',
      'Progress tracking system',
      'Multilingual content support'
    ],
    actions: ['Start Lesson', 'Track Progress', 'Download Materials'],
    dataModel: {
      lesson: {
        id: 'string',
        title: 'string',
        progress: 'number',
        completed: 'boolean'
      }
    }
  },
  {
    id: 7,
    title: 'Waste Disposal',
    description: 'Manage dead animal disposal and waste management with compliance tracking',
    icon: 'Trash2',
    badges: ['Compliance', 'Environment'],
    category: 'compliance',
    features: [
      'Disposal record keeping',
      'Compliance checklist',
      'Environmental impact tracking'
    ],
    actions: ['Record Disposal', 'Check Compliance', 'Generate Certificate'],
    dataModel: {
      disposal: {
        animalId: 'string',
        method: 'string',
        date: 'date',
        compliance: 'boolean'
      }
    }
  },
  {
    id: 8,
    title: 'Government Compliance',
    description: 'Track government authorizations, permits, and regulatory compliance',
    icon: 'FileText',
    badges: ['Government', 'Legal'],
    category: 'compliance',
    features: [
      'Permit status tracking',
      'Document management',
      'Compliance dashboard'
    ],
    actions: ['Check Status', 'Upload Documents', 'Submit Application'],
    dataModel: {
      permit: {
        type: 'string',
        status: 'string',
        expiryDate: 'date',
        documents: 'array'
      }
    }
  },
  {
    id: 9,
    title: 'AI Chatbot Assistant',
    description: 'Get instant answers to farming questions in multiple languages',
    icon: 'MessageCircle',
    badges: ['AI', 'Multilingual'],
    category: 'support',
    features: [
      'Natural language processing',
      '8 language support',
      'Context-aware responses'
    ],
    actions: ['Ask Question', 'Switch Language', 'View History'],
    dataModel: {
      chat: {
        question: 'string',
        answer: 'string',
        language: 'string',
        timestamp: 'datetime'
      }
    }
  },
  {
    id: 10,
    title: 'Outbreak Prediction',
    description: 'AI-powered disease outbreak predictions and prevention strategies',
    icon: 'TrendingUp',
    badges: ['AI', 'Prevention'],
    category: 'health',
    features: [
      'Risk assessment algorithms',
      'Early warning system',
      'Prevention recommendations'
    ],
    actions: ['Check Risk', 'View Predictions', 'Get Recommendations'],
    dataModel: {
      prediction: {
        disease: 'string',
        riskScore: 'number',
        factors: 'array',
        recommendations: 'array'
      }
    }
  }
];

export const weatherAlerts = [
  {
    id: 1,
    type: 'Heatwave',
    severity: 'High',
    message: 'Extreme heat expected. Ensure adequate water supply for livestock and provide shade.',
    tips: [
      'Increase water availability by 30%',
      'Provide additional shade structures',
      'Monitor animals for heat stress symptoms'
    ],
    active: true
  },
  {
    id: 2,
    type: 'Heavy Rain',
    severity: 'Medium',
    message: 'Heavy rainfall predicted. Secure feed storage and check drainage systems.',
    tips: [
      'Move feed to covered areas',
      'Clear drainage channels',
      'Prepare for potential flooding'
    ],
    active: true
  },
  {
    id: 3,
    type: 'Frost Warning',
    severity: 'Low',
    message: 'Frost conditions possible. Protect sensitive crops and newborn animals.',
    tips: [
      'Cover sensitive plants',
      'Provide warm bedding for animals',
      'Check water systems for freezing'
    ],
    active: false
  }
];

export const educationalLessons = [
  {
    id: 1,
    title: 'Monsoon Preparation for Dairy Farms',
    progress: 85,
    completed: false,
    duration: '45 min'
  },
  {
    id: 2,
    title: 'Vaccination Schedule Management',
    progress: 100,
    completed: true,
    duration: '30 min'
  },
  {
    id: 3,
    title: 'Feed Quality Assessment',
    progress: 60,
    completed: false,
    duration: '35 min'
  },
  {
    id: 4,
    title: 'Disease Prevention Strategies',
    progress: 0,
    completed: false,
    duration: '50 min'
  },
  {
    id: 5,
    title: 'Government Scheme Applications',
    progress: 40,
    completed: false,
    duration: '25 min'
  },
  {
    id: 6,
    title: 'Sustainable Farming Practices',
    progress: 20,
    completed: false,
    duration: '60 min'
  }
];

export const chatbotQA = {
  en: [
    {
      question: 'monsoon preparation',
      answer: 'For monsoon preparation: 1) Clean drainage systems, 2) Store feed in dry places, 3) Vaccinate animals against monsoon diseases, 4) Repair shelter roofs, 5) Stock medicines.'
    },
    {
      question: 'calf vaccination',
      answer: 'Calf vaccination schedule: 1st week - Colostrum, 6-8 weeks - FMD vaccine, 3-4 months - Brucellosis, 6 months - HS vaccine. Consult local vet for exact timing.'
    },
    {
      question: 'heat stress',
      answer: 'To prevent heat stress: Provide shade, increase water intake, use fans/sprinklers, adjust feeding times to cooler hours, monitor breathing rate.'
    },
    {
      question: 'feed quality',
      answer: 'Check feed quality by: 1) Visual inspection for mold, 2) Smell test - no sour odor, 3) Moisture content below 14%, 4) Store in cool, dry place.'
    },
    {
      question: 'milk production',
      answer: 'To increase milk production: Provide balanced nutrition, ensure clean water, maintain proper milking hygiene, reduce stress, regular health checkups.'
    },
    {
      question: 'disease prevention',
      answer: 'Disease prevention: Follow vaccination schedule, maintain clean environment, quarantine new animals, regular health monitoring, proper nutrition.'
    }
  ],
  hi: [
    {
      question: 'मानसून की तैयारी',
      answer: 'मानसून की तैयारी के लिए: 1) जल निकासी साफ करें, 2) चारा सूखी जगह रखें, 3) जानवरों का टीकाकरण करें, 4) शेल्टर की मरम्मत करें, 5) दवाओं का भंडार करें।'
    },
    {
      question: 'बछड़े का टीकाकरण',
      answer: 'बछड़े का टीकाकरण: पहला सप्ताह - कोलोस्ट्रम, 6-8 सप्ताह - FMD वैक्सीन, 3-4 महीने - ब्रुसेलोसिस, 6 महीने - HS वैक्सीन। सटीक समय के लिए स्थानीय पशु चिकित्सक से सलाह लें।'
    },
    {
      question: 'गर्मी का तनाव',
      answer: 'गर्मी के तनाव से बचने के लिए: छाया प्रदान करें, पानी की मात्रा बढ़ाएं, पंखे/स्प्रिंकलर का उपयोग करें, ठंडे समय में चारा दें, सांस की दर पर नजर रखें।'
    },
    {
      question: 'चारे की गुणवत्ता',
      answer: 'चारे की गुणवत्ता जांचें: 1) फफूंद के लिए देखें, 2) बदबू न हो, 3) नमी 14% से कम, 4) ठंडी, सूखी जगह पर भंडारण।'
    },
    {
      question: 'दूध उत्पादन',
      answer: 'दूध उत्पादन बढ़ाने के लिए: संतुलित पोषण दें, साफ पानी सुनिश्चित करें, दुहने की स्वच्छता बनाए रखें, तनाव कम करें, नियमित स्वास्थ्य जांच।'
    },
    {
      question: 'रोग रोकथाम',
      answer: 'रोग रोकथाम: टीकाकरण कार्यक्रम का पालन करें, साफ वातावरण बनाए रखें, नए जानवरों को अलग रखें, नियमित स्वास्थ्य निगरानी, उचित पोषण।'
    }
  ]
};

export const outbreakPredictions = [
  {
    id: 1,
    disease: 'Foot and Mouth Disease',
    riskScore: 75,
    severity: 'High',
    factors: ['High humidity', 'Animal movement', 'Nearby outbreak'],
    recommendations: [
      'Immediate vaccination of all susceptible animals',
      'Restrict animal movement',
      'Enhance biosecurity measures'
    ]
  },
  {
    id: 2,
    disease: 'Mastitis',
    riskScore: 45,
    severity: 'Medium',
    factors: ['Poor milking hygiene', 'Wet conditions'],
    recommendations: [
      'Improve milking hygiene protocols',
      'Regular udder health monitoring',
      'Proper treatment of clinical cases'
    ]
  },
  {
    id: 3,
    disease: 'Hemorrhagic Septicemia',
    riskScore: 20,
    severity: 'Low',
    factors: ['Seasonal transition', 'Stress factors'],
    recommendations: [
      'Monitor animal health closely',
      'Maintain vaccination schedule',
      'Reduce stress factors'
    ]
  }
];

export const permits = [
  {
    id: 1,
    type: 'Dairy License',
    status: 'Approved',
    expiryDate: '2025-12-31',
    documents: ['application.pdf', 'health_certificate.pdf']
  },
  {
    id: 2,
    type: 'Animal Transport Permit',
    status: 'Pending',
    expiryDate: '2024-06-30',
    documents: ['transport_application.pdf']
  },
  {
    id: 3,
    type: 'Feed Manufacturing License',
    status: 'Submitted',
    expiryDate: '2025-03-15',
    documents: ['feed_license_app.pdf', 'facility_inspection.pdf']
  }
];

export const feedInventory = [
  {
    id: 1,
    type: 'Wheat Straw',
    quantity: 500,
    unit: 'kg',
    nutritionValue: { protein: 3.5, fiber: 40, energy: 1200 }
  },
  {
    id: 2,
    type: 'Cotton Seed Cake',
    quantity: 200,
    unit: 'kg',
    nutritionValue: { protein: 22, fiber: 24, energy: 2800 }
  },
  {
    id: 3,
    type: 'Green Fodder',
    quantity: 1000,
    unit: 'kg',
    nutritionValue: { protein: 8, fiber: 25, energy: 800 }
  }
];

export const visitors = [
  {
    id: 1,
    name: 'Dr. Rajesh Kumar',
    purpose: 'Veterinary Inspection',
    checkIn: '2024-01-15T09:00:00',
    checkOut: '2024-01-15T11:30:00'
  },
  {
    id: 2,
    name: 'Agricultural Officer',
    purpose: 'Government Survey',
    checkIn: '2024-01-14T14:00:00',
    checkOut: '2024-01-14T16:00:00'
  }
];