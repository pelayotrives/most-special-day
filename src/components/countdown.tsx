// LIBRERÍAS
import { useState, useEffect } from 'react';
import Countdown from 'react-countdown';

const Timer = () => {
  const targetDate = new Date("2025-07-12T00:00:00");

  const isMediumScreen = () => window.innerWidth >= 768;
  const [showSeconds, setShowSeconds] = useState(isMediumScreen());

  useEffect(() => {
    const handleResize = () => setShowSeconds(isMediumScreen());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderer = ({ days, hours, minutes, seconds, completed }: { days: number, hours: number, minutes: number, seconds: number, completed: boolean }) => {
    if (completed) {
      return (
        <div className="font-inter font-light tracking-wide text-6xl md:text-8xl text-center">
          ¡Gracias a todos!
        </div>
      );
    }

    const timeUnits = [
      { value: days, label: 'DD' },
      { value: hours, label: 'HH' },
      { value: minutes, label: 'MM' },
    ];

    if (showSeconds) {
      timeUnits.push({ value: seconds, label: 'SS' });
    }

    return (
      <div className="flex justify-center space-x-2">
        {timeUnits.map((unit, index) => (
          <div key={index} className="text-center">
            <div className="font-inter font-light tracking-widest text-6xl md:text-8xl special3:text-9xl">
              {unit.value.toString().padStart(2, '0')}
              {index < timeUnits.length - 1 && ":"}
            </div>
            <div className="mt-2 text-base md:text-3xl font-inter font-light tracking-wide">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="relative">
      <Countdown date={targetDate} renderer={renderer} />
    </section>
  );
};

export default Timer;
