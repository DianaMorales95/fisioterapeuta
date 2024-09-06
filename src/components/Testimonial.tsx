import TestimonialCard from "./TestimonialCard";

export default function Testimonial() {
    return (
        <div className="max-w-7xl md:py-6 mx-auto p-5 ">
            <h1
                data-aos="fade-down"
                className="md:text-4xl text-2xl font-bold md:mt-10 text-black">LO QUE <span className="text-blue-light">DICEN</span> MIS PACIENTES</h1>

            <div
                data-aos="fade-up"
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-10 mt-5 md:mb-10">
                <TestimonialCard
                    text="He tenido varias sesiones para descontracturar, electroterapia para los músculos y quema de grasa, estoy encantada con los resultados. Lo recomiendo ampliamente."
                    name="Alma"
                />
                  <TestimonialCard
                    text="Desde el primer momento en que llegué al consultorio, me sentí segura y en confianza. Es un lugar ameno, tranquilo y limpio, con un ambiente relajante que te permite concentrarte en la terapia. Además de ayudarme a mejorar mis lesiones, es un espacio en el que disfruto desconectarme y centrarme en mi sanación. La atención es excelente, y sin duda lo recomiendo a todos."
                    name="Perla"
                />
                <TestimonialCard
                    text="Juan es un excelente fisioterapeuta, a lo largo de varios meses he tenido sesiones con él para descontracturar por hacer deporte, aliviar dolor por mi embarazo y ahora para mejorar el aspecto de mi vientre después de mi cesárea. En todo me ha ayudado bastante. Lo recomiendo mucho."
                    name="Diana"
                />
                <TestimonialCard
                    text="Estaba presentando dolor por las mañanas y después de las sesiones con Juan me he sentido mucho mejor."
                    name="Carlos"
                />
                <TestimonialCard
                    text="100% recomendado me alivio de mi lesión de hombro, en muy pocas sesiones y sobre todo es muy profesional , sabe mucho de aparatologia y ejercicios manuales"
                    name="Gustavo"
                />
                <TestimonialCard
                    text="La verdad siempre quedamos felices con los resultados,cada que acudimos con él por algún dolor múscular no lo quita. Excelente profesional y amigo, lo queremos mucho,más que nuestro fisio es como de nuestra familia"
                    name="Cinthia"
                />
               
            </div>

        </div>
    )
}