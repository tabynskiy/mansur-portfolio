import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export function Layout({ children }) {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
      return undefined;
    }

    const ids = ["about", "services", "projects", "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const pickActiveSection = () => {
      const offset = window.innerHeight * 0.28;
      const current = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= offset && rect.bottom >= offset;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleEntries[0]?.target?.id) {
          setActiveSection(visibleEntries[0].target.id);
        } else {
          pickActiveSection();
        }
      },
      {
        rootMargin: "-28% 0px -52% 0px",
        threshold: [0.15, 0.3, 0.6]
      }
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => pickActiveSection();
    const handleHashChange = () => {
      const hash = location.hash.replace("#", "");
      if (hash && ids.includes(hash)) {
        setActiveSection(hash);
      } else {
        pickActiveSection();
      }
    };

    pickActiveSection();
    handleHashChange();

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
        <div className="mx-auto max-w-7xl px-4 pt-3 sm:px-5 md:pt-4 lg:px-8">
          <div className="flex items-center justify-between rounded-full border border-white/70 bg-white/72 px-3 py-2.5 shadow-soft shadow-slate-900/5 backdrop-blur-2xl sm:px-4 sm:py-3">
            <Link to="/" className="text-[0.88rem] font-semibold uppercase tracking-[0.16em] text-ink sm:text-base sm:tracking-[0.18em] lg:text-lg">
              TABYNSKIYCOM
            </Link>

            <nav className="hidden items-center gap-2 text-sm text-steel md:flex">
              {navItems.map(([id, label]) => {
                const isActive = location.pathname === "/" && activeSection === id;
                return (
                  <a
                    key={id}
                    href={`/#${id}`}
                    className={`rounded-full px-5 py-3 transition duration-300 ${
                      isActive
                        ? "border border-lineStrong bg-white/88 text-ink shadow-[0_10px_24px_rgba(9,15,33,0.06)]"
                        : "border border-transparent hover:border-line/80 hover:bg-white/58 hover:text-ink"
                    }`}
                  >
                    {label}
                  </a>
                );
              })}
            </nav>

            <a href="/#contact" className="button-secondary min-h-[44px] px-3.5 py-2.5 text-xs sm:px-5 sm:py-3 sm:text-sm">
              <span className="sm:hidden">Связаться</span>
              <span className="hidden sm:inline">Обсудить проект</span>
            </a>
          </div>
        </div>
      </div>

      <main>{children}</main>
    </div>
  );
}
