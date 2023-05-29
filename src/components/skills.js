import { useState } from "react";

export default function Skills() {
  const [classes, setClasses] = useState("");
  return (
    <div className="container">
      <section id="skills">
        <h2>My Skills</h2>
        <div className={classes + "skills-container"}>
          <div className="skill-box">
            <img src="/images/html.png" alt="" />
            <span>HTML</span>
          </div>
          <div className="skill-box">
            <img src="/images/css-3.png" alt="" />
            <span>CSS</span>
          </div>

          <div className="skill-box">
            <img src="/images/js.png" alt="" />
            <span>JavaScript</span>
          </div>
          <div className="skill-box">
            <img src="/images/icons8-react-400.png" alt="" />
            <span>React.js</span>
          </div>
          <div className="skill-box">
            <img src="/images/nextjs.1024x617.png" alt="" />
            <span>Next.js</span>
          </div>
          <div className="skill-box">
            <img src="/images/pngwing.com.png" alt="" />
            <span>Scss</span>
          </div>
          <div className="skill-box">
            <img id="node" src="/images/node-js-icon-29.jpg" alt="" />
            <span>Node.js</span>
          </div>

          <div className="skill-box">
            <img id="mongo" src="/images/database.png" alt="" />
            <span>MongoDB</span>
          </div>
          <div className="skill-box">
            <img id="git" src="/images/Git-Icon-1788C.png" alt="" />
            <span>Git Version Control</span>
          </div>
        </div>
      </section>
    </div>
  );
}
