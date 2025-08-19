export const SITE = {
  name: "Lucas Costa - Personal Trainer",
  tagline: "A sua evolução é a minha evolução!",
  city: "Salvador - BA",
  // WhatsApp (somente números com DDI e DDD)
  whatsappNumber: "55719834000651", // <— troque
  instagram: "https://instagram.com/treinador_lucascosta",
  domain: "https://lucas.yamaji.studio", // <— troque quando subir
  // Schema.org
  business: {
    legalName: "Lucas Costa Treinamentos",
    priceRange: "R$R$",
  },
};
export const waLink = (msg: string) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(msg)}`;
