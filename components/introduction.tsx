import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image 
                    src="/home-4.webp" 
                    priority 
                    width={645} 
                    height={800} 
                    alt="Andres Ayala - Desarrollador FullStack" 
                    className="sm:mt-10"
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA="
                />
                <div className="flex flex-col justify-center max-w-32rem">
                    
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4x2 md:mb-10"> Hola! <br/> soy Andres Gerardo Ayala <br />
                        <TypeAnimation
                            sequence={[
                                'Un Desarrollador Web',
                                1000,
                                'Un Desarrollador de Escritorio',
                                1000,
                                'Un Desarrollador de aplicaciones',
                                1000,
                                'Un Desarrollador de APIs',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                        Como desarrollador FullStack tengo la habilidad de manejar tanto el desarrollo de Frontend (interfaz de usuario) como de backend (lógica y base de datos) de una aplicación o sitio web.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <Link 
                            href="/portfolio" 
                            className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
                            aria-label="Ver mis proyectos de desarrollo"
                        >
                            Ver proyectos
                        </Link>
                        <Link 
                            href="/contact"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary"
                            aria-label="Ir a página de contacto"
                        >
                            Contacta conmigo
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;