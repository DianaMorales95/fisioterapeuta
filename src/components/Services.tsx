import Link from "next/link"
import Image from "next/image"
import CardService from "./CardService"

export default function Services() {
    return (
        <div className="flex justify-center md:py-4 py-10 mx-auto md:p-0  ">
            <div className="max-w-7xl p-5">
                <h1
                    data-aos="fade-down"
                    className="md:text-4xl text-2xl font-bold">FISIOTERAPIA <span className="text-blue-500">ESPECIALIZADA</span> PARA CADA NECESIDAD</h1>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-10 mt-5">
                    <CardService

                        title="Fisioterapia Deportiva"
                        description="Prevención, evaluación, tratamiento y rehabilitación de lesiones y dolencias relacionadas con el deporte y la actividad física."
                        image="/assets/deportiva.png"
                    />

                    <CardService
                        title="Fisioterapia Traumatológica"
                        description="Tratamiento y rehabilitación de lesiones y traumas musculoesqueléticos, como fracturas, prótesis, esguinces, luxaciones entre otros."
                        image="/assets/traumatologica.png"
                    />

                    <CardService
                        title="Fisioterapia Neurológica"
                        description="Tratamiento y rehabilitación de personas con trastornos y lesiones del sistema nervioso central y periférico como Accidente cerebrovascular (ACV), Traumatismo craneoencefálico (TCE), Enfermedad de Parkinson, Esclerosis múltiple, Parálisis cerebral, Lesiones de la médula espinal."
                        image="/assets/neurologica.png"
                    />

                </div>


            </div>


        </div>
    )
}