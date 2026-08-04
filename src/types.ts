export type Language = "ru" | "en";

export type LocalizedText = Record<Language, string>;

export type ProjectSection = {
  label: LocalizedText;
  content: LocalizedText;
};

export type ProjectData = {
  slug: string;
  number: string;
  title: string;
  category: LocalizedText;
  year: string;
  role: LocalizedText;
  summary: LocalizedText;
  challenge: LocalizedText;
  technologies: string[];
  status?: LocalizedText;
  disclaimer?: LocalizedText;
  liveUrl?: string;
  caseUrl?: string;
  accent: string;
  mediaTitle: LocalizedText;
  mediaDescription: LocalizedText;
  metrics: Array<{
    label: LocalizedText;
    value: string;
  }>;
  sections: ProjectSection[];
};
