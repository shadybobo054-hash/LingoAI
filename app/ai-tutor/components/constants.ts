
import type { TutorMode } from "./types";

export const tutorModes: TutorMode[] = [
  {
    id: "conversation",
    title: "Conversation",
    subtitle: "Practice real English",
    icon: "💬",
    color: "from-blue-500 to-cyan-400",
    soft: "bg-blue-500/10",
    border: "border-blue-400/30",
  },
  {
    id: "grammar",
    title: "Grammar",
    subtitle: "Master the rules",
    icon: "📚",
    color: "from-violet-500 to-purple-400",
    soft: "bg-violet-500/10",
    border: "border-violet-400/30",
  },
  {
    id: "vocabulary",
    title: "Vocabulary",
    subtitle: "Build your word power",
    icon: "💎",
    color: "from-emerald-500 to-teal-400",
    soft: "bg-emerald-500/10",
    border: "border-emerald-400/30",
  },
  {
    id: "speaking",
    title: "Speaking",
    subtitle: "Improve pronunciation",
    icon: "🎙️",
    color: "from-orange-500 to-amber-400",
    soft: "bg-orange-500/10",
    border: "border-orange-400/30",
  },
];

export const tutorPrompts = [
  {
    icon: "👋",
    title: "Start a conversation",
    text: "Let's practice introducing ourselves in English.",
    color: "border-blue-400/30 hover:bg-blue-500/10",
  },
  {
    icon: "📖",
    title: "Explain a grammar rule",
    text: "Explain the difference between present perfect and past simple.",
    color: "border-violet-400/30 hover:bg-violet-500/10",
  },
  {
    icon: "✨",
    title: "Learn new vocabulary",
    text: "Teach me 5 useful English words with examples.",
    color: "border-emerald-400/30 hover:bg-emerald-500/10",
  },
];

export const quickPrompts = [
  {
    icon: "🗣️",
    label: "Practice speaking",
    prompt:
      "Let's have a simple English conversation. Correct my mistakes.",
    color: "hover:border-blue-400/40 hover:bg-blue-500/5",
  },
  {
    icon: "🧠",
    label: "Test my English",
    prompt:
      "Give me a short English level test, one question at a time.",
    color: "hover:border-violet-400/40 hover:bg-violet-500/5",
  },
  {
    icon: "✍️",
    label: "Correct my writing",
    prompt:
      "Help me improve my English writing and explain my mistakes.",
    color: "hover:border-emerald-400/40 hover:bg-emerald-500/5",
  },
];

export const tutorFeatures = [
  {
    icon: "💬",
    title: "Natural conversation",
    text: "Build confidence through everyday English conversations.",
    color: "from-blue-500 to-cyan-400",
    border: "hover:border-blue-400/40",
  },
  {
    icon: "📚",
    title: "Grammar guidance",
    text: "Understand grammar rules with clear explanations and examples.",
    color: "from-violet-500 to-purple-400",
    border: "hover:border-violet-400/40",
  },
  {
    icon: "💎",
    title: "Vocabulary builder",
    text: "Discover useful words and learn how to use them naturally.",
    color: "from-emerald-500 to-teal-400",
    border: "hover:border-emerald-400/40",
  },
  {
    icon: "🎙️",
    title: "Speaking practice",
    text: "Use voice input and listen to your tutor's responses.",
    color: "from-orange-500 to-amber-400",
    border: "hover:border-orange-400/40",
  },
];
