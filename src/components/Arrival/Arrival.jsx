import React from "react";

import Arrival1 from "../../assets/Arrival1.png";
import Arrival2 from "../../assets/Arrival2.png";
import Arrival3 from "../../assets/Arrival3.png";
import Arrival4 from "../../assets/Arrival4.png";

const Arrival = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

       <div className="relative md:col-span-2 md:row-span-3 h-64 md:h-[700px]">
        <img
          src={Arrival1}
          alt="Photo 1"
          className="w-full h-full   rounded-lg"
        />
      </div>

       <div className="relative h-64 md:h-[350px] md:col-span-2">
        <img
          src={Arrival2}
          alt="Photo 2"
          className="w-full h-full   rounded-lg"
        />
      </div>

       <div className="grid grid-cols-2 gap-4 h-48 md:h-[335px] md:col-span-2">
        <div className="relative">
          <img
            src={Arrival3}
            alt="Photo 3"
            className="w-full h-full   rounded-lg"
          />
        </div>
        <div className="relative">
          <img
            src={Arrival4}
            alt="Photo 4"
            className="w-full h-full   rounded-lg"
          />
        </div>
      </div>

    </div>
  );
};

export default Arrival;
