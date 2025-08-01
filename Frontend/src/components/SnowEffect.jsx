import React from "react";
import Snowfall from "react-snowfall";

function SnowEffect() {
  return (
    // <div style={{ height: "100vh", backgroundColor: "#1e3a8a", position: "relative" }}>
    <div>
      <Snowfall color="white" snowflakeCount={150} />
      {/* <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
        }}
      >
        {/* <h1 style={{ fontSize: "4rem" }}>🎄 Merry Christmas! 🎅</h1> */}
        {/* <p style={{ fontSize: "1.5rem" }}>Enjoy the festive season with falling snow!</p> */}
      {/* </div> */}
    </div>
  );
}

export default SnowEffect;
