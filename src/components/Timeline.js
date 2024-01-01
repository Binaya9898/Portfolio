import React from "react";
import "../css/timeline.css";
export default function Timeline() {
  return (
    <div>
      <div class="container" style={{ marginTop: "8rem" }}>
        <div className="skill-header mt-4">
          <h2
            className="mt-4"
            style={{
              textAlign: "center",
              color: "white",
              fontFamily: " Courier New",
              fontSize: "2.5rem",
              fontWeight: "900",
              marginBottom: "3rem",
            }}
          >
            My Carrer Timeline
          </h2>
        </div>{" "}
        <div class="row">
          <div class="col-md-12">
            <div class="main-timeline">
              <a href="#" class="timeline">
                <div class="timeline-icon">
                  <i class="fa fa-globe"></i>
                </div>
                <div class="timeline-content">
                  <h3 class="title">Web Designer</h3>
                  <p class="description text-light">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cupiditate ducimus officiis quod! Aperiam eveniet nam
                    nostrum odit quasi ullam voluptatum.
                  </p>
                </div>
              </a>
              <a href="#" class="timeline">
                <div class="timeline-icon">
                  <i class="fa fa-rocket"></i>
                </div>
                <div class="timeline-content">
                  <h3 class="title">Web Developer</h3>
                  <p class="description text-light">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cupiditate ducimus officiis quod! Aperiam eveniet nam
                    nostrum odit quasi ullam voluptatum.
                  </p>
                </div>
              </a>
              <a href="#" class="timeline">
                <div class="timeline-icon">
                  <i class="fa fa-briefcase"></i>
                </div>
                <div class="timeline-content">
                  <h3 class="title">Web Designer</h3>
                  <p class="description text-light">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cupiditate ducimus officiis quod! Aperiam eveniet nam
                    nostrum odit quasi ullam voluptatum.
                  </p>
                </div>
              </a>
              <a href="#" class="timeline">
                <div class="timeline-icon">
                  <i class="fa fa-mobile"></i>
                </div>
                <div class="timeline-content">
                  <h3 class="title">Web Developer</h3>
                  <p class="description text-light">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cupiditate ducimus officiis quod! Aperiam eveniet nam
                    nostrum odit quasi ullam voluptatum.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
