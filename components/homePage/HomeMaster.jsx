import React from "react";
import Gallery from "./Gallery";
import OurClient from "./OurClient";
import InternationalCard from "./InternationalCard";
import Travel from "./Travel";
import DomesticCard from './DomesticCard'

const HomeMaster = () => {
  return (
    <div>
      <OurClient />
      <DomesticCard/>
      <InternationalCard />
      <Travel />
      <Gallery />
    </div>
  );
};

export default HomeMaster;
