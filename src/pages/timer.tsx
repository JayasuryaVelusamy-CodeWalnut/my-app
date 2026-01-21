import React from 'react';
import TimerDisplay from '../components/timer/TimerDisplay';
import TimerControls from '../components/timer/TimerControls';
import { useTimerEffect } from '../hooks/useTimerEffect';

const Timer: React.FC = () => {
  useTimerEffect();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-purple-600">Countdown Timer</h1>
        <TimerDisplay />
        <TimerControls />
      </div>
    </div>
  );
};

export default Timer;
