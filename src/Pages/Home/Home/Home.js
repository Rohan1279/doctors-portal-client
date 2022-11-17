import React from "react";
import Banner from "../Banner/Banner";
import Banner2 from "../Banner/Banner2";
import ContactUs from "../ContactUs/ContactUs";
import InfoCards from "../InfoCards/InfoCards";
import MakeAppoinment from "../MakeAppoinment/MakeAppoinment";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner />
      <InfoCards />
      <Services />
      <Banner2 />
      <MakeAppoinment />
      <Testimonial />
      <ContactUs />
    </div>
  );
};

export default Home;
