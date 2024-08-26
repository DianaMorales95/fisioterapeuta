import Image from "next/image"

type CardServiceProps = {
    title: string
    description: string
    image: string
}
export default function CardService({ title, description, image }: CardServiceProps) {
    return (
        <div
        data-aos="fade-up"
        >
            <Image
            alt=""
            src={image}
            className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
            width={500}
            height={500}
           
            />
            
            <div className="mt-4">
                <p className="font-medium text-2xl "> {title}</p>
                <hr className="w-96 h-1 bg-blue-500 mt-4 mb-5" />
                <p className="">{description}</p>
            </div>
        </div>
    )
}