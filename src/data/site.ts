import type { Language, LocalizedText } from "../types";

type LocalizedItem = {
  title: LocalizedText;
  description: LocalizedText;
};

export const siteUrl = "https://mansur-tabynskiy.vercel.app";

export const navigation = [
  { id: "projects", label: { ru: "Проекты", en: "Projects" } },
  { id: "services", label: { ru: "Услуги", en: "Services" } },
  { id: "about", label: { ru: "Обо мне", en: "About" } },
  { id: "process", label: { ru: "Процесс", en: "Process" } },
  { id: "contact", label: { ru: "Контакты", en: "Contact" } },
];

export const services: LocalizedItem[] = [
  {
    title: { ru: "Лендинги", en: "Landing Pages" },
    description: {
      ru: "Короткие и сильные сайты для услуги, продукта или эксперта.",
      en: "Focused, high-clarity websites for a service, product, or expert.",
    },
  },
  {
    title: { ru: "Корпоративные сайты", en: "Corporate Websites" },
    description: {
      ru: "Многостраничные сайты с четкой структурой и понятной подачей компании.",
      en: "Multi-page websites with clear structure and strong company presentation.",
    },
  },
  {
    title: { ru: "Интернет-магазины", en: "Online Stores" },
    description: {
      ru: "Аккуратные e-commerce интерфейсы с акцентом на доверие и удобство покупки.",
      en: "Clean e-commerce interfaces focused on trust and a smooth purchase path.",
    },
  },
  {
    title: { ru: "AI Automation", en: "AI Automation" },
    description: {
      ru: "Практичные AI-сценарии и автоматизация процессов вокруг сайта и заявок.",
      en: "Practical AI workflows and automation around websites and incoming leads.",
    },
  },
  {
    title: { ru: "Редизайн сайтов", en: "Website Redesign" },
    description: {
      ru: "Пересборка устаревшего сайта в более спокойную, современную и дорогую систему.",
      en: "Reworking an outdated website into a calmer, more modern, and premium system.",
    },
  },
];

export const processSteps = [
  {
    number: "01",
    title: { ru: "Погружение", en: "Discovery" },
    description: {
      ru: "Понимаем задачу, аудиторию и ограничения бизнеса.",
      en: "We define the task, audience, and business constraints.",
    },
  },
  {
    number: "02",
    title: { ru: "Структура", en: "Structure" },
    description: {
      ru: "Собираем логику страниц, смысловые блоки и CTA.",
      en: "We shape page logic, content hierarchy, and CTA flow.",
    },
  },
  {
    number: "03",
    title: { ru: "Дизайн", en: "Design" },
    description: {
      ru: "Формируем спокойную визуальную систему и ритм страницы.",
      en: "We craft a calm visual system and page rhythm.",
    },
  },
  {
    number: "04",
    title: { ru: "Разработка", en: "Build" },
    description: {
      ru: "Собираем адаптивный интерфейс и нужные интеграции.",
      en: "We build the responsive interface and required integrations.",
    },
  },
  {
    number: "05",
    title: { ru: "Запуск", en: "Launch" },
    description: {
      ru: "Проверяем сборку, делаем preview и готовим публикацию.",
      en: "We verify the build, prepare a preview, and launch cleanly.",
    },
  },
];

export const reasons = [
  {
    title: { ru: "Ясная подача", en: "Clear presentation" },
    description: {
      ru: "Каждая секция помогает объяснять ценность, а не создавать шум.",
      en: "Each section is designed to explain value, not create noise.",
    },
  },
  {
    title: { ru: "Современная адаптивность", en: "Modern responsiveness" },
    description: {
      ru: "Сайт сразу проектируется для desktop, laptop, tablet и mobile.",
      en: "The site is designed for desktop, laptop, tablet, and mobile from day one.",
    },
  },
  {
    title: { ru: "Честный процесс", en: "Honest process" },
    description: {
      ru: "Понятные этапы, аккуратная реализация и прозрачная передача результата.",
      en: "Clear stages, careful implementation, and transparent delivery.",
    },
  },
  {
    title: { ru: "Фокус на результате", en: "Result-first mindset" },
    description: {
      ru: "В центре не эффект, а рабочий инструмент для бизнеса.",
      en: "The goal is not spectacle but a useful business tool.",
    },
  },
];

export const technologies = [
  "React",
  "TypeScript",
  "Vite",
  "Framer Motion",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
  "Vercel",
  "OpenAI",
  "Automation",
];

export const contacts = [
  {
    label: "Telegram",
    value: "@tabynskiycom",
    href: "https://t.me/tabynskiycom",
  },
  {
    label: "WhatsApp",
    value: "+7 700 712 9773",
    href: "https://wa.me/77007129773",
  },
  {
    label: "GitHub",
    value: "github.com/tabynskiy",
    href: "https://github.com/tabynskiy",
  },
];

export const availableLanguages: Array<{ code: Language; label: string }> = [
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
];

export const legalText = {
  ru: "Для более сложных систем с личными кабинетами, оплатами или чувствительными данными архитектура и безопасность оцениваются отдельно, а при необходимости к проекту подключается профильный backend-разработчик.",
  en: "For more complex systems with accounts, payments, or sensitive data, architecture and security are assessed separately and a dedicated backend specialist can be involved when needed.",
};
