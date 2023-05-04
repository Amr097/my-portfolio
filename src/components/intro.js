import { useEffect, useState } from "react"

export default function Intro(){
    const [classes, setClasses] = useState('')
    useEffect(()=>{
        setClasses('visible')
    }, [])
    return(
    <section id="intro">
     <article>
      <p className={classes}>I'M <span>Amr Abdelghany</span><br/>Software developer with a passion for web development.
      <br/> I enjoy solving problems and I'm always seeking improvement in the work I do.<br/> 
      Nevertheless, I have a curious mind which often leads me to want to learn more about how tools work under the hood.</p>
      <a target='_blank' href="https://mail.google.com/mail/u/0/?fs=1&to=amruser97@gmail.com&su=SUBJECT&body=BODY&tf=cm" className={classes}>Get In Touch</a>
     </article>
    </section>
    )
}