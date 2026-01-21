import { useAppSelector } from '../../store/hooks';

const TimerDisplay = () => {
  const { hours, minutes, seconds } = useAppSelector((state) => state.timer);

  const formatTime = (value: number): string => {
    return value.toString().padStart(2, '0');
  };

  return (
    <div className="my-10 flex items-center justify-center gap-5 font-mono md:gap-8">
      <div className="flex min-w-[100px] flex-col items-center rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 p-6 shadow-2xl md:min-w-[120px] md:p-8">
        <span className="text-5xl font-bold leading-none text-white md:text-6xl">
          {formatTime(hours)}
        </span>
        <span className="mt-2 text-xs uppercase tracking-wider text-white/80 md:mt-3 md:text-sm">
          Hours
        </span>
      </div>

      <span className="mx-2 text-4xl font-bold text-purple-600 md:text-5xl">:</span>

      <div className="flex min-w-[100px] flex-col items-center rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 p-6 shadow-2xl md:min-w-[120px] md:p-8">
        <span className="text-5xl font-bold leading-none text-white md:text-6xl">
          {formatTime(minutes)}
        </span>
        <span className="mt-2 text-xs uppercase tracking-wider text-white/80 md:mt-3 md:text-sm">
          Minutes
        </span>
      </div>

      <span className="mx-2 text-4xl font-bold text-purple-600 md:text-5xl">:</span>

      <div className="flex min-w-[100px] flex-col items-center rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 p-6 shadow-2xl md:min-w-[120px] md:p-8">
        <span className="text-5xl font-bold leading-none text-white md:text-6xl">
          {formatTime(seconds)}
        </span>
        <span className="mt-2 text-xs uppercase tracking-wider text-white/80 md:mt-3 md:text-sm">
          Seconds
        </span>
      </div>
    </div>
  );
};

export default TimerDisplay;
