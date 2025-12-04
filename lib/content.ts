export type Lang = 'en' | 'es';

export interface Content {
  hero: {
    headline: string;
    subheading: string;
    cta: string;
  };
  howItWorks: {
    title: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  whyThisWorks: {
    title: string;
    benefits: string[];
  };
  whoWeAreLookingFor: {
    title: string;
    criteria: string[];
  };
  whatYouWillGet: {
    title: string;
    benefits: string[];
  };
  form: {
    title: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    ageLabel: string;
    locationLabel: string;
    submitButton: string;
    successMessage: string;
  };
  nav: {
    languageSwitch: string;
  };
}

export const content: Record<Lang, Content> = {
  en: {
    hero: {
      headline: 'Practice English Conversation Anytime—At Your Own Pace, Without Pressure',
      subheading: 'An AI-powered English conversation tutor designed for learners aged 55+, offering naturally adaptive dialogues wherever you are, whenever you\'re ready.',
      cta: 'Request Your Invitation',
    },
    howItWorks: {
      title: 'How It Works',
      steps: [
        {
          title: 'Simply Start Talking',
          description: 'No buttons to press—just speak naturally',
        },
        {
          title: 'Get Personalized Support',
          description: 'AI detects your skill level and adjusts',
        },
        {
          title: 'Practice Real Conversations',
          description: 'Work, travel, family topics',
        },
      ],
    },
    whyThisWorks: {
      title: 'Why This Works for You',
      benefits: [
        'No pressure to keep up',
        'Speaks at a comfortable pace',
        'Available 24/7 on your phone',
        'Remembers your progress',
        'Designed specifically for older adults',
      ],
    },
    whoWeAreLookingFor: {
      title: 'Who We\'re Looking For',
      criteria: [
        'Age 55 or older',
        'Learning English (any level welcome)',
        'Own a smartphone (iPhone or Android)',
        'Live in or near Madrid, Spain',
        'Willing to try the app for 4 weeks',
      ],
    },
    whatYouWillGet: {
      title: 'What You\'ll Get',
      benefits: [
        'Free access to the app',
        'Personal onboarding session',
        'Ongoing support throughout the study',
        'Contribution to PhD research on senior language learning',
      ],
    },
    form: {
      title: 'Request Your Invitation',
      nameLabel: 'Full Name',
      emailLabel: 'Email Address',
      phoneLabel: 'Phone Number',
      ageLabel: 'Age',
      locationLabel: 'Location',
      submitButton: 'Request Invitation',
      successMessage: 'Thank you! We\'ll be in touch soon.',
    },
    nav: {
      languageSwitch: 'Español',
    },
  },
  es: {
    hero: {
      headline: 'Practica Conversación en Inglés Cuando Quieras—A Tu Ritmo, Sin Presión',
      subheading: 'Un tutor de conversación en inglés con inteligencia artificial diseñado para estudiantes mayores de 55 años, que ofrece diálogos naturalmente adaptativos donde estés, cuando estés listo/a.',
      cta: 'Solicita Tu Invitación',
    },
    howItWorks: {
      title: 'Cómo Funciona',
      steps: [
        {
          title: 'Simplemente Empieza a Hablar',
          description: 'No hay botones que pulsar, solo habla de forma natural',
        },
        {
          title: 'Recibe Apoyo Personalizado',
          description: 'La IA detecta tu nivel y se adapta',
        },
        {
          title: 'Practica Conversaciones Reales',
          description: 'Trabajo, viajes, temas familiares',
        },
      ],
    },
    whyThisWorks: {
      title: 'Por Qué Funciona Para Ti',
      benefits: [
        'Sin presión para seguir el ritmo',
        'Habla a un ritmo cómodo',
        'Disponible 24/7 en tu teléfono',
        'Recuerda tu progreso',
        'Diseñado específicamente para adultos mayores',
      ],
    },
    whoWeAreLookingFor: {
      title: 'A Quién Buscamos',
      criteria: [
        '55 años o más',
        'Estudiando inglés (cualquier nivel es bienvenido)',
        'Que tengas un smartphone (iPhone o Android)',
        'Que vivas en Madrid o cerca',
        'Dispuesto/a a probar la app durante 4 semanas',
      ],
    },
    whatYouWillGet: {
      title: 'Qué Recibirás',
      benefits: [
        'Acceso gratuito a la aplicación',
        'Sesión de bienvenida personal',
        'Apoyo continuo durante el estudio',
        'Contribución a investigación doctoral sobre aprendizaje de idiomas en mayores',
      ],
    },
    form: {
      title: 'Solicita Tu Invitación',
      nameLabel: 'Nombre Completo',
      emailLabel: 'Correo Electrónico',
      phoneLabel: 'Número de Teléfono',
      ageLabel: 'Edad',
      locationLabel: 'Ubicación',
      submitButton: 'Solicitar Invitación',
      successMessage: 'Gracias! Nos pondremos en contacto pronto.',
    },
    nav: {
      languageSwitch: 'English',
    },
  },
};

export function getContent(lang: Lang): Content {
  return content[lang] || content.en;
}
