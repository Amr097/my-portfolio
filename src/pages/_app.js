import '../styles/globals.scss'
import '../styles/header.scss'
import '../styles/intro.scss'
import '../styles/about.scss'
import '../styles/skills.scss'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
 
  return <Component {...pageProps} />
}
