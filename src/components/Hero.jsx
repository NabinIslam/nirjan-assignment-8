import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#9538E2] pt-20 pb-96">
      <div className="container flex flex-col items-center justify-center gap-5">
        <h1 className="text-center text-white font-bold text-4xl">
          Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
        </h1>
        <p className="text-center text-white text-sm">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <button className="bg-white text-md px-5 py-2 rounded-full text-[#9538E2] font-bold">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
