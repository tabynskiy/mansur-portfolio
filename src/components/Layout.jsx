import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export function Layout({ children }) {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (location.pathname !== "/") {
      return undefined;
    }

    const ids = ["about", "services", "projects", "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const pickActiveSection = () => {
      const viewportMiddle = window.innerHeight * 0.35;
      let current = "";

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= viewportMiddle && rect.bottom >= viewportMiddle) {
          current = section.id;
          break;
        }
      }

      if (!current && window.scrollY < window.innerHeight * 0.2) {
        current = "";
      }

      setActiveSection(current);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          pickActiveSection();
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.05, 0.2, 0.4, 0.65]
      }
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => pickActiveSection();
    const handleHashChange = () => {
      const hashId = window.location.hash.replace("#", "");
      setActiveSection(ids.includes(hashId) ? hashId : "");
    };

    pickActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [location.pathname, location.hash]);

  const navItems = [
    ["about", "Обо мне"],
    ["services", "Услуги"],
    ["projects", "Проекты"],
    ["contact", "Контакты"]
  ];

  return (
    <div className="min-h-screen bg-mist text-ink">
      <div className="fixed inset-x-0 top-0 z-40">
        <div className="mx-auto max-w-7xl px-6 pt-4 lg:px-8">
          <div className="flex items-center justify-between rounded-full border border-white/70 bg-white/72 px-4 py-3 shadow-soft shadow-slate-900/5 backdrop-blur-2xl">
          <Link to="/" className="text-lg font-semibold tracking-[0.18em] text-ink uppercase">
            TABYNSKIYCOM
          </Link>
          <nav className="hidden items-center gap-2 text-sm text-steel md:flex">
            {navItems.map(([id, label]) => {
              const isActive = location.pathname === "/" && activeSection === id;
              return (
                <a
                  key={id}
                  href={`/#${id}`}
                  className={`group relative rounded-full px-4 py-2.5 transition duration-300 ${
                    isActive ? "text-ink" : "text-steel hover:text-ink"
                  }`}
                >
                  <span className="relative z-10">{label}</span>
                  <span
                    className={`absolute inset-x-3 bottom-2 h-px origin-left rounded-full bg-ink transition duration-300 ${
                      isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-40 group-hover:scale-x-100"
                    }`}
                  />
                  <span
                    className={`absolute inset-0 rounded-full border transition duration-300 ${
                      isActive
                        ? "border-lineStrong bg-white shadow-insetLine"
                        : "border-transparent group-hover:border-white/80 group-hover:bg-white/70"
                    }`}
                  />
                </a>
              );
            })}
          </nav>
          <a
            href="/#contact"
            className="button-secondary px-5 py-3 text-sm"
          >
            Обсудить проект
          </a>
        </div>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
}
