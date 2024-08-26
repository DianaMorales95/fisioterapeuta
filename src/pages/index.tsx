import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "../components/Hero";
import Promise from "../components/Promise";
import Benefits from "../components/Benefits";
import AboutMe from "../components/AboutMe";
import Services from "../components/Services";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Footer from "../components/Footer";
import BannerCTA from "../components/BannerCTA";
import Testimonial from "../components/Testimonial";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Promise />
    <main
      className={`flex min-h-screen flex-col items-center justify-between  ${inter.className}`}
    >
      <Hero />
      <Benefits />
      <AboutMe />
      <Services />
      <BannerCTA />
      <Testimonial />
      <Footer />
      <FloatingWhatsApp 
        phoneNumber="522221737098"
        accountName="Juan Antonio Cajero Olea"
        avatar="https://www.w3schools.com/w3images/avatar6.png"
        chatMessage="Hola, ¿en qué puedo ayudarte?"
        darkMode={false}
        statusMessage="Normalmente respondo en unos minutos"
        allowClickAway={true}
        placeholder="Escribe un mensaje..."
      />
    </main>
    </>
  );
}
