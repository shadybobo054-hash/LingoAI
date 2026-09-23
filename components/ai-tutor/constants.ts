import type { TutorMode } from "./types";

export const tutorModes: TutorMode[] = [
  {
    id: "conversation",
    title: "Conversation",
    description: "Practice natural English conversations.",
    icon: "💬",
    prompt:
      "Let's practice English conversation. Ask me simple questions and correct my mistakes naturally.",
  },
  {
    id: "grammar",
    title: "Grammar",
    description: "Understand grammar with simple explanations.",
    icon: "📚",
    prompt:
      "Help me practice English grammar. Explain mistakes simply and give me useful examples.",
  },
  {
    id: "vocabulary",
    title: "Vocabulary",
    description: "Learn and practice useful new words.",
    icon: "🧠",
    prompt:
      "Help me learn useful English vocabulary. Give me examples and short practice questions.",
  },
  {
    id: "speaking",
    title: "Speaking",
    description: "Improve your speaking confidence.",
    icon: "🎤",
    prompt:
      "Help me practice spoken English. Ask me questions and correct my English in a friendly way.",
  },
];

export const starterPrompts = [
  "Explain this English sentence to me.",
  "Help me practice English conversation.",
  "Why is my English sentence wrong?",
  "Teach me 5 useful English words.",
];
