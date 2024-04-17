import React from "react";
import AboutNav from "./AboutNav";
import AboutHead from "./AboutHead";
import WorkingSection from "./WorkingSection";
import Feactures from "./Feactures";
import AboutPrivacySection from "./AboutPrivacySection";
import FaqSection from "./FaqSection";
import AboutFooter from "./AboutFooter";

function Aboutus() {
  return (
    <div>
      {/*-------------------------About Us Navbar------------------- */}

      <AboutNav />

      {/* ---------------Head Of About---------------------------------------- */}

      <AboutHead />

      {/* --------------We Do This------------------------------  */}

      <WorkingSection />


      {/* -----------------------------Features------------------------------ */}

      <Feactures/>

      {/* ---------------------------About Us Privacy------------------------- */}

      <AboutPrivacySection/>

      {/* -------------------------------Faq Section--------------------------- */}
      
      <FaqSection/>

      {/* -----------------------About Footer---------------------------------------- */}

      <AboutFooter/>
    </div>
  );
}

export default Aboutus;
