import Image from "next/image";

export default function AboutMe() {
    return (
        <div className="md:my-10 my-8 mx-auto p-5">
            <div className="max-w-7xl md:flex justify-center">
                <div
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    className="">
                    <Image
                        src="/assets/Juan.jpeg"
                        alt="doctor"
                        width={480}
                        height={480}
                        className="rounded-xl"
                    />

                </div>
                <div
                    className="md:ml-10 md:mt-0 mt-5 "
                    data-aos="fade-left"
                    data-aos-duration="2000">
                    <h1 className="md:text-4xl text-2xl font-bold">ACERCA DE <span className="text-blue-500">MI</span></h1>

                    <h2 className="font-bold text-xl mb-3 mt-5">Formación académica</h2>
                    <hr className="w-[120px] h-1 mb-2 bg-blue-500" />
                    <ul className="ml-5">
                        <li className="font-bold list-disc">Enfermero General</li>
                        <li className="italic text-gray-600">2014-2017, Universidad de Guadalajara</li>
                        <li className="font-bold  list-disc">Licenciatura Terapia Física</li>
                        <li className="italic text-gray-600">2017-2021, Universidad de Guadalajara</li>
                    </ul>
                    <h2 className="font-bold text-xl mt-3 mb-2">Diplomados y cursos</h2>
                    <hr className="w-[120px] h-1 mb-2 bg-blue-500" />
                    <ul className="ml-5">
                        <li className="font-bold list-disc ">Diplomado en Fisioterapia en Trauma y Ortopedia</li>
                        <li className="italic text-gray-600">2021-2022</li>
                        <li className="font-bold  list-disc">Curso Vendaje Neuromuscular Avanzado</li>
                        <li className="italic text-gray-600">2021-2022</li>
                        <li className="font-bold  list-disc">Curso Punción Seca y Electropunción</li>
                        <li className="italic text-gray-600">2023</li>
                        <li className="font-bold  list-disc">Curso Osteopatía Estructural en Disfunciones de Movimiento</li>
                        <li className="italic text-gray-600">2023</li>
                    </ul>


                    <div className="flex">

                        <button className="rounded-xl  md:text-xl text-lg font-bold p-3 bg-[#f2c814] mt-10">Tu salud en manos profesionales. ¡Agenda tu consulta!</button>
                    </div>

                </div>


            </div>




        </div>
    )
}