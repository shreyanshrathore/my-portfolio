"use client";

export default function Home() {
  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I’m a passionate learner, eager to explore impactful technologies.
          Drawn to frontend for its visual appeal, I’ve also worked heavily as a
          backend-focused fullstack engineer.
        </p>

        <p>
          My journey led me to DevOps, where I fell in love with tools like
          CI/CD, Docker, Kubernetes, and cloud platforms like AWS and
          GCP—helping me not only develop but also deliver complete solutions to
          clients.
        </p>
      </section>

      {/* - service */}

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/assets/images/icon-design.svg"
                alt="design icon"
                className="w-10 h-10"
              />
              {/* <Image
                src={"/assets/images/icon-design.svg"}
                alt="design iconssssss"
                width={"40"}
                layout="intrinsic"
                height={"40"}
              /> */}
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Frontend Development</h4>

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
              <h4 className="h4 service-item-title">Backend development</h4>

              <p className="service-item-text">
                High-quality development of sites at the professional level.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/assets/images/devops-test.svg"
                alt="mobile app icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Devops</h4>

              <p className="service-item-text">
                Professional development of applications for iOS and Android.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src="/assets/images/test.svg" alt="camera icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Freelancing</h4>

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
        <h3 className="h3 testimonials-title">Tool/Techs i Have worked on</h3>

        <ul className="testimonials-list has-scrollbar">
          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src="/assets/images/node-js.svg"
                  alt="Daniel lewis"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title
              >
                Node JS
              </h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Worked on Nodejs for almost 2+ years, and worked with differnt
                  architectures, MVC, Clean architecture
                </p>
              </div>
            </div>
          </li>

          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src="/assets/images/React.svg"
                  alt="Jessica miller"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title
              >
                React
              </h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Worked on react for 2+ years, used a lot of different aspects
                  of react to utilize its single page application benefits, used
                  Redux/Recoil for state management, Used Zod for type safety
                </p>
              </div>
            </div>
          </li>

          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src="/assets/images/docker-logo.png"
                  alt="Emily evans"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title
              >
                Docker
              </h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Wroked with Docker whle creating automatic deployemnt
                  pipelines, as well as running tools in dev environment, eg.
                  RabbitMQ, Redis, Mongo DB Postgres
                </p>
              </div>
            </div>
          </li>

          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src="/assets/images/kubernetes-logo.png"
                  alt="Henry william"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title
              >
                Kubernetes
              </h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Deployed whole Infra on Kubernetes with the help of Argo CD to
                  reduce the hassle of manually performing the hassle of roll
                  back and other prod related critical methods
                </p>
              </div>
            </div>
          </li>

          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src="/assets/images/jenkins-logo.webp"
                  alt="Henry william"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title
              >
                Jenkins
              </h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Woked on Jenkins to create and maintain the whole infra
                  AUtomatic CI/CD pipeline and also Created some testing
                  pipelines for QA to automate the whole process
                </p>
              </div>
            </div>
          </li>

          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src="/assets/images/argocd-logo.svg"
                  alt="Henry william"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title
              >
                Argo CD
              </h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Deployed Whole Infra on Argo CD for smooth monitoring and
                  automatic rollback process
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
}
