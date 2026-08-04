import { FormEvent, useMemo, useState } from "react";
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
  viewport: { once: true, amount: 0.25 },
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

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="brand" aria-label="Mansur Tabynskiy">
          <span className="brand__name">MANSUR TABYNSKIY</span>
          <span className="brand__line">{text(t.header.brandLine, language)}</span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          {navigation.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="site-nav__link">
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

export const HomePage = ({ language, setLanguage }: HomePageProps) => {
  const reduceMotion = useReducedMotion();
  const heroPreview = {
    eyebrow: {
      ru: "Избранный проект",
      en: "Featured preview",
    },
    title: {
      ru: "Mansur Portfolio",
      en: "Mansur Portfolio",
    },
    description: {
      ru: "Главный экран нового портфолио с акцентом на кейсы, понятное позиционирование и быстрый переход к обсуждению проекта.",
      en: "The new portfolio front page with case-study focus, clear positioning, and a fast route into a project discussion.",
    },
    cta: {
      ru: "Открыть кейсы",
      en: "Open case studies",
    },
    tags: {
      ru: ["Портфолио", "Разработка", "AI-процесс"],
      en: ["Portfolio", "Frontend", "AI workflow"],
    },
  };

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
          language === "ru" ? "Веб-разработчик и AI-специалист" : "Web Developer & AI Solutions Specialist",
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
      `Project type: ${formData.get("projectType")}`,
      `Budget: ${formData.get("budget")}`,
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
          <div className="container hero__grid">
            <motion.div
              className="hero__content"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.6 }}
            >
              <p className="eyebrow">{text(t.home.eyebrow, language)}</p>
              <h1 className="hero__title">
                {heroLines.map((line) => (
                  <span key={line} className="hero__title-line">
                    {line}
                  </span>
                ))}
              </h1>
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
                <span>{text(t.common.scrollToExplore, language)}</span>
              </div>
            </motion.div>

            <motion.div
              className="hero__visual"
              initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.1 }}
            >
              <div className="hero-preview">
                <div className="hero-preview__bar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="hero-preview__body">
                  <div className="hero-preview__meta">
                    <span>{heroPreview.eyebrow[language]}</span>
                    <span>2026</span>
                  </div>
                  <div className="hero-preview__content">
                    <div className="hero-preview__copy">
                      <strong>{heroPreview.title[language]}</strong>
                      <p>{heroPreview.description[language]}</p>
                    </div>
                    <div className="hero-preview__surface">
                      <div className="hero-preview__surface-main">
                        <span>{text(t.home.projectsTitle, language)}</span>
                        <strong>01 / iStudy Educational Center</strong>
                      </div>
                      <div className="hero-preview__surface-side">
                        <span>{text(t.project.role, language)}</span>
                        <strong>
                          {language === "ru" ? "Структура · UI · разработка" : "Structure · UI · Frontend"}
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="hero-preview__footer">
                    <div className="hero-preview__tags" aria-label="Project tags">
                      {heroPreview.tags[language].map((tag) => (
                        <span key={tag} className="hero-preview__tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a className="button button--ghost hero-preview__cta" href="#projects">
                      {heroPreview.cta[language]}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <motion.section className="intro" {...sectionMotion}>
          <div className="container">
            <SectionTitle
              label={text(t.home.introLabel, language)}
              title={text(t.home.introText, language)}
            />
          </div>
        </motion.section>

        <motion.section id="projects" className="section" {...sectionMotion}>
          <div className="container">
            <SectionTitle title={text(t.home.projectsTitle, language)} />
            <div className="project-list">
              {projects.map((project) => (
                <article
                  key={project.slug}
                  className="project-card"
                  style={{ ["--accent" as string]: project.accent }}
                >
                  <div className="project-card__meta">
                    <span>{project.number}</span>
                    <span>{project.year}</span>
                  </div>
                  <div className="project-card__content">
                    <div className="project-card__copy">
                      <p className="project-card__category">{project.category[language]}</p>
                      <h3>{project.title}</h3>
                      <p>{project.summary[language]}</p>
                      <dl className="project-card__details">
                        <div>
                          <dt>{text(t.project.role, language)}</dt>
                          <dd>{project.role[language]}</dd>
                        </div>
                        {project.status ? (
                          <div>
                            <dt>{text(t.project.status, language)}</dt>
                            <dd>{project.status[language]}</dd>
                          </div>
                        ) : null}
                        {project.disclaimer ? (
                          <div>
                            <dt>{text(t.project.disclaimer, language)}</dt>
                            <dd>{project.disclaimer[language]}</dd>
                          </div>
                        ) : null}
                      </dl>
                    </div>
                    <div className="project-card__visual">
                      <div className="project-card__panel">
                        <p className="project-card__visual-title">
                          {project.mediaTitle[language]}
                        </p>
                        <p className="project-card__visual-text">
                          {project.mediaDescription[language]}
                        </p>
                        <div className="project-card__metrics">
                          {project.metrics.map((metric) => (
                            <div key={metric.value + metric.label.en}>
                              <strong>{metric.value}</strong>
                              <span>{metric.label[language]}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="project-card__actions">
                    <Link className="button button--ghost" to={`/projects/${project.slug}`}>
                      {text(t.common.viewCase, language)}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section id="services" className="section" {...sectionMotion}>
          <div className="container">
            <SectionTitle title={text(t.home.servicesTitle, language)} />
            <div className="services-list">
              {services.map((service, index) => (
                <article key={service.title.en} className="service-item">
                  <span className="service-item__number">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{service.title[language]}</h3>
                    <p>{service.description[language]}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section id="about" className="section section--split" {...sectionMotion}>
          <div className="container split-grid">
            <div>
              <SectionTitle title={text(t.home.aboutTitle, language)} />
              <p className="large-copy">{text(t.home.aboutText, language)}</p>
              <p className="muted-copy">{text(t.home.aboutNote, language)}</p>
            </div>
            <div className="portrait-placeholder" aria-hidden="true">
              <div className="portrait-placeholder__frame">
                <span>MT</span>
                <small>Web / AI / Automation</small>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section id="process" className="section" {...sectionMotion}>
          <div className="container">
            <SectionTitle title={text(t.home.processTitle, language)} />
            <div className="timeline">
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
              {reasons.map((reason) => (
                <article key={reason.title.en} className="reason-card">
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
            <div>
              <p className="section-heading__label">{text(t.home.contactLabel, language)}</p>
              <h2 className="contact-title">
                {text(t.home.contactTitle, language).split("\n").map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h2>
              <p className="large-copy">{text(t.home.contactText, language)}</p>
              <div className="contact-cards">
                {contacts.map((contact) => (
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
                <span>{text(t.form.projectType, language)}</span>
                <input name="projectType" required />
              </label>
              <label>
                <span>{text(t.form.budget, language)}</span>
                <input name="budget" />
              </label>
              <label>
                <span>{text(t.form.message, language)}</span>
                <textarea name="message" rows={6} required />
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
