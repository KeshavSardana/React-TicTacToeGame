import React from "react";
import { FaPen, FaTimes, FaRegCircle } from "react-icons/fa";
import "./icon.css";

const Icon = ({ name, colored = "darkgreen" }) => {
  switch (name) {
    case "circle":
      return <FaRegCircle className="icon" color="purple" size="35px" />;
    case "cross":
      return <FaTimes className="icon" color="red" size="35px" />;
    default:
      return <FaPen className="icon" color={colored} size="35px" />;
  }
};

export default Icon;
