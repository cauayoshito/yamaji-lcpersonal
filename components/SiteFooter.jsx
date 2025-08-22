// components/SiteFooter.jsx
import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid gap-8 md:grid-cols-[1fr_auto_1fr] items-center">
        {/* Esquerda: logo + tagline */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png" // usa a tua logo aprovada
            alt="Lucas Costa Personal"
            width={110}
            height={40}
            className="h-20 w-auto"
          />
          <p className="text-sm text-white/60 hidden sm:block">
            Transformando vidas com treino personalizado.
          </p>
        </div>

        {/* Centro: links rápidos */}
        <nav className="flex justify-center gap-6 text-sm font-medium">
          <a href="#sobre" className="text-white/80 hover:text-primary">
            Sobre
          </a>
          <a
            href="#transformacoes"
            className="text-white/80 hover:text-primary"
          >
            Resultados
          </a>
          <a href="#planos" className="text-white/80 hover:text-primary">
            Planos
          </a>
          <a href="#faq" className="text-white/80 hover:text-primary">
            FAQ
          </a>
          <a href="#contato" className="text-white/80 hover:text-primary">
            Contato
          </a>
        </nav>

        {/* Direita: social/contato */}
        <div className="flex md:justify-end justify-center gap-4">
          {/* WhatsApp */}
          <a
            href="https://wa.me/5571981977447?text=Olá%20Lucas!%20Quero%20começar%20meus%20treinos."
            aria-label="WhatsApp"
            className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0b2e25] hover:bg-gray-100 transition shadow"
          >
            {/* ícone WhatsApp (SVG) */}
            <svg viewBox="0 0 32 32" className="h-5 w-5" fill="currentColor">
              <path d="M19.11 17.22c-.29-.14-1.7-.83-1.96-.92-.26-.1-.45-.14-.64.14-.19.29-.74.91-.91 1.1-.17.2-.34.22-.63.08-1.7-.83-2.81-1.49-3.93-3.37-.3-.52.3-.48.86-1.6.09-.19.05-.36-.02-.51-.07-.14-.64-1.53-.88-2.1-.23-.55-.47-.47-.64-.48h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.03 2.81 1.17 3 .14.19 2.03 3.09 4.92 4.34.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.09 1.7-.69 1.94-1.35.24-.66.24-1.23.17-1.35-.07-.12-.26-.19-.55-.34ZM16 3.5c-7 0-12.67 5.68-12.67 12.67 0 2.23.58 4.39 1.68 6.3L3.5 28.5l6.2-1.62c1.84 1 3.92 1.53 6.3 1.53 6.99 0 12.67-5.68 12.67-12.67C28.67 9.18 23 3.5 16 3.5Zm0 22.67c-2.12 0-4.1-.63-5.78-1.83l-.41-.29-3.68.96.99-3.59-.3-.55a10.14 10.14 0 0 1-1.41-5.2c0-5.62 4.57-10.2 10.2-10.2s10.2 4.58 10.2 10.2S21.62 26.17 16 26.17Z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/treinador_lucascosta"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0b2e25] hover:bg-gray-100 transition shadow"
          >
            {/* ícone Instagram (SVG) */}
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm8.5 1.5h-8.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5ZM12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 1.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-.88a.88.88 0 1 1 0 1.76.88.88 0 0 1 0-1.76Z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Linha final */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Lucas Costa Personal — Todos os direitos
          reservados
        </div>
      </div>
    </footer>
  );
}
