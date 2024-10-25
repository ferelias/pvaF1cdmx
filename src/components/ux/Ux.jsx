import React from "react";
import ux2 from '../../assets/ux2.png'
import m2 from '../../assets/m2.png'

const Ux = () => {
  return (
    <div className="mt-[10px]">
      <img className="w-[97%] mx-auto escritorio" src={ux2} alt="" />
      <img className="w-[98%] mx-auto movil" src={m2} alt="" />
    </div>
  );
};

export default Ux;
