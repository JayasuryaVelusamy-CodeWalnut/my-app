import React from 'react';
import TimerDisplay from '../components/timer/TimerDisplay';
import TimerControls from '../components/timer/TimerControls';

const Timer: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-500 to-purple-800 p-5">
      <div className="w-full max-w-4xl rounded-3xl bg-white p-8 shadow-2xl md:p-12">
        <h1 className="mb-10 bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-center text-3xl font-bold text-transparent md:text-4xl">
          Countdown Timer
        </h1>
        <TimerDisplay />
        <TimerControls />
      </div>
    </div>
  );
};

export default Timer;
