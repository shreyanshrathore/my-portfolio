"use client";

import { BookOutline } from "react-ionicons";

const page = () => {
  return (
    <article className="resume" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            {/* <ion-icon name="book-outline"></ion-icon> */}
            <BookOutline />
          </div>

          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">R.G.P.V. University</h4>

            <span>2020 - 2024</span>

            <div className=" timeline-text">
              Acropolis Institute of technolog and research, Indore
            </div>
            <p className="timeline-text">
              Bachelor of Engineering (B.E.) in Computer Science and Information
              Technology
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">School of excellence</h4>

            <span>2016 - 2020</span>

            <p className="timeline-text">
              Completed my high school from exhool of excellence with 89% in in
              high school
            </p>
          </li>

          {/* <!-- <li className="timeline-item">
    <h4 className="h4 timeline-item-title">
      High school of art and design
    </h4>

    <span>2002 — 2004</span>

    <p className="timeline-text">
      Duis aute irure dolor in reprehenderit in voluptate, quila
      voluptas mag odit aut fugit, sed consequuntur magni dolores
      eos.
    </p>
  </li> --> */}
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <BookOutline />
          </div>

          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Full Stack Engineer at Zevo360 Technology
            </h4>

            <span>FEB 2024 — Present</span>

            <p className="timeline-text">
              Creating a Parenting solution from the very scratch Contributed
              almost in every aspect of the feild to create a product from
              scratch to production ready.
              <div className="timeline-text">
                Devops | Backend | Frontend | Microservices
              </div>
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Full Stack Intern at Zevo360 Technology
            </h4>

            <span>Aug 2023 - Feb 2024</span>

            <p className="timeline-text">
              Worked on multiple business websites, from working to shipping/
              Deploying to reach to the end customers following utmost security
              principles
              <div className="timeline-text">
                Worked on BUilding multiple deployment pipeline to setting up
                servers to manage load on the backend to checking the always
                uptime of the websites
              </div>
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Software development cell Leader [AITR Indore]
            </h4>

            <span>2023 — 2024</span>

            <p className="timeline-text">
              Setup a Sofware development club in College branch to show and
              develop SOMETHING usefull in college Developed a NGO E-commerce
              application for NGO's so that they can buy and sell their hand
              crafts to the end customers
            </p>
          </li>
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>

        <ul className="skills-list content-card">
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Web design</h5>
              <data value="80">80%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "80%" }}
              ></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Graphic design</h5>
              <data value="70">70%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "70%" }}
              ></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Branding</h5>
              <data value="90">90%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "90%" }}
              ></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">WordPress</h5>
              <data value="50">50%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "50%" }}
              ></div>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default page;
