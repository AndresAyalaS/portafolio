import {
  BookText,
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Twitter,
  Rss,
  Twitch,
  Youtube,
  MonitorCheck,
  Crop,
  Pencil,
  Computer,
  Book,
  Rocket,
  Speech,
  TabletSmartphone,
  Database,
  Briefcase,
  ClipboardList,
  Contact,
  Instagram,
} from "lucide-react";

export const socialNetworks = [
  {
    id: 1,
    logo: <Instagram size={30} strokeWidth={1} />,
    src: "https://www.instagram.com/andres_gerardo_ayala/",
  },
  {
    id: 2,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/andres-ayala-sanchez/",
  },
  {
    id: 3,
    logo: <Twitter size={30} strokeWidth={1} />,
    src: "#!",
  },
  {
    id: 4,
    logo: <Rss size={30} strokeWidth={1} />,
    src: "#!",
  },
  {
    id: 5,
    logo: <Twitch size={30} strokeWidth={1} />,
    src: "#!",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/about-me",
  },
  {
    id: 3,
    title: "Book",
    icon: <ClipboardList size={25} color="#fff" strokeWidth={1} />,
    link: "/services",
  },
  {
    id: 4,
    title: "Target",
    icon: <Briefcase size={25} color="#fff" strokeWidth={1} />,
    link: "/portfolio",
  },
  {
    id: 5,
    title: "Home",
    icon: <Contact size={25} color="#fff" strokeWidth={1} />,
    link: "/contact",
  },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Desarrollador fullstack",
    subtitle: "MICHAEL PAGE",
    description: (
      <div>
        • Desarrollé soluciones web escalables con Angular (frontend) y .NET
        (backend).
        <br />
        • Implementé una arquitectura en capas en el backend, mejorando la
        organización y mantenibilidad del código.
        <br />
        • Construí APIs RESTful para una integración fluida entre frontend y
        backend.
        <br />• Colaboré en un entorno ágil utilizando Git para control de
        versiones y planificación iterativa.
      </div>
    ),
    dateF: "Feb 2025",
    dateI: "Ene 2025",
  },
  {
    id: 2,
    title: "Desarrollador fullstack",
    subtitle: "LINKTIC",
    description: (
      <div>
        • Lideré el desarrollo de sistemas modulares desde cero con Java (Spring
        Boot) y .NET.
        <br />
        • Diseñé e implementé una arquitectura basada en microservicios,
        permitiendo escalabilidad y despliegue independiente.
        <br />
        • Realicé pruebas unitarias y de integración con una cobertura del 85%,
        reduciendo errores en producción.
        <br />
        • Aproveché servicios de AWS para el despliegue y SonarQube para
        análisis de calidad del código, mejorando la seguridad el rendimiento.
        <br />• Adopté principios de código limpio (Clean Code), facilitando el
        trabajo colaborativo y la mantenibilidad del sistema.
      </div>
    ),
    dateF: "Dic 2024",
    dateI: "Abr 2024",
  },
  {
    id: 3,
    title: "Desarrollador Senior fullstack",
    subtitle: "GRUPO MOK",
    description: (
      <div>
        • Implementé funcionalidades en el frontend con Angular y React, y
        desarrollé lógica de negocio en .NET, optimizando el rendimiento.
        <br />
        • Brindé soporte a aplicaciones en producción y realicé mejoras
        continuas en base a retroalimentación del usuario.
        <br />• Mantuve altos estándares de calidad mediante control de
        versiones en Git y buenas prácticas de codificación.
      </div>
    ),
    dateF: "Sep 2023",
    dateI: "Jul 2022",
  },
  {
    id: 4,
    title: "Desarrollador Senior",
    subtitle: "INFORMÁTICA & TECNOLOGÍA STEFANINI S.A",
    description: (
      <div>
        • Desarrollé interfaces con Angular e Ionic y lógica backend con .NET.
        <br />
        • Utilicé Azure para despliegue y Bitbucket para gestión de versiones.
        <br />• Contribuí a la mejora continua del producto en colaboración con
        el equipo de QA.
      </div>
    ),
    dateF: "Jul 2022",
    dateI: "Oct 2021",
  },
  {
    id: 5,
    title: "Desarrollador Frontend Senior",
    subtitle: "GLOBAL HITSS",
    description: (
      <div>
        • Desarrollé interfaces dinámicas usando Angular, ReactJS y Redux,
        mejorando la experiencia del usuario final.
        <br />
        • IConsumí e integré APIs REST con Node.js, reduciendo la latencia de
        carga en más de un 20%.
        <br />
        • Colaboré con equipos QA para validar historias de usuario, asegurando
        la entrega de productos con altos estándares de calidad.
        <br />• Versioné el código con Git, asegurando integridad y trazabilidad
        en el ciclo de desarrollo.
      </div>
    ),
    dateF: "Sep 2021",
    dateI: "Nov 2020",
  },
  {
    id: 6,
    title: "Desarrollador",
    subtitle: "ALCANOS DE COLOMBIA S.A E.S.P",
    description: (
      <div>
        • Desarrollé componentes frontend usando Angular 8, HTML5, CSS3 y
        Bootstrap, cumpliendo especificaciones de diseño UX/UI.
        <br />
        • Integré servicios web a través de APIs REST, fortaleciendo la
        interoperabilidad del sistema.
        <br />• Participé activamente en metodologías ágiles Scrum, entregando
        mejoras iterativas en sprints y utilicé Git para control de versiones.
      </div>
    ),
    dateF: "Ago 2020",
    dateI: "Oct 2019",
  },
  {
    id: 7,
    title: "Desarrollador junior",
    subtitle: "BLACK GOLDEN SAS",
    description: (
      <div>
        • Desarrollador Junior encargado de la creación de interfaces gráficas
        en Mockflow, asegurando un diseño intuitivo y atractivo.
        <br />
        • Participación activa en el desarrollo Frontend utilizando el framework
        Angular, junto con herramientas modernas como HTML5, CSS3, TypeScript y
        Bootstrap.
        <br />
        • Implementación de la lógica de negocio en el backend empleando el
        framework Laravel y gestionando datos con MySQL como sistema de gestión
        de bases de datos.
        <br />
      </div>
    ),
    dateF: "Sep 2019",
    dateI: "Oct 2018",
  },
];

