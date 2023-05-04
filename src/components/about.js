import { useState, useEffect } from "react"

export default function About(){
  const [classes, setClasses] = useState('')
  useEffect(()=>{
      setClasses('visible')
  }, [])
    return(
        <div className="center">
      <section id="about">
        <article>
          <h2>About</h2>
          <p className={classes}>I am a Web Developer Located In Egypt.
          Well organized person, problem-solver with high attention to detail.Family person who loves animals
          and English literature.<br/><br/>
          One of my ambitions is to become the best programmer I can humanly be.<br/>
          Although I find everything about programming interesting, web development is my passion and I love working in all of its areas: Front-End, Back-End, Databases and even Security.
          <br/><br/>My experience mostly spans the JavaScript ecosystem: JavaScript, RxJS, Node.js and webpack. I'm also familiar with SQL, C++. </p>
          <a className={classes} target='_blank' href="https://drive.google.com/uc?export=download&id=1MbBGrtGftJeYxdII67wj43idfOT1mNdi" download>Download CV</a>
        </article>
      </section>
      </div>
    )
}