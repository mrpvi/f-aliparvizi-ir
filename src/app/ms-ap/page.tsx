"use client";

import React, { useState, useEffect } from "react";

export default function CountdownPage() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Calculate target time (48 hours from now)
    const targetTime = new Date().getTime() + 48 * 60 * 60 * 1000;

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ hours, minutes, seconds });
        setIsFinished(false);
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        setIsFinished(true);
      }
    };

    // Update immediately
    updateCountdown();

    // Update every second
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (value: number) => {
    return value.toString().padStart(2, "0");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-rose-800 to-pink-900 flex items-center justify-center p-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Countdown Display */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-8 tracking-wide">
            Journey Countdown
          </h1>

          {/* Timer */}
          <div className="flex justify-center items-center space-x-2 md:space-x-6 mb-8">
            {/* Hours */}
            <div className="bg-gradient-to-b from-white/20 to-white/10 rounded-2xl p-4 md:p-6 border border-white/30 min-w-[80px] md:min-w-[120px]">
              <div className="text-3xl md:text-6xl font-mono font-bold text-white">
                {formatTime(timeLeft.hours)}
              </div>
              <div className="text-xs md:text-sm text-white/80 uppercase tracking-wider mt-2">
                Hours
              </div>
            </div>

            {/* Separator */}
            <div className="text-2xl md:text-4xl text-white font-bold animate-pulse">
              :
            </div>

            {/* Minutes */}
            <div className="bg-gradient-to-b from-white/20 to-white/10 rounded-2xl p-4 md:p-6 border border-white/30 min-w-[80px] md:min-w-[120px]">
              <div className="text-3xl md:text-6xl font-mono font-bold text-white">
                {formatTime(timeLeft.minutes)}
              </div>
              <div className="text-xs md:text-sm text-white/80 uppercase tracking-wider mt-2">
                Minutes
              </div>
            </div>

            {/* Separator */}
            <div className="text-2xl md:text-4xl text-white font-bold animate-pulse">
              :
            </div>

            {/* Seconds */}
            <div className="bg-gradient-to-b from-white/20 to-white/10 rounded-2xl p-4 md:p-6 border border-white/30 min-w-[80px] md:min-w-[120px]">
              <div className="text-3xl md:text-6xl font-mono font-bold text-white">
                {formatTime(timeLeft.seconds)}
              </div>
              <div className="text-xs md:text-sm text-white/80 uppercase tracking-wider mt-2">
                Seconds
              </div>
            </div>
          </div>

          {/* Distance Display */}
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-6 border border-blue-300/30">
            <div className="flex items-center justify-center space-x-3">
              <svg
                className="w-6 h-6 text-blue-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-xl md:text-2xl font-semibold text-white">
                Distance: {isFinished ? "0" : "1428"} km
              </span>
            </div>
          </div>

          {/* Status Message */}
          {isFinished && (
            <div className="mt-6 animate-bounce">
              <div className="bg-green-500/20 border border-green-400/50 rounded-xl p-4">
                <span className="text-green-300 text-lg font-semibold">
                  🎉 Journey Complete!
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-pink-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-10 w-16 h-16 bg-yellow-500/10 rounded-full blur-xl"></div>
      </div>
    </div>
  );
}
