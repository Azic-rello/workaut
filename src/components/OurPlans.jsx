import React from "react";

const OurPlans = () => {
  const card = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];
  return (
    <div className="py-15 text-[#f5f5f5]">
      <h1 className="text-3xl font-semibold text-center text-[#f5f5f5]">
        Our <span className="text-[#D90A14]">Plans</span>
      </h1>
      <p className="text-[15px] text-center pt-8 text-white font-light opacity-70">
        Select the plan that suits your fitness goals and let our expert coaches
        guide you every step of the way.
      </p>
      <div className="bg-none w-[15%] h-[45px] rounded-4xl text-[#f5f5f5] m-auto mt-10 flex items-center justify-around border border-[#D90A14]">
        <button className="w-[50%] h-full bg-[#D90A14] rounded-4xl">
          Mounthly
        </button>
        <h1 className="w-[50%] text-center">Annauly</h1>
      </div>

      <div className="flex w-[67%] justify-between m-auto pt-15">
        {card.map((i) => (
          <div
            className="w-[30%] rounded-xl h-[600px] border border-[#CD4E17]"
            key={i.id}
          >
            <h1 className="text-[16px] mt-5 text-[#CD4E17] font-semibold text-center">
              Package
            </h1>
            <h1 className="font-serif font-bold text-3xl text-center mt-3 text-[#f5f5f5]">
              Pro Plan
            </h1>
            <h4 className="text-[16px] mt-5 text-[#CD4E17] font-semibold text-center">
              Description
            </h4>
            <p className="w-[90%] m-auto text-[17px]">
              Our Pro Plan offers advanced workouts and personalized nutrition
              coaching to help you reach your goals faster. Sign Up Right Now!
            </p>
            <h5 className="text-[16px] mt-5 text-[#CD4E17] font-semibold text-center">
              Features
            </h5>
            <p className="w-[80%] leading-7 m-auto">
              Access to All Of Our Exercise Videos <br /> Progress Tracking{" "}
              <br /> Supportive Online Community <br /> Advanced, Personalized
              Workout Plans <br />
              Comprehensive Nutrition Coaching <br /> Access to Advanced Workout
              Programs <br /> Body Composition Analysis
            </p>
            <h2 className="text-3xl font-semibold mt-3 text-[#f5f5f5] text-center">
              99$<span className="text-xl text-[#8B8B8B]">/USDT</span>
            </h2>
            <button className="w-[90%] bg-[#CD4E17] m-[5%] h-10 text-[#f5f5f5] text-[18px] rounded-4xl">Choose This Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPlans;