export const dataCounter = [
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

export const serviceData = [
  {
    icon: <MonitorCheck />,
    title: "Escritorio",
    description:
      "Software de escritorio a la medida, utilizando los procesos más efectivos para su desarrollo",
  },
  {
    icon: <Pencil />,
    title: "Diseño web",
    description:
      "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
  },
  {
    icon: <Computer />,
    title: "Desarrollo web",
    description:
      "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
  },
  {
    icon: <TabletSmartphone />,
    title: "Aplicaciones",
    description:
      "Aplicaciones para tablets y smartphones, utilizando los mejores frameworks responsivos",
  },
  {
    icon: <Rocket />,
    title: "Mejoras",
    description:
      "Mejorar todo tipo de software ya desarrollado, aplicando las mejores prácticas y estándares",
  },
  {
    icon: <Database />,
    title: "Bases de datos",
    description:
      "Implementar y administrar bases de datos relacionales y no relacionales",
  },
];

export const dataPortfolio = [
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
    urlGithub: "#!",
    urlDemo: "https://magoblackappsimpsons.netlify.app/",
  },
  {
    id: 3,
    title: "Sistema de préstamos",
    image: "/image-6.webp",
    urlGithub: "#!",
    urlDemo: "https://magoblack-prestamoequipos.netlify.app/",
  },
  {
    id: 4,
    title: "Ideas Creativas",
    image: "/image-2.webp",
    urlGithub: "#!",
    urlDemo: "https://black-bank.netlify.app/",
  },
];
