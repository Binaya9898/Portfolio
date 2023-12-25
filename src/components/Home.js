import React from "react";
import "../css/home.css";
import "../js/home.js";
import man from "../images/removed.png";

export default function Home() {
  return (
    <div>
      <div className="row">
        <div className="col-md-7" style={{ backgroundColor: "black" }}>
          <h1
            class="typewrite"
            data-period="2000"
            data-type='[ "Hi, Im Binaya.", "I am Creative.", "I Love Design.", "I Love to Develop." ]'
          >
            <span class="wrap"></span>
          </h1>
        </div>
        <div
          className="col-md-5"
          style={{ backgroundColor: "rgb(211, 154, 154)" }}
        >
          <img src={man} alt="" srcset="" style={{ marginLeft: "5rem" }} />
        </div>
      </div>
    </div>
  );
}
