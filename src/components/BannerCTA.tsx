import ButtonWhatsApp from "./ButtonWhatsApp";

export default function BannerCTA() {
    return (
        <div className="bg-blue-light p-10 w-full mt-10 ">
            <div className="max-w-7xl mx-auto md:flex items-center justify-center">
                <p
                    data-aos="fade-right"
                    className="text-white text-3xl text-center font-bold">No esperes más para sentirte mejor ¡Comienza hoy!</p>

                {/* <button
                    data-aos="fade-left"
                    className="rounded-xl animate-blink-custom md:text-xl text-lg font-bold p-3 bg-[#f2c814]  md:ml-10 block mx-auto mt-5 md:mt-0 "

                    >¡Programa tu sesión!</button> */}

                <div className="md:-mt-10 md:ml-10 mt-5">
                    <ButtonWhatsApp text="¡Programa tu sesión!" />
                </div>


            </div>


        </div>
    )
}