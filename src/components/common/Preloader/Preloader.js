import React from "react";
import preloader from "../../../assets/img/preloader.svg";
import "./Preloader.css";

let Preloader = () => {
  return (
    <div>
      {/* <img src={preloader} /> */}
      <div class="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Preloader;
