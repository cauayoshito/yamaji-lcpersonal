// pages/_app.js
import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Meta essencial para mobile */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* (Opcional) Marca cliques em links do WhatsApp no GA4, se gtag existir */}
      <Script id="whatsapp-clicks" strategy="afterInteractive">
        {`
          window.addEventListener('click', function(e) {
            var a = e.target.closest('a[href*="wa.me"]');
            if (a && window.gtag) {
              window.gtag('event', 'click_whatsapp', {
                location: window.location.pathname
              });
            }
          });
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}
