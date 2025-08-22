// pages/index.js
import {
  HelpCircle,
  CheckCircle2,
  ChevronRight,
  Star,
  Clock,
} from "lucide-react";
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Seo from "@/components/Seo";
import AccordionItem from "@/components/AccordionItem";
import SiteFooter from "@/components/SiteFooter";
import FloatingWhatsapp from "@/components/FloatingWhatsApp";

// ✅ WhatsApp — troque o número se necessário
const waLink = (message) =>
  `https://wa.me/5571983400651?text=${encodeURIComponent(
    message || "Olá! Vim pelo site da RL TEAM. Quero começar meu protocolo."
  )}`;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  // HERO slider (auto-play)
  const [heroSliderRef] = useKeenSlider({
    loop: true,
    drag: true,
    slides: { perView: 1, spacing: 12 },
    created(s) {
      const id = setInterval(() => s.next(), 3500);
      s.on("destroyed", () => clearInterval(id));
    },
  });

  // TRANSFORMAÇÕES slider (com “peek” no mobile e botão de avanço)
  const [transSliderRef, transSlider] = useKeenSlider({
    loop: true,
    slides: { perView: 1.1, spacing: 12 },
    breakpoints: {
      "(min-width: 768px)": { slides: { perView: 2, spacing: 24 } },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 32 } },
    },
  });

  return (
    <>
      <Seo
        title="RL TEAM | Consultoria Esportiva"
        description="Consultoria premium com protocolo individualizado, treinos progressivos, vídeos de execução e suporte diário das 6h às 22h. Resultados reais e acompanhamento próximo."
        image="/images/logo.png"
        faq={[
          {
            q: "Sou iniciante. Consigo acompanhar?",
            a: "Sim! O protocolo começa no seu nível e evolui gradualmente.",
          },
          {
            q: "Como funciona o suporte?",
            a: "Atendimento para dúvidas das 6h às 22h via WhatsApp.",
          },
          {
            q: "Tem vídeo de execução?",
            a: "Sim. Você tem acesso à plataforma com vídeos para executar certo.",
          },
        ]}
      />

      {/* HEADER (altura fixa para não “crescer” junto com o hero) */}
      <header className="fixed top-0 left-0 w-full h-16 md:h-20 border-b border-white/5 bg-black/70 backdrop-blur-md z-[60]">
        <div className="max-w-6xl mx-auto h-full flex items-center justify-between px-4 sm:px-6">
          <Link
            href="#top"
            aria-label="Topo do site — RL TEAM"
            className="shrink-0"
          >
            <Image
              src="/images/logo.png"
              alt="RL TEAM — Consultoria Esportiva"
              width={130}
              height={48}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#sobre" className="text-white/80 hover:text-white">
              Sobre
            </a>
            <a href="#oferecemos" className="text-white/80 hover:text-white">
              O que oferecemos
            </a>
            <a href="#resultados" className="text-white/80 hover:text-white">
              Resultados
            </a>
            <a href="#planos" className="text-white/80 hover:text-white">
              Planos
            </a>
            <a
              href="#faq"
              className="text-white/80 hover:text-white flex items-center gap-1"
            >
              <HelpCircle size={16} /> FAQ
            </a>
            <a href="#contato" className="text-white/80 hover:text-white">
              Contato
            </a>
          </nav>

          <motion.a
            href={waLink("Quero iniciar meu protocolo com a RL TEAM.")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="hidden md:inline-block rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#0b2e25] shadow-lg hover:bg-gray-100"
          >
            Fale no WhatsApp
          </motion.a>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden text-white text-2xl"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black/95 px-6 py-4 space-y-4 border-t border-white/10">
            {[
              ["#sobre", "Sobre"],
              ["#oferecemos", "O que oferecemos"],
              ["#resultados", "Resultados"],
              ["#planos", "Planos"],
              ["#faq", "FAQ"],
              ["#contato", "Contato"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block text-white/90 hover:text-white"
              >
                {label}
              </a>
            ))}
            <a
              href={waLink("Quero começar hoje com a RL TEAM.")}
              className="inline-flex items-center justify-center w-full rounded-full bg-white px-5 py-2 text-sm font-bold text-[#0b2e25] shadow-lg"
            >
              Fale no WhatsApp
            </a>
          </div>
        )}
      </header>

      <main
        id="top"
        className="relative pt-24 md:pt-28 text-white overflow-x-hidden"
      >
        {/* HERO */}
        <section
          className="relative"
          style={{
            backgroundImage: "url('/images/bg-academia.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/80" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-white/70 font-medium mb-2">
                  CONSULTORIA ESPORTIVA
                </p>
                <h1 className="text-[26px] sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                  +200 alunos transformados com a{" "}
                  <span className="text-white">RL TEAM</span> — resultados
                  reais, sem extremismos
                </h1>

                {/* Chips de credibilidade */}
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs text-white/90">
                    <Star size={14} /> +200 transformações
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs text-white/90">
                    <Clock size={14} /> Suporte 6h–22h
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs text-white/90">
                    <CheckCircle2 size={14} /> Avaliação gratuita
                  </span>
                </div>

                <p className="mt-4 text-base sm:text-lg text-white/80 max-w-xl">
                  Consultoria esportiva com protocolo individualizado, treinos
                  progressivos e acompanhamento diário.{" "}
                  <b>Suporte ativo das 6h às 22h</b> para você nunca ficar sem
                  resposta.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <motion.a
                    href={waLink("Quero meu protocolo com a RL TEAM.")}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-white px-6 py-3 text-[15px] font-semibold text-[#0b2e25] shadow-lg hover:bg-gray-100"
                  >
                    🚀 Começar agora no WhatsApp
                  </motion.a>

                  <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-white/70">
                    <CheckCircle2 size={16} className="text-white" />
                    Avaliação gratuita no primeiro contato
                  </div>
                </div>
              </div>

              {/* Hero Carrossel – cresce sem reflow (nav não muda de tamanho) */}
              <div className="relative w-full max-w-[480px] mx-auto">
                <div ref={heroSliderRef} className="keen-slider w-full">
                  {[
                    { src: "/images/rl-1.jpg", alt: "RL TEAM — foto 1" },
                    { src: "/images/rl-2.jpg", alt: "RL TEAM — foto 2" },
                    { src: "/images/rl-3.jpg", alt: "RL TEAM — foto 3" },
                  ].map((f, i) => (
                    <div key={i} className="keen-slider__slide min-w-0">
                      <div className="relative w-full aspect-[4/5] sm:aspect-[1/1] rounded-xl overflow-hidden">
                        <Image
                          src={f.src}
                          alt={f.alt}
                          fill
                          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 480px, 480px"
                          className="object-cover transition-transform duration-500 ease-out hover:scale-[1.08] will-change-transform"
                          priority={i === 0}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="bg-[#0d1622] scroll-mt-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Quem somos</h2>
            <p className="text-white/80 text-base sm:text-lg">
              A <b>RL TEAM</b> é uma consultoria esportiva focada em resultados
              reais, alinhada à sua rotina e objetivo. Nosso método combina
              treino, acompanhamento e educação prática para você executar tudo
              com segurança e eficiência.
            </p>
          </div>
        </section>

        {/* O QUE OFERECEMOS */}
        <section
          id="oferecemos"
          className="px-4 sm:px-6 py-14 md:py-16 scroll-mt-24"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
              O que estamos oferecendo?
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                [
                  "Treinos alinhados à dieta e objetivo",
                  "Planejamento coerente com sua estratégia nutricional e meta.",
                ],
                [
                  "Protocolo totalmente individualizado",
                  "Ajustado às suas necessidades, histórico e rotina.",
                ],
                [
                  "Planilha personalizada (treino + cardio)",
                  "Estrutura clara, progressiva e fácil de seguir.",
                ],
                [
                  "Plataforma com vídeos de execução",
                  "Demonstrações para garantir técnica e segurança.",
                ],
                [
                  "Contato para dúvidas 6h–22h",
                  "Suporte ativo para evoluir sem travar na execução.",
                ],
                [
                  "Acompanhamento completo da equipe",
                  "Feedbacks, ajustes e monitoramento constante.",
                ],
              ].map(([t, d]) => (
                <div
                  key={t}
                  className="rounded-2xl border border-white/10 bg-[#0d1622] p-6"
                >
                  <h4 className="text-white font-semibold">{t}</h4>
                  <p className="mt-2 text-white/70">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRANSFORMAÇÕES + botões "Mais depoimentos" (desktop) e "+1 depoimento" (mobile) */}
        <section
          id="resultados"
          className="px-4 sm:px-6 py-14 md:py-16 scroll-mt-24"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
              Transformações Reais
            </h2>

            <div className="relative">
              {/* Hints/gradientes nas bordas (mobile) */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-[#0b1420] to-transparent rounded-l-xl sm:hidden" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-[#0b1420] to-transparent rounded-r-xl sm:hidden" />
              <span className="absolute -top-6 right-2 text-[11px] text-white/70 sm:hidden">
                arraste →
              </span>

              <div ref={transSliderRef} className="keen-slider">
                {[
                  {
                    img: "/images/antes3.jpg",
                    alt: "Antes e depois — Aluno 1",
                    nome: "Aluna 1",
                    txt: "Plano objetivo e acompanhamento próximo.",
                  },
                  {
                    img: "/images/antes1.jpg",
                    alt: "Antes e depois — Aluna 2",
                    nome: "Aluna 2",
                    txt: "Redução de medidas e mais disposição.",
                  },
                  {
                    img: "/images/antes2.jpg",
                    alt: "Antes e depois — Aluno 3",
                    nome: "Aluno 3",
                    txt: "Execução correta = evolução consistente.",
                  },
                  {
                    img: "/images/antes4.jpg", // NOVO
                    alt: "Antes e depois — Aluno 4",
                    nome: "Aluno 4",
                    txt: "Perda de gordura e maior definição.",
                  },
                  {
                    img: "/images/antes5.jpg", // NOVO
                    alt: "Antes e depois — Aluna 5",
                    nome: "Aluno 5",
                    txt: "Evolução no shape e postura.",
                  },
                  {
                    img: "/images/antes6.jpg", // NOVO
                    alt: "Antes e depois — Aluna 5",
                    nome: "Aluno 6",
                    txt: "Redução de gordura abdominal e mais definição, mantendo a massa magra.",
                  },
                ].map((c, i) => (
                  <div
                    key={i}
                    className="keen-slider__slide overflow-hidden rounded-xl border border-white/10 bg-[#0d1622] transition shadow-lg hover:border-white/40"
                  >
                    <div className="relative w-full aspect-[5/3] rounded-t-xl overflow-hidden">
                      <Image
                        src={c.img}
                        alt={c.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 500px"
                        className="object-cover transition-transform duration-500 ease-out hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{c.nome}</h3>
                      <p className="text-white/70 text-sm italic">{c.txt}</p>
                      <a
                        href="#planos"
                        className="mt-3 inline-block w-full sm:w-auto rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0b2e25]"
                      >
                        Ver plano semelhante
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Botão absoluto – APENAS tablet/desktop */}
              <button
                onClick={() => transSlider.current?.next()}
                className="hidden sm:flex absolute bottom-3 right-3 items-center gap-1 rounded-full bg-white/90 px-3 py-1.5 text-sm font-semibold text-[#0b2e25] shadow-md hover:bg-white"
                aria-label="Mais depoimentos"
                type="button"
              >
                Mais depoimentos <ChevronRight size={16} />
              </button>
            </div>

            {/* Botão MOBILE fixo abaixo do carrossel */}
            <div className="mt-3 sm:hidden">
              <button
                onClick={() => transSlider.current?.next()}
                className="w-full inline-flex items-center justify-center gap-1 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0b2e25] shadow-md"
                aria-label="+1 depoimento"
                type="button"
              >
                +1 depoimento <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* PLANOS */}
        <section id="planos" className="bg-[#0d1622] scroll-mt-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
              Planos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <PlanCard
                title="Mensal"
                price="R$ 250"
                bullets={[
                  "Protocolo individualizado",
                  "Planilha personalizada",
                  "Vídeos de execução + suporte 6h–22h",
                ]}
                cta="Quero o Mensal"
                href={waLink("Quero o plano Mensal (R$ 250).")}
              />

              <PlanCard
                highlight
                title="Bimestral"
                price="R$ 400"
                bullets={[
                  "Tudo do Mensal + ajustes quinzenais",
                  "Acompanhamento mais próximo",
                  "Acesso completo à plataforma",
                ]}
                tag="Mais escolhido"
                cta="Quero o Bimestral"
                href={waLink("Quero o plano Bimestral (R$ 400).")}
              />

              <PlanCard
                title="Trimestral"
                price="R$ 600"
                bullets={[
                  "Tudo do Bimestral + progressões avançadas",
                  "Check-ins estratégicos",
                  "Priorização no suporte 6h–22h",
                ]}
                cta="Quero o Trimestral"
                href={waLink("Quero o plano Trimestral (R$ 600).")}
              />
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className="px-4 sm:px-6 py-14 md:py-16">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              Diferenciais RL TEAM
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-[#0d1622] p-6">
                <h4 className="text-white font-semibold">
                  🍽️ Acompanhamento Nutricional
                </h4>
                <p className="mt-2 text-white/70">
                  Plano alimentar ajustado à sua rotina, sem radicalismos.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#0d1622] p-6">
                <h4 className="text-white font-semibold">🏋️ Treinamento</h4>
                <p className="mt-2 text-white/70">
                  Planilha progressiva, com vídeos de execução e correção por
                  vídeo chamada.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#0d1622] p-6">
                <h4 className="text-white font-semibold">💊 Fármacos</h4>
                <p className="mt-2 text-white/70">
                  Orientação segura e responsável, sempre alinhada ao seu
                  objetivo.
                </p>
              </div>
            </div>

            <blockquote className="mt-10 text-white/90 text-lg italic">
              “Imagine uma nova história para sua vida e acredite nela!” —{" "}
              <span className="not-italic">Paulo Coelho</span>
            </blockquote>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="px-4 sm:px-6 py-14 md:py-16 scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
              Perguntas Frequentes
            </h2>
            <div className="space-y-4">
              {[
                [
                  "Sou iniciante. Consigo acompanhar?",
                  "Sim! O protocolo começa no seu nível e evolui gradualmente.",
                ],
                [
                  "Como funciona o suporte?",
                  "Atendimento para dúvidas das 6h às 22h via WhatsApp.",
                ],
                [
                  "Tem vídeo de execução?",
                  "Sim. Você tem acesso à plataforma com vídeos para executar certo.",
                ],
                [
                  "Posso treinar em casa?",
                  "Sim, montamos de acordo com sua estrutura: casa, academia ou condomínio.",
                ],
                [
                  "Posso trocar de plano depois?",
                  "Pode. É só avisar com antecedência mínima de 48h.",
                ],
              ].map(([q, a], i) => (
                <AccordionItem key={i} pergunta={q} resposta={a} />
              ))}
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section
          id="contato"
          className="relative overflow-hidden bg-gradient-to-b from-white/20 via-white/10 to-transparent scroll-mt-24"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              ⚡ Pronto para começar sua transformação?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              As vagas presenciais são limitadas. Garanta seu lugar na RL TEAM
              hoje mesmo e comece com uma avaliação gratuita.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white text-[#0b2e25] px-5 py-2 text-sm font-semibold shadow-xl">
              ⭐ Resultados reais com acompanhamento profissional
            </div>

            <div className="mt-6">
              <a
                href={waLink("Quero iniciar com a RL TEAM.")}
                className="inline-flex rounded-full bg-white px-6 py-3 text-[15px] font-bold text-[#0b2e25] shadow-xl hover:bg-gray-100"
              >
                💬 Falar no WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      {/* Botão flutuante único */}
      <FloatingWhatsapp
        href={waLink("Quero começar hoje!")}
        label="Vamos começar? 🚀"
      />
    </>
  );
}

/* -------------------------------------------
   COMPONENTE DE CARD DE PLANO (reutilizável)
-------------------------------------------- */
function PlanCard({ highlight, title, bullets = [], price, tag, cta, href }) {
  return (
    <div
      className={[
        "relative rounded-2xl border p-6 md:p-7 shadow-xl",
        "flex flex-col",
        highlight
          ? "border-white/40 bg-gradient-to-b from-white/10 to-transparent ring-1 ring-white/30"
          : "border-white/10 bg-[#0d1622]",
      ].join(" ")}
    >
      {highlight && (
        <span className="absolute -top-3 right-5 rounded-full bg-white px-3 py-1 text-xs font-bold text-[#0b2e25] shadow-lg">
          {tag || "Destaque"}
        </span>
      )}

      <h3 className="text-xl font-semibold text-white">{title}</h3>

      <ul className="mt-4 flex-1 space-y-2 text-white/80">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 shrink-0 text-white" size={18} />
            <span className="text-sm leading-relaxed">{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl md:text-3xl font-extrabold tracking-tight whitespace-nowrap">
            {price}
          </span>
        </div>

        <a
          href={href}
          className={[
            "mt-4 inline-flex w-full items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold shadow-lg",
            "bg-white text-[#0b2e25] hover:bg-gray-100",
          ].join(" ")}
        >
          {cta}
        </a>
      </div>
    </div>
  );
}
