
import Script from 'next/script'
import '@/styles/globals.css'
import '@/styles/style.css'
import '@/styles/baseStyles.css'


export default function App({ Component, pageProps }) {
  return(
    <>
      <Component {...pageProps}/>

    </>
  )
}
