import duration from "dayjs/plugin/duration";
import { useEffect, useRef, useState } from "react";

import dayjs from "@/shared/lib/dayjs/dayjsWithLocale";

dayjs.extend(duration);

export function useResendTimer(delayMinutes: number, storageKey: string) {
  const [secondsLeft, setSecondsLeft] = useState(0);
  const targetTimeRef = useRef<dayjs.Dayjs | null>(null);

  const formatTime = (totalSeconds: number) => {
    const d = dayjs.duration(totalSeconds, "seconds");
    return `${d.minutes()}:${String(d.seconds()).padStart(2, "0")}`;
  };

  const updateTimer = () => {
    if (!targetTimeRef.current) return;

    const diff = targetTimeRef.current.diff(dayjs(), "second");
    setSecondsLeft(Math.max(diff, 0));
  };

  const startTimer = () => {
    const target = dayjs().add(delayMinutes, "minute");

    targetTimeRef.current = target;
    localStorage.setItem(storageKey, target.toISOString());

    updateTimer();
  };

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);

    if (saved) {
      const savedTime = dayjs(saved);
      const diff = savedTime.diff(dayjs(), "second");

      if (diff > 0) {
        setSecondsLeft(diff);
        targetTimeRef.current = savedTime;
      } else {
        localStorage.removeItem(storageKey);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!secondsLeft) return;

    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [secondsLeft]);

  useEffect(() => {
    if (secondsLeft === 0) {
      localStorage.removeItem(storageKey);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondsLeft]);

  return {
    secondsLeft,
    formattedTime: formatTime(secondsLeft),
    startTimer,
    isActive: secondsLeft > 0,
  };
}
