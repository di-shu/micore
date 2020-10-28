import React from 'react'
import Head from 'next/head'

export const MetaHead = () => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1,user-scalable=no"/>
      
      <meta name="description" content="Web studio Manticore Development"/>
      <meta property="og:type" content="article"/>
      <meta property="og:title" content="TITLE OF YOUR POST OR PAGE"/>
      <meta property="og:description" content="DESCRIPTION OF PAGE CONTENT"/>
      <meta property="og:image" content="LINK TO THE IMAGE FILE"/>
      <meta property="og:url" content="PERMALINK"/>
      <meta property="og:site_name" content="SITE NAME"/>
  
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap&subset=cyrillic,cyrillic-ext,latin-ext"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"/>
      <link rel="stylesheet" type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossOrigin="anonymous"/>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.0/jquery.min.js" />
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/turn.js/3/turn.min.js"/>
      <title>Manticore WEB studio</title>
      <link rel="icon" href="favicon.ico" type="image/x-icon" />
    </Head>
  )
}
