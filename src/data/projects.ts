import type { ProjectData } from "../types";

export const projects: ProjectData[] = [
  {
    slug: "istudy-educational-center",
    number: "01",
    title: "iStudy Educational Center",
    category: {
      ru: "Education / Website / UX",
      en: "Education / Website / UX",
    },
    year: "2026",
    role: {
      ru: "Исследование, структура, UI-концепция, frontend",
      en: "Research, structure, UI concept, frontend",
    },
    summary: {
      ru: "Концепция современного сайта образовательного центра для презентации программ, преподавателей и сбора заявок на пробные занятия.",
      en: "A modern educational-center website concept built to present programs, teachers, and trial lesson enquiries.",
    },
    challenge: {
      ru: "Нужно было собрать понятный и убедительный сайт, который помогает быстро показать направления обучения и упростить первый контакт с потенциальным учеником.",
      en: "The goal was to shape a clear and persuasive website that explains the learning offer quickly and reduces friction in the first enquiry.",
    },
    technologies: ["React", "TypeScript", "Vite", "Structured CSS", "Framer Motion"],
    status: {
      ru: "Concept project",
      en: "Concept project",
    },
    accent: "#FF6B35",
    mediaTitle: {
      ru: "Редакционная подача с акцентом на направления обучения",
      en: "Editorial presentation focused on learning directions",
    },
    mediaDescription: {
      ru: "Hero, карточки программ и формы работают как единая воронка.",
      en: "Hero, program cards, and forms work as one conversion-focused flow.",
    },
    metrics: [
      {
        label: { ru: "Направления", en: "Tracks" },
        value: "04",
      },
      {
        label: { ru: "Экраны", en: "Screens" },
        value: "09",
      },
      {
        label: { ru: "Формы", en: "Forms" },
        value: "03",
      },
    ],
    sections: [
      {
        label: { ru: "Задача", en: "Challenge" },
        content: {
          ru: "Собрать сайт, который одинаково хорошо работает для родителей, подростков и взрослых учеников, не перегружая первый экран лишними деталями.",
          en: "Create a site that works for parents, teenagers, and adult learners without overloading the first screen.",
        },
      },
      {
        label: { ru: "Анализ", en: "Analysis" },
        content: {
          ru: "В основе структуры лежат открытые материалы из соцсетей, типовые вопросы по образовательным услугам и сценарий записи на пробное занятие.",
          en: "The structure is based on public social content, common education-service questions, and the trial-lesson conversion path.",
        },
      },
      {
        label: { ru: "Подход", en: "Approach" },
        content: {
          ru: "Я собрал визуально спокойную, но сильную композицию, где каждый следующий блок отвечает на конкретный вопрос потенциального клиента.",
          en: "I built a calm but strong layout where each section answers one specific buyer question.",
        },
      },
      {
        label: { ru: "Результат", en: "Result" },
        content: {
          ru: "Получился честный концепт, который можно использовать как базу для дальнейшей публикации и доработки под реальные бизнес-процессы центра.",
          en: "The result is a clean concept that can serve as a base for later publication and adaptation to real center workflows.",
        },
      },
    ],
  },
  {
    slug: "shama-suleimanov",
    number: "02",
    title: "Shama Suleimanov",
    category: {
      ru: "Personal Brand / Fitness / Landing Page",
      en: "Personal Brand / Fitness / Landing Page",
    },
    year: "2026",
    role: {
      ru: "Структура, контент-подача, UI-концепция",
      en: "Structure, content presentation, UI concept",
    },
    summary: {
      ru: "Демонстрационная концепция персонального сайта для тренера MMA и нутрициолога на основе открытых материалов.",
      en: "A presentation concept for an MMA coach and nutrition specialist based on public materials.",
    },
    challenge: {
      ru: "Нужно было превратить разрозненный контент из социальных сетей в сайт, который ясно показывает экспертизу, форматы работы и точки контакта.",
      en: "The task was to turn fragmented social content into a site that clearly explains expertise, services, and contact points.",
    },
    technologies: ["React", "TypeScript", "Motion Design", "Responsive UI"],
    disclaimer: {
      ru: "Неофициальная демонстрационная концепция.",
      en: "Unofficial concept created for presentation purposes.",
    },
    accent: "#9D7CFF",
    mediaTitle: {
      ru: "Контент личного бренда собран в понятную структуру",
      en: "Personal-brand content arranged into a clear structure",
    },
    mediaDescription: {
      ru: "Программы, медиа, отзывы и контакты объединены в один лендинг.",
      en: "Programs, media, testimonials, and contacts are combined into one landing flow.",
    },
    metrics: [
      {
        label: { ru: "Блоки услуг", en: "Service blocks" },
        value: "05",
      },
      {
        label: { ru: "Контентные сцены", en: "Content scenes" },
        value: "08",
      },
      {
        label: { ru: "Точки контакта", en: "Contact points" },
        value: "03",
      },
    ],
    sections: [
      {
        label: { ru: "Задача", en: "Challenge" },
        content: {
          ru: "Сделать сайт, который визуально поддерживает сильный личный бренд, но остаётся удобным для мобильного просмотра и быстрых заявок.",
          en: "Create a site that supports a strong personal brand while staying mobile-friendly and fast for enquiries.",
        },
      },
      {
        label: { ru: "Структура", en: "Structure" },
        content: {
          ru: "Основной сценарий строится вокруг услуг, доказательств, медиа и удобного перехода в мессенджеры.",
          en: "The main flow is built around services, proof, media, and frictionless messenger contact.",
        },
      },
      {
        label: { ru: "Дизайн-система", en: "Design system" },
        content: {
          ru: "Тёмная спортивная палитра сочетается с крупной типографикой и акцентными фотофрагментами без ощущения шаблонного фитнес-сайта.",
          en: "A dark athletic palette pairs with large type and strong photo framing without feeling like a generic fitness template.",
        },
      },
      {
        label: { ru: "Ограничения", en: "Constraints" },
        content: {
          ru: "Проект обозначен как неофициальный концепт и не создаёт впечатление подтверждённого сотрудничества.",
          en: "The project is clearly framed as an unofficial concept and does not imply confirmed collaboration.",
        },
      },
    ],
  },
  {
    slug: "document-verification-platform",
    number: "03",
    title: "Document Verification Platform",
    category: {
      ru: "Team Project / Web Application",
      en: "Team Project / Web Application",
    },
    year: "2026",
    role: {
      ru: "Участие в командной разработке интерфейсов и frontend-логики",
      en: "Contribution to team UI implementation and frontend logic",
    },
    summary: {
      ru: "Участие в разработке цифрового сервиса для сверки и проверки документов с аккуратной подачей роли и без раскрытия чувствительных данных.",
      en: "Participation in a document-verification service with an honest description of role and no sensitive data exposure.",
    },
    challenge: {
      ru: "Важно было показать опыт участия в продуктовой разработке, не раскрывая конфиденциальную информацию и не преувеличивая собственную роль.",
      en: "The challenge was to present product-development experience without exposing confidential data or overstating ownership.",
    },
    technologies: ["React", "TypeScript", "Component Design", "Team Workflow"],
    accent: "#4776FF",
    mediaTitle: {
      ru: "Интерфейсная система для рабочих сценариев сверки",
      en: "Interface system for verification workflows",
    },
    mediaDescription: {
      ru: "Показаны только безопасные, обезличенные фрагменты продукта.",
      en: "Only safe, anonymized product fragments are shown.",
    },
    metrics: [
      {
        label: { ru: "Сценарии", en: "Flows" },
        value: "06",
      },
      {
        label: { ru: "Компоненты", en: "Components" },
        value: "14",
      },
      {
        label: { ru: "Роли в команде", en: "Team roles" },
        value: "04",
      },
    ],
    sections: [
      {
        label: { ru: "Контекст", en: "Context" },
        content: {
          ru: "Проект создавался как часть командной работы, поэтому в кейсе акцент на моей зоне ответственности и взаимодействии с остальными участниками.",
          en: "This was a team effort, so the case focuses on my area of responsibility and collaboration with the rest of the team.",
        },
      },
      {
        label: { ru: "Подход", en: "Approach" },
        content: {
          ru: "Я работал над визуальной логикой экранов, повторно используемыми блоками интерфейса и чистой структурой представления данных.",
          en: "I worked on visual screen logic, reusable interface blocks, and clean data presentation patterns.",
        },
      },
      {
        label: { ru: "Безопасность", en: "Safety" },
        content: {
          ru: "Все материалы в кейсе обезличены: скрыты документы, имена и номера, которые не должны появляться в публичном портфолио.",
          en: "All case materials are anonymized: documents, names, and numbers that should not appear publicly are removed.",
        },
      },
      {
        label: { ru: "Результат", en: "Result" },
        content: {
          ru: "Кейс демонстрирует опыт участия в более сложном продукте и аккуратно показывает способность работать в команде над функциональными интерфейсами.",
          en: "The case shows experience contributing to a more complex product and working within a team on functional interfaces.",
        },
      },
    ],
  },
  {
    slug: "personal-portfolio-previous-version",
    number: "04",
    title: "Personal Portfolio — Previous Version",
    category: {
      ru: "Personal Brand / Iteration / Website",
      en: "Personal Brand / Iteration / Website",
    },
    year: "2026",
    role: {
      ru: "Анализ, redesign, frontend, контент-архитектура",
      en: "Analysis, redesign, frontend, content architecture",
    },
    summary: {
      ru: "Разбор предыдущей версии портфолио и её переработка в более сильную систему позиционирования.",
      en: "A breakdown of the previous portfolio version and its redesign into a stronger positioning system.",
    },
    challenge: {
      ru: "Нужно было сохранить понятность, но уйти от шаблонного ощущения, слабой иерархии и случайной подачи проектов.",
      en: "The goal was to keep clarity while moving away from a templated feel, weak hierarchy, and scattered project presentation.",
    },
    technologies: ["React", "TypeScript", "Information Architecture", "SEO Basics"],
    accent: "#58C1A8",
    mediaTitle: {
      ru: "До и после: система, а не просто новый экран",
      en: "Before and after: a system, not just a new screen",
    },
    mediaDescription: {
      ru: "Кейс показывает, как меняется подача, структура и доверие к продукту.",
      en: "The case shows how presentation, structure, and trust evolve together.",
    },
    metrics: [
      {
        label: { ru: "Версии", en: "Versions" },
        value: "02",
      },
      {
        label: { ru: "Ключевые секции", en: "Key sections" },
        value: "10",
      },
      {
        label: { ru: "Маршруты", en: "Routes" },
        value: "06",
      },
    ],
    sections: [
      {
        label: { ru: "Проблема", en: "Problem" },
        content: {
          ru: "Предыдущая версия не в полной мере объясняла позиционирование и не делала кейсы главным центром внимания.",
          en: "The earlier version did not fully explain positioning and did not make case studies the main center of attention.",
        },
      },
      {
        label: { ru: "Решение", en: "Solution" },
        content: {
          ru: "Новая структура строится вокруг крупных смысловых блоков, чётких CTA, отдельной проектной навигации и двуязычности.",
          en: "The new structure is built around large editorial sections, clear CTAs, dedicated project navigation, and bilingual content.",
        },
      },
      {
        label: { ru: "SEO и маршруты", en: "SEO and routing" },
        content: {
          ru: "Для кейсов добавлены собственные URL, чтобы сайт работал не только как визитка, но и как отправляемое клиенту портфолио.",
          en: "Dedicated URLs were added for projects so the site works not only as a landing page but also as a shareable portfolio.",
        },
      },
      {
        label: { ru: "Итог", en: "Outcome" },
        content: {
          ru: "Редизайн стал отдельным кейсом о том, как улучшать личный продукт через структуру, контент и техническую дисциплину.",
          en: "The redesign became a case study about improving a personal product through structure, content, and technical discipline.",
        },
      },
    ],
  },
];

export const projectsBySlug = Object.fromEntries(
  projects.map((project) => [project.slug, project]),
) as Record<string, ProjectData>;
