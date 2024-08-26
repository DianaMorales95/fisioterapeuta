import TestimonialCard from "./TestimonialCard";

export default function Testimonial() {
    return (
        <div className="max-w-7xl md:py-16 py-10 mx-auto p-5 ">
            <h1
                data-aos="fade-down"
                className="md:text-4xl text-2xl font-bold md:mt-10">LO QUE <span className="text-blue-500">DICEN</span> MIS PACIENTES</h1>

            <div 
            data-aos="fade-up"
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-10 mt-5 md:mb-10">
                <TestimonialCard
                    text="He tenido varias sesiones para descontracturar, electroterapia para los músculos y quema de grasa, estoy encantada con los resultados. Lo recomiendo ampliamente."
                    name="Alma"
                />
                <TestimonialCard 
                    text="Juan es un excelente fisioterapeuta, a lo largo de varios meses he tenido sesiones con él para descontracturar por hacer deporte, aliviar dolor por mi embarazo y ahora para mejorar el aspecto de mi vientre después de mi cesárea. En todo me ha ayudado bastante. Lo recomiendo mucho."
                    name="Diana"
                />
                <TestimonialCard 
                    text="Estaba presentando dolor por las mañanas y después de las sesiones con Juan me he sentido mucho mejor."
                    name="Paciente"
                />
            </div>

        </div>
    )
}