import React from "react";

import Arrival1 from "../../assets/Arrival1.png"
import Arrival2 from "../../assets/Arrival2.png"
import Arrival3 from "../../assets/Arrival3.png"
import Arrival4 from "../../assets/Arrival4.png"


const Arrival = () => {
return(
<div className="grid grid-cols-4 gap-4 h-[700px]">

   <div className="relative col-span-2 row-span-3">
    <img
      src={Arrival1}
      alt="Photo 1"
      className="w-full h-full   rounded-lg"
    />
  </div>

   <div className="relative col-span-2 h-[350px]">
    <img
      src={Arrival2}
      alt="Photo 2"
      className="w-full h-full   rounded-lg"
    />
  </div>

   <div className="col-span-2 grid grid-cols-2 gap-4 h-[240px]">

    <div className="relative">
      <img
        src={Arrival3}
        alt="Photo 3"
        className="w-full h-full  rounded-lg"
      />
    </div>

    <div className="relative">
      <img
        src={Arrival4}
        alt="Photo 4"
        className="w-full h-full  rounded-lg"
      />
    </div>

  </div>

</div>



)
}
export default Arrival