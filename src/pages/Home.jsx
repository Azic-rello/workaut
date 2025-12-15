import React from "react";
import OurPlans from "../components/OurPlans";
import OurFitnessTools from "../components/OurFitnessTools";
import WhatOurCustomersSay from "../components/WhatOurCustomersSay";
import MeetOurTrainers from "../components/MeetOurTrainers";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WriteCard from "../components/WriteCard";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <WriteCard />
      <OurPlans />
      <OurFitnessTools />
      <WhatOurCustomersSay />
      <MeetOurTrainers />
    </div>
  );
};

export default Home
