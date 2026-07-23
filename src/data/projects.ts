export interface Project {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string[];
  mainImage: string;
  gallery: string[];
  services?: string[];
  features?: string[];
  technologies: string[];
  link?: string;
  linkText?: string;
  participants?: string[];
}

export const PROJECTS: Project[] = [
  {
    slug: "technowards",
    title: "TechnoWards",
    category: "Mantenimiento & Soluciones TI",
    summary: "Proyecto emprendedor de mantenimiento, reparación, ensamblado y optimización de equipos computacionales e infraestructura tecnológica.",
    description: [
      "TechnoWards es un proyecto fundado por cuatro amigos apasionados por la tecnología durante sus estudios universitarios en la Universidad del Caribe.",
      "Lo que comenzó como una idea en las aulas se ha convertido en un servicio completo de mantenimiento preventivo y correctivo, reparación, actualización de hardware/software, redes y optimización de equipos informáticos tanto para clientes particulares como para pequeñas empresas."
    ],
    mainImage: "/images/tw2.jpg",
    gallery: [
      "/images/tw1.jpg",
      "/images/tw2.jpg",
      "/images/tw3.jpg",
      "/images/tw4.jpg",
      "/images/tw5.jpg",
      "/images/tw6.jpg"
    ],
    services: [
      "Mantenimiento preventivo y correctivo de computadoras",
      "Actualización de hardware (SSD, RAM, GPU) y optimización de software",
      "Recuperación de datos y limpieza de malware",
      "Soporte técnico presencial y remoto",
      "Instalación y estructuración de redes LAN/WAN"
    ],
    technologies: ["Windows", "Linux", "macOS", "Networking", "Hardware", "Diagnóstico de Sistemas"],
    link: "https://www.facebook.com/profile.php?id=61575732572602&locale=es_LA",
    linkText: "Visitar página de Facebook",
    participants: ["edwin-canche", "emmanuel-garcia", "orbelin-jimenez", "uziel-solis"]
  },
  {
    slug: "simo",
    title: "SIMO: Sistema de Información para la Movilidad",
    category: "Desarrollo y Análisis",
    summary: "Sistema integral de información diseñado para mejorar y gestionar la movilidad urbana.",
    description: [
      "SIMO es una plataforma de recolección y análisis de datos orientada a optimizar la movilidad y ofrecer insights precisos."
    ],
    mainImage: "/images/tw1.jpg",
    gallery: ["/images/tw1.jpg"],
    technologies: ["Datos", "Análisis", "Sistemas"],
    participants: ["edwin-canche", "emmanuel-garcia", "uziel-solis"]
  },
  {
    slug: "tortugas",
    title: "Tortugas",
    category: "Desarrollo Web",
    summary: "Plataforma web enfocada en el proyecto de conservación e información sobre tortugas.",
    description: [
      "Sitio interactivo y dinámico diseñado para concientizar y mostrar datos sobre el proyecto Tortugas."
    ],
    mainImage: "/images/tw3.jpg",
    gallery: ["/images/tw3.jpg"],
    technologies: ["HTML/CSS", "JavaScript", "Diseño Web"],
    participants: ["orbelin-jimenez"]
  },
  {
    slug: "geosint",
    title: "GeOSINT",
    category: "Inteligencia Geoespacial",
    summary: "Análisis e inteligencia de fuentes abiertas geoespaciales (Geospatial Open Source Intelligence).",
    description: [
      "Uso de herramientas de mapeo, recolección de datos públicos y análisis para inteligencia geoespacial orientada a la seguridad y planificación."
    ],
    mainImage: "/images/tw4.jpg",
    gallery: ["/images/tw4.jpg"],
    technologies: ["OSINT", "Mapeo", "Análisis de Datos"],
    participants: ["edwin-canche", "emmanuel-garcia", "orbelin-jimenez"]
  },
  {
    slug: "open-dlp",
    title: "Open-DLP",
    category: "Ciberseguridad",
    summary: "Sistema de Prevención de Pérdida de Datos (Data Loss Prevention) utilizando herramientas Open Source.",
    description: [
      "Implementación, configuración y monitoreo de soluciones de seguridad Open-DLP para proteger la integridad y confidencialidad de la información."
    ],
    mainImage: "/images/tw5.jpg",
    gallery: ["/images/tw5.jpg"],
    technologies: ["Ciberseguridad", "Open-DLP", "Auditoría"],
    participants: ["emmanuel-garcia"]
  },
  {
    slug: "jii",
    title: "JII (Jornada de Ingeniería Industrial)",
    category: "Desarrollo Web",
    summary: "Desarrollo del sitio oficial para la Jornada de Ingeniería Industrial de la Universidad del Caribe.",
    description: [
      "Plataforma web creada para gestionar la información, eventos y cronogramas de la Jornada de Ingeniería Industrial, facilitando el acceso a los asistentes."
    ],
    mainImage: "/images/tw6.jpg",
    gallery: ["/images/tw6.jpg"],
    technologies: ["Desarrollo Web", "Frontend"],
    participants: ["edwin-canche", "emmanuel-garcia", "orbelin-jimenez", "uziel-solis"]
  }
];
