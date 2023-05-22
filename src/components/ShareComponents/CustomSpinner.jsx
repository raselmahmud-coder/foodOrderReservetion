import React from "react";
import loading from "../../assets/loadingscreen.png";

const CustomSpinner = () => {
  return (
    <div className="flex justify-center items-center">
      <img src={loading} alt="" className="w-full h-full -mt-[84px] z-[-1]" />
    </div>
  );
};

export default CustomSpinner;
