import React from "react";
import "./Banner.css";
import { background } from "@chakra-ui/react";

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url ("data:image/png;base64,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")`,
        backgroundPosition: "center center",
      }}
    ></header>
  );
}

export default Banner;