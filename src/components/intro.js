import { useEffect, useState } from "react"

export default function Intro(){
    const [classes, setClasses] = useState('')
    useEffect(()=>{
        setClasses('visible')
    }, [])
    return(
    <section id="intro">
     <article>
      <p className={classes}>I'M <span>Amr Abdelghany</span><br/>Web Developer, code enthuthiast and i have a cool helmet</p>
      <a className={classes}>Contact Me</a>
     </article>
    </section>
    )
}