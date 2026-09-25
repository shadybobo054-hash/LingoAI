
export type Level = "A1" | "A2" | "B1" | "B2" | "C1";

export type Lesson = {
  id: number;
  level: Level;
  title: string;
  description: string;
  tags: string[];
  topic: string;
  minutes: number;
  steps: number;
  href: string;
  color: string;
  completed?: boolean;
};

export const levels: Level[] = ["A1", "A2", "B1", "B2", "C1"];

export const topics = [
  "Everything",
  "Daily life",
  "Travel",
  "Work",
  "Food",
  "Technology",
  "Relationships",
];

const makeLesson = (
  id: number,
  level: Level,
  title: string,
  description: string,
  tags: string[],
  topic: string,
  minutes: number,
  steps: number,
  slug: string,
  color: string,
  completed = false,
): Lesson => ({
  id,
  level,
  title,
  description,
  tags,
  topic,
  minutes,
  steps,
  href: `/lessons/${slug}`,
  color,
  completed,
});

export const lessons: Lesson[] = [
  // ─────────────────────────────
  // A1 — FOUNDATIONS
  // ─────────────────────────────
  makeLesson(1, "A1", "Introducing yourself", "Learn simple phrases for meeting someone for the first time.", ["Vocabulary", "Speaking"], "Daily life", 7, 5, "introducing-yourself", "#2477D1"),
  makeLesson(2, "A1", "Ordering food", "Practice useful English for ordering food and drinks.", ["Vocabulary", "Listening", "Practice"], "Food", 8, 5, "ordering-food", "#0A7E99"),
  makeLesson(3, "A1", "Talking about your family", "Describe your family using simple everyday sentences.", ["Vocabulary", "Speaking"], "Relationships", 7, 5, "talking-about-family", "#6A52EE"),
  makeLesson(4, "A1", "My daily routine", "Talk about the things you normally do during the day.", ["Vocabulary", "Practice"], "Daily life", 8, 5, "daily-routine", "#0E8F69"),
  makeLesson(5, "A1", "At the café", "Learn common phrases for ordering at a café.", ["Listening", "Vocabulary"], "Food", 6, 4, "at-the-cafe", "#CE543B"),
  makeLesson(6, "A1", "Asking for directions", "Learn how to ask where places are and understand simple directions.", ["Listening", "Practice"], "Travel", 8, 5, "asking-for-directions", "#565AD7"),
  makeLesson(7, "A1", "Shopping for clothes", "Use simple English while shopping for clothes.", ["Vocabulary", "Practice"], "Daily life", 8, 5, "shopping-for-clothes", "#2477D1"),
  makeLesson(8, "A1", "Talking about the weather", "Describe today's weather and ask others about it.", ["Vocabulary", "Speaking"], "Daily life", 6, 4, "talking-about-weather", "#0A7E99"),
  makeLesson(9, "A1", "Numbers and prices", "Understand prices, numbers, and simple money conversations.", ["Listening", "Vocabulary"], "Food", 7, 5, "numbers-and-prices", "#6A52EE"),
  makeLesson(10, "A1", "Making simple plans", "Talk about what you want to do today or tomorrow.", ["Speaking", "Practice"], "Daily life", 8, 5, "simple-plans", "#0E8F69"),

  // ─────────────────────────────
  // A2 — EVERYDAY ENGLISH
  // ─────────────────────────────
  makeLesson(11, "A2", "Daily conversations", "Handle common conversations you hear every day.", ["Listening", "Speaking"], "Daily life", 9, 5, "daily-conversations", "#2477D1"),
  makeLesson(12, "A2", "Getting through the airport", "Learn the English you need at check-in, security, and boarding.", ["Listening", "Vocabulary", "Practice"], "Travel", 9, 5, "airport", "#0A7E99"),
  makeLesson(13, "A2", "Booking a hotel", "Practice checking into a hotel and asking for information.", ["Vocabulary", "Speaking"], "Travel", 8, 5, "booking-a-hotel", "#6A52EE"),
  makeLesson(14, "A2", "Making a phone call", "Use everyday phrases when making and receiving calls.", ["Listening", "Practice"], "Work", 8, 4, "making-a-phone-call", "#0E8F69"),
  makeLesson(15, "A2", "Talking about hobbies", "Talk naturally about the things you enjoy doing.", ["Vocabulary", "Speaking"], "Daily life", 7, 5, "talking-about-hobbies", "#CE543B"),
  makeLesson(16, "A2", "At the supermarket", "Learn useful language for finding and buying groceries.", ["Vocabulary", "Practice"], "Food", 8, 5, "supermarket", "#565AD7"),
  makeLesson(17, "A2", "Using public transport", "Ask questions and understand basic transport information.", ["Listening", "Vocabulary"], "Travel", 8, 5, "public-transport", "#2477D1"),
  makeLesson(18, "A2", "Making appointments", "Book appointments and discuss available times.", ["Speaking", "Practice"], "Daily life", 8, 4, "making-appointments", "#0A7E99"),
  makeLesson(19, "A2", "Using apps and websites", "Talk about common technology and online activities.", ["Vocabulary", "Practice"], "Technology", 9, 5, "apps-and-websites", "#6A52EE"),
  makeLesson(20, "A2", "Describing a problem", "Explain a simple problem and ask someone for help.", ["Speaking", "Listening"], "Daily life", 9, 5, "describing-a-problem", "#0E8F69"),

  // ─────────────────────────────
  // B1 — REAL CONVERSATIONS
  // ─────────────────────────────
  makeLesson(21, "B1", "Small talk at work", "Start and maintain natural conversations with coworkers.", ["Listening", "Vocabulary", "Practice"], "Work", 9, 5, "small-talk-at-work", "#6A52EE"),
  makeLesson(22, "B1", "Giving your opinion kindly", "Share your opinion without sounding too direct.", ["Vocabulary", "Practice"], "Relationships", 10, 4, "giving-your-opinion", "#CE543B", true),
  makeLesson(23, "B1", "Making suggestions", "Suggest ideas naturally during conversations.", ["Speaking", "Practice"], "Work", 9, 5, "making-suggestions", "#2477D1"),
  makeLesson(24, "B1", "Agreeing and disagreeing", "Express agreement and disagreement politely.", ["Vocabulary", "Speaking"], "Relationships", 9, 5, "agreeing-disagreeing", "#0A7E99"),
  makeLesson(25, "B1", "Phone calls and voicemail", "Handle everyday phone calls and leave clear messages.", ["Listening", "Practice"], "Work", 8, 4, "phone-calls", "#0E8F69"),
  makeLesson(26, "B1", "Talking about experiences", "Tell someone about things you have done in your life.", ["Speaking", "Vocabulary"], "Daily life", 10, 5, "talking-about-experiences", "#565AD7"),
  makeLesson(27, "B1", "Travel problems", "Explain delays, lost items, and other travel problems.", ["Listening", "Practice"], "Travel", 10, 5, "travel-problems", "#2477D1"),
  makeLesson(28, "B1", "Making plans with friends", "Arrange plans and respond naturally to invitations.", ["Speaking", "Practice"], "Relationships", 8, 5, "plans-with-friends", "#0A7E99"),
  makeLesson(29, "B1", "Explaining your job", "Describe what you do and talk about your responsibilities.", ["Vocabulary", "Speaking"], "Work", 10, 5, "explaining-your-job", "#6A52EE"),
  makeLesson(30, "B1", "Online conversations", "Communicate clearly through messages and online chats.", ["Vocabulary", "Practice"], "Technology", 9, 5, "online-conversations", "#0E8F69"),

  // ─────────────────────────────
  // B2 — EXPRESS YOURSELF
  // ─────────────────────────────
  makeLesson(31, "B2", "Explaining a problem", "Explain a complicated problem clearly and ask for support.", ["Vocabulary", "Practice"], "Work", 11, 5, "explaining-a-problem", "#565AD7", true),
  makeLesson(32, "B2", "Handling difficult conversations", "Stay clear and respectful when a conversation becomes difficult.", ["Speaking", "Listening"], "Relationships", 11, 5, "difficult-conversations", "#CE543B"),
  makeLesson(33, "B2", "Presenting an idea", "Introduce an idea and explain why it matters.", ["Speaking", "Vocabulary"], "Work", 10, 5, "presenting-an-idea", "#2477D1"),
  makeLesson(34, "B2", "Making a complaint", "Complain politely and explain exactly what went wrong.", ["Listening", "Practice"], "Daily life", 10, 5, "making-a-complaint", "#0A7E99"),
  makeLesson(35, "B2", "Discussing technology", "Talk about modern technology and how it affects daily life.", ["Vocabulary", "Speaking"], "Technology", 10, 5, "discussing-technology", "#6A52EE"),
  makeLesson(36, "B2", "Talking about goals", "Explain your goals, plans, and reasons clearly.", ["Speaking", "Practice"], "Daily life", 9, 5, "talking-about-goals", "#0E8F69"),
  makeLesson(37, "B2", "Giving detailed feedback", "Give useful and constructive feedback.", ["Vocabulary", "Practice"], "Work", 11, 5, "detailed-feedback", "#CE543B"),
  makeLesson(38, "B2", "Negotiating plans", "Find solutions and reach an agreement in conversation.", ["Speaking", "Listening"], "Work", 11, 5, "negotiating-plans", "#565AD7"),
  makeLesson(39, "B2", "Telling better stories", "Make your stories more natural, detailed, and interesting.", ["Vocabulary", "Speaking"], "Daily life", 10, 5, "telling-better-stories", "#2477D1"),
  makeLesson(40, "B2", "Understanding fast speech", "Train your ear to understand natural spoken English.", ["Listening", "Practice"], "Daily life", 12, 5, "fast-speech", "#0A7E99"),

  // ─────────────────────────────
  // C1 — ADVANCED FLUENCY
  // ─────────────────────────────
  makeLesson(41, "C1", "Nuanced opinions", "Express complex opinions with precision and flexibility.", ["Vocabulary", "Speaking"], "Relationships", 12, 5, "nuanced-opinions", "#6A52EE"),
  makeLesson(42, "C1", "Professional discussions", "Participate confidently in advanced professional conversations.", ["Listening", "Speaking"], "Work", 12, 5, "professional-discussions", "#2477D1"),
  makeLesson(43, "C1", "Persuading without pressure", "Use natural language to present convincing arguments.", ["Vocabulary", "Practice"], "Work", 11, 5, "persuading-without-pressure", "#0E8F69"),
  makeLesson(44, "C1", "Reading between the lines", "Understand implied meaning, tone, and indirect language.", ["Listening", "Vocabulary"], "Relationships", 12, 5, "reading-between-the-lines", "#CE543B"),
  makeLesson(45, "C1", "Advanced workplace English", "Handle sophisticated workplace situations naturally.", ["Vocabulary", "Speaking"], "Work", 13, 5, "advanced-workplace-english", "#565AD7"),
  makeLesson(46, "C1", "Debating ideas", "Present arguments, respond to objections, and clarify your position.", ["Speaking", "Practice"], "Work", 13, 5, "debating-ideas", "#2477D1"),
  makeLesson(47, "C1", "Understanding accents", "Improve listening across different English accents.", ["Listening", "Practice"], "Travel", 13, 5, "understanding-accents", "#0A7E99"),
  makeLesson(48, "C1", "Idioms in context", "Understand advanced expressions through realistic situations.", ["Vocabulary", "Listening"], "Daily life", 11, 5, "idioms-in-context", "#6A52EE"),
  makeLesson(49, "C1", "Speaking with precision", "Choose precise language when explaining complex ideas.", ["Vocabulary", "Speaking"], "Technology", 12, 5, "speaking-with-precision", "#0E8F69"),
  makeLesson(50, "C1", "Advanced fluency challenge", "Bring everything together in a realistic English challenge.", ["Listening", "Speaking", "Practice"], "Daily life", 15, 6, "advanced-fluency-challenge", "#CE543B"),
];

export const levelInfo: Record<
  Level,
  {
    title: string;
    subtitle: string;
  }
> = {
  A1: {
    title: "Foundations",
    subtitle: "Build your English from the ground up.",
  },
  A2: {
    title: "Everyday English",
    subtitle: "Handle real conversations with confidence.",
  },
  B1: {
    title: "Real Conversations",
    subtitle: "Speak naturally in everyday situations.",
  },
  B2: {
    title: "Express Yourself",
    subtitle: "Communicate clearly and confidently.",
  },
  C1: {
    title: "Advanced Fluency",
    subtitle: "Master nuance, precision, and natural English.",
  },
};

