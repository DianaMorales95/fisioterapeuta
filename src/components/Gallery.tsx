import BrandCarousel from "./Carousel"
export default function Gallery() {
    const brands = [
        { name: 'galeria1', imageUrl: 'assets/gallery/gal1.jpg', link: '' },
        { name: 'galeria2', imageUrl: 'assets/gallery/gal2.jpg', link: '' },
        { name: 'galeria3', imageUrl: 'assets/gallery/gal3.jpg', link: '' },
        { name: 'galeria4', imageUrl: 'assets/gallery/gal4.jpg', link: '' },
        { name: 'galeria5', imageUrl: 'assets/gallery/gal5.jpg', link: '' },
        { name: 'galeria6', imageUrl: 'assets/gallery/gal6.jpg', link: '' },
        { name: 'galeria7', imageUrl: 'assets/gallery/gal7.jpg', link: '' },
        { name: 'galeria8', imageUrl: 'assets/gallery/gal8.jpg', link: '' },
        { name: 'galeria9', imageUrl: 'assets/gallery/gal9.jpg', link: '' },
        { name: 'galeria10', imageUrl: 'assets/gallery/gal10.jpg', link: '' },
        { name: 'galeria11', imageUrl: 'assets/gallery/gal11.jpg', link: '' },
        { name: 'galeria12', imageUrl: 'assets/gallery/gal12.jpg', link: '' },
        { name: 'galeria13', imageUrl: 'assets/gallery/gal13.jpg', link: '' },


    ];

    return (
        <div className="md:my-10 my-8 mx-auto p-5">
            <h1
                data-aos="fade-down"
                className="md:text-4xl text-2xl font-bold text-black">FISIOTERAPIA EN <span className="text-blue-light">ACCIÓN</span></h1>
            <div
                data-aos="fade-up"
                className="max-w-7xl md:flex justify-center">

                <BrandCarousel brands={brands} />

            </div>
        </div>
    )
}