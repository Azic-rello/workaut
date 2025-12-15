import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="flex items-center mt-30 w-full">
      <div className="text-white flex flex-col items-center gap-y-10 w-[50%] justify-center">
        <h1 className="flex flex-col items-center text-6xl gap-y-3 font-extrabold">
          Achive Your <br />
          <p className="text-7xl text-[#da0000]">Fitness Goals</p>
          With FitMaker
        </h1>
        <p className="w-[60%] text-md">
          "Join the Fitmaker community and transform your fitness journey. Our
          expert coaches and personalized programs are designed to help you
          achieve your goals and exceed your expectations. Ready to make a
          change?"
        </p>
        <div className="flex gap-7">
          <button className="bg-[#e60000] p-[8px_50px] text-xl font-bold rounded-3xl">
            Start Your Journey
          </button>
          <button className="border-[#d73d00] text-xl font-bold text-[#d73d00] rounded-3xl border-2 p-[8px_30px]">
            Explore Programs
          </button>
        </div>
      </div>
      <div className="w-[50%] flex justify-center">
        <img src={hero} alt="jpg" />
      </div>
    </div>
  );
};

export default Hero;
