import React from 'react';
import { useTimerStore } from '../../store/timerStore';

const TimerControls: React.FC = () => {
  const {
    hours,
    minutes,
    seconds,
    isRunning,
    isPaused,
    setHours,
    setMinutes,
    setSeconds,
    start,
    pause,
    resume,
    reset,
  } = useTimerStore();

  const handleHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, Math.min(23, parseInt(e.target.value) || 0));
    setHours(value);
  };

  const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, Math.min(59, parseInt(e.target.value) || 0));
    setMinutes(value);
  };

  const handleSecondsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, Math.min(59, parseInt(e.target.value) || 0));
    setSeconds(value);
  };

  return (
    <div className="flex flex-col items-center gap-8">
      {!isRunning && !isPaused && (
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="hours"
              className="text-sm font-semibold uppercase tracking-wide text-gray-600"
            >
              Hours
            </label>
            <input
              id="hours"
              type="number"
              min="0"
              max="23"
              value={hours}
              onChange={handleHoursChange}
              className="w-20 rounded-lg border-2 border-gray-300 px-4 py-3 text-center text-lg transition-all focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-100 md:w-24"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="minutes"
              className="text-sm font-semibold uppercase tracking-wide text-gray-600"
            >
              Minutes
            </label>
            <input
              id="minutes"
              type="number"
              min="0"
              max="59"
              value={minutes}
              onChange={handleMinutesChange}
              className="w-20 rounded-lg border-2 border-gray-300 px-4 py-3 text-center text-lg transition-all focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-100 md:w-24"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="seconds"
              className="text-sm font-semibold uppercase tracking-wide text-gray-600"
            >
              Seconds
            </label>
            <input
              id="seconds"
              type="number"
              min="0"
              max="59"
              value={seconds}
              onChange={handleSecondsChange}
              className="w-20 rounded-lg border-2 border-gray-300 px-4 py-3 text-center text-lg transition-all focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-100 md:w-24"
            />
          </div>
        </div>
      )}

      <div className="flex flex-wrap justify-center gap-4">
        {!isRunning && !isPaused && (
          <button
            onClick={start}
            className="min-w-[120px] rounded-lg bg-gradient-to-r from-purple-500 to-purple-700 px-8 py-3.5 font-semibold uppercase tracking-wide text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
          >
            Start
          </button>
        )}

        {isRunning && (
          <button
            onClick={pause}
            className="min-w-[120px] rounded-lg bg-gradient-to-r from-pink-500 to-red-500 px-8 py-3.5 font-semibold uppercase tracking-wide text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
          >
            Pause
          </button>
        )}

        {isPaused && (
          <button
            onClick={resume}
            className="min-w-[120px] rounded-lg bg-gradient-to-r from-blue-400 to-cyan-400 px-8 py-3.5 font-semibold uppercase tracking-wide text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
          >
            Resume
          </button>
        )}

        {(isRunning || isPaused) && (
          <button
            onClick={reset}
            className="min-w-[120px] rounded-lg bg-gradient-to-r from-pink-400 to-yellow-400 px-8 py-3.5 font-semibold uppercase tracking-wide text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
};

export default TimerControls;
