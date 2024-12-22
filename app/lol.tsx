"use client";

import Image from "next/image";
import {
  BookOutline,
  ChevronDown,
  CloseOutline,
  EyeOutline,
  PaperPlane,
} from "react-ionicons";

export default function Home() {
  return (
    <div className="main-content">
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <button className="navbar-link  active" data-nav-link>
              About
            </button>
          </li>

          <li className="navbar-item">
            <button className="navbar-link" data-nav-link>
              Resume
            </button>
          </li>

          <li className="navbar-item">
            <button className="navbar-link" data-nav-link>
              Portfolio
            </button>
          </li>

          <li className="navbar-item">
            <button className="navbar-link" data-nav-link>
              Blog
            </button>
          </li>

          <li className="navbar-item">
            <button className="navbar-link" data-nav-link>
              Contact
            </button>
          </li>
        </ul>
      </nav>

      {/* - #ABOUT */}

      <article className="about  active" data-page="about">
        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>

        <section className="about-text">
          <p>
            I’m a passionate learner, eager to explore impactful technologies.
            Drawn to frontend for its visual appeal, I’ve also worked heavily as
            a backend-focused fullstack engineer.
          </p>

          <p>
            My journey led me to DevOps, where I fell in love with tools like
            CI/CD, Docker, Kubernetes, and cloud platforms like AWS and
            GCP—helping me not only develop but also deliver complete solutions
            to clients.
          </p>
        </section>

        {/* - service */}

        <section className="service">
          <h3 className="h3 service-title">What i'm doing</h3>

          <ul className="service-list">
            <li className="service-item">
              <div className="service-icon-box">
                {/* <img
                  src="/assets/images/icon-design.svg"
                  alt="design icon"
                  width="40"
                /> */}
                <Image
                  src={"/assets/images/icon-design.svg"}
                  alt="design iconssssss"
                  width={"40"}
                  layout="intrinsic"
                  height={"40"}
                />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Web design</h4>

                <p className="service-item-text">
                  The most modern and high-quality design made at a professional
                  level.
                </p>
              </div>
            </li>

            <li className="service-item">
              <div className="service-icon-box">
                <img
                  src="/assets/images/icon-dev.svg"
                  alt="Web development icon"
                  width="40"
                />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Web development</h4>

                <p className="service-item-text">
                  High-quality development of sites at the professional level.
                </p>
              </div>
            </li>

            <li className="service-item">
              <div className="service-icon-box">
                <img
                  src="/assets/images/icon-app.svg"
                  alt="mobile app icon"
                  width="40"
                />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Mobile apps</h4>

                <p className="service-item-text">
                  Professional development of applications for iOS and Android.
                </p>
              </div>
            </li>

            <li className="service-item">
              <div className="service-icon-box">
                <img
                  src="/assets/images/icon-photo.svg"
                  alt="camera icon"
                  width="40"
                />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Photography</h4>

                <p className="service-item-text">
                  I make high-quality photos of any category at a professional
                  level.
                </p>
              </div>
            </li>
          </ul>
        </section>

        {/* - testimonials */}

        <section className="testimonials">
          <h3 className="h3 testimonials-title">Testimonials</h3>

          <ul className="testimonials-list has-scrollbar">
            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img
                    src="/assets/images/avatar-1.png"
                    alt="Daniel lewis"
                    width="60"
                    data-testimonials-avatar
                  />
                </figure>

                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  Daniel lewis
                </h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>
                    Richard was hired to create a corporate identity. We were
                    very pleased with the work done. She has a lot of experience
                    and is very concerned about the needs of client. Lorem ipsum
                    dolor sit amet, ullamcous cididt consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels
                    dolore magnarels alia.
                  </p>
                </div>
              </div>
            </li>

            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img
                    src="/assets/images/avatar-2.png"
                    alt="Jessica miller"
                    width="60"
                    data-testimonials-avatar
                  />
                </figure>

                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  Jessica miller
                </h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>
                    Richard was hired to create a corporate identity. We were
                    very pleased with the work done. She has a lot of experience
                    and is very concerned about the needs of client. Lorem ipsum
                    dolor sit amet, ullamcous cididt consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels
                    dolore magnarels alia.
                  </p>
                </div>
              </div>
            </li>

            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img
                    src="/assets/images/avatar-3.png"
                    alt="Emily evans"
                    width="60"
                    data-testimonials-avatar
                  />
                </figure>

                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  Emily evans
                </h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>
                    Richard was hired to create a corporate identity. We were
                    very pleased with the work done. She has a lot of experience
                    and is very concerned about the needs of client. Lorem ipsum
                    dolor sit amet, ullamcous cididt consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels
                    dolore magnarels alia.
                  </p>
                </div>
              </div>
            </li>

            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img
                    src="/assets/images/avatar-4.png"
                    alt="Henry william"
                    width="60"
                    data-testimonials-avatar
                  />
                </figure>

                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  Henry william
                </h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>
                    Richard was hired to create a corporate identity. We were
                    very pleased with the work done. She has a lot of experience
                    and is very concerned about the needs of client. Lorem ipsum
                    dolor sit amet, ullamcous cididt consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels
                    dolore magnarels alia.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </section>

        {/* - testimonials modal */}

        <div className="modal-container" data-modal-container>
          <div className="overlay" data-overlay></div>

          <section className="testimonials-modal">
            <button className="modal-close-btn" data-modal-close-btn>
              <CloseOutline />
            </button>

            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img
                  src="/assets/images/avatar-1.png"
                  alt="Daniel lewis"
                  width="80"
                  data-modal-img
                />
              </figure>

              <img src="/assets/images/icon-quote.svg" alt="quote icon" />
            </div>

            <div className="modal-content">
              <h4 className="h3 modal-title" data-modal-title>
                Daniel lewis
              </h4>

              <time>14 June, 2021</time>

              <div data-modal-text>
                <p>
                  Richard was hired to create a corporate identity. We were very
                  pleased with the work done. She has a lot of experience and is
                  very concerned about the needs of client. Lorem ipsum dolor
                  sit amet, ullamcous cididt consectetur adipiscing elit, seds
                  do et eiusmod tempor incididunt ut laborels dolore magnarels
                  alia.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* <!-- */}
        {/* - clients */}
        {/* --> */}

        <section className="clients">
          <h3 className="h3 clients-title">Clients</h3>

          <ul className="clients-list has-scrollbar">
            <li className="clients-item">
              <a href="#">
                <img src="/assets/images/logo-1-color.png" alt="client logo" />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img src="/assets/images/logo-2-color.png" alt="client logo" />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img src="/assets/images/logo-3-color.png" alt="client logo" />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img src="/assets/images/logo-4-color.png" alt="client logo" />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img src="/assets/images/logo-5-color.png" alt="client logo" />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img src="/assets/images/logo-6-color.png" alt="client logo" />
              </a>
            </li>
          </ul>
        </section>
      </article>

      {/* <!--
  - #RESUME
--> */}

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
                Bachelor of Engineering (B.E.) in Computer Science and
                Information Technology
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">School of excellence</h4>

              <span>2016 - 2020</span>

              <p className="timeline-text">
                Completed my high school from exhool of excellence with 89% in
                in high school
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
                Deploying to reach to the end customers following utmost
                security principles
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
      {/* 
  <!--
  - #PORTFOLIO
--> */}

      <article className="portfolio" data-page="portfolio">
        <header>
          <h2 className="h2 article-title">Portfolio</h2>
        </header>

        <section className="projects">
          <ul className="filter-list">
            <li className="filter-item">
              <button className="active" data-filter-btn>
                All
              </button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>Web design</button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>Applications</button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>Web development</button>
            </li>
          </ul>

          <div className="filter-select-box">
            <button className="filter-select" data-select>
              <div className="select-value" data-selecct-value>
                Select category
              </div>

              <div className="select-icon">
                <ChevronDown />
              </div>
            </button>

            <ul className="select-list">
              <li className="select-item">
                <button data-select-item>All</button>
              </li>

              <li className="select-item">
                <button data-select-item>Web design</button>
              </li>

              <li className="select-item">
                <button data-select-item>Applications</button>
              </li>

              <li className="select-item">
                <button data-select-item>Web development</button>
              </li>
            </ul>
          </div>

          <ul className="project-list">
            <li
              className="project-item  active"
              data-filter-item
              data-category="web development"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    {/* <ion-icon name="eye-outline"></ion-icon> */}
                    <EyeOutline />
                  </div>

                  <img
                    src="/assets/images/project-1.jpg"
                    alt="finance"
                    loading="lazy"
                  />
                </figure>

                <h3 className="project-title">Finance</h3>

                <p className="project-category">Web development</p>
              </a>
            </li>

            <li
              className="project-item  active"
              data-filter-item
              data-category="web development"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    {/* <ion-icon name="eye-outline"></ion-icon> */}
                    <EyeOutline />
                  </div>

                  <img
                    src="/assets/images/project-2.png"
                    alt="orizon"
                    loading="lazy"
                  />
                </figure>

                <h3 className="project-title">Orizon</h3>

                <p className="project-category">Web development</p>
              </a>
            </li>

            <li
              className="project-item  active"
              data-filter-item
              data-category="web design"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <EyeOutline />
                  </div>

                  <img
                    src="/assets/images/project-3.jpg"
                    alt="fundo"
                    loading="lazy"
                  />
                </figure>

                <h3 className="project-title">Fundo</h3>

                <p className="project-category">Web design</p>
              </a>
            </li>

            <li
              className="project-item  active"
              data-filter-item
              data-category="applications"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <EyeOutline />
                  </div>

                  <img
                    src="/assets/images/project-4.png"
                    alt="brawlhalla"
                    loading="lazy"
                  />
                </figure>

                <h3 className="project-title">Brawlhalla</h3>

                <p className="project-category">Applications</p>
              </a>
            </li>

            <li
              className="project-item  active"
              data-filter-item
              data-category="web design"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <EyeOutline />
                  </div>

                  <img
                    src="/assets/images/project-5.png"
                    alt="dsm."
                    loading="lazy"
                  />
                </figure>

                <h3 className="project-title">DSM.</h3>

                <p className="project-category">Web design</p>
              </a>
            </li>

            <li
              className="project-item  active"
              data-filter-item
              data-category="web design"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <EyeOutline />
                  </div>

                  <img
                    src="/assets/images/project-6.png"
                    alt="metaspark"
                    loading="lazy"
                  />
                </figure>

                <h3 className="project-title">MetaSpark</h3>

                <p className="project-category">Web design</p>
              </a>
            </li>

            <li
              className="project-item  active"
              data-filter-item
              data-category="web development"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <EyeOutline />
                  </div>

                  <img
                    src="/assets/images/project-7.png"
                    alt="summary"
                    loading="lazy"
                  />
                </figure>

                <h3 className="project-title">Summary</h3>

                <p className="project-category">Web development</p>
              </a>
            </li>

            <li
              className="project-item  active"
              data-filter-item
              data-category="applications"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <EyeOutline />
                  </div>

                  <img
                    src="/assets/images/project-8.jpg"
                    alt="task manager"
                    loading="lazy"
                  />
                </figure>

                <h3 className="project-title">Task Manager</h3>

                <p className="project-category">Applications</p>
              </a>
            </li>

            <li
              className="project-item  active"
              data-filter-item
              data-category="web development"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <EyeOutline />
                  </div>

                  <img
                    src="/assets/images/project-9.png"
                    alt="arrival"
                    loading="lazy"
                  />
                </figure>

                <h3 className="project-title">Arrival</h3>

                <p className="project-category">Web development</p>
              </a>
            </li>
          </ul>
        </section>
      </article>
      {/* 
  <!--
  - #BLOG
--> */}

      <article className="blog" data-page="blog">
        <header>
          <h2 className="h2 article-title">Blog</h2>
        </header>

        <section className="blog-posts">
          <ul className="blog-posts-list">
            <li className="blog-post-item">
              <a href="#">
                <figure className="blog-banner-box">
                  <img
                    src="/assets/images/blog-1.jpg"
                    alt="Design conferences in 2022"
                    loading="lazy"
                  />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">Design</p>

                    <span className="dot"></span>

                    <time>Fab 23, 2022</time>
                  </div>

                  <h3 className="h3 blog-item-title">
                    Design conferences in 2022
                  </h3>

                  <p className="blog-text">
                    Veritatis et quasi architecto beatae vitae dicta sunt,
                    explicabo.
                  </p>
                </div>
              </a>
            </li>

            <li className="blog-post-item">
              <a href="#">
                <figure className="blog-banner-box">
                  <img
                    src="/assets/images/blog-2.jpg"
                    alt="Best fonts every designer"
                    loading="lazy"
                  />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">Design</p>

                    <span className="dot"></span>

                    <time>Fab 23, 2022</time>
                  </div>

                  <h3 className="h3 blog-item-title">
                    Best fonts every designer
                  </h3>

                  <p className="blog-text">
                    Sed ut perspiciatis, nam libero tempore, cum soluta nobis
                    est eligendi.
                  </p>
                </div>
              </a>
            </li>

            <li className="blog-post-item">
              <a href="#">
                <figure className="blog-banner-box">
                  <img
                    src="/assets/images/blog-3.jpg"
                    alt="Design digest #80"
                    loading="lazy"
                  />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">Design</p>

                    <span className="dot"></span>

                    <time>Fab 23, 2022</time>
                  </div>

                  <h3 className="h3 blog-item-title">Design digest #80</h3>

                  <p className="blog-text">
                    Excepteur sint occaecat cupidatat no proident, quis nostrum
                    exercitationem ullam corporis suscipit.
                  </p>
                </div>
              </a>
            </li>

            <li className="blog-post-item">
              <a href="#">
                <figure className="blog-banner-box">
                  <img
                    src="/assets/images/blog-4.jpg"
                    alt="UI interactions of the week"
                    loading="lazy"
                  />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">Design</p>

                    <span className="dot"></span>

                    <time>Fab 23, 2022</time>
                  </div>

                  <h3 className="h3 blog-item-title">
                    UI interactions of the week
                  </h3>

                  <p className="blog-text">
                    Enim ad minim veniam, consectetur adipiscing elit, quis
                    nostrud exercitation ullamco laboris nisi.
                  </p>
                </div>
              </a>
            </li>

            <li className="blog-post-item">
              <a href="#">
                <figure className="blog-banner-box">
                  <img
                    src="/assets/images/blog-5.jpg"
                    alt="The forgotten art of spacing"
                    loading="lazy"
                  />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">Design</p>

                    <span className="dot"></span>

                    <time>Fab 23, 2022</time>
                  </div>

                  <h3 className="h3 blog-item-title">
                    The forgotten art of spacing
                  </h3>

                  <p className="blog-text">
                    Maxime placeat, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                </div>
              </a>
            </li>

            <li className="blog-post-item">
              <a href="#">
                <figure className="blog-banner-box">
                  <img
                    src="/assets/images/blog-6.jpg"
                    alt="Design digest #79"
                    loading="lazy"
                  />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">Design</p>

                    <span className="dot"></span>

                    <time>Fab 23, 2022</time>
                  </div>

                  <h3 className="h3 blog-item-title">Design digest #79</h3>

                  <p className="blog-text">
                    Optio cumque nihil impedit uo minus quod maxime placeat,
                    velit esse cillum.
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </section>
      </article>

      {/* <!--
  - #CONTACT
--> */}

      <article className="contact" data-page="contact">
        <header>
          <h2 className="h2 article-title">Contact</h2>
        </header>

        <section className="mapbox" data-mapbox>
          <figure>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
              width="400"
              height="300"
              loading="lazy"
            ></iframe>
          </figure>
        </section>

        <section className="contact-form">
          <h3 className="h3 form-title">Contact Form</h3>

          <form action="#" className="form" data-form>
            <div className="input-wrapper">
              <input
                type="text"
                name="fullname"
                className="form-input"
                placeholder="Full name"
                required
                data-form-input
              />

              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Email address"
                required
                data-form-input
              />
            </div>

            <textarea
              name="message"
              className="form-input"
              placeholder="Your Message"
              required
              data-form-input
            ></textarea>

            <button className="form-btn" type="submit" disabled data-form-btn>
              <PaperPlane />
              <span>Send Message</span>
            </button>
          </form>
        </section>
      </article>
    </div>
  );
}
