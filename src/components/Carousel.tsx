import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Brand {
  name: string;
  imageUrl: string;
  link: string;
}

const BrandCarousel = ({ brands }: { brands: Brand[] }) => {
  const brandStyle = {
    width: "400px",
    height: "300px",
    display: "inline-block",
    marginRight: "20px",
  };

  // Estado para almacenar el porcentaje de la diapositiva centrada
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(33.33); // Valor por defecto

  // Función para obtener el porcentaje según el tamaño de la pantalla
  const getCenterSlidePercentage = () => {
    if (window.innerWidth < 768) return 100; // En pantallas pequeñas muestra 1 imagen
    if (window.innerWidth < 1024) return 50; // En tablets muestra 2 imágenes
    return 33.33; // En pantallas grandes muestra 3 imágenes
  };

  // useEffect para manejar los cambios del tamaño de la pantalla solo en el cliente
  useEffect(() => {
    // Asegúrate de que esto solo se ejecute en el lado del cliente
    const updateSlidePercentage = () => {
      setCenterSlidePercentage(getCenterSlidePercentage());
    };

    // Establecer el valor inicial al montar el componente
    updateSlidePercentage();

    // Añadir un listener para manejar cambios de tamaño de pantalla
    window.addEventListener("resize", updateSlidePercentage);

    // Limpiar el listener cuando el componente se desmonta
    return () => window.removeEventListener("resize", updateSlidePercentage);
  }, []); // Solo ejecutar una vez, al montar el componente

  return (
    <Carousel
      autoPlay
      interval={2000}
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      showArrows={true}
      showIndicators={false}
      emulateTouch
      centerMode
      centerSlidePercentage={centerSlidePercentage}
      stopOnHover={true}
      transitionTime={1000}
    >
      {brands.map((brand, index) => (
        <div className="mt-5 md:mt-14 flex justify-center items-center" key={index}>
          <img style={brandStyle} src={brand.imageUrl} alt={brand.name} className="object-cover rounded-xl" />
        </div>
      ))}
    </Carousel>
  );
};

export default BrandCarousel;
