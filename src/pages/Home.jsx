import React from "react";
import Header from "../components/Header";
import Steps from "../components/Steps";
import BgSlider from "../components/BgSlider";
import Testimonials from "../components/Testimonials";
import Upload from "../components/Upload";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Steps></Steps>
      <BgSlider></BgSlider>
      <Testimonials></Testimonials>
      <Upload></Upload>
    </div>
  );
};

export default Home;
