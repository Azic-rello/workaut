import Right from "../assets/right.png";
import Rasm from "../assets/rasm.png";
import Rasm1 from "../assets/rasm1.png";
import Rasm2 from "../assets/rasm2.png";
import Rasm3 from "../assets/rasm3.png";
import Rasm4 from "../assets/rasm4.png";

const FitMaker = () => {
  return (
    <div>
      <div className="flex flex-wrap ">
        <h1 className="text-3xl ml-[10%] font-bold ">
          Fitmaker <span className="text-red-600">Blog Posts</span>
        </h1>
        <p className="mt-[5%]">
          Discover essential tips to maximize your workout results and reach
          your fitness goals faster.
        </p>
      </div>
      <div className="flex gap-5 ">
        <img className="mt-[2%] ml-[10%] w-[40%]" src={Rasm} alt="" />
        <div className="grid grid-cols-2 mt-[2%] gap-4 ">
          <img src={Rasm1} alt="" />
          <img src={Rasm2} alt="" />
          <img src={Rasm3} alt="" />
          <img src={Rasm4} alt="" />
        </div>
      </div>
      <button className="ml-[45%] mt-5 border-[#CD4E17] border-2  w-[8%] h-9 rounded-2xl text-[#CD4E17] text-xl hover:bg-[#CD4E17] hover:text-white">
        View All
      </button>
    </div>
  );
};

export default FitMaker;
