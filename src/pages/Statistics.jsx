import React from "react";
import Chart from "../components/Chart";

const Statistics = () => {
  return (
    <main>
      <div className="bg-[#9538E2]">
        <div className="container space-y-5 py-[60px]">
          <h2 className="text-center font-bold text-3xl text-white">
            Statistics
          </h2>
          <p className="text-sm text-center text-white">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>

      <div className="container">
        <Chart />
      </div>
    </main>
  );
};

export default Statistics;
