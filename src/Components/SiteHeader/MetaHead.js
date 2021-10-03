import React from 'react'

export const MetaHead = ({ title }) => {
  return (
    <>
      <meta charSet="utf-8"/>
      <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1,user-scalable=no"/>
      <title children={title}/>

      <meta name="description" content="MantiCore Development предоставляет услуги по созданию промо сайтов, корпоративных сайтов,
      индивидуальных интернет-магазинов и маркетплейсов, кастомных CRM систем для автоматизации. Также у нас можно заказать и
      разработать логотип, фирменный стиль, брендбук и сделать полный ребрендинг"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="MantiCore Development"/>
      <meta property="og:description" content="MantiCore Development предоставляет услуги по созданию промо сайтов, корпоративных сайтов,
      индивидуальных интернет-магазинов и маркетплейсов, кастомных CRM систем для автоматизации. Также у нас можно заказать и
      разработать логотип, фирменный стиль, брендбук и сделать полный ребрендинг"/>
      <meta property="og:image" content="https://micorestudio.com/images/Artboard.jpg"/>
      <meta property="og:url" content="https://micorestudio.com"/>
      <meta property="og:site_name" content="MantiCore Development"/>

      <link rel="stylesheet" href="/css/fonts.css"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap&subset=cyrillic,cyrillic-ext,latin-ext"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"/>

      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.0/jquery.min.js"/>
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/turn.js/3/turn.min.js"/>
      <link rel="icon" href="favicon.ico" type="image/x-icon"/>
    </>
  )
}
