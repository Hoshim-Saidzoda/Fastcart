import React from "react";

const Contact = () => {
  return (
    <div className="max-w-[1200px] mx-auto pt-20 pb-20 px-4">
      <section>
        <h3 className="text-xl font-semibold mb-10">Home / Contact</h3>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col gap-5 w-full md:w-[350px] bg-white shadow-2xl p-5">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="flex items-center gap-3">
                  <button className="rounded-full bg-[#DB4444] w-10 h-10"></button>
                  <h2 className="text-lg font-semibold">Call To Us</h2>
                </div>
                <p>We are available 24/7, 7 days a week.</p>
                <p>Phone: +8801611112222</p>
              </div>

              <div className="flex flex-col items-center text-center gap-2">
                <div className="flex items-center gap-3">
                  <button className="rounded-full bg-[#DB4444] w-10 h-10"></button>
                  <h2 className="text-lg font-semibold">Write To Us</h2>
                </div>
                <p>Fill out our form and we will contact you within 24 hours.</p>
                <p>Email: customer@exclusive.com</p>
                <p>Email: support@exclusive.com</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[750px] bg-white shadow-2xl p-5">
            <div className="flex flex-col md:flex-row gap-4 mb-5">
              <input
                type="text"
                placeholder="Name"
                className="flex-1 border border-[#0000003B] px-4 py-3 rounded shadow-sm"
              />
              <input
                type="text"
                placeholder="Email"
                className="flex-1 border border-[#0000003B] px-4 py-3 rounded shadow-sm"
              />
              <input
                type="text"
                placeholder="Phone"
                className="flex-1 border border-[#0000003B] px-4 py-3 rounded shadow-sm"
              />
            </div>

            <div className="flex flex-col gap-4">
              <textarea
                placeholder="Your Message"
                className="border border-[#0000003B] p-4 rounded shadow-sm h-40 resize-none"
              />
              <div className="flex justify-start">
                <button className="bg-[#DB4444] text-white px-6 py-3 rounded shadow-sm hover:bg-red-600 transition">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
