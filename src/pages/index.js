import { Inter } from 'next/font/google'
import Intro from 'src/components/intro'
import Header from 'src/components/header'
import About from 'src/components/about'
import Skills from 'src/components/skills'
import Portfolio from 'src/components/portfolio'
import { useEffect } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  useEffect(()=>{
   const observer = new IntersectionObserver((entries,opts)=>{
     entries.forEach(entry=>{
      entry.target.classList.toggle('visible', entry.isIntersecting)
     });
   });
   observer.observe(document.querySelector('div.skills-container'));
   observer.observe(document.querySelector('#intro p'));
   observer.observe(document.querySelector('#intro a'));
   observer.observe(document.querySelector('#about a'));
   observer.observe(document.querySelector('#about p'));
  }, [])
  return (
   <main>
    <Header />
    <Intro />
    <About/>
    <Skills />
    <Portfolio />
   </main>
  )
}
