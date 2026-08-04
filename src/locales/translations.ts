import type { Language, LocalizedText } from "../types";

export const t = {
  seo: {
    title: {
      ru: "Мансур Табынский - Сайты и AI-решения для бизнеса",
      en: "Mansur Tabynskiy - Websites and AI solutions for business",
    },
    description: {
      ru: "Портфолио Мансура Табынского: современные сайты, интерфейсы и AI-решения для роста бизнеса.",
      en: "Portfolio of Mansur Tabynskiy: modern websites, interfaces, and AI solutions for business growth.",
    },
  },
  common: {
    openProject: { ru: "Открыть проект", en: "Open project" },
    viewCase: { ru: "Смотреть кейс", en: "View case" },
    backHome: { ru: "На главную", en: "Back home" },
    discussProject: { ru: "Обсудить проект", en: "Discuss project" },
    viewProjects: { ru: "Посмотреть проекты", en: "View projects" },
    scrollToExplore: { ru: "Листайте ниже", en: "Scroll to explore" },
    available: { ru: "Открыт к выборочным проектам", en: "Available for selected projects" },
    based: { ru: "Казахстан / ОАЭ", en: "Based in Kazakhstan / UAE" },
  },
  header: {
    brandLine: { ru: "WEB / AI / AUTOMATION", en: "WEB / AI / AUTOMATION" },
  },
  home: {
    eyebrow: { ru: "WEB DEVELOPMENT - AI - AUTOMATION", en: "WEB DEVELOPMENT - AI - AUTOMATION" },
    heroTitle: {
      ru: "СОЗДАЮ САЙТЫ\nИ AI-ПРОДУКТЫ,\nКОТОРЫЕ РАСТЯТ БИЗНЕС",
      en: "I BUILD WEBSITES\nAND AI PRODUCTS\nTHAT HELP BUSINESSES GROW",
    },
    heroText: {
      ru: "Создаю цифровые продукты для бизнеса: от сильной упаковки до автоматизации процессов.",
      en: "I create digital products for business: from strong presentation to process automation.",
    },
    introLabel: { ru: "ПОДХОД", en: "APPROACH" },
    introTitle: {
      ru: "СНАЧАЛА ЗАДАЧА БИЗНЕСА.\nЗАТЕМ СТРУКТУРА, ДИЗАЙН И РАЗРАБОТКА.",
      en: "BUSINESS TASK FIRST.\nTHEN STRUCTURE, DESIGN, AND DEVELOPMENT.",
    },
    introBody: {
      ru: "Я не начинаю работу с визуальных эффектов. Сначала изучаю задачу, аудиторию и бизнес-логику проекта. После этого выстраиваю структуру, создаю дизайн и перехожу к технической реализации.",
      en: "I do not start with visual effects. First, I study the task, the audience, and the business logic of the project. After that, I shape the structure, create the design, and move into technical implementation.",
    },
    introPoints: {
      ru: [
        "Понятная структура",
        "Спокойный и выразительный дизайн",
        "Аккуратная техническая реализация",
      ],
      en: [
        "Clear structure",
        "Calm and expressive design",
        "Careful technical implementation",
      ],
    },
    projectsTitle: { ru: "ИЗБРАННЫЕ ПРОЕКТЫ", en: "SELECTED PROJECTS" },
    servicesTitle: { ru: "УСЛУГИ", en: "SERVICES" },
    aboutTitle: { ru: "ОБО МНЕ", en: "ABOUT" },
    aboutText: {
      ru: "Работаю на стыке веб-разработки, визуальной системы и AI-инструментов. Для меня важны не декоративные эффекты, а понятный результат для бизнеса.",
      en: "I work at the intersection of web development, visual systems, and AI tools. I care less about decorative effects and more about a clear business result.",
    },
    aboutNote: {
      ru: "Рабочие языки: русский и английский. При необходимости подготавливаю структуру и контент под многоязычную подачу.",
      en: "Working languages: Russian and English. When needed, I also prepare structure and content for multilingual delivery.",
    },
    processTitle: { ru: "ПРОЦЕСС", en: "PROCESS" },
    technologiesTitle: { ru: "ТЕХНОЛОГИИ", en: "TECHNOLOGIES" },
    reasonsTitle: { ru: "ПОЧЕМУ СО МНОЙ РАБОТАЮТ", en: "WHY CLIENTS WORK WITH ME" },
    trustLabel: { ru: "БЕЗОПАСНОСТЬ И ПУБЛИКАЦИЯ", en: "SECURITY AND DELIVERY" },
    trustTitle: {
      ru: "Публикация и техническая дисциплина закладываются с самого начала.",
      en: "Release discipline and technical safety are part of the process from the start.",
    },
    trustItems: {
      ru: [
        "Preview перед публикацией",
        "Чистая клиентская часть без секретов в коде",
        "Резервирование проекта в Git и GitHub",
        "Понятная подготовка к дальнейшим интеграциям",
      ],
      en: [
        "Preview before release",
        "Clean client-side code with no secrets exposed",
        "Project backup in Git and GitHub",
        "Clear preparation for future integrations",
      ],
    },
    reviewsTitle: { ru: "СТАТУС", en: "STATUS" },
    reviewsText: {
      ru: "Портфолио обновляется. Новые кейсы и подтвержденные отзывы будут добавляться по мере публикации.",
      en: "The portfolio is evolving. New case studies and confirmed testimonials will be added as they are published.",
    },
    contactLabel: { ru: "ОБСУЖДЕНИЕ ПРОЕКТА", en: "PROJECT DISCUSSION" },
    contactTitle: {
      ru: "ЕСТЬ ЗАДАЧА?\nДАВАЙТЕ ОБСУДИМ.",
      en: "HAVE A PROJECT?\nLET'S TALK.",
    },
    contactText: {
      ru: "Оставьте короткое сообщение, и я подготовлю ответ в удобном мессенджере.",
      en: "Leave a short message and I will prepare a reply in the messenger that suits you.",
    },
    footerTop: { ru: "WEB DEVELOPMENT / AI / AUTOMATION", en: "WEB DEVELOPMENT / AI / AUTOMATION" },
  },
  form: {
    name: { ru: "Имя", en: "Name" },
    contact: { ru: "Контакт", en: "Contact" },
    projectType: { ru: "Тип проекта", en: "Project type" },
    budget: { ru: "Бюджет", en: "Budget" },
    message: { ru: "Сообщение", en: "Message" },
    consent: {
      ru: "Согласен(а) на обработку данных для обратной связи",
      en: "I agree to the processing of my data for contact purposes",
    },
    submit: { ru: "Отправить в Telegram", en: "Send to Telegram" },
    whatsapp: { ru: "Отправить в WhatsApp", en: "Send to WhatsApp" },
  },
  project: {
    overview: { ru: "Обзор", en: "Overview" },
    role: { ru: "Роль", en: "Role" },
    technologies: { ru: "Технологии", en: "Technologies" },
    status: { ru: "Статус", en: "Status" },
    disclaimer: { ru: "Важно", en: "Note" },
    result: { ru: "Результат", en: "Outcome" },
    backToProjects: { ru: "К проектам", en: "Back to projects" },
  },
  privacy: {
    title: { ru: "Политика конфиденциальности", en: "Privacy Policy" },
    text: {
      ru: "На текущем этапе сайт не хранит отправленные через форму данные на собственном сервере. Форма подготавливает сообщение для отправки в выбранный мессенджер. После подключения серверной части политика может быть дополнена условиями хранения, сроками обработки и удалением данных.",
      en: "At the current stage, the site does not store form submissions on its own server. The form prepares a message for the selected messenger. Once backend processing is added, this policy may be extended with storage, retention, and deletion details.",
    },
  },
};

export const text = (value: LocalizedText, language: Language) => value[language];
