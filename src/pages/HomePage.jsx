import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Reveal } from "../components/Reveal";
import { SectionTitle } from "../components/SectionTitle";
import { projects } from "../data/projects";

function DotIcon() {
  return <span className="mt-2.5 h-2 w-2 rounded-full bg-accent shadow-[0_0_0_6px_rgba(31,79,209,0.08)]" />;
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 12h14" strokeLinecap="round" />
      <path d="m13 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StackIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M12 4 4 8l8 4 8-4-8-4Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m4 12 8 4 8-4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m4 16 8 4 8-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M12 3 9.8 9.8 3 12l6.8 2.2L12 21l2.2-6.8L21 12l-6.8-2.2L12 3Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M10 13a5 5 0 0 1 0-7l1.4-1.4a5 5 0 0 1 7 7L17 13" strokeLinecap="round" />
      <path d="M14 11a5 5 0 0 1 0 7l-1.4 1.4a5 5 0 0 1-7-7L7 11" strokeLinecap="round" />
    </svg>
  );
}

function MessageCircleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        d="M7 10h10M7 14h6m6-2a8 8 0 1 1-3.1-6.3L21 5l-1.2 4.8A8 8 0 0 1 19 12Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M21 3 10 14" strokeLinecap="round" />
      <path d="m21 3-7 18-4-7-7-4 18-7Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SparkStatusIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="M12 3 10.1 10.1 3 12l7.1 1.9L12 21l1.9-7.1L21 12l-7.1-1.9L12 3Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PaletteIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        d="M12 22a10 10 0 1 1 0-20 8 8 0 0 1 0 16h-1.1a1.9 1.9 0 0 0-1.9 1.9A2.1 2.1 0 0 0 11.1 22H12Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7.5" cy="10.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="7.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="10.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function DeviceIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="11" rx="2.5" />
      <path d="M8 19h8" strokeLinecap="round" />
      <path d="M10 16v3M14 16v3" strokeLinecap="round" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BlueprintIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 3v18M17 3v18M3 7h18M3 17h18" strokeLinecap="round" />
      <rect x="5" y="5" width="14" height="14" rx="2" />
    </svg>
  );
}

function GemIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="m6 8 6-5 6 5-6 13L6 8Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 8h12" strokeLinecap="round" />
    </svg>
  );
}

function CodeBranchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 3v12a3 3 0 0 0 3 3h9" strokeLinecap="round" />
      <circle cx="6" cy="3" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <path d="M9 9h6" strokeLinecap="round" />
    </svg>
  );
}

const services = [
  {
    title: "Веб-разработка",
    icon: <StackIcon />,
    description:
      "Разрабатываю современные сайты и интерфейсы, которые выглядят уверенно, быстро работают и помогают бизнесу расти.",
    items: ["Современные сайты", "Landing Page", "Корпоративные сайты", "Портфолио", "Интернет-магазины", "Онлайн-меню"],
    featured: true
  },
  {
    title: "Искусственный интеллект",
    icon: <SparkIcon />,
    description:
      "Внедряю AI-инструменты в реальные процессы: от помощников и генерации контента до точечных бизнес-решений.",
    items: ["Автоматизация процессов", "ИИ-помощники", "Генерация контента", "Интеграция ИИ в бизнес", "Консультации"]
  },
  {
    title: "Автоматизация",
    icon: <LinkIcon />,
    description:
      "Соединяю сервисы, заявки, мессенджеры и CRM в понятные системы, которые экономят время и снижают ручную работу.",
    items: ["Формы заявок", "Telegram-боты", "Интеграции", "CRM", "Работа с API"]
  }
];

const skills = [
  "React",
  "Tailwind CSS",
  "JavaScript",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
  "Vercel",
  "Responsive Design",
  "UI/UX",
  "ChatGPT",
  "Claude",
  "Codex",
  "Prompt Engineering",
  "Automation"
];

