import React from "react";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  return (
    <main className="py-20">
      <Helmet>
        <title>Gadget Heaven | About Us</title>
      </Helmet>

      <div className="container flex items-start justify-start gap-x-10">
        <img
          className="mx-auto size-96 rounded-2xl border shadow-sm basis-auto"
          src="/about_us.jpg"
          alt=""
        />

        <div className="space-y-5 basis-full">
          <h1 className="text-3xl font-bold ">About Us</h1>
          <p className="text-sm">
            Welcome to Gadget Heaven – your ultimate destination for the latest
            and most innovative gadgets on the market! We are passionate about
            technology and committed to bringing the best in electronic gadgets,
            smart devices, and tech accessories directly to you.
          </p>
          <p className="text-sm">
            At Gadget Heaven, we understand that tech enthusiasts want products
            that offer both style and functionality. That's why we carefully
            select every item in our store, ensuring it meets our high standards
            for quality, design, and performance. Our mission is simple: to help
            you discover gadgets that make life easier, smarter, and more
            enjoyable.
          </p>

          <h1 className="text-3xl font-bold">Our Story</h1>
          <p className="text-sm">
            Founded by tech lovers, for tech lovers, Gadget Heaven was created
            with a vision to bridge the gap between cutting-edge technology and
            everyday life. We believe that everyone should have access to
            high-quality, innovative gadgets without the hassle of long searches
            and high prices. Since our beginning, we have focused on curating a
            selection of products that represent the best in tech trends and
            practicality.
          </p>
          <h1 className="text-3xl font-bold">Why Choose Us?</h1>
          <ol className="pl-5 list-decimal text-sm">
            <li>
              Curated Selection: We bring you only the best in gadgets and
              accessories.
            </li>
            <li>
              Affordable Prices: We believe quality gadgets should be accessible
              to everyone.
            </li>
            <li>
              Customer Satisfaction: Our team is dedicated to providing
              top-notch support, ensuring a seamless shopping experience from
              browsing to unboxing.
            </li>
            <li>
              Secure Shopping: Your privacy and security are our priority with
              secure payment options and data protection.
            </li>
          </ol>

          <h1 className="text-3xl font-bold">Join Us in the Tech Revolution</h1>
          <p className="text-sm">
            Whether you’re a tech enthusiast or just looking to simplify your
            life with smart solutions, Gadget Heaven is here to guide you on
            your journey. Explore our store and find the perfect gadget to
            elevate your lifestyle! Thank you for being a part of our story.
            Welcome to the future of technology, right here at Gadget Heaven.
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
