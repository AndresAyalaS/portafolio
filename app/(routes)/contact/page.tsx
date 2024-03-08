"use client";

import { MotionTransition } from "@/components/transition-component";
import TransitionPage from "@/components/transition-page";
import {
  ContactIcon,
  Instagram,
  Linkedin,
  Mail,
  MapPinned,
  PhoneCall,
} from "lucide-react";

const ContactPage = () => {
  return (
    <MotionTransition position='bottom' className="bottom-0 left-0 contents md:absolute">

    <>
      <TransitionPage />

      <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto">
        <div className="max-w-[450px]">
          <h1 className="text-2xl leading-tight md:text-left md:text-4xl md:mb-5">
            <ContactIcon
              className="inline-block text-secondary mb-1"
              size={36}
            ></ContactIcon>
            <span className="font-bold">Contacto</span>
          </h1>
          <p className="mb-3 text-xl text-gray-300">
            Si necesitas ayuda en algún proyecto, no dudes en ponerte en
            contacto conmigo.
          </p>
          <p className="hover:text-secondary">
            <MapPinned className="inline-flex text-secondary mr-1 my-3"></MapPinned>
            Ibagué - Tolima
          </p>
          <p className="hover:text-secondary">
            <PhoneCall className="inline-flex text-secondary mr-1 my-3"></PhoneCall>
            +57 3186233827
          </p>
          <p className="hover:text-secondary">
            <Mail className="inline-flex text-secondary mr-1 my-3"></Mail>
            agayalas30@gmail.com
          </p>
          <p className="hover:text-secondary">
            <Linkedin className="inline-flex text-secondary mr-1 my-3"></Linkedin>
            <a
              href="https://www.linkedin.com/in/andres-ayala-sanchez/"
              target="_blank"
            >
              Linkedin
            </a>
          </p>
          <p className="hover:text-secondary">
            <Instagram className="inline-flex text-secondary mr-1 my-3"></Instagram>
            <a
              href="https://www.instagram.com/andres_gerardo_ayala/"
              target="_blank"
            >
              Instagram
            </a>
          </p>
        </div>
      </div>
    </>
    </MotionTransition>
  );
};

export default ContactPage;
