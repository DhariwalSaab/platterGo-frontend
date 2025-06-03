import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";
const AppDownload = () => {
  return (
    <div>
      <div className="app-download" id="app-download">
        <p>
          For Better Experience download <br /> PlatterGo
        </p>
        <div className="app-download-platforms">
          <img src={assets.play_store} />
          <img src={assets.app_store} />
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
