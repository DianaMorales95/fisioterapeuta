import { generateWhatsAppLink } from '@/utils/whatsapp'

interface Props {
    text: string;
}

export default function ButtonWhatsApp({ text }: Props) {

    return (
        <button
            data-aos="fade-up"
            className="p-3  hover:bg-yellow-300 rounded-xl mt-10 text-lg font-bold  bg-[#f2c814]  mx-auto block md:inline relative animate-blink-custom"
            onClick={() =>
                window.open(
                    generateWhatsAppLink(
                        `¡Hola! Vengo desde tu sitio web, me gustaría agendar una sesión contigo.`
                    ),
                    "_blank"
                )}
        >
            <span className="animate-beat-custom">{text}</span>
        </button>
    )
}