import { words } from "../data";

export type VocabularyWord = (typeof words)[number];

export type WeekDay = {
  label: string;
  on: boolean;
};
