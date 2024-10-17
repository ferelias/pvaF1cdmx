import React from "react";
import f1 from "../../assets/iconof1.svg";

const Menu = () => {
  return (
    <div className=" w-[100%] p-5 flex justify-between">
      <div>
        <button>
          <img src={f1} alt="" />
        </button>
      </div>
      <div>
        <button className="decoration-white mr-3">Home</button>
        <button className="decoration-white mr-3">Accessibility</button>
        <button className="decoration-white mr-3">Technologies</button>
        <button className="decoration-white mr-3">Interactive Maps</button>
        <button className="decoration-white mr-3">Merchandising</button>
      </div>
    </div>
  );
};

export default Menu;
