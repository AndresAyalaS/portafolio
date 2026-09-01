import type { LucideIcon } from "lucide-react";
import {
  HomeIcon,
  UserRound,
  Linkedin,
  MonitorCheck,
  Pencil,
  Computer,
  Rocket,
  TabletSmartphone,
  Database,
  Briefcase,
  ClipboardList,
  Contact,
  Instagram,
} from "lucide-react";

export const socialNetworks: { id: number; logo: LucideIcon; label: string; src: string }[] = [
  {
    id: 1,
    logo: Instagram,
    label: "Instagram",
    src: "https://www.instagram.com/andres_gerardo_ayala/",
  },
  {
    id: 2,
    logo: Linkedin,
    label: "LinkedIn",
    src: "https://www.linkedin.com/in/andres-ayala-sanchez/",
  },
];

export const itemsNavbar: { id: number; title: string; icon: LucideIcon; link: string }[] = [
  {
    id: 1,
    title: "Home",
    icon: HomeIcon,
    link: "/",
  },
  {
    id: 2,
    title: "Sobre mí",
    icon: UserRound,
    link: "/about-me",
  },
  {
    id: 3,
    title: "Servicios",
    icon: ClipboardList,
    link: "/services",
  },
  {
    id: 4,
    title: "Portafolio",
    icon: Briefcase,
    link: "/portfolio",
  },
  {
    id: 5,
    title: "Contacto",
    icon: Contact,
    link: "/contact",
  },
];

export const dataAboutPage: {
  id: number;
  title: string;
  subtitle: string;
  description: string[];
  dateF: string;
  dateI: string;
}[] = [
  {
    id: 1,
    title: "Desarrollador fullstack",
    subtitle: "MICHAEL PAGE",
    description: [
      "Desarrollé soluciones web escalables con Angular (frontend) y .NET (backend).",
      "Implementé una arquitectura en capas en el backend, mejorando la organización y mantenibilidad del código.",
      "Construí APIs RESTful para una integración fluida entre frontend y backend.",
      "Colaboré en un entorno ágil utilizando Git para control de versiones y planificación iterativa.",
    ],
    dateF: "Feb 2025",
    dateI: "Ene 2025",
  },
  {
    id: 2,
    title: "Desarrollador fullstack",
    subtitle: "LINKTIC",
    description: [
      "Lideré el desarrollo de sistemas modulares desde cero con Java (Spring Boot) y .NET.",
      "Diseñé e implementé una arquitectura basada en microservicios, permitiendo escalabilidad y despliegue independiente.",
      "Realicé pruebas unitarias y de integración con una cobertura del 85%, reduciendo errores en producción.",
      "Aproveché servicios de AWS para el despliegue y SonarQube para análisis de calidad del código, mejorando la seguridad y el rendimiento.",
      "Adopté principios de código limpio (Clean Code), facilitando el trabajo colaborativo y la mantenibilidad del sistema.",
    ],
    dateF: "Dic 2024",
    dateI: "Abr 2024",
  },
  {
    id: 3,
    title: "Desarrollador Senior fullstack",
    subtitle: "GRUPO MOK",
    description: [
      "Implementé funcionalidades en el frontend con Angular y React, y desarrollé lógica de negocio en .NET, optimizando el rendimiento.",
      "Brindé soporte a aplicaciones en producción y realicé mejoras continuas en base a retroalimentación del usuario.",
      "Mantuve altos estándares de calidad mediante control de versiones en Git y buenas prácticas de codificación.",
    ],
    dateF: "Sep 2023",
    dateI: "Jul 2022",
  },
  {
    id: 4,
    title: "Desarrollador Senior",
    subtitle: "INFORMÁTICA & TECNOLOGÍA STEFANINI S.A",
    description: [
      "Desarrollé interfaces con Angular e Ionic y lógica backend con .NET.",
      "Utilicé Azure para despliegue y Bitbucket para gestión de versiones.",
      "Contribuí a la mejora continua del producto en colaboración con el equipo de QA.",
    ],
    dateF: "Jul 2022",
    dateI: "Oct 2021",
  },
  {
    id: 5,
    title: "Desarrollador Frontend Senior",
    subtitle: "GLOBAL HITSS",
    description: [
      "Desarrollé interfaces dinámicas usando Angular, ReactJS y Redux, mejorando la experiencia del usuario final.",
      "Consumí e integré APIs REST con Node.js, reduciendo la latencia de carga en más de un 20%.",
      "Colaboré con equipos QA para validar historias de usuario, asegurando la entrega de productos con altos estándares de calidad.",
      "Versioné el código con Git, asegurando integridad y trazabilidad en el ciclo de desarrollo.",
    ],
    dateF: "Sep 2021",
    dateI: "Nov 2020",
  },
  {
    id: 6,
    title: "Desarrollador",
    subtitle: "ALCANOS DE COLOMBIA S.A E.S.P",
    description: [
      "Desarrollé componentes frontend usando Angular 8, HTML5, CSS3 y Bootstrap, cumpliendo especificaciones de diseño UX/UI.",
      "Integré servicios web a través de APIs REST, fortaleciendo la interoperabilidad del sistema.",
      "Participé activamente en metodologías ágiles Scrum, entregando mejoras iterativas en sprints y utilicé Git para control de versiones.",
    ],
    dateF: "Ago 2020",
    dateI: "Oct 2019",
  },
  {
    id: 7,
    title: "Desarrollador junior",
    subtitle: "BLACK GOLDEN SAS",
    description: [
      "Creación de interfaces gráficas en Mockflow, asegurando un diseño intuitivo y atractivo.",
      "Participación activa en el desarrollo Frontend utilizando Angular, junto con HTML5, CSS3, TypeScript y Bootstrap.",
      "Implementación de la lógica de negocio en el backend empleando Laravel y MySQL como sistema de gestión de bases de datos.",
    ],
    dateF: "Sep 2019",
    dateI: "Oct 2018",
  },
];

