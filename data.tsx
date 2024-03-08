import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, MonitorCheck, Crop, Pencil, Computer, Book, Rocket, Speech, TabletSmartphone, Database, Briefcase, ClipboardList, Contact, Instagram } from "lucide-react";

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
        title: "Desarrollador Senior fullstack",
        subtitle: "GRUPO MOK",
        description: "Me desempeñe como desarrollador fullstack en diversos proyectos que me asignan, implementando nuevas funcionalidades y soporte a las aplicaciones, manejando las tecnologías de HTML5, CSS3, Javascript, Typescript, React, Angular, consumo de api Json en la parte del Frontend, y en la parte del backend con .NET implementando y optimizando la lógica del negocio. Manejaba el control de versiones en Git para la colaboración con todo el equipo de desarrollo, ejecutar los despliegues a los diferentes ambientes, aplicando las buenas prácticas de código.", 
        dateF: "Sep 2023",
        dateI: "Jul 2022",
    },
    {
        id: 2,
        title: "Desarrollador Senior",
        subtitle: "INFORMÁTICA & TECNOLOGÍA STEFANINI S.A",
        description: "Me desempeñe como desarrollador Frontend en diferentes proyectos usando los lenguajes de programación como Javascript y .Net con los frameworks de Angular e Ionic, haciendo uso de las tecnologías typescript, HTML5, CSS3, Bootstrap, angular material, azure entre otros, apoyo al equipo de desarrollo realizando nuevas funcionalidades y mantenimiento a la aplicación web implementando buenas prácticas para la escritura de código, despliegue de funcionalidades al ambiente de QA, manejo de repositorio con bitbucket.",
        dateF: "Jul 2022",
        dateI: "Oct 2021",
    },
    {
        id: 3,
        title: "Desarrollador Frontend Senior",
        subtitle: "GLOBAL HITSS",
        description: "Me desempeñe como desarrollador Frontend en varias aplicaciones usando el framework Angular versión 10 y reactJs, manejo de nodeJs, consumo de API REST, implementación del patrón redux, uso de las tecnologías HTML5, CSS3, Javacript, Typescript, Bootstrap; mejorando la interactividad y funcionalidad de las aplicaciones, manejo de repositorio con GIT, apoyo al equipo de QA en revisión de historias de usuario entre otras funciones.",
        dateF: "Sep 2021",
        dateI: "Nov 2020",
    },
    {
        id: 4,
        title: "Desarrollador",
        subtitle: "ALCANOS DE COLOMBIA S.A E.S.P",
        description: "Me desempeñaba como desarrollador Frontend en una aplicación interna de la compañía, implementando toda la interfaz gráfica de la aplicación, bajo los mockups dados por el equipo de diseño; se usaba el lenguaje de programación javascript bajo el framework Angular versión 8, manejaba las herramientas de HTML5, CSS3, Bootstrap typescript, consumo de API REST, manejo de repositorio con GIT, metodología ágil SCRUM.",
        dateF: "Ago 2020",
        dateI: "Oct 2019",
    },
    {
        id: 5,
        title: "Desarrollador junior",
        subtitle: "BLACK GOLDEN SAS",
        description: "Me desempeñaba como desarrollador Junior; realizaba las interfaces graficas en la aplicación mockflow, después de ser aprobadas las interfaces iniciábamos con el desarrollo usando el framework Angular en la parte del Frontend usando las herramientas de HTML5 CSS3, TYPESCRIPT, Bootstrap, y el backend se realizaba con el framework Laravel donde se implementada la logica del negocio. Se manejaba MySQL como sistema de gestión de base de datos.",
        dateF: "Sep 2019",
        dateI: "Oct 2018",
    },
]

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
        endCounter: 220,
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
        description: "Software de escritorio a la medida, utilizando los procesos más efectivos para su desarrollo",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <TabletSmartphone  />,
        title: "Aplicaciones",
        description: "Aplicaciones para tablets y smartphones, utilizando los mejores frameworks responsivos",
    },
    {
        icon: <Rocket />,
        title: "Mejoras",
        description: "Mejorar todo tipo de software ya desarrollado, aplicando las mejores prácticas y estándares",
    },
    {
        icon: <Database />,
        title: "Bases de datos",
        description: "Implementar y administrar bases de datos relacionales y no relacionales",
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
