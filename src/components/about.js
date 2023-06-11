import { useState, useEffect } from "react";

export default function About() {
  const [classes, setClasses] = useState("");
  useEffect(() => {
    setClasses("visible");
  }, []);
  return (
    <div className="center">
      <section id="about">
        <article>
          <h2>About</h2>
          <p className={classes}>
            {/* I am a Web Developer Located In Egypt. May describe myself as an
            organized person, highly enthusiastic about problem-solving with
            high attention to detail, Also a Family person who loves animals
            -especially birds-, reading and point and click adventure/puzzle
            games.
            <br />
            <br />
            One of my ambitions is to become the best programmer I can humanly
            be.
            <br />
            Although I find everything about programming interesting, web
            development is my passion and I love working in all of its areas :
            Front-End, Back-End, Databases and even Security, My experience
            mostly spans the Javascript-ecosystem. */}
            I am an Egyptian based Software Developer, One of my strongest
            ambitions is to become the best programmer I can humanly be.
            Although I find everything about programming interesting, web
            development is my passion and I enjoy facing challenges across the
            entire stack. <br /> <br /> Hobbies beside programming: Reading,
            Sports and Low combat narrative/puzzle heavy Games.
          </p>
          <a
            className={classes}
            target="_blank"
            href="https://drive.google.com/uc?export=download&id=1xqzebIRnUWd5ggvLLvohjqz9wJeCYWru"
            download
          >
            Download CV
          </a>
        </article>
      </section>
    </div>
  );
}