export const dataCounter: {
  id: number;
  endCounter: number;
  text: string;
  lineRight: boolean;
  lineRightMobile: boolean;
}[] = [
  {
    id: 0,
    endCounter: 6,
    text: "Años de experiencia",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 80,
    text: "Clientes satisfechos",
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 2,
    endCounter: 50,
    text: "Proyectos finalizados",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 3,
    endCounter: 30,
    text: "Premios ganadores",
    lineRight: false,
    lineRightMobile: false,
  },
];

export const serviceData: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: MonitorCheck,
    title: "Escritorio",
    description:
      "Software de escritorio a la medida, utilizando los procesos más efectivos para su desarrollo",
  },
  {
    icon: Pencil,
    title: "Diseño web",
    description:
      "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
  },
  {
    icon: Computer,
    title: "Desarrollo web",
    description:
      "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
  },
  {
    icon: TabletSmartphone,
    title: "Aplicaciones",
    description:
      "Aplicaciones para tablets y smartphones, utilizando los mejores frameworks responsivos",
  },
  {
    icon: Rocket,
    title: "Mejoras",
    description:
      "Mejorar todo tipo de software ya desarrollado, aplicando las mejores prácticas y estándares",
  },
  {
    icon: Database,
    title: "Bases de datos",
    description:
      "Implementar y administrar bases de datos relacionales y no relacionales",
  },
];

export const dataPortfolio: {
  id: number;
  title: string;
  image: string;
  urlGithub: string;
  urlDemo: string;
}[] = [
  {
    id: 1,
    title: "Black Bank",
    image: "/robot.webp",
    urlGithub: "#!",
    urlDemo: "https://black-bank.netlify.app/",
  },
  {
    id: 2,
    title: "THE SIMPSONS APP",
    image: "/simpsons.webp",
    urlGithub: "https://github.com/AndresAyalaS/simpsons-app",
    urlDemo: "https://magoblackappsimpsons.netlify.app/",
  },
  {
    id: 3,
    title: "Sistema de préstamos",
    image: "/image-6.webp",
    urlGithub: "https://github.com/AndresAyalaS/prestamo-equipos-frontend",
    urlDemo: "https://magoblack-prestamoequipos.netlify.app/",
  },
  {
    id: 4,
    title: "Sistema de eventos",
    image: "/image-2.webp",
    urlGithub: "https://github.com/AndresAyalaS/eventos-api",
    urlDemo: "https://eventos-web-aa.netlify.app/",
  },
];
