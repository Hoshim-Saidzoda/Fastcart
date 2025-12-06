import React, { useEffect, useState } from "react";
import calonka from "../assets/calonka.png";

const MusicPromo = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 23,
    minutes: 59,
    seconds: 35,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const blocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="w-full max-w-[1400px] bg-[#000000] mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
  <div className="flex flex-col gap-10 md:gap-20 px-4 md:pl-20">
    <h3 className="text-lg md:text-xl font-semibold text-[#00FF66]">Categories</h3>
    <h2 className="text-3xl md:text-5xl font-bold text-white">
      Enhance Your Music Experience
    </h2>

    <div className="flex gap-2 md:gap-4 flex-wrap">
      {blocks.map((b, idx) => (
        <div
          key={idx}
          className="bg-gray-100 rounded-full px-3 py-2 md:px-5 md:py-3 flex flex-col items-center"
        >
          <span className="text-xl md:text-2xl font-bold">
            {String(b.value).padStart(2, "0")}
          </span>
          <span className="text-xs md:text-sm text-gray-600">{b.label}</span>
        </div>
      ))}
    </div>

    <button className="bg-[#00FF66] text-white py-3 md:py-4 px-6 md:px-10 rounded-lg font-medium w-full md:w-max hover:bg-red-600 transition">
      Buy Now!
    </button>
  </div>

  <div className="flex justify-center md:justify-end">
    <img src={calonka} alt="Music Promo" className="w-full max-w-[250px] md:max-w-full object-contain" />
  </div>
</section>

  );
};

export default MusicPromo;
