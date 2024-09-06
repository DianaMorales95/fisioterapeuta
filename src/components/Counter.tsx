export default function Counter() {
    return (
        <section className="bg-[#071f43] w-full flex justify-center items-center">
            <div className="container py-12 flex justify-center">

                <div className="text-center space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 mx-auto">
                    <h2
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <span className="flex  text-white text-5xl font-extrabold mb-2">
                            + 80
                        </span>
                        <span className="inline-flex font-semibold bg-clip-text text-transparent text-blue-light mb-2">Pacientes rehabilitados</span>
                    </h2>

                    <h2
                        data-aos="fade-up"
                        data-aos-duration="1500"
                    >
                        <span className="flex  text-white text-5xl font-extrabold mb-2">
                            + 10
                        </span>
                        <span className="inline-flex font-semibold bg-clip-text text-transparent text-blue-light mb-2">Agentes físicos</span>
                    </h2>

                    <h2
                        data-aos="fade-up"
                        data-aos-duration="2500"
                    >
                        <span className="flex text-white text-5xl font-extrabold mb-2">
                            + 10
                        </span>
                        <span className="inline-flex font-semibold bg-clip-text text-transparent text-blue-light mb-2">Certificaciones Nacionales <br />e Internacionales</span>
                    </h2>
                </div>

            </div>

        </section>


    )
}