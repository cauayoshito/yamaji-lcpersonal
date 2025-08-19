// pages/index.js
import { HelpCircle, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

import AccordionItem from "@/components/AccordionItem";
import Seo from "@/components/Seo";
import FloatingWhatsapp from "@/components/FloatingWhatsApp";

// ✅ Helper de WhatsApp (troque pelo número do Lucas)
const waLink = (message) =>
  `https://wa.me/5571981977447?text=${encodeURIComponent(message || "")}`;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Slider de Transformações
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 16 },
    breakpoints: {
      "(min-width: 768px)": { slides: { perView: 2, spacing: 24 } },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 32 } },
    },
  });

  return (
    <>
      {/* SEO */}
      <Seo
        title="Lucas Costa | Personal Trainer (Presencial e Online)"
        description="Treinos personalizados com método científico e acompanhamento 1:1. +100 alunos transformados. Vagas limitadas para o presencial."
        image="/images/hero-preview.jpg"
      />

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full border-b border-white/5 bg-black/70 backdrop-blur-md z-[60]">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
          <Link href="#top" className="shrink-0">
            <Image
              src="/images/logonav.png"
              alt="Lucas Costa — Personal"
              width={120}
              height={48}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
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
            <a
              href="#faq"
              className="text-white/80 hover:text-primary flex items-center gap-1"
            >
              <HelpCircle size={16} /> FAQ
            </a>
            <a href="#contato" className="text-white/80 hover:text-primary">
              Contato
            </a>
          </nav>

          {/* CTA desktop */}
          <motion.a
            href={waLink("Olá Lucas! Quero começar meus treinos com você.")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="hidden md:inline-block rounded-full bg-primary px-5 py-2 text-sm font-medium text-[#052a22] shadow-primary/30 shadow-lg hover:brightness-110"
          >
            Fale no WhatsApp
          </motion.a>

          {/* Mobile menu */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden text-white text-2xl"
            aria-label="Abrir menu"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black/95 px-6 py-4 space-y-4 border-t border-white/10">
            {[
              ["#sobre", "Sobre"],
              ["#transformacoes", "Resultados"],
              ["#planos", "Planos"],
              ["#faq", "FAQ"],
              ["#contato", "Contato"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block text-white/90 hover:text-primary"
              >
                {label}
              </a>
            ))}
            <a
              href={waLink("Quero começar minha transformação hoje!")}
              className="inline-flex items-center justify-center w-full rounded-full bg-primary px-5 py-2 text-sm font-medium text-[#052a22] shadow-primary/30 shadow-lg"
            >
              Fale no WhatsApp
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <main id="top" className="relative pt-24 md:pt-28 text-white">
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
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                  Alcance resultados em{" "}
                  <span className="text-primary">30 dias</span> com método e
                  acompanhamento <span className="whitespace-nowrap">1:1</span>
                </h1>

                <p className="mt-4 text-base sm:text-lg text-white/80 max-w-xl">
                  Planos presenciais e online, +100 alunos transformados. Método
                  claro, ajustes semanais e acompanhamento real.
                </p>

                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-red-500/95 px-3 py-1 text-xs font-semibold shadow-red-500/40 shadow">
                  ⚠️ Últimas 3 vagas no Plano Premium!
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <motion.a
                    href={waLink(
                      "Quero um plano ideal para mim. Pode me ajudar a começar hoje?"
                    )}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-[15px] font-semibold text-[#052a22] shadow-primary/30 shadow-lg"
                  >
                    Começar sua transformação
                  </motion.a>

                  <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-white/70">
                    <CheckCircle2 size={16} className="text-primary" />
                    Avaliação gratuita no primeiro contato
                  </div>
                </div>
              </div>

              <div className="relative flex justify-center md:justify-end">
                <div className="absolute -bottom-2 right-6 h-24 w-24 rounded-full bg-primary/30 blur-3xl" />
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="rounded-2xl bg-white/5 p-2 ring-1 ring-white/10 backdrop-blur"
                >
                  <Image
                    src="/images/foto-lucas.png"
                    alt="Lucas Costa — Personal"
                    width={420}
                    height={420}
                    className="h-auto w-[280px] sm:w-[340px] md:w-[380px] rounded-xl object-cover shadow-[0_0_40px_#10B98190]"
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="bg-secondary text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">
              Quem é Lucas Costa?
            </h2>
            <p className="text-white/80 text-base sm:text-lg">
              Personal trainer focado em <b>performance, saúde e estética</b>.
              Planos sob medida para sua rotina com ajustes semanais e
              acompanhamento próximo. Resultado não vem por acaso vem do método,
              constância e execução perfeita.
            </p>
          </div>
        </section>

        {/* TRANSFORMAÇÕES */}
        <section id="transformacoes" className="px-4 sm:px-6 py-14 md:py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-8">
              Transformações Reais
            </h2>

            <div ref={sliderRef} className="keen-slider">
              {[
                {
                  img: "/images/antes3.webp",
                  alt: "Antes e depois — Diego",
                  nome: "Diego",
                  txt: "Foco, adaptação e resultado rápido. Superou minhas expectativas.",
                },
                {
                  img: "/images/antes1.webp",
                  alt: "Antes e depois — Juliana",
                  nome: "Juliana",
                  txt: "Eliminei 12kg com o acompanhamento do Lucas. Mudou minha vida!",
                },
                {
                  img: "/images/antes2.webp",
                  alt: "Antes e depois — Victor",
                  nome: "Victor",
                  txt: "Voltei a treinar e nunca me senti tão bem!",
                },
              ].map((c, i) => (
                <div
                  key={i}
                  className="keen-slider__slide overflow-hidden rounded-xl border border-white/10 bg-[#0d1622] transition shadow-lg hover:border-primary/40"
                >
                  <Image
                    src={c.img}
                    alt={c.alt}
                    width={500}
                    height={360}
                    className="h-[320px] w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{c.nome}</h3>
                    <p className="text-white/70 text-sm italic">{c.txt}</p>
                    <a
                      href="#planos"
                      className="mt-3 inline-block rounded-full bg-primary px-4 py-2 text-sm font-semibold text-[#052a22]"
                    >
                      Ver plano semelhante
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PLANOS */}
        <section id="planos" className="bg-secondary text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-10">
              Escolha o plano ideal
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Online */}
              <PlanCard
                title="Consultoria Online"
                bullets={[
                  "Treino no app com vídeos e execução perfeita",
                  "Anamnese e avaliação postural",
                  "Ajustes semanais e suporte direto",
                ]}
                pricePrefix="A partir de"
                price="R$ 149,90/mês"
                cta="Quero esse plano"
                href={waLink(
                  "Tenho interesse na Consultoria Online. Pode me orientar?"
                )}
              />

              {/* Presencial */}
              <PlanCard
                title="Consultoria Presencial"
                bullets={[
                  "Treinos presenciais (academia/condomínio)",
                  "Correção de técnica e motivação ao vivo",
                  "App com o plano e acompanhamento",
                ]}
                smallNote="*Sujeito a valor adicional conforme a academia."
                pricePrefix="A partir de"
                price="R$ 599,00/mês"
                cta="Quero esse plano"
                href={waLink("Quero falar sobre o Plano Presencial.")}
              />

              {/* Premium */}
              <PlanCard
                highlight
                title="Consultoria Premium"
                bullets={[
                  "Tudo do online + presencial (conforme disponibilidade)",
                  "Guia de alimentação prática p/ resultados",
                  "Suporte intensivo por 30 dias",
                ]}
                oldPrice="R$ 500/mês"
                price="R$ 379,90/mês"
                tag="+ Popular"
                cta="Quero esse plano"
                href={waLink(
                  "Quero a Consultoria Premium com o combo completo."
                )}
              />
            </div>
          </div>
        </section>

        {/* CONSULTA COMPLEMENTAR */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#0b1420] to-[#0a1622] text-white">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-10 top-12 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4 sm:px-6 py-14 md:py-16">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">
                Consulta complementar personalizada
              </h2>
              <p className="text-white/80 text-base sm:text-lg">
                Para acelerar resultados, trabalhamos com parceiros(as) em saúde
                e estética. Protocolos sob medida para sua meta.
              </p>
              <a
                href={waLink(
                  "Gostaria de saber sobre a consulta complementar."
                )}
                className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-[15px] font-semibold text-[#052a22] shadow-primary/30 shadow-lg"
              >
                Quero agendar
              </a>
            </div>

            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <Image
                src="/images/consulta-parceria.png"
                alt="Consulta com nutricionista parceira"
                width={420}
                height={420}
                className="h-auto w-[260px] sm:w-[340px] md:w-[380px] rounded-xl object-cover shadow-[0_0_40px_#10B98190]"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="px-4 sm:px-6 py-14 md:py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-8">
              Perguntas Frequentes
            </h2>
            <div className="space-y-4">
              {[
                [
                  "Preciso já ter experiência para começar?",
                  "Não! Os treinos são adaptados para qualquer nível, incluindo iniciantes absolutos.",
                ],
                [
                  "O plano online funciona mesmo?",
                  "Sim! Você recebe treino no app, ajustes semanais e suporte direto no WhatsApp.",
                ],
                [
                  "Consigo treinar mesmo com pouco tempo?",
                  "Claro! Montamos treinos eficientes para sua rotina máximo resultado no menor tempo.",
                ],
                [
                  "Os treinos incluem orientação alimentar?",
                  "Sim! Todos os planos incluem guia de nutrição prática.",
                ],
                [
                  "O acompanhamento é feito por quanto tempo?",
                  "Você escolhe! Oferecemos pacotes de 3, 6 ou 12 meses.",
                ],
                [
                  "Posso trocar de plano depois de começar?",
                  "Sim! É só avisar com 48h de antecedência.",
                ],
              ].map(([pergunta, resposta], i) => (
                <AccordionItem
                  key={i}
                  pergunta={pergunta}
                  resposta={resposta}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CONTATO / FOOTER-BANNER */}
        <section
          id="contato"
          className="relative overflow-hidden bg-gradient-to-b from-primary/20 via-primary/10 to-transparent"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Pronto pra começar sua transformação?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Fale comigo no WhatsApp. Vamos traçar o melhor caminho para
              alcançar seus objetivos com segurança e resultado.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white text-[#0b2e25] px-5 py-2 text-sm font-semibold shadow-xl">
              ⭐ +100 alunos transformados com acompanhamento profissional
            </div>

            <div className="mt-6">
              <a
                href={waLink("Quero começar agora!")}
                className="inline-flex rounded-full bg-white px-6 py-3 text-[15px] font-bold text-[#0b2e25] shadow-xl hover:bg-gray-100"
              >
                💬 Falar com o Lucas
              </a>
              <p className="mt-2 text-white/60 text-sm">
                Atendimento rápido via WhatsApp
              </p>
              <p className="mt-6 text-white/70 text-sm">
                Preferir Instagram?{" "}
                <a
                  href="https://instagram.com/treinador_lucascosta"
                  className="font-semibold underline hover:text-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  @treinador_lucascosta
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />

      {/* ✅ um único botão flutuante (evita “esmagar” com outro) */}
      <FloatingWhatsapp
        href={waLink("Vamos começar?")}
        label="Vamos começar? 🚀"
      />
    </>
  );
}

/* -------------------------------------------
   COMPONENTE DE CARD DE PLANO (reutilizável)
-------------------------------------------- */
function PlanCard({
  highlight,
  title,
  bullets = [],
  smallNote,
  oldPrice,
  price,
  pricePrefix,
  tag,
  cta,
  href,
}) {
  return (
    <div
      className={[
        "relative rounded-2xl border p-6 md:p-7 shadow-xl",
        "flex flex-col",
        highlight
          ? "border-primary/40 bg-gradient-to-b from-primary/10 to-transparent ring-1 ring-primary/30"
          : "border-white/10 bg-[#0d1622]",
      ].join(" ")}
    >
      {highlight && (
        <span className="absolute -top-3 right-5 rounded-full bg-primary px-3 py-1 text-xs font-bold text-[#052a22] shadow-lg">
          {tag || "Destaque"}
        </span>
      )}

      <h3 className="text-xl font-semibold text-white">{title}</h3>

      <ul className="mt-4 flex-1 space-y-2 text-white/80">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 shrink-0 text-primary" size={18} />
            <span className="text-sm leading-relaxed">{b}</span>
          </li>
        ))}
      </ul>

      {smallNote && (
        <p className="mt-3 text-xs text-white/60 italic">{smallNote}</p>
      )}

      <div className="mt-5">
        {oldPrice && (
          <p className="text-white/60 line-through text-sm mb-1">{oldPrice}</p>
        )}

        <div className="flex items-baseline gap-2">
          {pricePrefix && (
            <span className="text-xs text-white/60">{pricePrefix}</span>
          )}
          {/* evita “esmagar”/quebrar valor */}
          <span className="text-2xl md:text-3xl font-extrabold tracking-tight whitespace-nowrap">
            {price}
          </span>
        </div>

        <a
          href={href}
          className={[
            "mt-4 inline-flex w-full items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold shadow-lg",
            highlight
              ? "bg-white text-[#0b2e25] hover:bg-gray-100"
              : "bg-primary text-[#052a22] hover:brightness-110",
          ].join(" ")}
        >
          {cta}
        </a>
      </div>
    </div>
  );
}
