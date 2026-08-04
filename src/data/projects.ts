import type { ProjectData } from "../types";

export const projects: ProjectData[] = [
  {
    slug: "istudy-educational-center",
    number: "01",
    title: "iStudy Educational Center",
    category: {
      ru: "Образование / Сайт",
      en: "Education / Website",
    },
    year: "2026",
    role: {
      ru: "Исследование, структура, UI-концепция, frontend",
      en: "Research, structure, UI concept, frontend",
    },
    summary: {
      ru: "Концепция современного сайта образовательного центра с понятной подачей программ, преподавателей и формата записи.",
      en: "A modern educational-center website concept with clear presentation of programs, teachers, and enquiry paths.",
    },
    challenge: {
      ru: "Задача заключалась в том, чтобы упростить путь пользователя: быстро показать направления, повысить доверие и сократить дистанцию до первого обращения.",
      en: "The goal was to simplify the user journey: explain the offer fast, build trust, and shorten the path to first contact.",
    },
    technologies: ["React", "TypeScript", "Vite", "CSS", "Framer Motion"],
    status: {
      ru: "Концепт",
      en: "Concept",
    },
    accent: "#FF6B35",
    mediaTitle: {
      ru: "Спокойная подача с акцентом на программы и действия",
      en: "Calm presentation focused on programs and actions",
    },
    mediaDescription: {
      ru: "Главный экран, структура программ и формы работают как единая воронка.",
      en: "The hero, program structure, and forms work as one conversion flow.",
    },
    metrics: [
      {
        label: { ru: "Экранов", en: "Screens" },
        value: "09",
      },
      {
        label: { ru: "Направлений", en: "Tracks" },
        value: "04",
      },
      {
        label: { ru: "Форм", en: "Forms" },
        value: "03",
      },
    ],
    sections: [
      {
        label: { ru: "Задача", en: "Challenge" },
        content: {
          ru: "Создать сайт, который одинаково понятно работает для родителей, подростков и взрослых учеников.",
          en: "Create a site that works clearly for parents, teenagers, and adult learners alike.",
        },
      },
      {
        label: { ru: "Подход", en: "Approach" },
        content: {
          ru: "Структура была выстроена вокруг быстрых ответов на ключевые вопросы и аккуратной мобильной подачи.",
          en: "The structure was built around fast answers to key buyer questions and a clean mobile experience.",
        },
      },
      {
        label: { ru: "Результат", en: "Outcome" },
        content: {
          ru: "Получился чистый, понятный концепт, который можно развивать дальше под реальные процессы центра.",
          en: "The result is a clean concept that can be expanded into a production-ready center website.",
        },
      },
    ],
  },
  {
    slug: "shama-suleimanov",
    number: "02",
    title: "Shama Suleimanov",
    category: {
      ru: "Личный бренд / Лендинг",
      en: "Personal brand / Landing page",
    },
    year: "2026",
    role: {
      ru: "Структура, контент-подача, UI-концепция",
      en: "Structure, content direction, UI concept",
    },
    summary: {
      ru: "Концепция сайта для личного бренда с сильной визуальной подачей, ясной навигацией и удобным маршрутом к заявке.",
      en: "A personal-brand website concept with strong visual framing, clear navigation, and a smooth path to enquiry.",
    },
    challenge: {
      ru: "Нужно было собрать разрозненный контент в цельную и убедительную историю без ощущения шаблонного фитнес-сайта.",
      en: "The task was to turn fragmented content into one coherent story without feeling like a generic fitness template.",
    },
    technologies: ["React", "TypeScript", "Responsive UI", "Motion"],
    disclaimer: {
      ru: "Неофициальная демонстрационная концепция.",
      en: "Unofficial demonstration concept.",
    },
    accent: "#A062FF",
    mediaTitle: {
      ru: "Личный бренд, собранный в понятную цифровую подачу",
      en: "A personal brand shaped into a clear digital presentation",
    },
    mediaDescription: {
      ru: "Услуги, медиа и контакты собраны в одном спокойном сценарии страницы.",
      en: "Services, media, and contact points are combined into one calm page narrative.",
    },
    metrics: [
      {
        label: { ru: "Сцен", en: "Scenes" },
        value: "08",
      },
      {
        label: { ru: "Блоков", en: "Blocks" },
        value: "05",
      },
      {
        label: { ru: "Контактов", en: "Contacts" },
        value: "03",
      },
    ],
    sections: [
      {
        label: { ru: "Задача", en: "Challenge" },
        content: {
          ru: "Превратить контент из соцсетей в сайт, который ясно показывает экспертизу, формат работы и точки входа.",
          en: "Turn social content into a website that clearly presents expertise, working format, and entry points.",
        },
      },
      {
        label: { ru: "Дизайн", en: "Design" },
        content: {
          ru: "Темная палитра и крупная типографика были собраны в более взрослом и сдержанном ключе.",
          en: "The dark palette and large typography were shaped into a more mature and restrained visual system.",
        },
      },
      {
        label: { ru: "Ограничения", en: "Constraints" },
        content: {
          ru: "Проект показан как концепт и не создает впечатления подтвержденного сотрудничества.",
          en: "The project is framed as a concept and does not imply confirmed collaboration.",
        },
      },
    ],
  },
  {
    slug: "document-verification-platform",
    number: "03",
    title: "Document Verification Platform",
    category: {
      ru: "Командный продукт / Веб-приложение",
      en: "Team product / Web app",
    },
    year: "2026",
    role: {
      ru: "Frontend-интерфейсы, UI-логика, командная разработка",
      en: "Frontend interfaces, UI logic, team collaboration",
    },
    summary: {
      ru: "Участие в разработке продуктового интерфейса для сценариев проверки документов с аккуратной публичной подачей роли.",
      en: "Contribution to a product interface for document-verification workflows with an honest public description of role.",
    },
    challenge: {
      ru: "Важно было показать опыт командной продуктовой работы, не раскрывая чувствительные детали и не преувеличивая вклад.",
      en: "It was important to present team-product experience without exposing sensitive details or overstating ownership.",
    },
    technologies: ["React", "TypeScript", "Component Design", "Team Workflow"],
    accent: "#4E7BFF",
    mediaTitle: {
      ru: "Функциональные интерфейсы для рабочих сценариев",
      en: "Functional interfaces for operational workflows",
    },
    mediaDescription: {
      ru: "В кейсе показаны только обезличенные и безопасные фрагменты системы.",
      en: "Only anonymized and safe fragments of the system are presented in the case study.",
    },
    metrics: [
      {
        label: { ru: "Сценариев", en: "Flows" },
        value: "06",
      },
      {
        label: { ru: "Компонентов", en: "Components" },
        value: "14",
      },
      {
        label: { ru: "Ролей", en: "Roles" },
        value: "04",
      },
    ],
    sections: [
      {
        label: { ru: "Контекст", en: "Context" },
        content: {
          ru: "Проект велся в команде, поэтому кейс акцентирует именно мою зону ответственности и формат взаимодействия.",
          en: "This project was built in a team, so the case focuses on my area of responsibility and collaboration model.",
        },
      },
      {
        label: { ru: "Подход", en: "Approach" },
        content: {
          ru: "Основное внимание уделялось повторно используемым интерфейсным блокам и чистой визуальной логике экранов.",
          en: "The main focus was on reusable interface blocks and clean screen logic.",
        },
      },
      {
        label: { ru: "Безопасность", en: "Safety" },
        content: {
          ru: "Все публичные материалы кейса обезличены и не содержат чувствительных данных.",
          en: "All public case-study materials are anonymized and contain no sensitive data.",
        },
      },
    ],
  },
  {
    slug: "personal-portfolio-previous-version",
    number: "04",
    title: "Personal Portfolio - Previous Version",
    category: {
      ru: "Личный проект / Редизайн",
      en: "Personal project / Redesign",
    },
    year: "2026",
    role: {
      ru: "Анализ, редизайн, frontend, контент-архитектура",
      en: "Analysis, redesign, frontend, content architecture",
    },
    summary: {
      ru: "Разбор предыдущей версии портфолио и ее пересборка в более цельную систему позиционирования.",
      en: "A breakdown of the previous portfolio version and its rebuild into a stronger positioning system.",
    },
    challenge: {
      ru: "Нужно было уйти от ощущения шаблона, улучшить иерархию и сделать кейсы главным содержанием сайта.",
      en: "The goal was to move away from a templated feel, improve hierarchy, and make case studies the site's core content.",
    },
    technologies: ["React", "TypeScript", "Information Architecture", "SEO"],
    accent: "#58C1A8",
    mediaTitle: {
      ru: "Редизайн как работа со структурой, а не только с внешним видом",
      en: "Redesign as structural work, not only visual change",
    },
    mediaDescription: {
      ru: "Кейс показывает, как меняются подача, навигация и доверие к портфолио после пересборки.",
      en: "The case shows how presentation, navigation, and trust evolve after a full rebuild.",
    },
    metrics: [
      {
        label: { ru: "Версий", en: "Versions" },
        value: "02",
      },
      {
        label: { ru: "Секций", en: "Sections" },
        value: "10",
      },
      {
        label: { ru: "Маршрутов", en: "Routes" },
        value: "06",
      },
    ],
    sections: [
      {
        label: { ru: "Проблема", en: "Problem" },
        content: {
          ru: "Предыдущая версия сайта не давала достаточной ясности и выглядела слишком шумной.",
          en: "The previous version did not provide enough clarity and felt visually noisy.",
        },
      },
      {
        label: { ru: "Решение", en: "Solution" },
        content: {
          ru: "Новая версия строится вокруг крупных смысловых блоков, аккуратной типографики и понятных маршрутов.",
          en: "The new version is built around large content blocks, restrained typography, and clear routes.",
        },
      },
      {
        label: { ru: "Итог", en: "Outcome" },
        content: {
          ru: "Редизайн стал отдельным кейсом о том, как улучшать личный продукт через систему, а не набор случайных экранов.",
          en: "The redesign became a case study about improving a personal product through system thinking rather than random screens.",
        },
      },
    ],
  },
];

export const projectsBySlug = Object.fromEntries(
  projects.map((project) => [project.slug, project]),
) as Record<string, ProjectData>;
