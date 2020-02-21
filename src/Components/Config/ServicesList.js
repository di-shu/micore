import React from 'react'
// import { Branding, CorporateWebsite, LandingPage, Other } from '../Services'
/* IMAGES */
const OtherImage = '/Assets/Images/Services/Other.png'
const BrandingImage = '/Assets/Images/Services/Branding.png'
const CorporateImage = '/Assets/Images/Services/Corporate.png'
const LandingImage = '/Assets/Images/Services/LandingImage.png'

export const ServicesList = [
  {
    img: LandingImage,
    id: 'landing-page',
    name: 'Landing page',
    // component: <LandingPage/>,
    link: '/services/landing-page',
    desc: 'We are Manticore Development, company which duis aute irure dolor in reprehenderit'
  },
  {
    img: CorporateImage,
    id: 'corporate-page',
    name: 'Corporate Web-site',
    // component: <CorporateWebsite/>,
    link: '/services/corporate',
    desc: 'We are Manticore Development, company which duis aute irure dolor in reprehenderit'
  },
  {
    img: BrandingImage,
    name: 'Branding',
    id: 'branding-page',
    // component: <Branding/>,
    link: '/services/branding',
    desc: 'We are Manticore Development, company which duis aute irure dolor in reprehenderit'
  },
  {
    img: OtherImage,
    name: 'Other',
    id: 'other-page',
    // component: <Other/>,
    link: '/services/other',
    desc: 'We are Manticore Development, company which duis aute irure dolor in reprehenderit'
  }
]
