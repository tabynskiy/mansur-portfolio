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
  { id: "process", label: { ru: "Подход", en: "Process" } },
  { id: "contact", label: { ru: "Контакты", en: "Contact" } },
];

export const services: LocalizedItem[] = [
  {
    title: { ru: "Landing Pages", en: "Landing Pages" },
    description: {
      ru: "Одностраничные сайты для экспертов, компаний и конкретных услуг.",
      en: "Conversion-focused one-page websites for experts, businesses, and focused offers.",
    },
  },
  {
    title: { ru: "Business Websites", en: "Business Websites" },
    description: {
      ru: "Многостраничные сайты для презентации компании, команды и направлений.",
      en: "Multi-page websites for presenting a company, team, and service lines.",
    },
  },
  {
    title: { ru: "Personal Brand Websites", en: "Personal Brand Websites" },
    description: {
      ru: "Сайты для тренеров, врачей, преподавателей и других публичных специалистов.",
      en: "Websites for coaches, doctors, teachers, and other public-facing specialists.",
    },
  },
  {
    title: { ru: "AI & Automation", en: "AI & Automation" },
    description: {
      ru: "AI-помощники, автоматизация процессов и полезные сценарии для бизнеса.",
      en: "AI assistants, process automation, and practical business workflows.",
    },
  },
  {
    title: { ru: "Website Redesign", en: "Website Redesign" },
    description: {
      ru: "Обновление структуры, мобильной версии и визуальной системы существующего сайта.",
      en: "Structure, mobile, and visual-system redesign for an existing website.",
    },
  },
  {
    title: { ru: "Integrations", en: "Integrations" },
    description: {
      ru: "Формы, Telegram-уведомления, аналитика и внешние сервисы с честной оценкой сложности.",
      en: "Forms, Telegram notifications, analytics, and third-party services with honest scope evaluation.",
    },
  },
];

export const processSteps = [
  {
    number: "01",
    title: { ru: "Погружение", en: "Discovery" },
    description: {
      ru: "Изучение задачи, аудитории, контекста и реальных бизнес-ограничений.",
      en: "Understanding the task, audience, context, and business constraints.",
    },
  },
  {
    number: "02",
    title: { ru: "Структура", en: "Structure" },
    description: {
      ru: "Формирование логики страниц, сценариев и ключевых CTA.",
      en: "Shaping page logic, journeys, and key call-to-action moments.",
    },
  },
  {
    number: "03",
    title: { ru: "Концепция", en: "Concept" },
    description: {
      ru: "Подбор визуального направления, ритма и композиции.",
      en: "Defining the visual direction, rhythm, and composition.",
    },
  },
  {
    number: "04",
    title: { ru: "Разработка", en: "Build" },
    description: {
      ru: "Адаптивная реализация, анимации, интерактив и базовые интеграции.",
      en: "Responsive implementation, motion, interaction, and baseline integrations.",
    },
  },
  {
    number: "05",
    title: { ru: "Запуск", en: "Launch" },
    description: {
      ru: "Проверка сборки, публикация, preview и передача результата.",
      en: "Build verification, deployment, preview, and handoff.",
    },
  },
  {
    number: "06",
    title: { ru: "Поддержка", en: "Support" },
    description: {
      ru: "Исправления и развитие проекта по согласованному формату.",
      en: "Post-launch fixes and further development by agreement.",
    },
  },
];

export const reasons = [
  {
    title: { ru: "Business-first approach", en: "Business-first approach" },
    description: {
      ru: "Сначала задача бизнеса, затем визуальная оболочка и технологии.",
      en: "The business problem comes first, then design and technology.",
    },
  },
  {
    title: { ru: "Responsive by default", en: "Responsive by default" },
    description: {
      ru: "Сайт сразу проектируется под телефон, планшет и desktop.",
      en: "The website is designed for phone, tablet, and desktop from the start.",
    },
  },
  {
    title: { ru: "Transparent workflow", en: "Transparent workflow" },
    description: {
      ru: "Понятные этапы, GitHub и предсказуемый процесс без туманных обещаний.",
      en: "Clear stages, GitHub-backed work, and a predictable process without vague promises.",
    },
  },
  {
    title: { ru: "Modern implementation", en: "Modern implementation" },
    description: {
      ru: "Современный стек, аккуратная адаптивность и подготовка к публикации.",
      en: "A modern stack, careful responsiveness, and publication-ready delivery.",
    },
  },
  {
    title: { ru: "AI-assisted workflow", en: "AI-assisted workflow" },
    description: {
      ru: "AI помогает ускорять анализ и сборку, но результат проходит ручную проверку.",
      en: "AI accelerates analysis and production, but the final output is reviewed manually.",
    },
  },
  {
    title: { ru: "Post-launch support", en: "Post-launch support" },
    description: {
      ru: "После запуска можно договориться о сопровождении и следующих итерациях.",
      en: "Post-launch fixes and the next iteration can be planned together.",
    },
  },
];

export const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Vite",
  "Git",
  "GitHub",
  "Vercel",
  "Codex",
  "OpenAI tools",
  "Claude",
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
  ru: "Для сложных систем с личными кабинетами, платежами или чувствительными данными архитектура и безопасность оцениваются отдельно, а при необходимости к проекту подключается профильный backend-разработчик.",
  en: "For complex systems with accounts, payments, or sensitive data, architecture and security are assessed separately and a dedicated backend specialist can be involved when needed.",
};
