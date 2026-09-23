export type TutorMode = {
  id: string;
  title: string;
  description: string;
  icon: string;
  prompt: string;
};

export type Message = {
  role: "user" | "assistant";
  content: string;
};

export type ProgressSnapshot = {
  xp: number;
  streak: number;
};

export type SpeechRecognitionResultLike = {
  transcript: string;
};

export type SpeechRecognitionEventLike = {
  results: {
    length: number;
    [index: number]: {
      length: number;
      [index: number]: SpeechRecognitionResultLike;
    };
  };
};

export type SpeechRecognitionInstance = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onresult: ((event: SpeechRecognitionEventLike) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
};

export type SpeechRecognitionConstructor =
  new () => SpeechRecognitionInstance;

export type SpeechRecognitionWindow = Window & {
  SpeechRecognition?: SpeechRecognitionConstructor;
  webkitSpeechRecognition?: SpeechRecognitionConstructor;
};
