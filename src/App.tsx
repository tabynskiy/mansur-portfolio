import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useLanguage } from "./hooks/useLanguage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { HomePage } from "./pages/HomePage";
import { ProjectPage } from "./pages/ProjectPage";

const PRELOADER_KEY = "mansur-portfolio-preloader-seen";

const Preloader = () => {
  const reduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setProgress((current) => (current >= 100 ? 100 : current + 10));
    }, 70);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: reduceMotion ? 0 : 0.4 } }}
    >
      <div className="preloader__content">
        <p className="preloader__title">MANSUR TABYNSKIY</p>
        <p className="preloader__subtitle">WEB / AI / AUTOMATION</p>
        <div className="preloader__progress">
          <span style={{ width: `${progress}%` }} />
        </div>
        <p className="preloader__percent">{progress}%</p>
      </div>
    </motion.div>
  );
};

export default function App() {
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    if (window.sessionStorage.getItem(PRELOADER_KEY)) {
      return;
    }

    setShowPreloader(true);
    window.sessionStorage.setItem(PRELOADER_KEY, "true");

    const timeout = window.setTimeout(() => setShowPreloader(false), reduceMotion ? 300 : 1250);
    return () => window.clearTimeout(timeout);
  }, [reduceMotion]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }, [location.pathname, reduceMotion]);

  const routeKey = useMemo(() => location.pathname, [location.pathname]);

  return (
    <>
      <AnimatePresence>{showPreloader ? <Preloader /> : null}</AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.div
          key={routeKey}
          initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduceMotion ? 0 : -12 }}
          transition={{ duration: reduceMotion ? 0 : 0.4, ease: "easeOut" }}
        >
          <Routes>
            <Route
              path="/"
              element={<HomePage language={language} setLanguage={setLanguage} />}
            />
            <Route
              path="/projects/:slug"
              element={<ProjectPage language={language} setLanguage={setLanguage} />}
            />
            <Route
              path="/privacy"
              element={<PrivacyPage language={language} setLanguage={setLanguage} />}
            />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
