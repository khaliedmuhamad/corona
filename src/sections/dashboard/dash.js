import Aside from "../../components/aside/aside.js";
import React from "react";
import Map from "../../components/map/map.js";
import "./dash.scss";
export default function Dash() {
  return (
    <div className="dashboard">
      <div className="container">
        <div class="row">
          <div className="col-lg-8 col-md-12 col-sm-12">
            <Map />
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12">
            <Aside />
          </div>
        </div>
      </div>
    </div>
  );
}
