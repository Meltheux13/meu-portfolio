import { createFileRoute } from "@tanstack/react-router";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Play, ArrowUpRight, Sparkles, Film, Wand2, Layers, Mail, Instagram, Youtube, Send, MessageCircle, Twitter, Linkedin, Gamepad2, Zap, Target, TrendingUp, X } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nova Cut — Motion Designer & Video Editor Portfolio" },
      { name: "description", content: "Portfolio of a motion designer and video editor crafting cinematic stories, brand films, and social-first content." },
      { property: "og:title", content: "Nova Cut — Motion Designer Portfolio" },
      { property: "og:description", content: "Cinematic edits, motion design and social content that move audiences." },
    ],
  }),
  component: Index,
});

type Lang = "en" | "pt";
const dict = {
  en: {
    nav: { work: "Work", services: "Services", about: "About", contact: "Contact", cta: "Hire Me" },
    hero: {
      badge: "Now shaping Q3 2026 releases",
      titleLine1: "Editing videos that",
      titleLine2: "hold attention until",
      titleLine3: "the last second",
      desc: "Specialist in gaming, reels and motion design — edits created to increase retention, visual impact and engagement.",
      ctaWork: "Let's Work Together", ctaReel: "View My Work",
      tags: ["Gaming", "Motion Design", "Reels", "Shorts"],
    },
    marquee: ["Brand Films", "Music Videos", "Reels & Shorts", "Title Sequences", "Product Stories", "Documentary", "Motion Graphics"],
    work: { kicker: "Portfolio", t1: "Featured", t2: "work", desc: "A few projects that have already passed through the timeline. Games, reels and motion made to hold attention from the first to the last second." },
    formats: { short: "Short Videos", long: "Long Videos" },
    categories: { all: "All", motion: "Motion", shortform: "Reels", gameplay: "Gaming" },
    projects: [
      {
        title: "Motion Design Showcase",
        tag: "Motion Design · Short Video",
        cat: "motion",
        format: "short",
        vimeoUrl: "https://player.vimeo.com/video/1197045349",
        thumbnail: "/images/motion-design-showcase.png",
      },
      {
        title: "Elon Musk Motion Edit",
        tag: "Motion Design · Video",
        cat: "motion",
        format: "short",
        vimeoUrl: "https://player.vimeo.com/video/1197127143",
        thumbnail: "https://vumbnail.com/1197127143_large.jpg",
      },
      {
        title: "Reels Style Edit",
        tag: "Instagram Reels · Editing",
        cat: "shortform",
        format: "short",
        vimeoUrl: "https://player.vimeo.com/video/1197191529",
        thumbnail: "https://vumbnail.com/1197191529_large.jpg",
      },
      {
        title: "Vídeo do Skorpion Gamer",
        tag: "Gaming · Short Video",
        cat: "gameplay",
        format: "short",
        vimeoUrl: "https://player.vimeo.com/video/1197037465",
        thumbnail: "https://img.youtube.com/vi/eD-axlTJDI8/hqdefault.jpg",
      },
    ],
    services: {
      kicker: "Services", t1: "What I", t2: "Offer",
      subtitle: "Editing services tuned for creators who care about pacing, retention and feel.",
      cta: "Get a Quote",
      items: [
        {
          title: "Video Editing",
          desc: "Long-form edits with storytelling, pacing, color and audio mixing — built for watch time and audience retention.",
          bullets: ["Narrative & pacing", "Color grade & audio mix", "Custom graphics & lower thirds", "Thumbnail concepts"],
        },
        {
          title: "Short Form Content",
          desc: "Scroll-stopping cuts for TikTok, Reels and Shorts. Fast-paced, trend-aware and built to hook in the first second.",
          bullets: ["Trending audio sync", "Caption styling", "Hook optimization", "Platform-specific formats"],
        },
        {
          title: "Motion & Effects",
          desc: "Modern animations, transitions and motion graphics crafted in After Effects to make your content stand out.",
          bullets: ["Animated intros & outros", "Lower thirds & titles", "Transitions & FX", "Brand-consistent assets"],
        },
      ],
    },

    about: {
      kicker: "About me",
      nowPlayingLabel: "Now playing", nowPlayingTitle: "Behind the timeline — Vol. 03",
      t1: "Passionate about creating", t2: "content that converts",
      p1: "I'm a video editor focused on visual storytelling, pacing and retention — turning raw footage into edits that actually hold attention.",
      p2: "From long-form YouTube to viral short-form, every project is a chance to tell a story that sticks. Let's tell yours.",
      cards: [
        { title: "Video Editing", desc: "Dynamic cuts focused on rhythm, visual impact and retention." },
        { title: "Motion & Effects", desc: "Modern animations, transitions and effects crafted in After Effects." },
        { title: "Short Form Content", desc: "TikTok, Reels and Shorts with fast pacing and a sticky visual feel." },
        { title: "Gaming Content", desc: "Gameplay edits, memes, cuts and modern gamer-style content." },
      ],
    },
    contact: {
      kicker: "Contact",
      t1: "Let's work", t2: "together",
      desc: "Ready to elevate your content? Get in touch and let's discuss your project.",
      formName: "Your Name", formNamePh: "John Doe",
      formEmail: "Email Address", formEmailPh: "john@example.com",
      formMsg: "Your Message", formMsgPh: "Tell me about your project…",
      send: "Send Message",
      otherTitle: "Other ways to connect",
      otherDesc: "Prefer a different method? Reach out through any of these channels and I'll get back to you as soon as possible.",
      clickConnect: "Click to connect",
      quickLabel: "Quick response:",
      quickDesc: "I typically reply within 24 hours during business days.",
    },
    footer: "© 2026 NovaCut Studio. All frames reserved.",
    footerTagline: "Video editor focused on retention, storytelling and content that converts.",
    footerRights: "© 2026 All rights reserved",
  },
  pt: {
    nav: { work: "Projetos", services: "Serviços", about: "Sobre", contact: "Contato", cta: "Contratar" },
    hero: {
      badge: "Moldando projetos desde o 3º trimestre de 2022",
      titleLine1: "Editando vídeos que",
      titleLine2: "prendem atenção até",
      titleLine3: "o último segundo",
      desc: "Especialista em gaming, reels e motion design — edições criadas para aumentar retenção, impacto visual e engajamento.",
      ctaWork: "Vamos trabalhar juntos", ctaReel: "Ver Meu Trabalho",
      tags: ["Gaming", "Motion Design", "Reels", "Shorts"],
    },
    marquee: ["Filmes de Marca", "Videoclipes", "Reels & Shorts", "Aberturas", "Histórias de Produto", "Documentário", "Motion Graphics"],
    work: { kicker: "Portfólio", t1: "Trabalhos em", t2: "destaque", desc: "Alguns dos trabalhos que já passaram pela timeline. Games, reels e motion feitos para prender a atenção do primeiro ao último segundo." },
    formats: { short: "Shorts", long: "Vídeos Longos" },
    categories: { all: "Todos", motion: "Motion", shortform: "Reels", gameplay: "Gaming" },
    projects: [
      {
        title: "Motion Design Showcase",
        tag: "Motion Design · Vídeo Curto",
        cat: "motion",
        format: "short",
        vimeoUrl: "https://player.vimeo.com/video/1197045349",
        thumbnail: "/images/motion-design-showcase.png",
      },
      {
        title: "Elon Musk Motion Edit",
        tag: "Motion Design · Vídeo",
        cat: "motion",
        format: "short",
        vimeoUrl: "https://player.vimeo.com/video/1197127143",
        thumbnail: "https://vumbnail.com/1197127143_large.jpg",
      },
      {
        title: "Reels Style Edit",
        tag: "Instagram Reels · Edição",
        cat: "shortform",
        format: "short",
        vimeoUrl: "https://player.vimeo.com/video/1197191529",
        thumbnail: "https://vumbnail.com/1197191529_large.jpg",
      },
      {
        title: "Vídeo do Skorpion Gamer",
        tag: "Gaming · Vídeo Curto",
        cat: "gameplay",
        format: "short",
        vimeoUrl: "https://player.vimeo.com/video/1197037465",
        thumbnail: "https://img.youtube.com/vi/eD-axlTJDI8/hqdefault.jpg",
      },
    ],
    services: {
      kicker: "Serviços", t1: "O que eu", t2: "Ofereço",
      subtitle: "Serviços de edição para criadores que se importam com ritmo, retenção e estética.",
      cta: "Pedir orçamento",
      items: [
        {
          title: "Edição de Vídeo",
          desc: "Edições long-form com storytelling, ritmo, color e mixagem de áudio — feitas para watch time e retenção.",
          bullets: ["Narrativa & ritmo", "Color grade & mix de áudio", "Gráficos e lower thirds", "Conceitos de thumbnail"],
        },
        {
          title: "Short Form Content",
          desc: "Cortes para TikTok, Reels e Shorts. Pacing rápido, trend-aware e construído para prender no primeiro segundo.",
          bullets: ["Sync de áudios em alta", "Estilo de legendas", "Otimização de hook", "Formatos por plataforma"],
        },
        {
          title: "Motion & Effects",
          desc: "Animações, transições e motion graphics modernos no After Effects para destacar o seu conteúdo.",
          bullets: ["Intros e outros animados", "Lower thirds & títulos", "Transições & efeitos", "Assets alinhados à marca"],
        },
      ],
    },

    about: {
      kicker: "Sobre mim",
      nowPlayingLabel: "Tocando agora", nowPlayingTitle: "Por trás da timeline — Vol. 03",
      t1: "Criando conteúdo que", t2: "prende e converte",
      p1: "Sou um editor de vídeo focado em storytelling visual, ritmo e retenção — transformando footage bruto em edições que realmente prendem a atenção.",
      p2: "De long-form pro YouTube até short-form viral, cada projeto é uma chance de contar uma história que gruda. Vamos contar a sua.",
      cards: [
        { title: "Video Editing", desc: "Cortes dinâmicos com foco em ritmo, impacto visual e retenção." },
        { title: "Motion & Effects", desc: "Animações, transições e efeitos modernos feitos no After Effects." },
        { title: "Short Form Content", desc: "TikTok, Reels e Shorts com pacing rápido e visual envolvente." },
        { title: "Gaming Content", desc: "Edições de gameplay, memes, cortes e conteúdo gamer moderno." },
      ],
    },
    contact: {
      kicker: "Contato",
      t1: "Vamos trabalhar", t2: "juntos",
      desc: "Pronto para elevar seu conteúdo? Entre em contato e vamos conversar sobre seu projeto.",
      formName: "Seu Nome", formNamePh: "João Silva",
      formEmail: "E-mail", formEmailPh: "joao@exemplo.com",
      formMsg: "Sua Mensagem", formMsgPh: "Conte-me sobre seu projeto…",
      send: "Enviar Mensagem",
      otherTitle: "Outras formas de contato",
      otherDesc: "Prefere outro método? Fale comigo por qualquer um destes canais e eu respondo o quanto antes.",
      clickConnect: "Clique para conectar",
      quickLabel: "Resposta rápida:",
      quickDesc: "Costumo responder em até 24 horas em dias úteis.",
    },
    footer: "© 2026 NovaCut Studio. Todos os frames reservados.",
    footerTagline: "Editor de vídeo focado em retenção, storytelling e conteúdo que converte.",
    footerRights: "© 2026 Todos os direitos reservados",
  },
};