const reasons = [
  {
    number: "01",
    title: "Современный дизайн",
    description: "Создаю визуально сильные интерфейсы, которые выглядят актуально, аккуратно и формируют доверие с первого экрана.",
    icon: <PaletteIcon />,
    featured: true
  },
  {
    number: "02",
    title: "Адаптация под все устройства",
    description: "Продумываю поведение сайта на desktop, tablet и mobile, чтобы пользовательский опыт оставался цельным на любом экране.",
    icon: <DeviceIcon />
  },
  {
    number: "03",
    title: "Высокая скорость загрузки",
    description: "Слежу за лёгкостью интерфейса и чистотой реализации, чтобы сайт быстро открывался и не терял внимание пользователя.",
    icon: <BoltIcon />
  },
  {
    number: "04",
    title: "Продуманная структура",
    description: "Выстраиваю блоки и смысловую подачу так, чтобы сайт не просто выглядел красиво, а вёл пользователя к нужному действию.",
    icon: <BlueprintIcon />
  },
  {
    number: "05",
    title: "Внимание к деталям",
    description: "Работаю с типографикой, отступами, ритмом и микроанимациями, чтобы продукт ощущался аккуратным и премиальным.",
    icon: <GemIcon />
  },
  {
    number: "06",
    title: "Современные технологии",
    description: "Использую актуальный стек разработки и гибкий подход, чтобы проект было удобно развивать и поддерживать дальше.",
    icon: <CodeBranchIcon />
  }
];

const steps = [
  "Обсуждение проекта",
  "Разработка дизайна",
  "Разработка сайта",
  "Тестирование",
  "Публикация сайта",
  "Поддержка"
];

const contacts = [
  {
    label: "WhatsApp",
    value: "+7 700 712 9773",
    href: "https://wa.me/77007129773",
    note: "Быстрый способ обсудить задачу, получить обратную связь и договориться о следующем шаге.",
    icon: <MessageCircleIcon />,
    primary: true
  },
  {
    label: "Telegram",
    value: "tabynskiycom",
    href: "https://t.me/tabynskiycom",
    note: "Удобно для первого контакта, короткого брифа и дальнейшей коммуникации по проекту.",
    icon: <SendIcon />,
    primary: false
  }
];

const aboutHighlights = [
  {
    title: "Web Development",
    text: "Современные интерфейсы, аккуратная структура и сильная визуальная подача."
  },
  {
    title: "Artificial Intelligence",
    text: "Интеграция AI-инструментов и автоматизация реальных рабочих процессов."
  },
  {
    title: "Economics",
    text: "Понимание бизнес-логики, ценности продукта и задач роста компании."
  },
  {
    title: "Team Projects",
    text: "Опыт совместной разработки, коммуникации и движения к общему результату."
  }
];

