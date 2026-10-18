
export type Message = {
  role: "user" | "assistant";
  content: string;
};

export type TutorMode = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  soft: string;
  border: string;
};

export type TutorProgress = {
  xp: number;
  streak: number;
};
