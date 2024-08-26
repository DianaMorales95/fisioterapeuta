import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    return (

        <section className="w-full md:h-[calc(100vh-140px)] lg:h-[calc(100vh-100px)] bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 flex items-center justify-center">
            <div className="container md:flex items-center justify-center p-5">
                <div className="max-w-2xl">
                    <h1
                        data-aos="fade-right"
                        className="text-white md:text-5xl text-3xl font-bold text-center md:text-left">Juan Antonio Cajero Olea</h1>
                    <p
                        data-aos="fade-right"
                        className="italic md:text-2xl text-xl font-bold mt-2 text-center md:text-left">Fisioterapeuta Especialista en rehabilitación en trauma y ortopedia y neurórehabilitacion. </p>
                    <p
                        data-aos="fade-up"
                        className="md:text-2xl text-lg font-bold mt-10 text-white text-center md:text-left">
                        Transforma tu salud con fisioterapia personalizada. <br />
                        ¡Agenda tu sesión inicial y comienza tu recuperación hoy mismo!
                    </p>
                    <button
                        data-aos="fade-up"
                        className="rounded-xl  md:text-xl text-lg font-bold p-3 bg-[#f2c814] mt-10 mx-auto block md:inline "> Recupera tu bienestar con un experto. ¡Reserva ahora!</button>
                </div>

                <div className="mt-14 mx-auto ">
                    {/* <Image
                        data-aos="fade-left"
                        src="/assets/fisio3.png"
                        alt="doctor"
                        width={600}
                        height={600}
                        className="md:w-[600px] w-[300px] mx-auto"
                    /> */}
                </div>
            </div>

        </section>

    );
};