export function HomePage() {
  return (
    <Layout>
      <section className="relative overflow-hidden px-6 pb-24 pt-32 lg:px-8 lg:pb-32 lg:pt-40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(31,79,209,0.18),_transparent_30%),radial-gradient(circle_at_78%_12%,_rgba(15,23,45,0.1),_transparent_22%),linear-gradient(180deg,_#ffffff_0%,_#f4f7fb_100%)]" />
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-[48%] bg-grid bg-[size:30px_30px] opacity-50 lg:block" />
        <div className="absolute right-[10%] top-28 -z-10 hidden h-64 w-64 rounded-full bg-accent/10 blur-3xl lg:block" />
        <div className="absolute left-[8%] top-40 -z-10 hidden h-28 w-28 rounded-full border border-white/60 bg-white/45 blur-xl lg:block" />
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[1.02fr_0.98fr]">
          <Reveal className="max-w-3xl">
            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.38em] text-accent">
              Personal Brand / Web / AI
            </p>
            <h1 className="font-display text-[3.8rem] leading-[0.94] tracking-[-0.045em] text-ink sm:text-[5rem] lg:text-[6.2rem]">
              Мансур
              <br />
              Табынский
            </h1>
            <div className="mt-10 space-y-3 text-lg leading-8 text-steelDeep sm:text-[1.34rem]">
              <p>Студент Al Qasimia University (ОАЭ)</p>
              <p>Веб-разработчик</p>
              <p>Специалист по искусственному интеллекту</p>
            </div>
            <p className="text-measure mt-9 max-w-2xl text-lg leading-8 text-steel">
              Создаю современные сайты, автоматизирую бизнес-процессы и внедряю ИИ-решения для компаний.
            </p>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="button-primary px-7 py-4 text-center text-sm"
              >
                Посмотреть проекты
              </a>
              <a
                href="#contact"
                className="button-secondary px-7 py-4 text-center text-sm"
              >
                Связаться
              </a>
            </div>
          </Reveal>

          <Reveal className="relative" delay={120}>
            <div className="absolute inset-10 rounded-[2rem] bg-accent/10 blur-3xl" />
            <div className="absolute -right-4 top-12 h-24 w-24 rounded-full border border-white/50 bg-white/40 blur-lg" />
            <div className="absolute inset-3 rounded-[2rem] border border-white/40 bg-white/24 animate-pulseRing" />
            <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
              <div className="absolute inset-0 bg-noise opacity-90" />
              <div className="relative mb-7 flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-steel">Creative Profile</p>
                  <p className="mt-2 font-display text-[1.85rem] tracking-[-0.03em] text-ink">Web + AI Systems</p>
                </div>
                <div className="h-3 w-3 rounded-full bg-accent shadow-[0_0_0_8px_rgba(31,79,209,0.08)]" />
              </div>
              <div className="relative grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] bg-[linear-gradient(145deg,_#050816_0%,_#0f1c3d_100%)] p-6 text-white shadow-[0_24px_50px_rgba(5,8,22,0.24)]">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/55">Focus</p>
                  <p className="mt-12 text-3xl font-semibold tracking-[-0.03em]">Digital products</p>
                </div>
                <div className="animate-float rounded-[1.5rem] border border-white/70 bg-[linear-gradient(180deg,_#edf4ff_0%,_#dbe7ff_100%)] p-6 shadow-[0_22px_48px_rgba(31,79,209,0.12)]">
                  <p className="text-sm uppercase tracking-[0.2em] text-steel">Approach</p>
                  <p className="mt-12 text-3xl font-semibold tracking-[-0.03em] text-ink">Premium minimalism</p>
                </div>
                <div className="rounded-[1.5rem] border border-line/90 bg-white/70 p-6 shadow-soft sm:col-span-2">
                  <div className="flex flex-wrap gap-3">
                    {["React", "AI", "Automation", "Vercel", "UX"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-lineStrong bg-white/85 px-4 py-2 text-sm font-medium text-ink shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accentSoft/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 h-56 rounded-[1.5rem] bg-[linear-gradient(135deg,_#050816_0%,_#1539a8_48%,_#e9f0ff_100%)] p-6 shadow-float">
                    <div className="flex h-full items-end justify-between">
                      <div>
                        <p className="text-sm uppercase tracking-[0.25em] text-white/60">Brand energy</p>
                        <p className="mt-3 max-w-xs text-2xl font-semibold leading-snug tracking-[-0.03em] text-white">
                          Сильная подача, ясная структура и внимание к деталям.
                        </p>
                      </div>
                      <div className="hidden h-24 w-24 rounded-full border border-white/30 sm:block" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="about" className="section-shell px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12">
            <Reveal>
              <div className="card-surface rounded-[2rem] p-7 sm:p-8">
                <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.34em] text-accent">
                  <span>About</span>
                  <span className="h-px w-10 bg-accent/35" />
                  <span>01</span>
                </div>
                <h2 className="mt-5 font-display text-[2.7rem] leading-[0.98] tracking-[-0.04em] text-ink sm:text-[3.2rem]">
                  Обо мне
                </h2>

                <div className="mt-7 overflow-hidden rounded-[1.6rem] border border-lineStrong/90 bg-[linear-gradient(160deg,rgba(255,255,255,0.96)_0%,rgba(234,241,255,0.88)_100%)] p-6 shadow-soft">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-display text-[1.8rem] leading-[1.02] tracking-[-0.04em] text-ink">
                        Мансур Табынский
                      </p>
                      <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-accentDeep">
                        Economics x Web x AI
                      </p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/70 bg-white/88 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.88)]">
                      <img src="/site-icon.svg" alt="Tabynskiycom icon" className="h-full w-full rounded-[0.85rem]" />
                    </div>
                  </div>

                  <div className="mt-8 grid gap-3 text-sm text-steelDeep">
                    <div className="flex items-center justify-between gap-4 rounded-[1rem] border border-white/70 bg-white/72 px-4 py-3">
                      <span className="uppercase tracking-[0.18em] text-[11px] text-steel">Education</span>
                      <span className="text-right font-medium text-ink">Al Qasimia University</span>
                    </div>
                    <div className="flex items-center justify-between gap-4 rounded-[1rem] border border-white/70 bg-white/72 px-4 py-3">
                      <span className="uppercase tracking-[0.18em] text-[11px] text-steel">Location</span>
                      <span className="text-right font-medium text-ink">United Arab Emirates</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div className="card-surface rounded-[2rem] p-7 sm:p-8 lg:p-9">
                <p className="max-w-[19ch] font-display text-[2rem] leading-[1.06] tracking-[-0.04em] text-ink sm:text-[2.35rem] lg:text-[2.7rem]">
                  Создаю современные цифровые продукты и <span className="whitespace-nowrap">AI-решения</span> для
                  реальных бизнес-задач.
                </p>

                <div className="mt-6 h-px w-full bg-[linear-gradient(90deg,rgba(31,79,209,0.24)_0%,rgba(221,228,239,0.95)_24%,rgba(221,228,239,0.95)_100%)]" />

                <div className="mt-6 grid max-w-[43rem] gap-4 text-[1rem] leading-7 text-steelDeep sm:text-[1.04rem]">
                  <p className="max-w-[56ch]">
                    Я студент факультета экономики в Al Qasimia University и параллельно развиваюсь в веб-разработке,
                    автоматизации и AI.
                  </p>
                  <p className="max-w-[58ch]">
                    Мне интересно создавать не просто красивые интерфейсы, а цифровые решения, которые помогают
                    компаниям привлекать клиентов и выстраивать процессы сильнее.
                  </p>
                  <p className="max-w-[55ch]">
                    Постоянно изучаю новые технологии, работаю над качеством исполнения и стремлюсь делать проекты,
                    которые выглядят уверенно и приносят реальную пользу.
                  </p>
                </div>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {aboutHighlights.map((item, index) => (
                    <Reveal key={item.title} delay={120 + index * 60}>
                      <div className="h-full rounded-[1.35rem] border border-line bg-white/78 p-5 shadow-[0_12px_30px_rgba(9,15,33,0.05),inset_0_1px_0_rgba(255,255,255,0.78)] transition duration-300 hover:-translate-y-1 hover:border-accent/25 hover:shadow-soft">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accentDeep">
                          {item.title}
                        </p>
                        <p className="mt-3 text-[0.98rem] leading-7 text-steelDeep">{item.text}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="services" className="section-shell px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionTitle
              eyebrow="Services"
              title="Чем я занимаюсь"
              description="Создаю и внедряю цифровые решения, которые соединяют сильный визуальный стиль, понятную структуру и практическую ценность для бизнеса."
            />
          </Reveal>
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 90}>
                <article
                  className={`group flex h-full flex-col rounded-[1.9rem] border p-8 transition duration-300 hover:-translate-y-1 hover:shadow-panel sm:p-9 ${
                    service.featured
                      ? "border-ink/10 bg-[linear-gradient(145deg,_#050816_0%,_#0f234f_56%,_#1f4fd1_100%)] text-white shadow-panel"
                      : "card-surface hover:border-accent/24"
                  }`}
                >
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-[1.35rem] border text-[1.25rem] transition duration-300 group-hover:-translate-y-1 ${
                      service.featured
                        ? "border-white/12 bg-white/10 text-white"
                        : "border-lineStrong bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(235,242,255,0.9)_100%)] text-accentDeep"
                    }`}
                  >
                    {service.icon}
                  </div>
                  <h3
                    className={`mt-8 font-display text-[2rem] leading-[1.02] tracking-[-0.035em] ${
                      service.featured ? "text-white" : "text-ink"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`mt-5 max-w-[34ch] text-[1rem] leading-7 ${
                      service.featured ? "text-white/76" : "text-steelDeep"
                    }`}
                  >
                    {service.description}
                  </p>
                  <div
                    className={`mt-7 h-px w-full ${
                      service.featured
                        ? "bg-white/12"
                        : "bg-[linear-gradient(90deg,rgba(31,79,209,0.18)_0%,rgba(221,228,239,0.95)_30%,rgba(221,228,239,0.95)_100%)]"
                    }`}
                  />
                  <ul className={`mt-7 space-y-4 ${service.featured ? "text-white/82" : "text-steel"}`}>
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          className={`mt-2.5 h-2 w-2 rounded-full ${
                            service.featured
                              ? "bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.08)]"
                              : "bg-accent shadow-[0_0_0_6px_rgba(31,79,209,0.08)]"
                          }`}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionTitle
              eyebrow="Skills"
              title="Навыки"
              description="Технологии и инструменты, с которыми я создаю визуально сильные и полезные цифровые продукты."
            />
          </Reveal>
          <Reveal delay={80} className="card-surface mt-16 rounded-[1.9rem] p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-[1.25rem] border border-line bg-white/72 px-5 py-4 text-base font-medium text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:bg-accentSoft/35"
                >
                  {skill}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="projects" className="section-shell px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionTitle
              eyebrow="Portfolio"
              title="Избранные проекты"
              description="Каждый проект решает конкретную задачу: презентация продукта, рост доверия, удобство взаимодействия или автоматизация процессов."
            />
          </Reveal>
          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 80}>
                <Link
                  to={`/projects/${project.slug}`}
                  className="group card-surface flex h-full flex-col overflow-hidden rounded-[1.9rem] transition duration-300 hover:-translate-y-1 hover:shadow-panel"
                >
                  <div className={`h-56 shrink-0 bg-gradient-to-br ${project.accent} p-8`}>
                    <div className="flex h-full items-end justify-between">
                      <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-ink/60">{project.category}</p>
                        <h3 className="mt-3 font-display text-4xl tracking-[-0.03em] text-ink">{project.name}</h3>
                      </div>
                      <div className="rounded-full border border-ink/10 bg-white/70 px-4 py-2 text-sm text-ink shadow-sm">
                        {project.year}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    {project.confidential ? (
                      <div className="mb-4 inline-flex rounded-full border border-accent/20 bg-accentSoft/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-accentDeep">
                        Confidential
                      </div>
                    ) : null}
                    <p className="text-xl font-semibold tracking-[-0.02em] text-ink">{project.subtitle}</p>
                    <p className="mt-4 flex-1 text-measure leading-7 text-steel">{project.summary}</p>
                    <div className="mt-6 flex items-center gap-3 text-sm font-semibold text-accent">
                      <span>Открыть проект</span>
                      <span className="transition duration-300 group-hover:translate-x-1">
                        <ArrowIcon />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionTitle
              eyebrow="Advantages"
              title="Почему выбирают меня"
              description="Подхожу к каждому проекту как к цифровому продукту: важны не только визуальная подача, но и понятная структура, скорость, доверие и реальная польза для бизнеса."
            />
          </Reveal>
          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => (
              <Reveal key={reason.title} delay={index * 70}>
                <div
                  className={`group flex h-full flex-col rounded-[1.75rem] border p-8 transition duration-300 hover:-translate-y-1 hover:shadow-panel sm:p-9 ${
                    reason.featured
                      ? "border-ink/10 bg-[linear-gradient(145deg,_#050816_0%,_#123182_55%,_#1f4fd1_100%)] text-white shadow-panel"
                      : "card-surface hover:border-accent/25"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={`text-[11px] font-semibold uppercase tracking-[0.28em] ${
                        reason.featured ? "text-white/55" : "text-steel"
                      }`}
                    >
                      {reason.number}
                    </span>
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border transition duration-300 group-hover:-translate-y-0.5 ${
                        reason.featured
                          ? "border-white/15 bg-white/10 text-white"
                          : "border-lineStrong bg-white/88 text-accentDeep group-hover:border-accent/30"
                      }`}
                    >
                      {reason.icon}
                    </div>
                  </div>

                  <h3
                    className={`mt-10 font-display text-[1.9rem] leading-[1.02] tracking-[-0.035em] ${
                      reason.featured ? "text-white" : "text-ink"
                    }`}
                  >
                    {reason.title}
                  </h3>
                  <p
                    className={`mt-5 flex-1 text-[1rem] leading-7 ${
                      reason.featured ? "text-white/74" : "text-steelDeep"
                    }`}
                  >
                    {reason.description}
                  </p>
                  <div
                    className={`mt-8 h-px w-full ${
                      reason.featured ? "bg-white/12" : "bg-[linear-gradient(90deg,rgba(31,79,209,0.18)_0%,rgba(221,228,239,0.95)_32%,rgba(221,228,239,0.95)_100%)]"
                    }`}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[linear-gradient(145deg,_#050816_0%,_#0e1832_52%,_#13389e_100%)] px-8 py-12 text-white shadow-panel sm:px-12">
          <Reveal>
            <div className="max-w-3xl">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.34em] text-white/60">Workflow</p>
              <h2 className="font-display text-[2.4rem] leading-[1.02] tracking-[-0.03em] text-white sm:text-[3.35rem]">
                Этапы работы
              </h2>
              <p className="mt-6 max-w-[40rem] text-lg leading-8 text-white/74">
                Понятный и прозрачный процесс от первого обсуждения до запуска и поддержки.
              </p>
            </div>
          </Reveal>
          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-6">
            {steps.map((step, index) => (
              <Reveal key={step} delay={index * 70}>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-300 hover:-translate-y-0.5 hover:bg-white/10">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/50">0{index + 1}</p>
                  <p className="mt-6 text-lg leading-7">{step}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell px-6 lg:px-8">
        <div className="card-surface mx-auto max-w-7xl rounded-[2rem] border-dashed p-10 text-center">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.28em] text-accent">Reviews</p>
            <h2 className="mt-4 font-display text-4xl tracking-[-0.03em] text-ink">Отзывы можно добавить следующим этапом</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-steel">
              Блок уже заложен в структуру сайта, поэтому отзывы клиентов и кейсы можно подключить позже без редизайна.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="section-shell px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(248,250,255,0.98)_100%)] px-6 py-8 shadow-panel sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="absolute -left-14 top-8 h-44 w-44 rounded-full bg-accent/10 blur-3xl" />
            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(31,79,209,0.12)_0%,rgba(31,79,209,0)_66%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0)_36%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10">
          <Reveal>
                <div className="max-w-[31rem]">
                  <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.34em] text-accent">
                    <span>Contact</span>
                    <span className="h-px w-10 bg-accent/35" />
                    <span>05</span>
                  </div>
                  <h2 className="mt-5 font-display text-[2.3rem] leading-[1.02] tracking-[-0.04em] text-ink sm:text-[2.9rem] lg:text-[3.25rem]">
                    Есть идея? Давайте превратим её в цифровой продукт
                  </h2>
                  <p className="mt-6 max-w-[35rem] text-lg leading-8 text-steelDeep">
                    Если вам нужен современный сайт, AI-решение или автоматизация процессов, можно написать удобным
                    способом и спокойно обсудить задачу.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accentSoft/55 px-4 py-2 text-sm font-semibold text-accentDeep">
                      <SparkStatusIcon />
                      <span>Открыт к новым проектам</span>
                    </div>
                  </div>

                  <div className="mt-8 space-y-3 text-base leading-7 text-steelDeep">
                    <p>Обычно отвечаю в течение рабочего дня</p>
                    <p className="font-medium text-inkSoft">Казахстан · ОАЭ · Удалённо</p>
                  </div>
                </div>
          </Reveal>
          <Reveal delay={90}>
                <div className="grid gap-5">
              {contacts.map((contact, index) => (
                <Reveal key={contact.label} delay={120 + index * 70}>
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`group block rounded-[2rem] border p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-panel sm:p-7 ${
                      contact.primary
                        ? "border-accent/18 bg-[linear-gradient(180deg,rgba(235,242,255,0.94)_0%,rgba(255,255,255,0.98)_100%)] hover:border-accent/30"
                        : "border-lineStrong/95 bg-white/82 hover:border-accent/24"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border ${
                              contact.primary
                                ? "border-accent/16 bg-white/78 text-accentDeep"
                                : "border-lineStrong bg-white/86 text-accentDeep"
                            }`}
                          >
                            {contact.icon}
                          </div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accentDeep">
                          {contact.label}
                          </p>
                        </div>
                        <p className="mt-4 [overflow-wrap:anywhere] font-display text-[1.7rem] leading-[1.04] tracking-[-0.04em] text-ink sm:text-[1.95rem]">
                          {contact.value}
                        </p>
                        <p className="mt-4 max-w-[34rem] text-base leading-7 text-steelDeep">{contact.note}</p>
                      </div>
                      <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-lineStrong bg-white/90 text-accent transition duration-300 group-hover:translate-x-1 group-hover:border-accent/30">
                        <ArrowIcon />
                      </div>
                    </div>
                  </a>
                </Reveal>
              ))}
                </div>
          </Reveal>
            </div>

            <Reveal delay={180}>
              <div className="relative mt-8 border-t border-lineStrong/80 pt-6 text-sm uppercase tracking-[0.22em] text-steel">
                Web Development · AI · Automation · Kazakhstan / UAE
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="border-t border-line/80 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-steel sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Мансур Табынский. Все права защищены.</p>
          <div className="flex flex-wrap gap-5">
            <a href="#about" className="transition duration-300 hover:text-ink">Обо мне</a>
            <a href="#projects" className="transition duration-300 hover:text-ink">Проекты</a>
            <a href="#contact" className="transition duration-300 hover:text-ink">Контакты</a>
          </div>
        </div>
      </footer>
    </Layout>
  );
}
