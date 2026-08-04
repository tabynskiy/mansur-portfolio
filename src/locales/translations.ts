import type { Language, LocalizedText } from "../types";

export const t = {
  seo: {
    title: {
      ru: "Мансур Табынский — Веб-разработка и AI-решения",
      en: "Mansur Tabynskiy — Web Developer & AI Solutions Specialist",
    },
    description: {
      ru: "Современные сайты, платформы личного бренда и AI-решения для бизнеса от Мансура Табынского.",
      en: "Modern websites, personal brand platforms and AI-powered business solutions by Mansur Tabynskiy.",
    },
  },
  common: {
    openProject: { ru: "Открыть проект", en: "Open project" },
    viewCase: { ru: "Подробнее", en: "View case" },
    backHome: { ru: "На главную", en: "Back home" },
    discussProject: { ru: "Обсудить проект", en: "Start a project" },
    viewProjects: { ru: "Посмотреть проекты", en: "View projects" },
    scrollToExplore: { ru: "Листайте ниже", en: "Scroll to explore" },
    available: { ru: "Открыт к выборочным проектам", en: "Available for selected projects" },
    based: { ru: "Казахстан / ОАЭ", en: "Based in Kazakhstan / UAE" },
  },
  header: {
    brandLine: { ru: "WEB / AI / AUTOMATION", en: "WEB / AI / AUTOMATION" },
  },
  home: {
    eyebrow: { ru: "WEB DEVELOPMENT · AI · AUTOMATION", en: "WEB DEVELOPMENT · AI · AUTOMATION" },
    heroTitle: {
      ru: "ЦИФРОВЫЕ РЕШЕНИЯ\nДЛЯ РЕАЛЬНЫХ\nБИЗНЕС-ЗАДАЧ",
      en: "MODERN WEBSITES.\nAI AUTOMATION.\nREAL BUSINESS VALUE.",
    },
    heroText: {
      ru: "Создаю современные сайты и AI-решения, которые помогают бизнесу привлекать клиентов и автоматизировать процессы.",
      en: "I build modern websites and AI-powered solutions that help businesses grow and simplify workflows.",
    },
    introLabel: { ru: "Позиционирование", en: "Positioning" },
    introText: {
      ru: "Я соединяю веб-разработку, бизнес-мышление и AI, чтобы создавать не просто красивые сайты, а полезные цифровые инструменты.",
      en: "I connect web development, business thinking, and AI to build digital tools that do more than just look good.",
    },
    projectsTitle: { ru: "ИЗБРАННЫЕ ПРОЕКТЫ", en: "SELECTED WORK" },
    servicesTitle: { ru: "ЧТО Я МОГУ СОЗДАТЬ", en: "WHAT I CAN BUILD" },
    aboutTitle: { ru: "ОБО МНЕ", en: "ABOUT" },
    aboutText: {
      ru: "Я работаю на стыке веб-разработки, дизайна и AI-инструментов. Мне важно, чтобы сайт был не просто аккуратным визуально, а действительно помогал бизнесу объяснять ценность и получать обращения.",
      en: "I work where web development, design, and AI tools meet. My focus is not just visual polish, but websites that help a business explain its value and generate enquiries.",
    },
    aboutNote: {
      ru: "Русский / English / Қазақша / العربية",
      en: "Russian / English / Kazakh / Arabic",
    },
    processTitle: { ru: "КАК Я РАБОТАЮ", en: "HOW I WORK" },
    technologiesTitle: { ru: "ИНСТРУМЕНТЫ", en: "TOOLS" },
    reasonsTitle: { ru: "ПОЧЕМУ СО МНОЙ", en: "WHY WORK WITH ME" },
    trustLabel: { ru: "НАДЁЖНАЯ ПЕРЕДАЧА", en: "RELIABLE DELIVERY" },
    trustTitle: {
      ru: "Безопасность и публикация продумываются с самого начала.",
      en: "Security and release discipline are considered from the start.",
    },
    trustItems: {
      ru: [
        "HTTPS и защищённый хостинг",
        "Секреты только в переменных окружения",
        "Отсутствие ключей в клиентском коде",
        "Preview перед публикацией",
        "Резервирование кода в GitHub",
        "Базовые security headers и защита от спама после подключения backend",
      ],
      en: [
        "HTTPS and secure hosting",
        "Secrets stored in environment variables only",
        "No API keys in client-side code",
        "Preview deployment before release",
        "Source backup in GitHub",
        "Baseline security headers and anti-spam flow after backend connection",
      ],
    },
    reviewsTitle: { ru: "ОТЗЫВЫ", en: "TESTIMONIALS" },
    reviewsText: {
      ru: "Сейчас формируется первая подборка клиентских историй. Когда появятся подтверждённые отзывы, они будут добавлены сюда с согласия клиентов.",
      en: "The first client stories are currently being built. Confirmed testimonials will be added here with client approval.",
    },
    contactLabel: { ru: "ДАВАЙТЕ РАБОТАТЬ ВМЕСТЕ", en: "LET’S WORK TOGETHER" },
    contactTitle: {
      ru: "ЕСТЬ ПРОЕКТ?\nДАВАЙТЕ ОБСУДИМ.",
      en: "HAVE A PROJECT?\nLET’S TALK.",
    },
    contactText: {
      ru: "Расскажите о задаче, желаемом формате сайта и способе связи. Сейчас форма готовит сообщение и перенаправляет его в выбранный мессенджер.",
      en: "Share the task, website format, and preferred contact method. For now, the form prepares a message and sends it to the selected messenger.",
    },
    footerTop: { ru: "WEB DEVELOPMENT / AI / AUTOMATION", en: "WEB DEVELOPMENT / AI / AUTOMATION" },
  },
  form: {
    name: { ru: "Имя", en: "Name" },
    contact: { ru: "Способ связи", en: "Preferred contact" },
    projectType: { ru: "Тип проекта", en: "Project type" },
    budget: { ru: "Бюджет", en: "Approximate budget" },
    message: { ru: "Сообщение", en: "Message" },
    consent: {
      ru: "Согласен(а) на обработку данных для обратной связи",
      en: "I agree to the processing of my data for contact purposes",
    },
    submit: { ru: "Отправить в Telegram", en: "Send to Telegram" },
    whatsapp: { ru: "Отправить в WhatsApp", en: "Send to WhatsApp" },
  },
  project: {
    overview: { ru: "Краткий обзор", en: "Overview" },
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
      ru: "На текущем этапе сайт не хранит отправленные через форму данные на собственном сервере. Контактная форма подготавливает сообщение для отправки в выбранный мессенджер. После подключения backend политика будет дополнена сведениями о хранении, сроках обработки и механизмах удаления данных.",
      en: "At the current stage, the site does not store form submissions on its own server. The contact form prepares a message for the selected messenger. Once a backend is connected, this policy should be extended with storage, retention, and deletion details.",
    },
  },
};

export const text = (value: LocalizedText, language: Language) => value[language];
