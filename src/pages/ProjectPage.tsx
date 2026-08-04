import { Link, useParams } from "react-router-dom";
import { useMeta } from "../hooks/useMeta";
import { projectsBySlug } from "../data/projects";
import { navigation, siteUrl } from "../data/site";
import { t, text } from "../locales/translations";
import type { Language } from "../types";

type ProjectPageProps = {
  language: Language;
  setLanguage: (language: Language) => void;
};

export const ProjectPage = ({ language, setLanguage }: ProjectPageProps) => {
  const { slug = "" } = useParams();
  const project = projectsBySlug[slug];

  useMeta({
    title: project ? `${project.title} - Mansur Tabynskiy` : text(t.seo.title, language),
    description: project ? project.summary[language] : text(t.seo.description, language),
    canonical: project ? `${siteUrl}/projects/${project.slug}` : siteUrl,
    jsonLd: project
      ? {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          description: project.summary[language],
          author: {
            "@type": "Person",
            name: "Mansur Tabynskiy",
          },
        }
      : undefined,
  });

  if (!project) {
    return (
      <div className="page-shell page-shell--simple">
        <div className="container simple-page">
          <Link className="button button--ghost" to="/">
            {text(t.common.backHome, language)}
          </Link>
          <h1>{language === "ru" ? "Проект не найден" : "Project not found"}</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <header className="site-header site-header--project">
        <div className="container site-header__inner">
          <Link to="/" className="brand">
            <span className="brand__name">MANSUR TABYNSKIY</span>
            <span className="brand__line">WEB / AI / AUTOMATION</span>
          </Link>
          <nav className="site-nav" aria-label="Project navigation">
            {navigation.map((item) => (
              <Link key={item.id} to={`/#${item.id}`} className="site-nav__link">
                {item.label[language]}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            className="language-toggle"
            onClick={() => setLanguage(language === "ru" ? "en" : "ru")}
          >
            <span className={language === "ru" ? "is-active" : ""}>RU</span>
            <span>/</span>
            <span className={language === "en" ? "is-active" : ""}>EN</span>
          </button>
        </div>
      </header>

      <main className="project-page">
        <section className="project-hero">
          <div className="container project-hero__grid">
            <div>
              <p className="eyebrow">
                {project.number} - {project.category[language]} - {project.year}
              </p>
              <h1>{project.title}</h1>
              <p className="project-hero__summary">{project.summary[language]}</p>
            </div>
            <div className="project-hero__panel" style={{ ["--accent" as string]: project.accent }}>
              <div>
                <span>{text(t.project.role, language)}</span>
                <strong>{project.role[language]}</strong>
              </div>
              <div>
                <span>{text(t.project.technologies, language)}</span>
                <strong>{project.technologies.join(" - ")}</strong>
              </div>
              {project.status ? (
                <div>
                  <span>{text(t.project.status, language)}</span>
                  <strong>{project.status[language]}</strong>
                </div>
              ) : null}
              {project.disclaimer ? (
                <div>
                  <span>{text(t.project.disclaimer, language)}</span>
                  <strong>{project.disclaimer[language]}</strong>
                </div>
              ) : null}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container project-detail-grid">
            <article className="project-detail-card">
              <h2>{text(t.project.overview, language)}</h2>
              <p>{project.challenge[language]}</p>
            </article>
            {project.sections.map((section) => (
              <article key={section.label.en} className="project-detail-card">
                <h2>{section.label[language]}</h2>
                <p>{section.content[language]}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="container project-footer">
            <Link className="button button--ghost" to="/#projects">
              {text(t.project.backToProjects, language)}
            </Link>
            <a className="button" href="/#contact">
              {text(t.common.discussProject, language)}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};
