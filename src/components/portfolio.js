export default function Portfolio() {
  return (
    <div className="container">
      <section id="portfolio">
        <h2>Projects</h2>
        <div className="portfolio-container">
          <figure className="portfolio-card">
            <div className="effect">
              <p>
                Blogging platform built with <br /> React and Next js
              </p>
              <a
                target="_blank"
                href="https://github.com/Amr097/blog-app-frontend"
              >
                Github
              </a>
            </div>

            <img src="/images/OWL.png" alt="" />
          </figure>
          <figure className="portfolio-card">
            <div className="effect">
              <p>
                Blog API built with <br /> Node.js && Express
              </p>
              <a target="_blank" href="https://github.com/Amr097/404-owl-blog">
                Github
              </a>
            </div>

            <img src="/images/2023-05-29 (10).png" alt="" />
          </figure>
          <figure className="portfolio-card">
            <div className="effect">
              <p>Share your secrets app built with EJS and ExpressJs</p>
              <a target="_blank" href="https://github.com/Amr097/secrets">
                Github
              </a>
            </div>

            <img src="/images/SECRETS.png" alt="" />
          </figure>

          <figure className="portfolio-card">
            <div className="effect">
              <p>
                Re-useable API built with <br /> ExpressJs to handle CURD
                operations
              </p>
              <a target="_blank" href="https://github.com/Amr097/Wiki-API">
                Github
              </a>
            </div>

            <img src="/images/WIKI.png" alt="" />
          </figure>
        </div>
      </section>
    </div>
  );
}