const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (typeof dict)["en"] }>({
  lang: "pt", setLang: () => {}, t: dict.pt,
});
const useT = () => useContext(LangCtx);

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("animate-fade-up");
            (e.target as HTMLElement).style.opacity = "1";
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => {
      el.style.opacity = "0";
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
}

function LangToggle() {
  const { lang, setLang } = useT();
  const isPt = lang === "pt";
  return (
    <div
      aria-label="Select language"
      role="group"
      className="relative flex items-center gap-2 h-9 px-1.5 rounded-full border border-border bg-card/60 text-xs font-medium select-none"
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={!isPt}
        className={`px-2 transition-colors ${!isPt ? "text-foreground" : "text-muted-foreground"}`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang(isPt ? "en" : "pt")}
        aria-label="Toggle language"
        className="relative h-6 w-10 rounded-full bg-secondary"
      >
        <span
          className="absolute top-0.5 h-5 w-5 rounded-full bg-brand transition-all"
          style={{ left: isPt ? "calc(100% - 1.375rem)" : "0.125rem" }}
        />
      </button>
      <button
        type="button"
        onClick={() => setLang("pt")}
        aria-pressed={isPt}
        className={`px-2 transition-colors ${isPt ? "text-foreground" : "text-muted-foreground"}`}
      >
        PT
      </button>
    </div>
  );
}

