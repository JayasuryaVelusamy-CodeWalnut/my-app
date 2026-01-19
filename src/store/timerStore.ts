import { create } from 'zustand';

interface TimerState {
  hours: number;
  minutes: number;
  seconds: number;
  isRunning: boolean;
  isPaused: boolean;
  totalSeconds: number;

  setHours: (hours: number) => void;
  setMinutes: (minutes: number) => void;
  setSeconds: (seconds: number) => void;
  start: () => void;
  pause: () => void;
  resume: () => void;
  reset: () => void;
  tick: () => void;
}

let intervalId: number | null = null;

const calculateTotalSeconds = (hours: number, minutes: number, seconds: number): number => {
  return hours * 3600 + minutes * 60 + seconds;
};

export const useTimerStore = create<TimerState>((set, get) => ({
  hours: 0,
  minutes: 0,
  seconds: 0,
  isRunning: false,
  isPaused: false,
  totalSeconds: 0,

  setHours: (hours) => {
    if (!get().isRunning) {
      set({ hours, totalSeconds: calculateTotalSeconds(hours, get().minutes, get().seconds) });
    }
  },

  setMinutes: (minutes) => {
    if (!get().isRunning) {
      set({ minutes, totalSeconds: calculateTotalSeconds(get().hours, minutes, get().seconds) });
    }
  },

  setSeconds: (seconds) => {
    if (!get().isRunning) {
      set({ seconds, totalSeconds: calculateTotalSeconds(get().hours, get().minutes, seconds) });
    }
  },

  start: () => {
    const { totalSeconds } = get();

    if (totalSeconds === 0) return;

    set({ isRunning: true, isPaused: false });

    if (intervalId) clearInterval(intervalId);

    intervalId = setInterval(() => {
      get().tick();
    }, 1000);
  },

  pause: () => {
    set({ isPaused: true, isRunning: false });
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  },

  resume: () => {
    const { totalSeconds } = get();

    if (totalSeconds === 0) return;

    set({ isRunning: true, isPaused: false });

    if (intervalId) clearInterval(intervalId);

    intervalId = setInterval(() => {
      get().tick();
    }, 1000);
  },

  reset: () => {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
    set({
      hours: 0,
      minutes: 0,
      seconds: 0,
      isRunning: false,
      isPaused: false,
      totalSeconds: 0,
    });
  },

  tick: () => {
    const { totalSeconds } = get();

    if (totalSeconds <= 0) {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
      set({ isRunning: false, isPaused: false });
      return;
    }

    const newTotalSeconds = totalSeconds - 1;
    const hours = Math.floor(newTotalSeconds / 3600);
    const minutes = Math.floor((newTotalSeconds % 3600) / 60);
    const seconds = newTotalSeconds % 60;

    set({
      totalSeconds: newTotalSeconds,
      hours,
      minutes,
      seconds,
    });
  },
}));
