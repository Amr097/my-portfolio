

export default function Portfolio(){
    return(
    <div className="container">
    <section id="portfolio">
     <h2>Portfolio</h2>
     <div className="portfolio-container">
      <figure className="portfolio-card">

       <div className="effect">
       <p>Blogging platform built with <br/> ReactJS and ExpressJs</p> 
        <a target="_blank" href="https://github.com/Amr097/404-owl-blog">Github</a>
       </div>

       <img src="/images/OWL.png" alt=""/>

      </figure>
      
      <figure className="portfolio-card">
      
       <div className="effect">
       <p>Share your secrets app built with EJS and ExpressJs</p> 
        <a target="_blank" href="https://github.com/Amr097/secrets">Github</a> 
       </div>

       <img src="/images/SECRETS.png" alt=""/>

      </figure>

      <figure className="portfolio-card">
     
       <div className="effect">
       <p>Re-useable API built with <br/> ExpressJs to handle CURD operations</p> 
        <a target="_blank" href="https://github.com/Amr097/Wiki-API">Github</a>
       </div>

       <img src="/images/WIKI.png" alt=""/>

      </figure>

      <figure className="portfolio-card">
      
       <div className="effect">
       <p>TO-DO-LIST App built with <br/> ReactJs</p> 
         <a target="_blank" href="https://github.com/Amr097/note-keeper">Github</a>
       </div>

       <img src="/images/TODO.png" alt=""/>

      </figure>
     </div>
    </section>
    </div>
    )
}