function Nav() {
  const { t } = useT();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const items = [
    { l: t.nav.work, h: "work" },
    { l: t.nav.services, h: "services" },
    { l: t.nav.about, h: "about" },
    { l: t.nav.contact, h: "contact" },
  ];
  return (
    <header
      className={`fixed inset-x-0 z-50 flex justify-center transition-all duration-500 ease-out ${
        scrolled ? "top-3" : "top-5"
      }`}
    >
      <nav
        className={`flex items-center justify-between gap-4 rounded-full transition-all duration-500 ease-out ${
          scrolled
            ? "h-12 px-4 max-w-4xl w-[calc(100%-1.5rem)] bg-background/40 backdrop-blur-xl border border-border/40 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)]"
            : "h-16 px-6 max-w-6xl w-[calc(100%-2rem)] bg-background/60 backdrop-blur-md border border-border/60 shadow-[0_20px_60px_-30px_rgba(146,160,143,0.25)]"
        }`}
      >
        <a href="#top" className="flex items-center font-semibold tracking-tight shrink-0">
          <span className={`whitespace-nowrap transition-all duration-500 ${scrolled ? "text-base" : "text-lg"}`}>
            <span>Meltheux13</span>
            <span className="mx-1.5">|</span>
            <span>Editor</span>
          </span>
        </a>
        <ul className={`hidden md:flex items-center text-muted-foreground transition-all duration-500 ${scrolled ? "gap-6 text-xs" : "gap-8 text-sm"}`}>
          {items.map((it) => (
            <li key={it.h}>
              <a href={`#${it.h}`} className="hover:text-foreground transition-colors">{it.l}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3 shrink-0">
          <LangToggle />
          <a
            href="#contact"
            className={`hidden sm:inline-flex bg-brand text-primary-foreground font-medium rounded-full hover:scale-105 transition-all duration-500 ${
              scrolled ? "text-xs px-3.5 py-1.5" : "text-sm px-5 py-2.5"
            }`}
          >
            {t.nav.cta}
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  const { t } = useT();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="top" ref={ref} className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden"
      style={{ backgroundImage: "radial-gradient(circle at var(--mx,50%) var(--my,40%), oklch(0.78 0.025 140 / 0.22), transparent 55%)" }}>
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[60vh] w-[70vw] max-w-4xl rounded-full blur-3xl opacity-60"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.025 140 / 0.28), transparent 70%)" }} />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground animate-fade-in">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          {t.hero.badge}
        </div>
        <h1 className="mt-7 py-[0.1em] overflow-visible font-black tracking-[-0.03em] leading-[1.1] text-[clamp(2.35rem,6vw,5.25rem)] max-w-4xl mx-auto animate-fade-up">
          <span className="block sm:whitespace-nowrap">{t.hero.titleLine1}</span>
          <span className="block">{t.hero.titleLine2}</span>
          <span className="block">
            {t.hero.titleLine3.split(" ")[0]}{" "}
            <span className="text-accent">{t.hero.titleLine3.split(" ").slice(1).join(" ")}</span>
          </span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg leading-7 md:leading-8 text-muted-foreground/90 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          {t.hero.desc}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <a href="#contact" className="group bg-brand text-primary-foreground font-medium px-7 py-3.5 rounded-full inline-flex items-center gap-2 glow hover:scale-105 transition-transform">
            {t.hero.ctaWork}
            <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition-transform" />
          </a>
          <a href="#work" className="border border-border bg-card/40 backdrop-blur font-medium px-7 py-3.5 rounded-full inline-flex items-center gap-2 hover:bg-card transition-colors">
            <Play className="h-4 w-4 fill-current" />
            {t.hero.ctaReel}
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.5s" }}>
          {t.hero.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-border bg-card/35 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
              {tag}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}

function Marquee() {
  const { t } = useT();
  const items = t.marquee;
  return (
    <div className="border-y border-border/60 py-6 overflow-hidden bg-card/30">
      <div className="flex gap-12 whitespace-nowrap animate-marquee">
        {[...items, ...items].map((it, i) => (
          <span key={i} className="text-2xl md:text-4xl font-semibold text-muted-foreground/60">
            {it} <span className="text-accent mx-6">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

const projectGradients = [
  "from-[#92a08f]/30 via-white/5 to-black/40",
  "from-white/10 via-[#92a08f]/25 to-black/50",
  "from-[#92a08f]/20 via-black/40 to-white/5",
  "from-black/50 via-[#92a08f]/20 to-white/5",
  "from-white/8 via-[#92a08f]/20 to-black/40",
  "from-[#92a08f]/25 via-white/5 to-black/40",
  "from-white/10 via-[#92a08f]/20 to-black/50",
  "from-[#92a08f]/30 via-black/40 to-white/5",
  "from-black/50 via-[#92a08f]/15 to-white/8",
];

type FormatKey = "short" | "long";
type CatKey = "all" | "motion" | "shortform" | "gameplay";

const projectHref = (project: { href?: string }) => project.href;
const projectThumbnail = (project: { thumbnail?: string }) => project.thumbnail;
const projectVimeoUrl = (project: { vimeoUrl?: string }) => project.vimeoUrl;

function Work() {
  const { t } = useT();
  const [format, setFormat] = useState<FormatKey>("short");
  const [cat, setCat] = useState<CatKey>("all");
  const [activeVideo, setActiveVideo] = useState<{ title: string; vimeoUrl: string } | null>(null);

  const closeVideo = () => {
    setActiveVideo(null);
  };

  useEffect(() => {
    if (!activeVideo) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeVideo();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeVideo]);

  const catKeys: CatKey[] = format === "long" ? ["all"] : ["all", "shortform", "gameplay", "motion"];
  const formatProjects = t.projects.filter((p) => p.format === format);
  const filtered = cat === "all" || format === "long" ? formatProjects : formatProjects.filter((p) => p.cat === cat);
  const hasOnlyShorts = filtered.length > 0 && filtered.every((p) => p.format === "short");
  const hasOnlyLongs = filtered.length > 0 && filtered.every((p) => p.format === "long");
  const longEmptyText = t.formats.long === "Long Videos" ? "No long videos added yet." : "Nenhum vídeo longo adicionado ainda.";

  const selectCategory = (nextCat: CatKey) => {
    setCat(nextCat);
    if (nextCat === "all") return;
    const firstProject = t.projects.find((p) => p.cat === nextCat);
    if (firstProject) setFormat(firstProject.format as FormatKey);
  };

  return (
    <section id="work" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" data-reveal>
          <div className="text-xs uppercase tracking-widest text-accent mb-3">{t.work.kicker}</div>
          <h2 className="py-[0.1em] overflow-visible text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">{t.work.t1} <span className="inline-block py-[0.02em] text-gradient">{t.work.t2}</span></h2>
          <p className="mt-5 max-w-xl mx-auto text-muted-foreground">{t.work.desc}</p>
        </div>

        {/* Format toggle */}
        <div className="flex justify-center mb-8" data-reveal>
          <div className="relative grid grid-cols-2 p-1 rounded-full border border-border bg-card/40 backdrop-blur-xl">
            <div
              className="absolute top-1 bottom-1 left-1 rounded-full bg-gradient-to-r from-[#92a08f]/30 to-white/10 border border-[#92a08f]/30 transition-transform duration-500 ease-out"
              style={{
                width: "calc(50% - 0.25rem)",
                transform: format === "short" ? "translateX(0%)" : "translateX(100%)",
                boxShadow: "0 0 24px rgba(146,160,143,0.25)",
              }}
            />
            {(["short", "long"] as FormatKey[]).map((f) => (
              <button
                key={f}
                onClick={() => {
                  setFormat(f);
                  if (f === "long") setCat("all");
                }}
                className={`relative z-10 px-7 py-2.5 text-sm font-medium rounded-full transition-colors whitespace-nowrap text-center ${
                  format === f ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.formats[f]}
              </button>
            ))}
          </div>
        </div>

        {/* Category filters */}
        <div className="mb-14 -mx-6" data-reveal>
          <div
            className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-2 overflow-x-auto md:overflow-visible px-6 pb-2 md:pb-0 scrollbar-none"
            style={{ scrollbarWidth: "none" }}
          >
            {catKeys.map((k) => {
              const active = cat === k;
              return (
                <button
                  key={k}
                  onClick={() => selectCategory(k)}
                  className={`shrink-0 whitespace-nowrap px-4 py-2 text-sm rounded-full border transition-all duration-300 ${
                    active
                      ? "border-[#92a08f]/50 bg-[#92a08f]/15 text-foreground"
                      : "border-border/60 bg-card/30 text-muted-foreground hover:text-foreground hover:border-border"
                  }`}
                  style={active ? { boxShadow: "0 0 24px rgba(146,160,143,0.2)" } : undefined}
                >
                  {t.categories[k]}
                </button>
              );
            })}
          </div>
        </div>

        <div
          key={`${format}-${cat}`}
          className={`grid gap-6 ${
            filtered.length === 1
              ? `grid-cols-1 justify-items-center w-full`
              : hasOnlyShorts
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                : hasOnlyLongs
                  ? "md:grid-cols-2 lg:grid-cols-3"
                  : "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {filtered.length === 0 && (
            <div className="col-span-full mx-auto max-w-md rounded-2xl border border-border bg-card/30 px-6 py-12 text-center text-muted-foreground animate-fade-in">
              <div className="text-sm font-medium text-foreground">
                {format === "long" ? longEmptyText : "No projects here yet"}
              </div>
              {format !== "long" && (
                <p className="mt-2 text-sm">New selected work will appear here once a real video is attached.</p>
              )}
            </div>
          )}
          {filtered.map((p, i) => {
            const href = projectHref(p);
            const thumbnail = projectThumbnail(p);
            const vimeoUrl = projectVimeoUrl(p);
            const isShort = p.format === "short";
            const cardClassName = `animate-fade-up group relative block ${
              isShort ? "aspect-[9/16]" : "aspect-[16/10]"
            } ${
              filtered.length === 1 ? (isShort ? "w-full max-w-[302px]" : "w-full max-w-[413px]") : "w-full"
            } rounded-2xl overflow-hidden border border-border bg-card cursor-pointer hover:border-[#92a08f]/40 transition-colors`;
            const cardContent = (
              <>
                {thumbnail ? (
                  <img
                    src={thumbnail}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-75 group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${projectGradients[i % projectGradients.length]} opacity-80 group-hover:scale-110 transition-transform duration-700`} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className={`absolute inset-0 ${isShort ? "p-5" : "p-7"} flex flex-col justify-between text-left`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest text-foreground/70">{p.tag}</span>
                    <span className="h-9 w-9 rounded-full bg-background/40 backdrop-blur border border-border grid place-items-center group-hover:bg-brand group-hover:border-transparent transition-all">
                      <ArrowUpRight className="h-4 w-4 group-hover:rotate-0 -rotate-45 transition-transform" />
                    </span>
                  </div>
                  <div>
                    <h3 className={`py-[0.05em] overflow-visible ${isShort ? "text-lg md:text-xl" : "text-xl md:text-2xl"} font-semibold tracking-tight leading-[1.2]`}>{p.title}</h3>
                    <div className="mt-3 h-px w-10 bg-accent group-hover:w-24 transition-all duration-500" />
                  </div>
                </div>
              </>
            );

            if (vimeoUrl) {
              return (
                <button
                  key={p.title}
                  type="button"
                  onClick={() => setActiveVideo({ title: p.title, vimeoUrl })}
                  style={{ animationDelay: `${i * 60}ms` }}
                  className={cardClassName}
                >
                  {cardContent}
                </button>
              );
            }

            if (href) {
              return (
                <a
                  key={p.title}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  style={{ animationDelay: `${i * 60}ms` }}
                  className={cardClassName}
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <article key={p.title} style={{ animationDelay: `${i * 60}ms` }} className={cardClassName}>
                {cardContent}
              </article>
            );
          })}
        </div>
      </div>
      {activeVideo && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/92 px-4 py-6 animate-fade-in" role="dialog" aria-modal="true" aria-label={activeVideo.title}>
          <button
            type="button"
            aria-label="Close video"
            onClick={closeVideo}
            className="absolute inset-0 cursor-default"
          />
          <div className="relative w-[min(90vw,calc(85vh*9/16),520px)] max-h-[85vh]">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
              <button
                type="button"
                onClick={closeVideo}
                aria-label="Close video"
                className="absolute right-3 top-3 z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-background/70 text-muted-foreground backdrop-blur transition-colors hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="relative aspect-[9/16] max-h-[85vh] bg-black">
                <iframe
                  title={activeVideo.title}
                  src={`${activeVideo.vimeoUrl}?autoplay=1&muted=1&title=0&byline=0&portrait=0&badge=0`}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

const serviceIcons = [Film, Zap, Wand2];

function Services() {
  const { t } = useT();
  return (
    <section id="services" className="relative py-32 px-6 bg-card/20 overflow-hidden isolate">
      {/* Ambient side glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 -left-40 -translate-y-1/2 h-[680px] w-[680px] rounded-full bg-[radial-gradient(circle,oklch(0.78_0.025_140/0.18),transparent_65%)] blur-3xl" />
        <div className="absolute top-1/2 -right-40 -translate-y-1/2 h-[680px] w-[680px] rounded-full bg-[radial-gradient(circle,oklch(0.78_0.025_140/0.18),transparent_65%)] blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center max-w-2xl mx-auto mb-16" data-reveal>
          <div className="text-xs uppercase tracking-widest text-accent mb-3">{t.services.kicker}</div>
          <h2 className="py-[0.1em] overflow-visible text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            {t.services.t1} <span className="inline-block py-[0.02em] text-gradient">{t.services.t2}</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">{t.services.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {t.services.items.map((s, i) => {
            const Icon = serviceIcons[i];
            return (
              <div
                key={s.title}
                data-reveal
                style={{ transitionDelay: `${i * 80}ms` }}
                className="group relative p-8 rounded-2xl border border-border bg-card/80 backdrop-blur-sm hover:border-accent/50 transition-colors flex flex-col"
              >
                <div className="h-12 w-12 rounded-xl bg-accent/10 border border-accent/20 grid place-items-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="py-[0.05em] overflow-visible text-xl font-semibold leading-[1.2] mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-2 mt-auto">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="relative mt-14 flex justify-center" data-reveal>
          <div aria-hidden className="pointer-events-none absolute left-1/2 top-[70%] z-0 h-12 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(200,206,192,0.20)] blur-[70px]" />
          <a
            href="#contact"
            className="relative z-10 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-background font-medium glow hover:scale-[1.02] transition-transform"
          >
            {t.services.cta}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

const aboutCardIcons = [Film, Wand2, Zap, Gamepad2];

function About() {
  const { t } = useT();
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden isolate">
      <div className="pointer-events-none absolute top-1/2 -left-40 -translate-y-1/2 h-[600px] w-[600px] rounded-full blur-3xl -z-10"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.025 140 / 0.12), transparent 70%)" }} />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.08fr_0.92fr] gap-14 lg:gap-16 items-center">
        <div data-reveal>
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-6">{t.about.kicker}</div>
          <h2 className="py-[0.1em] overflow-visible text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
            <span className="lg:whitespace-nowrap">{t.about.t1}</span><br />
            <span className="inline-block overflow-visible text-foreground italic">{t.about.t2}</span>
          </h2>
          <p className="mt-8 text-muted-foreground leading-relaxed max-w-md">{t.about.p1}</p>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">{t.about.p2}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 lg:gap-5" data-reveal>
          {t.about.cards.map((card, i) => {
            const Icon = aboutCardIcons[i];
            return (
              <div
                key={card.title}
                className="group relative rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-5 md:p-6 transition-all duration-300 hover:border-accent/50 hover:-translate-y-1"
                style={{ boxShadow: "0 1px 0 0 rgb(255 255 255 / 0.04) inset, 0 20px 40px -30px rgb(0 0 0 / 0.6)" }}
              >
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-accent/10 border border-accent/20 mb-4 transition-colors group-hover:bg-accent/15">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="py-[0.05em] overflow-visible text-lg font-semibold leading-[1.2] mb-1.5">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}



function Contact() {
  const { t } = useT();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const email = "mateusalthiere@outlook.com";
  const channels = [
    { icon: Mail, title: "Email", href: `mailto:${email}` },
    { icon: MessageCircle, title: "WhatsApp", href: "https://wa.me/5584991848134?text=Olá,%20vim%20pelo%20seu%20portfólio.", target: "_blank" },
    { icon: Instagram, title: "Instagram", href: "https://www.instagram.com/mateus_althiery/", target: "_blank" },
  ];
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden isolate">
      {/* Ambient glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10"
        style={{ backgroundImage: "radial-gradient(ellipse at 50% 0%, oklch(0.78 0.025 140 / 0.18), transparent 60%)" }} />
      <div aria-hidden className="pointer-events-none absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[620px] w-[620px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.025 140 / 0.10), transparent 70%)" }} />
      <div aria-hidden className="pointer-events-none absolute -z-10 inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-20" data-reveal>
          <div className="text-xs uppercase tracking-[0.3em] text-[#a8b6a4] mb-6">{t.contact.kicker}</div>
          <h2 className="py-[0.18em] overflow-visible text-5xl md:text-7xl font-bold tracking-tight leading-[1.24]">
            {t.contact.t1} <span className="inline-block overflow-visible align-baseline text-foreground italic leading-[1.24]">{t.contact.t2}</span>
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-muted-foreground/90">{t.contact.desc}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <form
            onSubmit={(e) => { e.preventDefault(); window.location.href = `mailto:${email}?subject=Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message + "\n\n" + form.email)}`; }}
            data-reveal
            className="relative rounded-3xl p-8 md:p-10 border border-border bg-card/60 backdrop-blur-xl"
            style={{ boxShadow: "0 1px 0 0 rgb(255 255 255 / 0.06) inset, 0 30px 80px -40px rgb(0 0 0 / 0.6)" }}
          >
            <div className="space-y-6">
              <Field label={t.contact.formName}>
                <input
                  type="text" required value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={t.contact.formNamePh}
                  className="w-full h-12 px-4 rounded-xl bg-background/70 border border-border text-foreground backdrop-blur placeholder:text-muted-foreground/70 focus:outline-none focus:border-[#92a08f]/70 focus:ring-1 focus:ring-[#92a08f]/40 transition"
                />
              </Field>
              <Field label={t.contact.formEmail}>
                <input
                  type="email" required value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder={t.contact.formEmailPh}
                  className="w-full h-12 px-4 rounded-xl bg-background/70 border border-border text-foreground backdrop-blur placeholder:text-muted-foreground/70 focus:outline-none focus:border-[#92a08f]/70 focus:ring-1 focus:ring-[#92a08f]/40 transition"
                />
              </Field>
              <Field label={t.contact.formMsg}>
                <textarea
                  required rows={5} value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={t.contact.formMsgPh}
                  className="w-full px-4 py-3 rounded-xl bg-background/70 border border-border text-foreground backdrop-blur placeholder:text-muted-foreground/70 focus:outline-none focus:border-[#92a08f]/70 focus:ring-1 focus:ring-[#92a08f]/40 transition resize-none"
                />
              </Field>
              <button
                type="submit"
                className="group w-full h-14 rounded-xl font-medium inline-flex items-center justify-center gap-2 text-foreground border border-[#92a08f]/50 bg-gradient-to-r from-white/[0.06] via-[#92a08f]/20 to-white/[0.06] hover:border-[#92a08f]/80 transition-all"
                style={{ boxShadow: "0 0 0 1px rgb(146 160 143 / 0.08), 0 20px 60px -20px rgb(146 160 143 / 0.35)" }}
              >
                {t.contact.send}
                <Send className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </form>

          <div data-reveal className="flex flex-col">
            <h3 className="py-[0.05em] overflow-visible text-2xl md:text-3xl font-semibold tracking-tight leading-[1.2]">{t.contact.otherTitle}</h3>
            <p className="mt-3 text-muted-foreground/90 max-w-md">{t.contact.otherDesc}</p>

            <div className="mt-8 space-y-4">
              {channels.map(({ icon: Icon, title, href, target }) => (
                <a
                  key={title} href={href} target={target} rel={target === "_blank" ? "noreferrer" : undefined}
                  className="group flex items-center gap-4 p-5 rounded-2xl border border-border bg-card/60 backdrop-blur-xl hover:border-[#92a08f]/60 hover:bg-card/80 transition-all"
                >
                  <span className="h-12 w-12 rounded-xl grid place-items-center border border-border bg-background/60 group-hover:border-[#92a08f]/60 transition-colors">
                    <Icon className="h-5 w-5 text-[#a8b6a4]" />
                  </span>
                  <div className="flex-1">
                    <div className="font-semibold">{title}</div>
                    <div className="text-xs text-muted-foreground/90">{t.contact.clickConnect}</div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:rotate-0 -rotate-45 transition-all" />
                </a>
              ))}
            </div>

            <div className="mt-6 p-5 rounded-2xl border border-[#92a08f]/35 bg-[#92a08f]/[0.07]">
              <span className="text-sm font-semibold text-[#a8b6a4]">{t.contact.quickLabel}</span>{" "}
              <span className="text-sm text-muted-foreground/90">{t.contact.quickDesc}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium mb-2">{label}</span>
      {children}
    </label>
  );
}

function Footer() {
  const { t } = useT();
  return (
    <footer className="border-t border-border/60 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-6 text-sm">
        <div>
          <div className="font-semibold tracking-tight">Meltheux13</div>
          <div className="text-xs text-muted-foreground mt-1">{t.footerTagline}</div>
        </div>
        <div className="flex items-center justify-center gap-3">
          {[Youtube, Instagram, Twitter, Linkedin].map((Icon, i) => (
            <a key={i} href="#" aria-label="social"
              className="h-9 w-9 rounded-full border border-border/70 grid place-items-center text-muted-foreground hover:text-foreground hover:border-[#92a08f]/50 transition-colors">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
        <div className="text-xs text-muted-foreground md:text-right">{t.footerRights}</div>
      </div>
    </footer>
  );
}

function Index() {
  const getInitialLang = (): Lang => {
    if (typeof window === "undefined") return "pt";
    const saved = window.localStorage.getItem("lang");
    return saved === "en" || saved === "pt" ? saved : "pt";
  };
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try { window.localStorage.setItem("lang", lang); } catch {}
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
  };
  useReveal();
  return (
    <LangCtx.Provider value={{ lang, setLang, t: dict[lang] }}>
      <main className="dark min-h-screen">
        <Nav />
        <Hero />
        <Marquee />
        <Work />
        <Services />
        <About />
        <Contact />
        <Footer />
      </main>
    </LangCtx.Provider>
  );
}
