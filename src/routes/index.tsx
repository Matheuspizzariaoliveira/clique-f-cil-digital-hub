import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Globe,
  Megaphone,
  Instagram,
  Palette,
  CheckCircle2,
  MessageCircle,
  Mail,
  MousePointerClick,
} from "lucide-react";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CliqueFácilDigital — Sua presença digital em um clique" },
      {
        name: "description",
        content:
          "Agência digital especializada em criação de sites, tráfego pago, social media e branding para fazer seu negócio crescer.",
      },
      { property: "og:title", content: "CliqueFácilDigital — Sua presença digital em um clique" },
      {
        property: "og:description",
        content: "Sites, tráfego pago, redes sociais e branding para fazer seu negócio crescer.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Globe, title: "Criação de Sites", text: "Sites rápidos, modernos e pensados para converter visitantes em clientes." },
  { icon: Megaphone, title: "Tráfego Pago", text: "Campanhas no Google e Meta Ads com foco em resultado e retorno real." },
  { icon: Instagram, title: "Social Media", text: "Conteúdo estratégico e gestão das suas redes para engajar seu público." },
  { icon: Palette, title: "Branding", text: "Identidade visual marcante que transmite confiança e profissionalismo." },
];

const steps = [
  { n: "01", title: "Diagnóstico", text: "Entendemos seu negócio, público e objetivos." },
  { n: "02", title: "Estratégia", text: "Montamos um plano digital sob medida." },
  { n: "03", title: "Execução", text: "Colocamos tudo no ar com qualidade e agilidade." },
  { n: "04", title: "Crescimento", text: "Acompanhamos os números e otimizamos sempre." },
];

const stats = [
  { v: "+150", l: "Projetos entregues" },
  { v: "+80", l: "Clientes atendidos" },
  { v: "98%", l: "Satisfação" },
];

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#" className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
              <MousePointerClick className="h-4 w-4" />
            </span>
            CliqueFácil<span className="text-primary">Digital</span>
          </a>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#servicos" className="transition-colors hover:text-foreground">Serviços</a>
            <a href="#sobre" className="transition-colors hover:text-foreground">Sobre</a>
            <a href="#processo" className="transition-colors hover:text-foreground">Como trabalhamos</a>
          </nav>
          <a href="#contato" className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90">
            Fale conosco
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40">
        <div className="hero-grid-bg absolute inset-0 -z-10" />
        <div className="absolute left-1/2 top-20 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-glow blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" /> Agência de marketing digital
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Sua presença digital a <span className="text-gradient">um clique</span> de distância.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Criamos sites, campanhas e conteúdos que colocam sua empresa na frente de quem realmente importa: seus clientes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contato" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground shadow-[0_10px_40px_-10px_var(--glow)] transition hover:opacity-90">
                Solicitar orçamento <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#servicos" className="inline-flex items-center rounded-full border border-border px-6 py-3 font-medium transition hover:bg-accent">
                Ver serviços
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src={hero}
              alt="Cursor digital brilhante em azul"
              width={1024}
              height={1024}
              className="animate-float mx-auto w-full max-w-md rounded-3xl glow-card"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="py-24">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Serviços</p>
          <h2 className="mt-3 max-w-xl text-3xl font-bold md:text-4xl">Tudo que seu negócio precisa para crescer online</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="glow-card rounded-2xl bg-card p-6">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-primary">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="sobre" className="py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">Sobre nós</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Tecnologia e estratégia, sem complicação</h2>
            <p className="mt-5 text-muted-foreground">
              A CliqueFácilDigital nasceu para descomplicar o digital. Unimos design, tecnologia e marketing para entregar soluções que geram resultados de verdade — com atendimento próximo e transparente.
            </p>
            <ul className="mt-6 space-y-3">
              {["Atendimento personalizado", "Entregas rápidas", "Foco em resultado"].map((i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" /> {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.l} className="rounded-2xl border border-border bg-card p-5 text-center">
                <div className="text-gradient font-display text-3xl font-bold md:text-4xl">{s.v}</div>
                <div className="mt-2 text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="processo" className="py-24">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Como trabalhamos</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Do primeiro contato ao crescimento</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="border-t border-border pt-6">
                <span className="font-display text-sm text-primary">{s.n}</span>
                <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="py-24">
        <div className="mx-auto max-w-4xl px-5">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 text-center md:p-16">
            <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-glow blur-3xl" />
            <h2 className="relative text-3xl font-bold md:text-5xl">Pronto para dar o próximo clique?</h2>
            <p className="relative mx-auto mt-4 max-w-lg text-muted-foreground">
              Fale com a gente e receba um diagnóstico gratuito da presença digital da sua empresa.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <a href="https://wa.me/5500000000000" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a href="mailto:contato@cliquefacildigital.com.br" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium transition hover:bg-accent">
                <Mail className="h-4 w-4" /> E-mail
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} CliqueFácilDigital. Todos os direitos reservados.
      </footer>
    </div>
  );
}
