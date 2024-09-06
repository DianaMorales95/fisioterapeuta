export const appConfig = {
    whatsappLink: "https://wa.me/523330061146",
  };
  
  export const generateWhatsAppLink = (message = "") => {
    const { whatsappLink } = appConfig;
    return `${whatsappLink}?text=${encodeURIComponent(message)}`;
  };
  