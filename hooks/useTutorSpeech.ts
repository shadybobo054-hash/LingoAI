"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type {
  SpeechRecognitionEventLike,
  SpeechRecognitionInstance,
  SpeechRecognitionWindow,
} from "@/components/ai-tutor/types";

export function useTutorSpeech(
  setInput: (value: string) => void,
) {
  const [isListening, setIsListening] = useState(false);
  const [speechError, setSpeechError] = useState("");

  const recognitionRef =
    useRef<SpeechRecognitionInstance | null>(null);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {}

      recognitionRef.current = null;
    }

    setIsListening(false);
  }, []);

  const toggleListening = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }

    const speechWindow =
      window as SpeechRecognitionWindow;

    const SpeechRecognitionAPI =
      speechWindow.SpeechRecognition ||
      speechWindow.webkitSpeechRecognition;

    if (!SpeechRecognitionAPI) {
      setSpeechError(
        "Speech recognition is not supported in this browser. Try Chrome or Edge.",
      );
      return;
    }

    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      return;
    }

    setSpeechError("");

    const recognition = new SpeechRecognitionAPI();

    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = true;

    recognition.onresult = (
      event: SpeechRecognitionEventLike,
    ) => {
      let transcript = "";

      for (
        let index = 0;
        index < event.results.length;
        index += 1
      ) {
        transcript +=
          event.results[index][0].transcript;
      }

      setInput(transcript.trim());
    };

    recognition.onerror = () => {
      setIsListening(false);
      recognitionRef.current = null;

      setSpeechError(
        "I couldn't hear you clearly. Please try again.",
      );
    };

    recognition.onend = () => {
      setIsListening(false);
      recognitionRef.current = null;
    };

    recognitionRef.current = recognition;
    setIsListening(true);

    try {
      recognition.start();
    } catch {
      setIsListening(false);
      recognitionRef.current = null;

      setSpeechError(
        "Microphone could not be started. Please try again.",
      );
    }
  }, [isListening, setInput]);

  const speakText = useCallback((text: string) => {
    if (
      typeof window === "undefined" ||
      !("speechSynthesis" in window)
    ) {
      return;
    }

    window.speechSynthesis.cancel();

    const utterance =
      new SpeechSynthesisUtterance(text);

    utterance.lang = "en-US";
    utterance.rate = 0.95;
    utterance.pitch = 1;

    window.speechSynthesis.speak(utterance);
  }, []);

  const stopSpeaking = useCallback(() => {
    if (
      typeof window !== "undefined" &&
      "speechSynthesis" in window
    ) {
      window.speechSynthesis.cancel();
    }
  }, []);

  useEffect(() => {
    return () => {
      stopListening();
      stopSpeaking();
    };
  }, [stopListening, stopSpeaking]);

  return {
    isListening,
    speechError,
    recognitionRef,
    toggleListening,
    stopListening,
    speakText,
    stopSpeaking,
    setSpeechError,
  };
}
