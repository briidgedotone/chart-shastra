"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

interface TimeUnit {
  value: number;
  label: string;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const updateTimer = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatTime = (value: number) => value.toString().padStart(2, "0");

  const timeUnits: TimeUnit[] = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Mins" },
    { value: timeLeft.seconds, label: "Secs" },
  ];

  return (
    <div>
      <p className="text-sm text-white/80 mb-3">Next Cohort Starts In</p>
      <div className="flex items-center justify-center gap-3">
        {timeUnits.map((unit, index) => (
          <div key={unit.label} className="flex items-center gap-3">
            <div
              className={`bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 min-w-[70px] transition-all duration-300 ${
                isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-8">
                <div
                  key={unit.value}
                  className="text-2xl font-bold text-white animate-flip-in"
                >
                  {formatTime(unit.value)}
                </div>
              </div>
              <div className="text-xs text-white/60 uppercase">{unit.label}</div>
            </div>
            {index < timeUnits.length - 1 && (
              <span className="text-white/40 text-2xl animate-pulse">:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}