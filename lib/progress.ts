const XP_KEY = "lingoai-xp";
const STREAK_KEY = "lingoai-streak";
const LAST_ACTIVITY_KEY = "lingoai-last-activity";

export type ProgressData = {
  xp: number;
  streak: number;
  lastActivity: string | null;
};

function getToday() {
  return new Date().toISOString().split("T")[0];
}

function getDateDifference(date1: string, date2: string) {
  const first = new Date(`${date1}T00:00:00`);
  const second = new Date(`${date2}T00:00:00`);

  return Math.round(
    (second.getTime() - first.getTime()) / (1000 * 60 * 60 * 24)
  );
}

export function getProgress(): ProgressData {
  if (typeof window === "undefined") {
    return {
      xp: 0,
      streak: 0,
      lastActivity: null,
    };
  }

  const xp = Number(localStorage.getItem(XP_KEY) || "0");
  const storedStreak = Number(
    localStorage.getItem(STREAK_KEY) || "0"
  );
  const lastActivity =
    localStorage.getItem(LAST_ACTIVITY_KEY);

  const today = getToday();

  let streak = storedStreak;

  if (lastActivity) {
    const difference = getDateDifference(
      lastActivity,
      today
    );

    if (difference > 1) {
      streak = 0;
    }
  }

  return {
    xp,
    streak,
    lastActivity,
  };
}

export function addXP(amount: number) {
  if (typeof window === "undefined") {
    return 0;
  }

  const currentXP = Number(
    localStorage.getItem(XP_KEY) || "0"
  );

  const newXP = currentXP + amount;

  localStorage.setItem(XP_KEY, String(newXP));

  return newXP;
}

export function recordActivity(xpAmount = 0) {
  if (typeof window === "undefined") {
    return getProgress();
  }

  const today = getToday();

  const lastActivity =
    localStorage.getItem(LAST_ACTIVITY_KEY);

  let streak = Number(
    localStorage.getItem(STREAK_KEY) || "0"
  );

  /*
   * لو المستخدم عمل Activity النهارده
   * لا نزود الـ streak مرة ثانية.
   */
  if (lastActivity === today) {
    if (xpAmount > 0) {
      addXP(xpAmount);
    }

    return getProgress();
  }

  if (!lastActivity) {
    streak = 1;
  } else {
    const difference = getDateDifference(
      lastActivity,
      today
    );

    if (difference === 1) {
      streak += 1;
    } else {
      streak = 1;
    }
  }

  localStorage.setItem(
    STREAK_KEY,
    String(streak)
  );

  localStorage.setItem(
    LAST_ACTIVITY_KEY,
    today
  );

  if (xpAmount > 0) {
    addXP(xpAmount);
  }

  return getProgress();
}

export function getXP() {
  if (typeof window === "undefined") {
    return 0;
  }

  return Number(
    localStorage.getItem(XP_KEY) || "0"
  );
}

export function getStreak() {
  return getProgress().streak;
}