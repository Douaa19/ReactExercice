import React from "react";

function Elements() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <div className="text">
        <h1
          style={{
            fontSize: "83px",
            lineHeight: "90px",
            width: "684px",
            margin: "",
          }}
        >
          Work-Life Harmony matters.
        </h1>
        <span style={{ fontSize: "30px" }}>
          For the blossoming of your collaborators
        </span>
      </div>
      <div
        className="input"
        style={{ display: "flex", flexDirection: "column", width: "684px" }}
      >
        <input
          type="email"
          name=""
          placeholder="Enter your email address"
          id=""
          style={{
            padding: "1rem",
            fontSize: "25px",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "#F8F8F8",
          }}
        />
        <button
          type="submit"
          style={{
            color: "#FFFFFF",
            backgroundColor: "#0FB2AE",
            fontSize: "33px",
            outline: "none",
            borderRadius: "50px",
            padding: "0.5rem",
            border: "none",
            width: "50%",
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Elements;
