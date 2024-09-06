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
                className="h-60 w-full rounded-xl object-cover "
                width={500}
                height={500}

            />

            <div className="mt-4">
                <p className="font-medium text-2xl "> {title}</p>
                <hr className="md:w-96 h-1 bg-blue-light mt-4 mb-5" />
                <p className="">{description}</p>
            </div>
        </div>
    )
}