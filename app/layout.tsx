import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Navbar from "@/components/navbar";
import Header from "@/components/header";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Andres Ayala - Desarrollador FullStack",
    template: "%s | Andres Ayala"
  },
  description: "Desarrollador FullStack con experiencia en Angular, React, .NET, Java Spring Boot y Node.js. Especializado en arquitectura de microservicios y desarrollo web escalable.",
  keywords: ["Desarrollador FullStack", "Angular", "React", "Next.js", ".NET", "Java", "Spring Boot", "Node.js", "Microservicios", "AWS", "Azure"],
  authors: [{ name: "Andres Gerardo Ayala" }],
  creator: "Andres Ayala",
  metadataBase: new URL('https://andres-ayala.netlify.app/'),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://andres-ayala.netlify.app/",
    title: "Andres Ayala - Desarrollador FullStack",
    description: "Desarrollador FullStack con experiencia en Angular, React, .NET, Java Spring Boot y Node.js.",
    siteName: "Andres Ayala Portfolio",
    images: [{
      url: "/home-4.webp",
      width: 1200,
      height: 630,
      alt: "Andres Ayala - Desarrollador FullStack"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Andres Ayala - Desarrollador FullStack",
    description: "Desarrollador FullStack especializado en tecnologías modernas",
    images: ["/home-4.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={urbanist.className}>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
