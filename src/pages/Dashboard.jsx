import React, { useState } from "react";
import Tab from "../components/Tab";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";
import TabContent from "../components/TabContent";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Cart");

  return (
    <main>
      <Helmet>
        <title>Gadget Heaven | Dashboard</title>
      </Helmet>
      <div className="bg-[#9538E2]">
        <div className="container space-y-5 py-[60px]">
          <h2 className="text-center font-bold text-3xl text-white">
            Dashboard
          </h2>
          <p className="text-sm text-center text-white">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br /> the coolest accessories, we
            have it all!
          </p>
          <div className="flex justify-center items-center space-x-2">
            <Tab
              label="Cart"
              isActive={activeTab === "Cart"}
              onClick={() => setActiveTab("Cart")}
            />
            <Tab
              label={`Wishlist`}
              isActive={activeTab === "Wishlist"}
              onClick={() => setActiveTab("Wishlist")}
            />
          </div>
        </div>
      </div>

      <div className="container">
        <TabContent isActive={activeTab === "Cart"}>
          <Cart />
        </TabContent>

        <TabContent isActive={activeTab === "Wishlist"}>
          <Wishlist />
        </TabContent>
      </div>
    </main>
  );
};

export default Dashboard;
