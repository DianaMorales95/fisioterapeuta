import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Image from 'next/image';
import ButtonWhatsApp from './ButtonWhatsApp';

export default function Hero() {

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    return (
        // <div className="w-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 ">
        <section className="bg-[url('/assets/banner_5.png')] bg-no-repeat bg-cover  bg-center w-full md:h-[calc(100vh-140px)] lg:h-[calc(100vh-100px)] flex items-end ">

            <div className="container md:flex mx-auto items-center justify-center ">
                <div className="max-w-2xl mx-auto md:p-0 p-5 ">
                    <h1
                        data-aos="fade-right"
                        className="text-dark-blue md:text-5xl text-3xl font-bold text-center md:text-left">Juan Antonio Cajero Olea</h1>
                    <p
                        data-aos="fade-right"
                        className="italic md:text-2xl text-xl font-bold mt-2 text-center md:text-left text-black">Especialista en Rehabilitación y Medicina Física </p>
                    <p
                        data-aos="fade-up"
                        className="md:text-2xl text-lg font-bold mt-10 text-dark-blue text-center md:text-left">
                        Transforma tu salud con fisioterapia personalizada. <br />
                        ¡Agenda tu sesión inicial y comienza tu recuperación!
                    </p>
                    {/* <button
                        data-aos="fade-up"
                        className="hover:bg-yellow-300 rounded-xl mt-10 text-lg font-bold md:p-3 bg-[#f2c814] md:mt-10 mx-auto block md:inline relative animate-blink-custom"
                    >
                        <span className="animate-beat-custom">Recupera tu bienestar con un experto. ¡Reserva ahora!</span>
                    </button> */}
                    <ButtonWhatsApp text="Recupera tu bienestar con un experto. ¡Reserva ahora!" />
                </div>

                <div className="mx-auto ">
                    <Image
                        data-aos="fade-left"
                        src="/assets/fisio_juan_2.png"
                        alt="doctor"
                        width={600}
                        height={600}
                        className="md:w-[480px] w-[350px] mx-auto h-auto"
                    />
                </div>
            </div>

        </section>
        // </div>
    );
};


