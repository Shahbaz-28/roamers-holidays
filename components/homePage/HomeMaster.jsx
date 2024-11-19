import React from "react";
import Gallery from "./Gallery";
import OurClient from "./OurClient";
import Destination from "./Destination";
import Travel from "./Travel";

const HomeMaster = () => {
  return (
    <div>
      <Destination />
      <Travel />
      <Gallery />
      <OurClient />
    </div>
  );
};

export default HomeMaster;
