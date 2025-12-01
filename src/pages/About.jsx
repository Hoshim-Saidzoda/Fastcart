 import React from "react"
 import Our from "../assets/Our.png"
 import About0 from "../assets/About.png"
 import About1 from "../assets/About1.png"
 import About2 from "../assets/About2.png"
 import About3 from "../assets/About3.png"
 import Tom from "../assets/Tom.png"
 import Elin from "../assets/Elin.png"
 import Acti from "../assets/Acti.png"
import { Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const About  = () => {


    
    return(
        <div className=" max-w-[1200px] m-auto">




            <section className="  py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4 md:px-0">
         <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
          </p>
          <p className="text-gray-700">
            Exclusive has more than 1 million products to offer, growing very fast. Exclusive offers a diverse assortment in categories ranging from consumer electronics to fashion.
          </p>
        </div>

         <div className="md:w-1/2">
          <img 
            src={Our} 
            alt="Our Story" 
            className="rounded-lg shadow-lg w-full object-cover"
            />
        </div>
      </div>
    </section>






    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

  <div className="text-center flex flex-col gap-3 border py-4 border-gray-400">
    <img
      src={About0}
      alt=""
      className="mx-auto mb-3 w-15 h-15 object-cover rounded-full"
    />
    <h2 className="text-2xl font-bold">10.5k</h2>
    <p className="text-gray-600">Sellers active on our site</p>
  </div>

  <div className="text-center bg-[#DB4444] flex flex-col gap-3 border py-4 border-gray-400">
    <img
      src={About1}
      alt=""
      className="mx-auto mb-3 w-15 h-15 object-cover rounded-full"
    />
    <h2 className="text-2xl text-amber-50 font-bold">33k</h2>
    <p className="text-white">Sellers   on our site</p>
  </div>

  <div className="text-center flex flex-col gap-3 border py-4 border-gray-400">
    <img
      src={About2}
      alt=""
      className="mx-auto mb-3 w-15 h-15 object-cover rounded-full"
    />
    <h2 className="text-2xl font-bold">45.5k</h2>
    <p className="text-gray-600">Sellers   our site</p>
  </div>

  <div className="text-center flex flex-col gap-3 border py-4 border-gray-400">
    <img
      src={About3}
      alt=""
      className="mx-auto mb-3 w-15 h-15 object-cover rounded-full"
    />
    <h2 className="text-2xl font-bold">25.5k</h2>
    <p className="text-gray-600">  active on our site</p>
  </div>

</section>


 <section className="flex flex-wrap mt-20 gap-10">

       <div className="w-[370px]">
        <img
          src={Tom}
          alt="Tom Cruise"
          className="w-[280px] h-[400px]   "
        />
        <h2 className="text-2xl font-semibold mt-4">Tom Cruise</h2>
        <p className="  mb-4">Founder & Chairman</p>

        <div className="flex items-center gap-4 text-[28px] text-gray-600">
          <Twitter className="cursor-pointer hover:text-blue-500" />
          <Instagram className="cursor-pointer hover:text-pink-500" />
          <LinkedIn className="cursor-pointer hover:text-blue-700" />
        </div>
      </div>

       <div className="w-[370px]">
        <img
          src={Elin}
          alt="Tom Cruise"
          className="w-[280px] h-[400px]   "
        />
        <h2 className="text-2xl font-semibold mt-4">Emma Watson</h2>
        <p className="text-gray-600 mb-4">Founder & Chairman</p>

        <div className="flex items-center gap-4 text-[28px] text-gray-700">
          <Twitter className="cursor-pointer hover:text-blue-500" />
          <Instagram className="cursor-pointer hover:text-pink-500" />
          <LinkedIn className="cursor-pointer hover:text-blue-700" />
        </div>
      </div>

       <div className="w-[370px]">
        <img
          src={Acti}
          alt="Tom Cruise"
          className="w-[280px] h-[400px]   "
        />
        <h2 className="text-2xl font-semibold mt-4">Will Smith</h2>
        <p className="text-gray-600 mb-4">Founder & Chairman</p>

        <div className="flex items-center gap-4 text-[28px] text-gray-700">
          <Twitter className="cursor-pointer hover:text-blue-500" />
          <Instagram className="cursor-pointer hover:text-pink-500" />
          <LinkedIn className="cursor-pointer hover:text-blue-700" />
        </div>
      </div>

    </section>


  <section className="grid grid-cols-1 sm:grid-cols-2 pt-20 lg:grid-cols-3 gap-6">

  <div className="text-center flex flex-col gap-3  ">
    <img
      src={About0}
      alt=""
      className="mx-auto mb-3 w-15 h-15 object-cover rounded-full"
    />
    <h2 className="text-2xl font-bold">FREE AND FAST DELIVERY</h2>
    <p className="text-gray-600">Free delivery for all orders over $140</p>
  </div>

  <div className="text-center  flex flex-col gap-3  ">
    <img
      src={About1}
      alt=""
      className="mx-auto mb-3 w-15 h-15 object-cover rounded-full"
    />
    <h2 className="text-2xl  font-bold">24/7 CUSTOMER SERVICE</h2>
    <p className=" ">Friendly 24/7 customer support</p>
  </div>

  <div className="text-center flex flex-col gap-3  ">
    <img
      src={About2}
      alt=""
      className="mx-auto mb-3 w-15 h-15 object-cover rounded-full"
    />
    <h2 className="text-2xl font-bold">MONEY BACK GUARANTEE</h2>
    <p className="text-gray-600">We reurn money within 30 days</p>
  </div>

   

</section>





    </div>
)

}
export default About