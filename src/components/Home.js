import React from "react";
import "../css/home.css";
import "../js/home.js";
import Skills from "./Skills";
import man from "../images/removed.png";
import Timeline from "./Timeline.js";
import Achievements from "./Achievements.js";

export default function Home() {
  return (
    <div>
      <section className="header">
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
      </section>
      <section className="skills" style={{ marginTop: "8rem" }}>
        <h2
          className="skill-header"
          style={{
            textAlign: "center",
            color: "white",
            fontFamily: " Courier New",
            fontSize: "2.5rem",
            fontWeight: "900",
            marginBottom: "3rem",
          }}
        >
          Technologies
        </h2>
        <div className="container-fluid my">
          <div className="row mt-4">
            <Skills
              title="React JS"
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/539px-React-icon.svg.png"
            />
            <Skills
              title="Laravel"
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/800px-Laravel.svg.png"
            />
            <Skills
              title="Node and Express"
              image="https://static-00.iconduck.com/assets.00/node-js-icon-227x256-913nazt0.png"
            />
            <Skills
              title="Tailwind and Bootstrap"
              image="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
            />
            <Skills
              title="Git and GIthub"
              image="https://cdn.icon-icons.com/icons2/1476/PNG/512/github_101792.png"
            />

            <Skills
              title="Wordpress"
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1024px-WordPress_blue_logo.svg.png"
            />
          </div>
        </div>
      </section>
      <Timeline />
      <section className="skills" style={{ marginTop: "5rem" }}>
        <h2
          className="skill-header"
          style={{
            textAlign: "center",
            color: "white",
            fontFamily: " Courier New",
            fontSize: "2.5rem",
            fontWeight: "900",
            marginBottom: "3rem",
          }}
        >
          Achievements and Participation
        </h2>
        <Achievements />
      </section>
    </div>
  );
}
