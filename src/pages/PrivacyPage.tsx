import { Link } from "react-router-dom";
import { siteUrl } from "../data/site";
import { useMeta } from "../hooks/useMeta";
import { t, text } from "../locales/translations";
import type { Language } from "../types";

type PrivacyPageProps = {
  language: Language;
  setLanguage: (language: Language) => void;
};

export const PrivacyPage = ({ language, setLanguage }: PrivacyPageProps) => {
  useMeta({
    title: `${text(t.privacy.title, language)} - Mansur Tabynskiy`,
    description: text(t.privacy.text, language),
    canonical: `${siteUrl}/privacy`,
  });

  return (
    <div className="page-shell page-shell--simple">
      <header className="site-header site-header--project">
        <div className="container site-header__inner">
          <Link to="/" className="brand">
            <span className="brand__name">MANSUR TABYNSKIY</span>
            <span className="brand__line">WEB / AI / AUTOMATION</span>
          </Link>
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
      <main className="simple-page">
        <div className="container prose">
          <Link className="button button--ghost" to="/">
            {text(t.common.backHome, language)}
          </Link>
          <h1>{text(t.privacy.title, language)}</h1>
          <p>{text(t.privacy.text, language)}</p>
        </div>
      </main>
    </div>
  );
};
