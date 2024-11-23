// LIBRARIES
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

  const renderer = ({ days, hours, minutes, seconds }: { days: number, hours: number, minutes: number, seconds: number }) => {
    const formattedTime = showSeconds
      ? `${days}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
      : `${days}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    return <div className="font-inter font-extralight tracking-widest text-6xl md:text-8xl">{formattedTime}</div>;
  };

  return (
    <section className="relative">
      <Countdown date={targetDate} renderer={renderer} />
    </section>
  );
};

export default Timer;
