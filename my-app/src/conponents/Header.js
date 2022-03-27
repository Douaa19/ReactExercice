import React from "react";
import Navbar from "./header/Navbar";
import Elements from "./header/Elements";
import HeroHeader from "./header/HeroHeader";

function Header() {
  return (
    <div>
      <Navbar />
      <div
        className="elipse"
        style={{
          position: "absolute",
          zIndex: "-1",
          top: "-186px",
          left: "738px",
          height: "1036px",
          width: "1078px",
          borderRadius: "500px",
          background:
            "linear-gradient(180deg, #057BA3 0%, #0A9FA8 52.6%, #0FB29C 87.5%)",
        }}
      ></div>
      <Elements />
    </div>
  );
}

export default Header;
