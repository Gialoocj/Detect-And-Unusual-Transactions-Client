import React from "react";
import slider_1 from "../../assets/images/slider_1.webp";

const Home = () => {
  return (
    <>
      <div>
        <div className={`lg:px-[160px] lg:my-4`}>
          <img src={slider_1} alt="" className={`lg:h-[642px] lg:w-full`} />
        </div>
      </div>
    </>
  );
};

export default Home;
