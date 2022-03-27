import React from "react";
import logo from "../../assest/cropped-cropped-Veezen-Logo-1-1-300x296.png";

function Navbar() {
  const mystyle = {
    color: "#0FB2AE",
    padding: "0 10px",
    fontSize: "20px",
  };
  const button = {
    backgroundColor: "#83C5D2",
    borderRadius: "40px",
    color: "#FFFFFF",
    padding: "14px 42px",
    fontSize: "20px",
  };
  return (
    <div
      className="navbar"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="logo" style={{ display: "flex", alignItems: "center" }}>
        <img
          src={logo}
          style={{
            height: "74px",
            width: "78px",
            left: "39px",
            top: "32px",
            padding: "8px",
          }}
          alt="logoVeezen"
        />
        <span style={{ color: "#0FB2AE", fontSize: "42px" }}>Veezen</span>
      </div>
      <div className="links" style={{ display: "flex" }}>
        <ul
          className="list"
          style={{
            color: "#0FB2AE",
            listStyle: "none",
            fontSize: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <li className="link" style={mystyle}>
            Home
          </li>
          <li className="link" style={mystyle}>
            About
          </li>
          <li className="link" style={mystyle}>
            Princing
          </li>
          <li className="link" style={mystyle}>
            Contact
          </li>
          <li className="link" style={button}>
            Log in
          </li>
          <li className="link" style={button}>
            Sign Up
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
