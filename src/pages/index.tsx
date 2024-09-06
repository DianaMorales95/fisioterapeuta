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
import Gallery from "../components/Gallery";
import Counter from "../components/Counter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Promise />
    <main
      className={`flex min-h-screen flex-col items-center justify-between overflow-x-hidden ${inter.className}`}
    >
      <Hero />
      <Benefits />
      <AboutMe />
      <Counter />
      <Services />
      
      <BannerCTA />

      <Gallery />
      <Testimonial />
      <Footer />
      <FloatingWhatsApp 
        phoneNumber="523330061146"
        accountName="Juan Antonio Cajero Olea"
        avatar="/assets/avatar.png"
        chatMessage="¡Hola!, ¿en qué puedo ayudarte?"
        darkMode={false}
        statusMessage="Normalmente respondo en unos minutos"
        allowClickAway={true}
        placeholder="Escribe un mensaje..."
      />
    </main>
    </>
  );
}
