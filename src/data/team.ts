export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description?: string;
}

export interface EducationItem {
  degree: string;
  school: string;
  year: string;
}

export interface CredlyBadge {
  badgeId: string;
  title?: string;
  url?: string;
}

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  fullBio: string[];
  skills: string[];
  social: {
    linkedin?: string;
    github?: string;
    email?: string;
    portfolio?: string;
  };
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications?: {
    credlyBadges?: CredlyBadge[];
    other?: string[];
  };
  cvPdfs?: {
    spa?: string;
    eng?: string;
  };
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    slug: "emmanuel-garcia",
    name: "Emmanuel Garcia",
    role: "Analista de Datos & Desarrollador Full-Stack",
    image: "/images/dev/emma",
    bio: "Analista de datos con experiencia en transformar grandes conjuntos de datos en información accionable y visualizaciones claras.",
    fullBio: [
      "Estudiante de Ingeniería en Datos e Inteligencia Organizacional en la Universidad del Caribe. Analista de datos con experiencia en transformar grandes conjuntos de datos en información accionable y visualizaciones claras.",
      "Enfocado en descubrir patrones y tendencias que ayuden a la toma de decisiones estratégicas, así como en el desarrollo de soluciones integrales full-stack y automatización de procesos."
    ],
    skills: ["Python", "SQL", "Pandas", "PowerBI", "Machine Learning", "Data Analysis", "Full-Stack Development", "Astro", "React"],
    social: {
      linkedin: "https://www.linkedin.com/in/emmanuel-garc%C3%ADa-pe%C3%B1aloza-11927b334/",
      github: "https://github.com/EGarpxMaster",
      email: "emmanuelgarcia0901@gmail.com"
    },
    experience: [
      {
        title: "Helpdesk Specialist I",
        company: "Open Network Exchange (ONE)",
        period: "Enero 2026 - Actualidad",
        description: "Soporte técnico especializado y resolución de incidencias en infraestructura tecnológica."
      },
      {
        title: "Desarrollador Full-Stack",
        company: "Instituto de Planeación y Desarrollo Urbano (IMPLAN)",
        period: "Noviembre 2025 - Diciembre 2025",
        description: "Desarrollo de sistemas integrales y herramientas de gestión urbana basadas en datos."
      },
      {
        title: "Analista de Datos",
        company: "Instituto de Planeación y Desarrollo Urbano (IMPLAN)",
        period: "Agosto 2025 - Noviembre 2025",
        description: "Procesamiento, limpieza y modelado de datos urbanísticos y socioeconómicos."
      },
      {
        title: "Desarrollador Full-Stack",
        company: "Universidad del Caribe",
        period: "Agosto 2024 - Septiembre 2025",
        description: "Desarrollo de módulos web y proyectos académicos institucionales."
      }
    ],
    education: [
      {
        degree: "Ingeniería en Datos e Inteligencia Organizacional",
        school: "Universidad del Caribe",
        year: "2020 - 2026"
      }
    ],
    certifications: {
      credlyBadges: [
        {
          badgeId: "5533a541-87e7-420a-9ff1-bbe3f7a2af80",
          url: "https://www.credly.com/badges/5533a541-87e7-420a-9ff1-bbe3f7a2af80/public_url"
        },
        {
          badgeId: "ae2c0c1d-f908-426f-afc1-890fa20f5e98",
          url: "https://www.credly.com/badges/ae2c0c1d-f908-426f-afc1-890fa20f5e98/public_url"
        },
        {
          badgeId: "ca5956ec-f601-4c9a-b0da-b5d7f03030d6",
          url: "https://www.credly.com/badges/ca5956ec-f601-4c9a-b0da-b5d7f03030d6/public_url"
        },
        {
          badgeId: "4ac7504c-0e5e-4369-827c-adccc587c0e2",
          url: "https://www.credly.com/badges/4ac7504c-0e5e-4369-827c-adccc587c0e2/public_url"
        }
      ]
    },
    cvPdfs: {
      spa: "/pdf/Curriculum_Emmanuel_Garcia_SPA.pdf",
      eng: "/pdf/Curriculum_Emmanuel_Garcia_ENG.pdf"
    }
  },
  {
    slug: "orbelin-jimenez",
    name: "Orbelin Jiménez",
    role: "Desarrollador Web Full-Stack",
    image: "/images/dev/Orbe.png",
    bio: "Desarrollador enfocado en frontend y diseño web moderno, participando en múltiples plataformas web interactivas.",
    fullBio: [
      "Estudiante de Ingeniería en Datos e Inteligencia Organizacional practicando para convertirme en desarrollador full stack.",
      "Actualmente me especializo en diseño frontend con conocimientos sólidos de backend. He participado en el desarrollo de varias páginas web incluyendo TechnoWards y el sitio de la Jornada de Ingeniería Industrial de la Universidad del Caribe."
    ],
    skills: ["HTML/CSS", "JavaScript", "TypeScript", "React", "Vue.js", "Angular", "Análisis de Datos", "Astro"],
    social: {
      linkedin: "https://www.linkedin.com/in/orbelin-jim%C3%A9nez-vazquez-046741325/",
      github: "https://github.com/OrbelinJimenezVazquez",
      email: "orbelinjimenez3@gmail.com",
      portfolio: "https://orbelinjimenezvazquez.github.io/Portafolio_WEB_CV/#"
    },
    experience: [
      {
        title: "Desarrollador Frontend",
        company: "TechnoWards",
        period: "2021 - Presente",
        description: "Diseño y desarrollo de interfaces web adaptativas y dinámicas."
      },
      {
        title: "Diseñador Web Freelance",
        company: "Proyectos Independientes",
        period: "2020 - Presente",
        description: "Creación de sitios web personalizados para clientes locales e institucionales."
      }
    ],
    education: [
      {
        degree: "Ingeniería en Datos e Inteligencia Organizacional",
        school: "Universidad del Caribe",
        year: "2020 - 2025"
      }
    ]
  },
  {
    slug: "edwin-canche",
    name: "Edwin Canché",
    role: "Redes e Infraestructura de TI & Analista de Datos",
    image: "/images/dev/isma1.png",
    bio: "Especialista en redes informáticas e infraestructura con habilidades analíticas aplicadas a sistemas de datos.",
    fullBio: [
      "Estudiante de Ingeniería en Datos e Inteligencia Organizacional con especial interés en redes de computadoras y análisis de datos.",
      "Combino conocimientos técnicos en infraestructura de red con habilidades analíticas para crear soluciones integrales y seguras."
    ],
    skills: ["Redes LAN/WAN", "Configuración de Routers", "Seguridad de Red", "Análisis de Datos", "Python", "SQL"],
    social: {
      linkedin: "#",
      github: "#",
      email: "edwin@example.com"
    },
    experience: [
      {
        title: "Asistente en Infraestructura de Red",
        company: "TechnoWards",
        period: "2020 - Presente",
        description: "Instalación, mantenimiento y aseguramiento de redes locales y servidores de soporte."
      }
    ],
    education: [
      {
        degree: "Ingeniería en Datos e Inteligencia Organizacional",
        school: "Universidad del Caribe",
        year: "2020 - 2025"
      }
    ]
  },
  {
    slug: "uziel-solis",
    name: "Uziel Solis Avendaño",
    role: "Analista de datos & Desarrollador Full-Stack",
    image: "/images/dev/uzi.png",
    bio: "Ingeniero en Datos con enfoque en análisis de información y sistemas de apoyo a la toma de decisiones.",
    fullBio: [
      "Ingeniero en Datos con enfoque en análisis de información y sistemas de apoyo a la toma de decisiones. Experiencia en el desarrollo de propuestas tecnológicas (ERP), análisis de datos para optimización de procesos y gestión de información organizacional.",
      "Ha participado en proyectos académicos y comunitarios que integran análisis, planificación y coordinación operativa. Interesado en el diseño de soluciones basadas en datos, mejora de procesos y uso estratégico de sistemas de información para generar valor empresarial y social."
    ],
    skills: ["Python", "SQL", "C", "C++", "JavaScript", "PHP", "AWS", "Git", "Data Pipelines", "React", "HTML5", "CSS3", "Node", "Linux", "Windows"],
    social: {
      linkedin: "www.linkedin.com/in/uziel-armando-solis-avendano-04a16034b",
      github: "https://github.com/Uziel2002",
      email: "uziel.solis.20@gmail.com"
    },
    experience: [
      {
        title: "Ejecutivo de TI - Desarrollador Full-Stack",
        company: "APS Holding - Cancún, Q. Roo",
        period: "Marzo 2026 - Actualmente",
        description: "Desarrollo y mantenimiento de soluciones tecnológicas full-stack para la organización."
      },
      {
        title: "Analista de Datos",
        company: "IMPLAN - Cancún, Q. Roo",
        period: "Agosto 2025 - Diciembre 2025",
        description: "Análisis de datos para la optimización de procesos y gestión de información organizacional."
      },
      {
        title: "Desarrollador Full-Stack",
        company: "Proyecto Jornada de Ingeniería Industrial (Universidad del Caribe) - Cancún, Q. Roo",
        period: "Agosto 2024 - Octubre 2025",
        description: "Desarrollo de sistemas de apoyo para la coordinación operativa del proyecto."
      },
      {
        title: "Tester, soporte y mantenimiento",
        company: "Cancun Sailing Catamarans",
        period: "Enero 2024 - Agosto 2024",
        description: "Pruebas de software, soporte técnico y mantenimiento de sistemas."
      },
      {
        title: "Prácticas profesionales (Sistemas)",
        company: "Quimco",
        period: "Agosto 2023 - Diciembre 2023",
        description: "Prácticas profesionales en el área de sistemas."
      }
    ],
    education: [
      {
        degree: "Ingeniería en Datos e Inteligencia Organizacional (especialización en Inteligencia de Negocios)",
        school: "Universidad del Caribe",
        year: "2020 - 2026"
      },
      {
        degree: "Técnico en Programación",
        school: "CBTIS 111",
        year: "2017 - 2020"
      }
    ]
  }
];
