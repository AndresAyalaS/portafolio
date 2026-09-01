import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";

const ServicesPage = () => {
  return (
    <>
      <TransitionPage />
      <ContainerPage>
        <CircleImage />
        <AvatarServices />
        <div className="grid justify-center max-w-5xl gap-6 mx-auto md:grid-cols-2">
          <div>
            <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
              Mis <span className="font-bold text-secondary"> servicios.</span>
            </h1>
            <p className="mb-3 text-xl text-gray-300">
              Ofrezco servicios como desarrollador FullStack con sólida
              experiencia. Especializado en el desarrollo de aplicaciones web
              utilizando Angular, React, Vue, .NET, Java (Spring Boot) laravel y
              Node.js. Experto en el diseño e implementación de arquitecturas
              escalables como microservicios, arquitectura en capas y Clean
              Architecture. Competente en el consumo de APIs RESTful, pruebas
              automatizadas y despliegue en la nube. Certificado como Scrum
              Master, con enfoque ágil, calidad de código y colaboración
              efectiva.
            </p>
          </div>

          {/* SLIDER */}
          <div>
            <SliderServices />
          </div>
        </div>
      </ContainerPage>
    </>
  );
};

export default ServicesPage;
