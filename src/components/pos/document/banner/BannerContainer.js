import React, { useState } from "react";

/* Custom Components */
import Banner from "./Banner";

import banner1 from "../../../../assets/banner1.jpg";
import banner2 from "../../../../assets/banner2.jpeg";
import banner3 from "../../../../assets/banner3.jpeg";

const BannerContainer = () => {
  const [index, setIndex] = useState(0);
  function handleChangeIndex(index) {
    setIndex(index);
  }
  return (
    <Banner
      index={index}
      handleChangeIndex={handleChangeIndex}
      images={[banner1, banner2, banner3]}
    />
  );
};

export default BannerContainer;
