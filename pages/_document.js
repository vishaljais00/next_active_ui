import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";


export default function Document() {
  return (
    <Html lang="en">
      {/* <Head 


      /> */}

      <Head>
        {/* <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Inter:wght@300;400;500;600&family=Krub:wght@300;400;500;600;700&family=Lato:wght@300;400;700;900&family=Montserrat:wght@400;500&family=Nunito+Sans:opsz,wght@6..12,300;6..12,400&family=Nunito:wght@300;400;500;600;700&family=Oswald:wght@200;300;400;500;600;700&family=Poppins:wght@200;300;400;500;600;700&family=Rubik+Doodle+Shadow&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="stylesheet" href="../styles/style.css "></link> */}
        {/* <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css" rel="stylesheet" /> */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css"  rel="stylesheet" />

      </Head>
      <body>
        <Main />
        <NextScript />
        {/* <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js" />
        <Script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js' /> */}
         <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js" />
        <Script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js' />
        <Script src="node_modules/flowbite/dist/flowbite.min.js"></Script>
      </body>
    </Html>
  );
}
