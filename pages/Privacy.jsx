import PrivacyPage from '@/Componnets/Privacy&Policy/PrivacyPage'
import Head from 'next/head'
import React from 'react'

function Privacy() {
  return (
    <div>
     <Head>
        <title>Next.js Tailwind Dashboard</title>
        <meta name="description" content="Simple dashboard using Next.js and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
        <link
        href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Inter:wght@300;400;500;600&family=Krub:wght@300;400;500;600;700&family=Lato:wght@300;400;700;900&family=Montserrat:wght@400;500&family=Nunito+Sans:opsz,wght@6..12,300;6..12,400&family=Nunito:wght@300;400;500;600;700&family=Oswald:wght@200;300;400;500;600;700&family=Poppins:wght@200;300;400;500;600;700&family=Rubik+Doodle+Shadow&display=swap"
        rel="stylesheet"></link>
      </Head>
      <main>
      <PrivacyPage/>
      </main>
      
    </div>
  )
}

export default Privacy
