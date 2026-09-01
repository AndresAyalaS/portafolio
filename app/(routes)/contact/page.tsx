"use client";

import { useState, type FormEvent } from "react";
import { MotionTransition } from "@/components/transition-component";
import TransitionPage from "@/components/transition-page";
import {
  ContactIcon,
  Instagram,
  Linkedin,
  Mail,
  MapPinned,
  PhoneCall,
  Send,
} from "lucide-react";

const WHATSAPP_NUMBER = "573186233827";

const email = process.env.NEXT_PUBLIC_EMAIL ?? "agayalas30@gmail.com";
const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN ?? "https://www.linkedin.com/in/andres-ayala-sanchez/";
const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM ?? "https://www.instagram.com/andres_gerardo_ayala/";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Hola! Soy ${form.name} (${form.email}).\n\n${form.message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <MotionTransition position="bottom" className="bottom-0 left-0 contents md:absolute">
      <>
        <TransitionPage />

        <div className="grid items-center justify-center min-h-screen max-w-5xl gap-10 mx-auto px-4 py-32 md:grid-cols-2">

          {/* Info de contacto */}
          <div>
            <h1 className="text-2xl leading-tight md:text-4xl md:mb-5">
              <ContactIcon className="inline-block text-secondary mb-1 mr-2" size={36} />
              <span className="font-bold">Contacto</span>
            </h1>
            <p className="mb-6 text-lg text-gray-300">
              Si necesitas ayuda en algún proyecto, no dudes en ponerte en
              contacto conmigo.
            </p>

            <ul className="space-y-3 text-gray-200">
              <li className="flex items-center gap-2 hover:text-secondary transition-colors">
                <MapPinned className="text-secondary shrink-0" size={20} />
                Ibagué - Tolima
              </li>
              <li className="flex items-center gap-2 hover:text-secondary transition-colors">
                <PhoneCall className="text-secondary shrink-0" size={20} />
                +57 3186233827
              </li>
              <li className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Mail className="text-secondary shrink-0" size={20} />
                {email}
              </li>
              <li className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Linkedin className="text-secondary shrink-0" size={20} />
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Instagram className="text-secondary shrink-0" size={20} />
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Formulario */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-white/10 hover:border-secondary/50 transition-all duration-300"
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-sm text-gray-300">
                Nombre
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Tu nombre"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-secondary focus:bg-white/10 transition-all duration-300"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm text-gray-300">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="tu@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-secondary focus:bg-white/10 transition-all duration-300"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-sm text-gray-300">
                Mensaje
              </label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="Cuéntame sobre tu proyecto..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-secondary focus:bg-white/10 transition-all duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 mt-2 px-6 py-3 rounded-lg bg-secondary hover:bg-secondary/80 hover:shadow-lg hover:shadow-orange-500/30 font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              <Send size={18} />
              Enviar por WhatsApp
            </button>
          </form>

        </div>
      </>
    </MotionTransition>
  );
};

export default ContactPage;
