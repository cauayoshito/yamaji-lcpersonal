import Head from "next/head";

export default function Seo({
  title = "Lucas Costa - Personal Trainer",
  description = "Treinos presenciais e online com acompanhamento real. Resultados consistentes e método claro.",
  canonical = "https://lucas.yamaji.studio", // troque pelo domínio real
  image = "/og-image.jpg", // coloque essa imagem dentro de /public
  children,
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {children}
    </Head>
  );
}
