import Image from "next/image";

export default function Benefits() {
    return (
        <section className="bg-[#071f43] w-full flex justify-center items-center">
            <div className="container py-12">

                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <div className="flex justify-center items-center mb-4  rounded-full ">
                            <Image
                                src="/assets/atencion.png"
                                alt="Doctor"
                                width={80}
                                height={80}
                                className=""
                            />
                        </div>
                        <h3 className="mb-2 text-xl text-center font-bold text-[#f2c814]">Atención Personalizada</h3>
                        <p className="text-white text-center  ">Tratamientos adaptados a tus necesidades específicas.</p>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="2000"
                    >
                        <div className="flex justify-center items-center mb-4  rounded-full ">
                            <Image
                                src="/assets/recuperacion.png"
                                alt="Doctor"
                                width={80}
                                height={80}
                                className=""
                            />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-[#f2c814] text-center ">Recuperación Efectiva</h3>
                        <p className="text-white text-center ">Acelera tu proceso de sanación y vuelve a tu rutina.</p>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="3000"
                    >
                        <div className="flex justify-center items-center mb-4  rounded-full ">
                            <Image
                                src="/assets/calidad.png"
                                alt="Doctor"
                                width={80}
                                height={80}
                                className=""
                            />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-[#f2c814]  text-center ">Mejora Tu Calidad de Vida</h3>
                        <p className="text-white text-center ">Alcanza un mayor bienestar y funcionalidad.</p>
                    </div>


                </div>
            </div>
        </section>
    )
}