 

import React from "react";




const Contact = () => {
    return(
        <div className="max-w-[1200px] m-auto pt-20 pb-20">
<section>

<h3 className="p-10">Home
Cantact
</h3>


<div className="flex gap-10">
    <div className=" flex flex-col gap-5 w-[350px] h-[400px]   bg-[#FFFFFF] shadow-2xl shadow-[#00000029]   p-5">
<div className="w-[270px] h-[350px] m-auto">

 <div className="items-center text-center flex flex-col gap-2">

<div className="flex items-center">
    <button className="rounded-full bg-[#DB4444] w-10 h-10">all</button>
    <h2 className="p-5">Call To Us</h2>
    
    </div> 
     <p>We are available 24/7, 7 days a week.</p>
    <p>Phone: +8801611112222</p>
       </div>
 

     <div className="items-center text-center flex flex-col gap-2">

<div className="flex items-center">
    <button className="rounded-full bg-[#DB4444] w-10 h-10">all</button>
    <h2 className="p-5">Write To US</h2>
    
    </div> 
    <p className="">Fill out our form and we will <br /> contact you within 24 hours.</p>
    <p>Emails: customer@exclusive.com</p>
    <p>Emails: support@exclusive.com</p>
       </div>



</div>

       </div>




    <div className="w-[750px] h-[400px]  bg-[#FFFFFF] shadow-2xl shadow-[#00000029] text-center" >

<div className="flex items-center p-5 gap-5">
<input type="text" placeholder="Name" className="border border-[#0000003B] px-5 py-4 rounded-sm     shadow-2xs shadow-[#00000029]" />
<input type="text" placeholder="Email" className="border border-[#0000003B] px-5 py-4 rounded-sm     shadow-2xs shadow-[#00000029]"/>
<input type="text" placeholder="Phone" className="border border-[#0000003B] px-5 py-4 rounded-sm     shadow-2xs shadow-[#00000029]" />
    </div>  

    <div className="flex flex-col p-5">

    <input type="text" placeholder="Your Massage" className="border border-[#0000003B] text-start p-10 py-20 rounded-sm          shadow-2xs shadow-[#00000029]" />
  <div className="flex pl-126">

    <button className="px-2 py-3 rounded-sm mt-5 w-55 fl items-end bg-[#DB4444]   text-amber-50        shadow-2xs shadow-[#00000029]">Send Massage</button>
  </div>
    </div>
      </div>

      
</div>





    </section>   
    
         </div>
    )
}


export default Contact