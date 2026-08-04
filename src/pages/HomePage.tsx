import { FormEvent, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { contacts, legalText, navigation, processSteps, reasons, services, siteUrl, technologies } from "../data/site";
import { projects } from "../data/projects";
import { useMeta } from "../hooks/useMeta";
import { t, text } from "../locales/translations";
import type { Language } from "../types";

type HomePageProps = {
  language: Language;
  setLanguage: (language: Language) => void;
};

type ContactMethod = "telegram" | "whatsapp";

const sectionMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.55 },
};

const Header = ({
  language,
  setLanguage,
}: {
  language: Language;
  setLanguage: (language: Language) => void;
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(navigation[0]?.id ?? "projects");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sectionIds = navigation.map((item) => item.id);

    const updateActiveSection = () => {
      setIsScrolled(window.scrollY > 12);

      const current = sectionIds.find((id) => {
        const element = document.getElementById(id);
        if (!element) {
          return false;
        }

        const rect = element.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom >= 140;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? "site-header--scrolled" : ""}`}>
      <div className="container site-header__inner">
        <Link to="/" className="brand" aria-label="Mansur Tabynskiy">
          <span className="brand__name">MANSUR TABYNSKIY</span>
          <span className="brand__line">{text(t.header.brandLine, language)}</span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`site-nav__link ${activeSection === item.id ? "is-active" : ""}`}
            >
              {item.label[language]}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <button
            type="button"
            className="language-toggle"
            onClick={() => setLanguage(language === "ru" ? "en" : "ru")}
            aria-label="Switch language"
          >
            <span className={language === "ru" ? "is-active" : ""}>RU</span>
            <span>/</span>
            <span className={language === "en" ? "is-active" : ""}>EN</span>
          </button>
          <a className="button button--small" href="#contact">
            {text(t.common.discussProject, language)}
          </a>
          <button
            type="button"
            className="menu-button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-label="Open menu"
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <div className="mobile-menu__inner">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="mobile-menu__link"
              onClick={() => setMenuOpen(false)}
            >
              {item.label[language]}
            </a>
          ))}
          <button
            type="button"
            className="language-toggle language-toggle--mobile"
            onClick={() => setLanguage(language === "ru" ? "en" : "ru")}
          >
            <span className={language === "ru" ? "is-active" : ""}>RU</span>
            <span>/</span>
            <span className={language === "en" ? "is-active" : ""}>EN</span>
          </button>
        </div>
      </div>
    </header>
  );
};

const SectionTitle = ({
  label,
  title,
}: {
  label?: string;
  title: string;
}) => (
  <div className="section-heading">
    {label ? <p className="section-heading__label">{label}</p> : null}
    <h2 className="section-heading__title">{title}</h2>
  </div>
);

const pointMotion = (index: number, reduceMotion: boolean) => ({
  initial: { opacity: 0, y: reduceMotion ? 0 : 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: {
    duration: reduceMotion ? 0 : 0.5,
    delay: reduceMotion ? 0 : index * 0.08,
  },
});

export const HomePage = ({ language, setLanguage }: HomePageProps) => {
  const reduceMotion = useReducedMotion();
  const featuredProjects = projects.slice(0, 3);
  const serviceIcons = ["🌐", "🏢", "🛒", "🤖", "🎨"];
  const reasonIcons = ["◦", "⌁", "—", "✦"];
  const heroServices = useMemo(
    () =>
      language === "ru"
        ? [
            "ЛЕНДИНГИ",
            "ИНТЕРНЕТ-МАГАЗИНЫ",
            "КОРПОРАТИВНЫЕ САЙТЫ",
            "САЙТЫ ДЛЯ ЛИЧНОГО БРЕНДА",
            "ОНЛАЙН-МЕНЮ",
            "РЕДИЗАЙН САЙТОВ",
            "AI-АВТОМАТИЗАЦИЯ",
            "ИНТЕГРАЦИИ И ФОРМЫ ЗАЯВОК",
          ]
        : [
            "LANDING PAGES",
            "ONLINE STORES",
            "BUSINESS WEBSITES",
            "PERSONAL BRAND SITES",
            "ONLINE MENUS",
            "WEBSITE REDESIGN",
            "AI AUTOMATION",
            "INTEGRATIONS AND LEAD FORMS",
          ],
    [language],
  );
  const [heroServiceIndex, setHeroServiceIndex] = useState(0);
  const aboutDetails = useMemo(
    () =>
      language === "ru"
        ? [
            { label: "Фокус", value: "Сайты, AI-решения, автоматизация бизнес-процессов" },
            { label: "Стек", value: "React, TypeScript, Vite, Framer Motion, GitHub" },
            { label: "Языки", value: "Русский, English" },
            { label: "Проекты", value: "Предприниматели, эксперты, образовательные проекты, компании" },
            { label: "Формат", value: "Структура, дизайн, разработка и запуск в одном процессе" },
          ]
        : [
            { label: "Focus", value: "Websites, AI solutions, and business process automation" },
            { label: "Stack", value: "React, TypeScript, Vite, Framer Motion, GitHub" },
            { label: "Languages", value: "Russian, English" },
            { label: "Projects", value: "Entrepreneurs, experts, education projects, and companies" },
            { label: "Format", value: "Structure, design, development, and launch in one process" },
          ],
    [language],
  );

  useMeta({
    title: text(t.seo.title, language),
    description: text(t.seo.description, language),
    canonical: siteUrl,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Mansur Tabynskiy",
        url: siteUrl,
        jobTitle:
          language === "ru" ? "Веб-разработчик и специалист по AI-решениям" : "Web developer and AI solutions specialist",
      },
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Mansur Tabynskiy",
        url: siteUrl,
        areaServed: ["Kazakhstan", "UAE", "CIS"],
      },
    ],
  });

  const heroLines = useMemo(() => text(t.home.heroTitle, language).split("\n"), [language]);

  useEffect(() => {
    setHeroServiceIndex(0);
  }, [language]);

  useEffect(() => {
    if (reduceMotion) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setHeroServiceIndex((current) => (current + 1) % heroServices.length);
    }, 2400);

    return () => window.clearInterval(interval);
  }, [heroServices, reduceMotion]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const submitter = (event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const contactMethod = (submitter?.value as ContactMethod | undefined) ?? "telegram";
    const consentAccepted = formData.get("consent");
    if (!consentAccepted) {
      return;
    }

    const lines = [
      `Name: ${formData.get("name")}`,
      `Contact: ${formData.get("contact")}`,
      `Message: ${formData.get("message")}`,
    ];

    const message = encodeURIComponent(lines.join("\n"));
    const url =
      contactMethod === "telegram"
        ? `https://t.me/tabynskiycom?text=${message}`
        : `https://wa.me/77007129773?text=${message}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="page-shell">
      <Header language={language} setLanguage={setLanguage} />

      <main>
        <section className="hero">
          <div className="container hero__center">
            <motion.div
              className="hero__content"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.6 }}
            >
              <p className="eyebrow">{text(t.home.eyebrow, language)}</p>
              <div className="hero__title" aria-label={text(t.home.heroTitle, language).replace(/\n/g, " ")}>
                {heroLines.map((line, index) => (
                  <span key={line} className="hero__title-mask">
                    <motion.span
                      className="hero__title-line"
                      initial={reduceMotion ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 48, filter: "blur(8px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.95,
                        delay: reduceMotion ? 0 : index * 0.11,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {line}
                    </motion.span>
                  </span>
                ))}
              </div>
              <p className="hero__text">{text(t.home.heroText, language)}</p>
              <div className="hero__actions">
                <a className="button" href="#projects">
                  {text(t.common.viewProjects, language)}
                </a>
                <a className="button button--ghost" href="#contact">
                  {text(t.common.discussProject, language)}
                </a>
              </div>
              <div className="hero__meta">
                <span>{text(t.common.based, language)}</span>
                <span>{text(t.common.available, language)}</span>
              </div>
              <div className="hero-rotator">
                <span className="hero-rotator__label">
                  {language === "ru" ? "НАПРАВЛЕНИЯ" : "FOCUS"}
                </span>
                <span className="hero-rotator__dot" aria-hidden="true" />
                <span className="hero-rotator__window">
                  <motion.span
                    key={`${language}-${heroServiceIndex}`}
                    className="hero-rotator__value"
                    initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -18 }}
                    transition={{ duration: reduceMotion ? 0 : 0.48, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {heroServices[heroServiceIndex]}
                  </motion.span>
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        <motion.section className="intro" {...sectionMotion}>
          <div className="container approach-grid">
            <div className="approach-heading">
              <p className="section-heading__label">{text(t.home.introLabel, language)}</p>
              <h2 className="approach-title">
                {text(t.home.introTitle, language).split("\n").map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h2>
            </div>
            <div className="approach-body">
              <p className="approach-copy">{text(t.home.introBody, language)}</p>
              <div className="approach-points">
                {t.home.introPoints[language].map((point, index) => (
                  <motion.div
                    key={point}
                    className="approach-point"
                    {...pointMotion(index, Boolean(reduceMotion))}
                  >
                    <span className="approach-point__number">{String(index + 1).padStart(2, "0")}</span>
                    <span className="approach-point__text">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section id="projects" className="section" {...sectionMotion}>
          <div className="container">
            <SectionTitle title={text(t.home.projectsTitle, language)} />
            <div className="project-list">
              {featuredProjects.map((project) => (
                <article
                  key={project.slug}
                  className="project-card"
                  style={{ ["--accent" as string]: project.accent }}
                >
                  <div className="project-card__heading">
                    <div>
                      <p className="project-card__category">{project.category[language]}</p>
                      <h3>{project.title}</h3>
                    </div>
                    <span className="project-card__year">{project.year}</span>
                  </div>
                  <div className="project-card__content">
                    <div className="project-card__copy">
                      <p>{project.summary[language]}</p>
                      <div className="project-card__role">
                        <span>{text(t.project.role, language)}</span>
                        <strong>{project.role[language]}</strong>
                      </div>
                    </div>
                    <div className="project-card__visual">
                      {project.slug === "istudy-educational-center" ? (
                        <div className="project-card__panel project-card__panel--media">
                          <video
                            className="project-card__video"
                            src="/videos/istudy-preview.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                          />
                        </div>
                      ) : project.slug === "shama-suleimanov" ? (
                        <div className="project-card__panel project-card__panel--media">
                          <video
                            className="project-card__video"
                            src="/videos/shama-preview.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                          />
                        </div>
                      ) : (
                        <div className="project-card__panel project-card__panel--confidential">
                          <p className="project-card__visual-title">
                            {language === "ru" ? "Конфиденциальный проект" : "Confidential project"}
                          </p>
                          <p className="project-card__visual-text">
                            {language === "ru"
                              ? "Этот проект находится под NDA, поэтому не может быть показан публично. По запросу могу рассказать о роли, процессе и типе задач без раскрытия деталей."
                              : "This project is under NDA, so it cannot be shown publicly. On request, I can describe the role, process, and type of tasks without disclosing sensitive details."}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section id="services" className="section" {...sectionMotion}>
          <div className="container">
            <SectionTitle title={text(t.home.servicesTitle, language)} />
            <div className="services-grid">
              {services.map((service, index) => (
                <article key={service.title.en} className="service-card">
                  <span className="service-card__icon" aria-hidden="true">
                    {serviceIcons[index] ?? "•"}
                  </span>
                  <div className="service-card__body">
                    <h3>{service.title[language]}</h3>
                    <p>{service.description[language]}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section id="about" className="section section--split" {...sectionMotion}>
          <div className="container about-grid">
            <div className="about-profile">
              <div className="about-portrait" aria-hidden="true">
                <motion.img
                  className="about-portrait__image"
                  src="/images/mansur-about.jpg"
                  alt=""
                  initial={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="about-portrait__overlay" />
              </div>
            </div>
            <div className="about-copy">
              <h2 className="about-title">{text(t.home.aboutTitle, language)}</h2>
              <p className="large-copy">{text(t.home.aboutText, language)}</p>
              <p className="muted-copy">{text(t.home.aboutNote, language)}</p>
              <div className="about-facts">
                {aboutDetails.map((item) => (
                  <div key={item.label} className="about-fact">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section id="process" className="section" {...sectionMotion}>
          <div className="container">
            <SectionTitle title={text(t.home.processTitle, language)} />
            <div className="timeline timeline--compact">
              {processSteps.map((step) => (
                <article key={step.number} className="timeline__item">
                  <span className="timeline__number">{step.number}</span>
                  <h3>{step.title[language]}</h3>
                  <p>{step.description[language]}</p>
                </article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section className="section" {...sectionMotion}>
          <div className="container">
            <SectionTitle title={text(t.home.technologiesTitle, language)} />
            <div className="tech-marquee">
              <div className="tech-marquee__track">
                {[...technologies, ...technologies].map((item, index) => (
                  <span key={`${item}-${index}`}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section className="section" {...sectionMotion}>
          <div className="container">
            <SectionTitle title={text(t.home.reasonsTitle, language)} />
            <div className="reasons-grid">
              {reasons.map((reason, index) => (
                <article key={reason.title.en} className="reason-card">
                  <span className="reason-card__icon" aria-hidden="true">
                    {reasonIcons[index] ?? "•"}
                  </span>
                  <h3>{reason.title[language]}</h3>
                  <p>{reason.description[language]}</p>
                </article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section className="section" {...sectionMotion}>
          <div className="container trust-block">
            <p className="section-heading__label">{text(t.home.trustLabel, language)}</p>
            <h2>{text(t.home.trustTitle, language)}</h2>
            <div className="trust-block__grid">
              <ul>
                {t.home.trustItems[language].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>{text(legalText, language)}</p>
            </div>
          </div>
        </motion.section>

        <motion.section className="section" {...sectionMotion}>
          <div className="container review-placeholder">
            <SectionTitle title={text(t.home.reviewsTitle, language)} />
            <p>{text(t.home.reviewsText, language)}</p>
          </div>
        </motion.section>

        <motion.section id="contact" className="section section--contact" {...sectionMotion}>
          <div className="container contact-grid">
            <div className="contact-intro">
              <p className="section-heading__label">{text(t.home.contactLabel, language)}</p>
              <h2 className="contact-title">
                {text(t.home.contactTitle, language).split("\n").map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h2>
              <p className="large-copy">{text(t.home.contactText, language)}</p>
              <div className="contact-cards">
                {contacts.slice(0, 2).map((contact) => (
                  <a key={contact.label} href={contact.href} className="contact-card" target="_blank" rel="noreferrer">
                    <span>{contact.label}</span>
                    <strong>{contact.value}</strong>
                  </a>
                ))}
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                <span>{text(t.form.name, language)}</span>
                <input name="name" required />
              </label>
              <label>
                <span>{text(t.form.contact, language)}</span>
                <input name="contact" required />
              </label>
              <label>
                <span>{text(t.form.message, language)}</span>
                <textarea name="message" rows={5} required />
              </label>
              <label className="checkbox">
                <input type="checkbox" name="consent" required />
                <span>{text(t.form.consent, language)}</span>
              </label>
              <div className="contact-form__actions">
                <button
                  type="submit"
                  className="button"
                  value="telegram"
                >
                  {text(t.form.submit, language)}
                </button>
                <button
                  type="submit"
                  className="button button--ghost"
                  value="whatsapp"
                >
                  {text(t.form.whatsapp, language)}
                </button>
              </div>
            </form>
          </div>
        </motion.section>
      </main>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <div>
            <strong>MANSUR TABYNSKIY</strong>
            <p>{text(t.home.footerTop, language)}</p>
          </div>
          <nav className="footer-nav" aria-label="Footer">
            {navigation.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label[language]}
              </a>
            ))}
            <Link to="/privacy">{text(t.privacy.title, language)}</Link>
          </nav>
          <button
            type="button"
            className="back-top"
            onClick={() => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" })}
          >
            ↑
          </button>
        </div>
        <div className="container site-footer__bottom">
          <span>© 2026 Mansur Tabynskiy. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};
