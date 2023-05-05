import '../styles/globals.scss'
import '../styles/header.scss'
import '../styles/intro.scss'
import '../styles/about.scss'
import '../styles/skills.scss'
import '../styles/portfolio.scss'
import '../styles/contact.scss'
import Head from 'next/head'
import "@fortawesome/fontawesome-svg-core/styles.css"; 

import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically 
// since it's already imported above
config.autoAddCss = false; 



export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

