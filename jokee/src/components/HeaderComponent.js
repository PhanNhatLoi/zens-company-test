import React from "react";
import logo from "../images/logo.png";
import avatar from "../images/avatar.jpg";

const HeaderComponent = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="image" />
      <div className="flex items-center">
        <div className="text-right m-5 text-sm">
          <span className="block font-medium" style={{ color: "#b9b9b9" }}>
            Handicrafted by
          </span>
          <span className="block">Jim HLS</span>
        </div>
        <img src={avatar} alt="logo" className="image rounded-full" />
      </div>
    </div>
  );
};

export default HeaderComponent;
