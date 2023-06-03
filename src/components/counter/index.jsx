import React from "react";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <div className="counter py-10">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-10">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-8">
          <div className="text-center">
            <CountUp
              className="text-5xl font-bold text-yellow-600"
              end={100}
              suffix="+"
            />
            <p className="text-xl font-semibold">Happy Members</p>
          </div>
          <div className="text-center">
            <CountUp
              className="text-5xl font-bold text-yellow-600"
              end={60}
              suffix="+"
            />
            <p className="text-xl font-semibold">Members Online</p>
          </div>
          <div className="text-center">
            <CountUp
              className="text-5xl font-bold text-yellow-600"
              end={20}
              suffix="+"
            />
            <p className="text-xl font-semibold">Women Online</p>
          </div>
          <div className="text-center">
            <CountUp
              className="text-5xl font-bold text-yellow-600"
              end={80}
              suffix="+"
            />
            <p className="text-xl font-semibold">Men Online</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
