import img1 from '../assets/customImg1.png'
import img2 from '../assets/customImg2.png'
import img3 from '../assets/customImg3.png'

const WhatOurCustomersSay = () => {
  return (
    <div className='pt-[100px]'>
      <h1 className='text-3xl text-[#f5f5f5] font-semibold text-center'>
        What Our <span className="text-[#D90A14]">Customers Say</span>
      </h1>
      <p className='text-center text-[16px] text-[#f5f5f5]'>
        At This Part you can See Few Of The Many Positive reviews Of Our
        Customers.
      </p>
      <div className="flex w-[80%] m-auto gap-10 items-center">
        <img src={img1} alt="" />
        <div className="p-5 bg-[#5B0408] text-[#f5f5f5] rounded-2xl w-[55%] h-[50%]">
          <h1 className='text-xl'>Steven Haward</h1>
          <h3 className='text-[16px]'>Our Trainer</h3>
          <p className='mt-3'>
            I’ve been using Fitmaker for the past three months, and I’m
            genuinely impressed. The website is easy to navigate, and everything
            is laid out clearly. I purchased the Premium Plan, and the
            personalized coaching has been a game-changer for me. My coach is
            incredibly supportive and always available to answer my questions.
            The weekly video sessions keep me motivated, and the custom meal
            plans have helped me stay on track with my goals. Highly recommended
            for anyone serious about their fitness journey!
          </p>
        </div>
        <div className="flex gap-2.5">
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
}

export default WhatOurCustomersSay
