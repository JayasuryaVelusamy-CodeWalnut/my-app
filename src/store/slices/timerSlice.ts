import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface TimerState {
  hours: number;
  minutes: number;
  seconds: number;
  isRunning: boolean;
  isPaused: boolean;
  initialTime: number;
}

const initialState: TimerState = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  isRunning: false,
  isPaused: false,
  initialTime: 0,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setHours: (state, action: PayloadAction<number>) => {
      state.hours = Math.max(0, Math.min(23, action.payload));
    },
    setMinutes: (state, action: PayloadAction<number>) => {
      state.minutes = Math.max(0, Math.min(59, action.payload));
    },
    setSeconds: (state, action: PayloadAction<number>) => {
      state.seconds = Math.max(0, Math.min(59, action.payload));
    },
    start: (state) => {
      state.initialTime = state.hours * 3600 + state.minutes * 60 + state.seconds;
      state.isRunning = true;
      state.isPaused = false;
    },
    pause: (state) => {
      state.isPaused = true;
      state.isRunning = false;
    },
    resume: (state) => {
      state.isPaused = false;
      state.isRunning = true;
    },
    reset: (state) => {
      const totalSeconds = state.initialTime;
      state.hours = Math.floor(totalSeconds / 3600);
      state.minutes = Math.floor((totalSeconds % 3600) / 60);
      state.seconds = totalSeconds % 60;
      state.isRunning = false;
      state.isPaused = false;
    },
    tick: (state) => {
      let totalSeconds = state.hours * 3600 + state.minutes * 60 + state.seconds;

      if (totalSeconds > 0) {
        totalSeconds--;
        state.hours = Math.floor(totalSeconds / 3600);
        state.minutes = Math.floor((totalSeconds % 3600) / 60);
        state.seconds = totalSeconds % 60;
      } else {
        state.isRunning = false;
        state.isPaused = false;
      }
    },
    clear: (state) => {
      state.hours = 0;
      state.minutes = 0;
      state.seconds = 0;
      state.isRunning = false;
      state.isPaused = false;
      state.initialTime = 0;
    },
  },
});

export const { setHours, setMinutes, setSeconds, start, pause, resume, reset, tick, clear } =
  timerSlice.actions;

export default timerSlice.reducer;
