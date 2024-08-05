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
    subtitle: "LINKTIC",
    description:
      "Desarrollador Fullstack en el sector financiero, liderando la creación de un sistema modular desde cero, utilizando Java y Spring Boot, con énfasis en pruebas unitarias y buenas prácticas de código limpio, además de aprovechar los servicios de AWS.",
    dateF: "Actual",
    dateI: "Abr 2024",
  },
  {
    id: 2,
    title: "Desarrollador Senior fullstack",
    subtitle: "GRUPO MOK",
    description: (
      <div>
        • Desarrollador Fullstack en múltiples proyectos, implementando nuevas
        funcionalidades y ofreciendo soporte a aplicaciones utilizando
        tecnologías avanzadas como HTML5, CSS3, Javascript, Typescript, React y
        Angular en el Frontend. <br />
        • Implementación de nuevas funcionalidades que mejoran la experiencia
        del usuario.
        <br />
        • Optimización de la lógica del negocio en .NET para mayor eficiencia.
        <br />
        • Colaboración efectiva con el equipo a través de control de versiones
        en Git.
        <br />
        • Despliegue ágil en diferentes ambientes, garantizando calidad y
        rapidez.
        <br />• Aplicación de buenas prácticas de código para mantener
        estándares altos.
      </div>
    ),
    dateF: "Sep 2023",
    dateI: "Jul 2022",
  },
  {
    id: 3,
    title: "Desarrollador Senior",
    subtitle: "INFORMÁTICA & TECNOLOGÍA STEFANINI S.A",
    description: (
      <div>
        • Desarrollador Frontend con amplia experiencia en Javascript y .Net,
        utilizando frameworks de Angular e Ionic para la creación de
        aplicaciones web innovadoras.
        <br /> • Dominio de tecnologías como TypeScript, HTML5, CSS3, Bootstrap,
        Angular Material y Azure.
        <br /> • Colaboración efectiva en el equipo de desarrollo para
        implementar nuevas funcionalidades y realizar mantenimiento de
        aplicaciones, siguiendo buenas prácticas de codificación.
        <br /> • Experiencia en despliegue de funcionalidades en entornos de QA
        y gestión de repositorios utilizando Bitbucket.
        <br /> • Resultados tangibles: aplicaciones web mejoradas y usuarios
        satisfechos.
      </div>
    ),
    dateF: "Jul 2022",
    dateI: "Oct 2021",
  },
  {
    id: 4,
    title: "Desarrollador Frontend Senior",
    subtitle: "GLOBAL HITSS",
    description: (
      <div>
        • Desarrollador Frontend con experiencia en Angular 10 y ReactJS,
        optimizando aplicaciones para mejorar la interactividad y funcionalidad.
        <br />
        • Implementé NodeJs y consumí APIs REST, optimizando la conectividad.
        <br />
        • Apliqué el patrón Redux para una gestión eficiente del estado de las
        apps.
        <br />
        • Utilicé HTML5, CSS3 y Bootstrap para crear interfaces visuales
        atractivas.
        <br />
        • Gestioné repositorios con GIT, garantizando un flujo colaborativo
        efectivo.
        <br />• Colaboré con QA en la revisión de historias para asegurar la
        calidad del producto.
      </div>
    ),
    dateF: "Sep 2021",
    dateI: "Nov 2020",
  },
  {
    id: 4,
    title: "Desarrollador",
    subtitle: "ALCANOS DE COLOMBIA S.A E.S.P",
    description: (
      <div>
        • Desarrollador Frontend en una aplicación interna, encargándome de la
        implementación de la interfaz gráfica según mockups del equipo de
        diseño.
        <br />
        • Utilización de JavaScript con el framework Angular 8, optimizando el
        rendimiento y la experiencia de usuario.
        <br />
        • Dominio de HTML5, CSS3, Bootstrap y TypeScript para crear interfaces
        responsivas y atractivas.
        <br />
        • Integración y consumo de APIs REST para una funcionalidad robusta de
        la aplicación.
        <br />• Gestión de versiones mediante GIT y trabajo en un entorno de
        metodología ágil SCRUM para fomentar la colaboración y la eficiencia.
      </div>
    ),
    dateF: "Ago 2020",
    dateI: "Oct 2019",
  },
  {
    id: 5,
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
    title: "Desarrollo Web Ágil",
    image: "/image-2.webp",
    urlGithub: "#!",
    urlDemo: "https://black-bank.netlify.app/",
  },
  {
    id: 3,
    title: "Estrategias Web",
    image: "/image-5.webp",
    urlGithub: "#!",
    urlDemo: "https://black-bank.netlify.app/",
  },
  {
    id: 4,
    title: "Ideas Creativas",
    image: "/image-6.webp",
    urlGithub: "#!",
    urlDemo: "https://black-bank.netlify.app/",
  },
];
