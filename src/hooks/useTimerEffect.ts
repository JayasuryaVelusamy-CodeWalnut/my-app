import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { tick } from '../store/slices/timerSlice';

export const useTimerEffect = () => {
  const dispatch = useAppDispatch();
  const isRunning = useAppSelector((state) => state.timer.isRunning);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      dispatch(tick());
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, dispatch]);
};
