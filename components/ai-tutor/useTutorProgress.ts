"use client";

import { useSyncExternalStore } from "react";
import { getProgress } from "@/lib/progress";
import type { Progress } from "./types";

let clientProgressSnapshot: Progress = {
  xp: 0,
  streak: 0,
  lastActivity: null,
};

let progressInitialized = false;

function refreshProgressSnapshot() {
  const progress = getProgress();

  clientProgressSnapshot = {
    xp: progress.xp,
    streak: progress.streak,
    lastActivity: progress.lastActivity,
  };
}

function getClientProgressSnapshot() {
  if (!progressInitialized) {
    progressInitialized = true;
    refreshProgressSnapshot();
  }

  return clientProgressSnapshot;
}

function getServerProgressSnapshot(): Progress {
  return {
    xp: 0,
    streak: 0,
    lastActivity: null,
  };
}

function subscribeToProgress(callback: () => void) {
  const handleStorageChange = () => {
    refreshProgressSnapshot();
    callback();
  };

  window.addEventListener("storage", handleStorageChange);

  return () => {
    window.removeEventListener("storage", handleStorageChange);
  };
}

export function useTutorProgress() {
  return useSyncExternalStore(
    subscribeToProgress,
    getClientProgressSnapshot,
    getServerProgressSnapshot,
  );
}

export function refreshTutorProgress() {
  refreshProgressSnapshot();
}
