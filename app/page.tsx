"use client";

import Image from "next/image";
import {
  ArrowDownRight,
  Check,
  ChevronRight,
  Clock3,
  HardHat,
  Home as HomeIcon,
  Instagram,
  Layers,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Star,
  Truck,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const phone = "5524981023864";
const whatsapp = `https://wa.me/${phone}?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento para minha obra.")}`;

const getEquipmentWhatsapp = (title: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(`Olá! Gostaria de solicitar um orçamento para ${title}.`)}`;

const services = [
  ["01", "Terraplanagem", "Preparação completa do solo para sua obra começar com base sólida."],
  ["02", "Escavações", "Precisão e segurança em escavações para fundações, valas e projetos especiais."],
  ["03", "Aterros e nivelamento", "Regularização de terrenos com técnica, agilidade e acabamento profissional."],
  ["04", "Locação de equipamentos", "Máquinas confiáveis para manter o ritmo e a produtividade da sua obra."],
];

const equipment = [
  ["Escavadeira hidráulica", "Potência e precisão para grandes movimentações.", "/images/escavadeira-hidraulica.png"],
  ["Máquinas para terraplanagem", "Soluções adequadas para cada tipo de terreno.", "/images/maquinas-para-terraplanagem.png"],
  ["Operação especializada", "Equipe preparada para trabalhar com segurança.", "/images/operacao-especializada.png"],
];

const videos = [
  ["/videos/video1.mp4", "Preparação e nivelamento em campo"],
  ["/videos/video2.mp4", "Operação especializada em obra"],
  ["/videos/video3.mp4", "Movimentação de terra e escavação"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative overflow-hidden bg-stone-50 text-slate-800 antialiased">
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>

      {/* Floating Bottom Pill Navigation Bar (Mobile Only - Matching Reference Screenshot) */}
      <div className="fixed bottom-4 left-1/2 z-50 flex w-[92%] max-w-sm -translate-x-1/2 items-center justify-between rounded-full border border-stone-200/90 bg-white/95 px-3 py-1.5 shadow-[0_10px_35px_rgba(0,0,0,0.18)] backdrop-blur-xl lg:hidden">
        <a href="#inicio" className="flex flex-col items-center px-2 py-1 text-slate-600 transition hover:text-amber-500 active:scale-95">
          <HomeIcon size={19} />
          <span className="mt-0.5 text-[10px] font-bold">Início</span>
        </a>
        <a href="#servicos" className="flex flex-col items-center px-2 py-1 text-slate-600 transition hover:text-amber-500 active:scale-95">
          <Layers size={19} />
          <span className="mt-0.5 text-[10px] font-bold">Serviços</span>
        </a>

        {/* Highlighted Center WhatsApp Circle Button */}
        <a
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
          className="group relative -mt-7 flex flex-col items-center"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-green-400 text-white shadow-[0_6px_22px_rgba(16,185,129,0.55)] border-[3.5px] border-white transition-all duration-300 group-hover:scale-105 active:scale-95">
            <svg className="h-6 w-6 fill-current text-white" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </span>
          <span className="mt-0.5 text-[10px] font-black uppercase tracking-wider text-emerald-600">WhatsApp</span>
        </a>

        <a href="#equipamentos" className="flex flex-col items-center px-2 py-1 text-slate-600 transition hover:text-amber-500 active:scale-95">
          <Truck size={19} />
          <span className="mt-0.5 text-[10px] font-bold">Frota</span>
        </a>
        <a href="#contato" className="flex flex-col items-center px-2 py-1 text-slate-600 transition hover:text-amber-500 active:scale-95">
          <Phone size={19} />
          <span className="mt-0.5 text-[10px] font-bold">Contato</span>
        </a>
      </div>

      {/* Header - Transparent initially, frosted glass on scroll */}
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-slate-950/90 py-3 shadow-lg backdrop-blur-md"
            : "border-b border-transparent bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#inicio" aria-label="TJ Terraplanagem — início" className="flex items-center gap-3">
            <Image src="/images/logo.jpg" alt="TJ Terraplanagem" width={44} height={44} className="h-11 w-11 rounded-md shadow-md" />
            <span className="text-xs font-bold uppercase tracking-[.14em] text-white sm:text-sm">
              TJ<br />Terraplanagem
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-white/85 lg:flex" aria-label="Navegação principal">
            {[["Sobre", "sobre"], ["Serviços", "servicos"], ["Equipamentos", "equipamentos"], ["Galeria", "galeria"], ["Contato", "contato"]].map(([label, id]) => (
              <a key={id} href={`#${id}`} className="transition hover:text-amber-400">{label}</a>
            ))}
            <a href={whatsapp} target="_blank" rel="noreferrer" className="button button-small rounded-lg">
              Orçamento <ArrowDownRight size={16} />
            </a>
          </nav>
          <div className="flex items-center gap-3 lg:hidden">
            <a href={whatsapp} target="_blank" rel="noreferrer" className="button button-small px-3.5 py-2 text-[11px] font-extrabold uppercase rounded-lg">
              Orçamento
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label="Abrir menu"
              className="grid h-11 w-11 place-items-center rounded-xl bg-white/15 text-white backdrop-blur-md transition active:scale-95"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {menuOpen && (
          <nav className="mx-4 mt-2 grid gap-2 rounded-2xl border border-white/15 bg-slate-950/95 p-5 text-white shadow-2xl backdrop-blur-xl lg:hidden" aria-label="Menu mobile">
            {[["Sobre", "sobre"], ["Serviços", "servicos"], ["Equipamentos", "equipamentos"], ["Galeria", "galeria"], ["Contato", "contato"]].map(([label, id]) => (
              <a
                onClick={() => setMenuOpen(false)}
                key={id}
                href={`#${id}`}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-slate-100 transition hover:bg-white/10 active:bg-white/15"
              >
                {label}
                <ChevronRight size={18} className="text-white/40" />
              </a>
            ))}
            <a href={whatsapp} target="_blank" rel="noreferrer" className="button mt-3 w-full justify-center rounded-xl py-3.5">
              Falar pelo WhatsApp <ArrowDownRight size={18} />
            </a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative isolate flex min-h-dvh items-end bg-slate-950 pb-24 pt-28 text-white sm:pb-16 sm:pt-32 lg:items-center lg:pb-0">
        <video className="absolute inset-0 -z-20 h-full w-full object-cover" autoPlay muted loop playsInline preload="auto">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/30 lg:bg-gradient-to-r lg:from-slate-950 lg:via-slate-950/70 lg:to-slate-950/20" />
        
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Rating Glass Badge above Headline (Matching Reference Screenshot) */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
              <span className="flex text-amber-400">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} className="fill-amber-400" />)}
              </span>
              <span className="font-bold text-amber-300">5,0 no Google</span>
              <span className="text-white/40">•</span>
              <span className="text-slate-200">Paraíba do Sul • RJ</span>
            </div>

            <h1 className="mt-4 font-display text-5xl font-bold uppercase leading-[.88] tracking-tight sm:text-7xl lg:text-9xl">
              O terreno certo<br /><span className="text-amber-400">para grandes</span><br />projetos.
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-6 text-slate-200 sm:text-lg sm:leading-7">
              Terraplanagem, escavações e locação de equipamentos com a força, o cuidado e a pontualidade que a sua obra exige.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsapp} target="_blank" rel="noreferrer" className="button w-full justify-center rounded-xl py-3.5 sm:w-auto">
                Solicitar orçamento <ArrowDownRight size={19} />
              </a>
              <a href="#servicos" className="button button-outline w-full justify-center rounded-xl py-3.5 sm:w-auto">
                Conhecer serviços <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator Icon at Bottom Center (Matching Reference Screenshot) */}
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-white/60 sm:bottom-8 lg:left-auto lg:right-6 lg:translate-x-0">
          <div className="flex h-7 w-4.5 items-start justify-center rounded-full border-2 border-white/40 p-1">
            <div className="h-1.5 w-1 animate-pulse rounded-full bg-amber-400" />
          </div>
          <span className="text-[9px] font-black uppercase tracking-[.25em] text-white/50">Scroll</span>
        </div>
      </section>

      {/* Trust & Ratings Bar */}
      <section id="conteudo" className="border-y border-stone-200 bg-white py-5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 text-xs font-semibold uppercase tracking-[.12em] text-slate-600 sm:text-sm lg:px-8">
          <span className="flex items-center gap-2 font-bold text-slate-900">
            <Star className="fill-amber-500 text-amber-500" size={18} /> 5,0 no Google
          </span>
          <span className="hidden h-1.5 w-1.5 rounded-full bg-amber-500 sm:block" />
          <span>14 avaliações</span>
          <span className="hidden h-1.5 w-1.5 rounded-full bg-amber-500 sm:block" />
          <span>Atendimento regional</span>
          <span className="hidden h-1.5 w-1.5 rounded-full bg-amber-500 sm:block" />
          <span>Equipamentos próprios</span>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="section">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <Image src="/images/escavadeira-hidraulica.png" alt="Escavadeira da TJ Terraplanagem em operação" width={696} height={687} className="aspect-square w-full object-cover" />
            <div className="absolute bottom-4 right-4 rounded-xl bg-amber-400 px-5 py-3.5 text-slate-950 shadow-lg sm:bottom-6 sm:right-6">
              <strong className="block font-display text-3xl leading-none sm:text-4xl">TJ</strong>
              <span className="text-[10px] font-bold uppercase tracking-[.18em]">Terraplanagem</span>
            </div>
          </div>
          <div>
            <p className="eyebrow eyebrow-dark">Sobre a empresa</p>
            <h2 className="headline">A base do seu projeto começa aqui.</h2>
            <p className="copy mt-4">
              A TJ Terraplanagem atua com soluções completas para preparar terrenos e manter obras em movimento. Unimos equipamentos confiáveis, operação especializada e compromisso com cada prazo.
            </p>
            <p className="copy mt-4">
              Do primeiro corte ao acabamento final, trabalhamos com planejamento, segurança e atenção aos detalhes — porque uma obra bem executada começa no solo.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Equipe especializada", "Segurança em cada etapa", "Atendimento ágil", "Qualidade no acabamento"].map(item => (
                <div key={item} className="flex items-center gap-3 rounded-xl bg-white p-3 font-semibold shadow-sm border border-stone-200/80">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-amber-400 text-slate-950">
                    <Check size={16} />
                  </span>
                  <span className="text-sm text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="bg-slate-950 py-20 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow">O que fazemos</p>
            <h2 className="headline text-white">Soluções que movem sua obra.</h2>
            <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
              Estrutura, técnica e os equipamentos certos para transformar seu terreno em um novo começo.
            </p>
          </div>
          <div className="mt-12 grid border-t border-white/15 md:grid-cols-2">
            {services.map(([number, title, text]) => (
              <article key={title} className="group border-b border-white/15 py-7 sm:py-8 md:pr-10 even:md:border-l even:md:pl-10">
                <div className="flex justify-between">
                  <span className="font-display text-2xl text-amber-400">{number}</span>
                  <ArrowDownRight className="text-white/30 transition duration-200 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-amber-400" />
                </div>
                <h3 className="mt-6 text-xl font-bold sm:text-2xl">{title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Equipamentos Section */}
      <section id="equipamentos" className="section bg-stone-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow eyebrow-dark">Nossa estrutura</p>
              <h2 className="headline">Equipamento à altura do desafio.</h2>
            </div>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-700 underline decoration-amber-400 decoration-2 underline-offset-8">
              Consultar disponibilidade <ArrowDownRight size={14} />
            </a>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {equipment.map(([title, text, imgSrc]) => (
              <article key={title} className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                    <Image src={imgSrc} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                    <span className="absolute top-3 right-3 rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-amber-400 border border-white/10">
                      Disponível
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2.5 text-amber-600">
                      <Truck size={20} />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">TJ Frota</span>
                    </div>
                    <h3 className="mt-3 text-xl font-bold text-slate-900">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <a href={getEquipmentWhatsapp(title)} target="_blank" rel="noreferrer" className="button w-full justify-center rounded-xl py-3 text-xs">
                    Solicitar este equipamento <ArrowDownRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria de Vídeos Section */}
      <section id="galeria" className="section bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow eyebrow-dark">Obras em campo</p>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="headline">Força que se vê<br />em cada terreno.</h2>
            <p className="max-w-sm text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              Registros em vídeo de quem está todos os dias construindo a base de novas possibilidades.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {videos.map(([src, label], idx) => (
              <div key={src} className="group relative min-h-[380px] overflow-hidden rounded-2xl bg-slate-950 shadow-xl transition duration-300 hover:shadow-2xl sm:min-h-[440px]">
                <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105">
                  <source src={src} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-slate-950/40 transition duration-300 group-hover:bg-slate-950/25" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <span className="inline-block rounded-full bg-amber-400 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-950 mb-2">
                    Vídeo 0{idx + 1}
                  </span>
                  <p className="text-base font-bold text-white leading-snug">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos / Avaliações */}
      <section className="bg-amber-400 py-20 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_.8fr] lg:items-end lg:px-8">
          <div>
            <p className="eyebrow text-slate-800">A confiança de quem contratou</p>
            <blockquote className="mt-5 font-display text-3xl font-bold uppercase leading-tight text-slate-950 sm:text-5xl">
              “Ótimo serviço prestado, empresa com excelência e qualidade.”
            </blockquote>
            <p className="mt-5 flex items-center gap-2 font-bold text-slate-900">
              <span className="flex text-slate-950">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={18} className="fill-slate-950" />)}
              </span> Avaliação no Google
            </p>
          </div>
          <div className="border-t border-slate-950/20 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <p className="text-lg font-semibold leading-7 text-slate-900 sm:text-xl sm:leading-8">
              “Excelente serviço, bem feito, pontuais e super responsáveis.”
            </p>
            <p className="mt-4 font-bold text-slate-800">Cliente TJ Terraplanagem</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden bg-slate-950 py-20 text-white sm:py-32">
        <div className="absolute inset-0 -z-20 grid h-full w-full grid-cols-1 md:grid-cols-3">
          <div className="relative h-full w-full min-h-[220px]"><Image src="/images/escavadeira-hidraulica.png" alt="Escavadeira Hidráulica" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" /></div>
          <div className="relative h-full w-full min-h-[220px]"><Image src="/images/maquinas-para-terraplanagem.png" alt="Máquinas para Terraplanagem" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" /></div>
          <div className="relative h-full w-full min-h-[220px]"><Image src="/images/operacao-especializada.png" alt="Operação Especializada" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" /></div>
        </div>
        <div className="absolute inset-0 -z-10 bg-slate-950/80 backdrop-blur-[1px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <HardHat className="mx-auto text-amber-400" size={44} />
          <p className="eyebrow mt-6">Vamos construir juntos?</p>
          <h2 className="mx-auto mt-4 max-w-4xl font-display text-4xl font-bold uppercase leading-[.92] sm:text-6xl lg:text-7xl">
            Precisa preparar o terreno<br /><span className="text-amber-400">para sua próxima obra?</span>
          </h2>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="button mt-8 w-full justify-center rounded-xl py-4 sm:w-auto">
            Falar pelo WhatsApp <ArrowDownRight size={19} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-white pb-28 pt-16 sm:pb-20 sm:pt-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
          <div>
            <Image src="/images/logo.jpg" alt="TJ Terraplanagem" width={70} height={70} className="h-16 w-16 rounded-lg" />
            <h2 className="mt-5 font-display text-3xl font-bold uppercase leading-none text-slate-950 sm:text-4xl">
              Pronto para<br />começar?
            </h2>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-lg font-bold text-orange-700 hover:text-orange-800">
              <Phone size={20} /> (24) 98102-3864
            </a>
          </div>
          <div className="grid gap-8 border-t border-stone-200 pt-8 sm:grid-cols-2 lg:border-t-0 lg:pt-0">
            <div>
              <MapPin className="text-amber-600" size={22} />
              <h3 className="mt-3 font-bold text-slate-900">Atendimento</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Estr. Quirino Francisco Pinheiro<br />
                Vila Salutaris, Paraíba do Sul – RJ<br />
                CEP 25850-000
              </p>
            </div>
            <div>
              <Clock3 className="text-amber-600" size={22} />
              <h3 className="mt-3 font-bold text-slate-900">Fale conosco</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Solicite seu orçamento pelo WhatsApp. Nossa equipe retornará o mais breve possível.
              </p>
              <a
                aria-label="Instagram da TJ Terraplanagem"
                href="https://www.instagram.com/tj_terraplanagem_/"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 text-slate-950 transition hover:border-amber-500 hover:bg-amber-400"
              >
                <Instagram size={19} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-stone-200 bg-stone-50 py-6">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 text-center text-xs text-slate-500 sm:flex-row sm:justify-between sm:text-left lg:px-8">
            <span>© {new Date().getFullYear()} TJ Terraplanagem LTDA. Todos os direitos reservados.</span>
            <span>Terraplanagem • Escavação • Locação de Equipamentos</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
