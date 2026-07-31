import { Link, Navigate, useParams } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Reveal } from "../components/Reveal";
import { projects } from "../data/projects";

export function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <Layout>
      <section className="px-4 pb-16 pt-24 sm:px-5 sm:pb-20 sm:pt-28 lg:px-8 lg:pb-24 lg:pt-36">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <Link to="/" className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Назад на главную
            </Link>
          </Reveal>

          <Reveal delay={70} className="mt-10">
            <div
              className={`rounded-[2rem] bg-gradient-to-br ${project.accent} p-6 shadow-panel sm:rounded-[2.25rem] sm:p-10 lg:rounded-[2.5rem] lg:p-14`}
            >
              <p className="text-sm uppercase tracking-[0.25em] text-ink/60">{project.category}</p>
              <h1 className="mt-5 font-display text-[2.9rem] tracking-[-0.04em] text-ink sm:mt-6 sm:text-5xl lg:text-6xl">
                {project.name}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-7 text-ink/80 sm:mt-6 sm:text-xl sm:leading-8">
                {project.subtitle}
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal className="card-surface rounded-[1.75rem] p-6 sm:rounded-[2rem] sm:p-8">
              <h2 className="font-display text-[2rem] tracking-[-0.03em] text-ink sm:text-3xl">Описание проекта</h2>
              <p className="mt-5 text-base leading-7 text-steel sm:mt-6 sm:text-lg sm:leading-8">{project.description}</p>

              {project.demoVideo ? (
                <div className="mt-8 overflow-hidden rounded-[1.35rem] border border-line bg-white shadow-soft sm:mt-10 sm:rounded-[1.5rem]">
                  <video className="aspect-video w-full bg-ink" controls preload="metadata">
                    <source src={project.demoVideo} type="video/mp4" />
                    Ваш браузер не поддерживает встроенное видео.
                  </video>
                </div>
              ) : null}

              {project.confidential ? (
                <div className="mt-8 rounded-[1.35rem] border border-accent/15 bg-accentSoft/35 p-5 sm:mt-10 sm:rounded-[1.5rem] sm:p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accentDeep">Конфиденциальный проект</p>
                  <p className="mt-3 leading-7 text-steelDeep">{project.confidentialText}</p>
                </div>
              ) : null}

              <h3 className="mt-10 text-sm font-semibold uppercase tracking-[0.22em] text-accent">Что было сделано</h3>
              <ul className="mt-6 space-y-4">
                {project.completed.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-steel">
                    <span className="mt-2.5 h-2 w-2 rounded-full bg-accent shadow-[0_0_0_6px_rgba(31,79,209,0.08)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={90} className="space-y-6">
              <div className="card-surface rounded-[1.75rem] p-6 sm:rounded-[2rem] sm:p-8">
                <p className="text-sm uppercase tracking-[0.2em] text-steel">Год</p>
                <p className="mt-4 text-3xl font-semibold text-ink">{project.year}</p>
              </div>

              <div className="card-surface rounded-[1.75rem] p-6 sm:rounded-[2rem] sm:p-8">
                <p className="text-sm uppercase tracking-[0.2em] text-steel">Ключевые акценты</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {project.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="rounded-full border border-lineStrong bg-white/80 px-4 py-2 text-sm text-ink transition duration-300 hover:border-accent/35 hover:bg-accentSoft/40"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-line bg-[linear-gradient(145deg,_#050816_0%,_#14379a_100%)] p-6 text-white shadow-panel sm:rounded-[2rem] sm:p-8">
                <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                  {project.confidential ? "Статус показа" : "Следующий шаг"}
                </p>
                <p className="mt-4 text-2xl font-semibold">
                  {project.confidential
                    ? "Публичная демонстрация ограничена по запросу заказчика."
                    : "В кейс добавлена видеодемонстрация, позже можно дополнить его скриншотами и результатами."}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
