import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  setHours,
  setMinutes,
  setSeconds,
  start,
  pause,
  resume,
  reset,
  clear,
} from '../../store/slices/timerSlice';

const TimerControls = () => {
  const dispatch = useAppDispatch();
  const { hours, minutes, seconds, isRunning, isPaused } = useAppSelector((state) => state.timer);

  const handleStart = () => {
    if (hours === 0 && minutes === 0 && seconds === 0) {
      alert('Please set a time first!');
      return;
    }
    dispatch(start());
  };

  const handlePauseResume = () => {
    if (isPaused) {
      dispatch(resume());
    } else {
      dispatch(pause());
    }
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const handleClear = () => {
    dispatch(clear());
  };

  return (
    <div className="space-y-6">
      {/* Input Controls */}
      {!isRunning && !isPaused && (
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex flex-col items-center">
            <label className="mb-1 text-sm font-medium text-gray-700">Hours</label>
            <input
              type="number"
              min="0"
              max="23"
              value={hours}
              onChange={(e) => dispatch(setHours(Number(e.target.value)))}
              className="w-20 rounded-lg border-2 border-purple-300 px-3 py-2 text-center text-lg font-semibold focus:border-purple-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col items-center">
            <label className="mb-1 text-sm font-medium text-gray-700">Minutes</label>
            <input
              type="number"
              min="0"
              max="59"
              value={minutes}
              onChange={(e) => dispatch(setMinutes(Number(e.target.value)))}
              className="w-20 rounded-lg border-2 border-purple-300 px-3 py-2 text-center text-lg font-semibold focus:border-purple-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col items-center">
            <label className="mb-1 text-sm font-medium text-gray-700">Seconds</label>
            <input
              type="number"
              min="0"
              max="59"
              value={seconds}
              onChange={(e) => dispatch(setSeconds(Number(e.target.value)))}
              className="w-20 rounded-lg border-2 border-purple-300 px-3 py-2 text-center text-lg font-semibold focus:border-purple-500 focus:outline-none"
            />
          </div>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-center gap-3">
        {!isRunning && !isPaused && (
          <button
            onClick={handleStart}
            className="rounded-lg bg-green-500 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-green-600 hover:shadow-xl active:scale-95"
          >
            Start
          </button>
        )}

        {(isRunning || isPaused) && (
          <>
            <button
              onClick={handlePauseResume}
              className="rounded-lg bg-yellow-500 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-yellow-600 hover:shadow-xl active:scale-95"
            >
              {isPaused ? 'Resume' : 'Pause'}
            </button>

            <button
              onClick={handleReset}
              className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-blue-600 hover:shadow-xl active:scale-95"
            >
              Reset
            </button>
          </>
        )}

        {!isRunning && (hours > 0 || minutes > 0 || seconds > 0) && (
          <button
            onClick={handleClear}
            className="rounded-lg bg-red-500 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-red-600 hover:shadow-xl active:scale-95"
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default TimerControls;
