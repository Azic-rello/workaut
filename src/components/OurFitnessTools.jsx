import img1 from '../assets/fitnesToolsImg1.png'
import img2 from '../assets/fitnesToolsImg2.png'
import img3 from '../assets/fitnesToolsImg3.png'
import img4 from '../assets/fitnesToolsImg4.png'
import img5 from '../assets/fitnesToolsImg5.png'

const OurFitnessTools = () => {
  return (
    <div>
      <div className='text-[#f5f5f5]'>
        <h1 className="text-3xl font-semibold text-center">
          Our fitness <span className="text-[#D90A14]">Tools</span>
        </h1>
        <h4 className="text-center text-[18px] mt-4 text-[#f5f5f5]">
          Access a variety of tools to help you reach your fitness goals more
          effectively
        </h4>
        <div className="flex w-[70%] justify-between m-auto mt-15">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
        </div>
      </div>
    </div>
  );
}

export default OurFitnessTools
