import React from 'react'
// import {
//   Attic,
//   TwoAre,
//   Balkany,
//   VipYoga,
//   BeeGames,
//   Marinist,
//   Gastrobar,
//   ZlataTrade,
//   PrideGroup,
//   VladyDesign,
//   Bessarabskiy,
//   PrideLogistic
// } from '../Projects'
/* IMAGES */
const AtticImage = '/Assets/Images/Portfolio/Attic.png'
const TwoAreImage = '/Assets/Images/Portfolio/TwoAre.png'
const ProjectImg = '/Assets/Images/project-default-img.png'
const VipYogaImage = '/Assets/Images/Portfolio/VipYoga.png'
const MarinistImage = '/Assets/Images/Portfolio/Marinist.png'
const GastrobarImage = '/Assets/Images/Portfolio/Gastrobar.png'
const BessarabskiyImage = '/Assets/Images/Portfolio/Bessarabkiy.png'
const BeeGamesImage = '/Assets/Images/Portfolio/BeeGamesProject.png'
const FCBalkanyImage = '/Assets/Images/Portfolio/FCBalkanyProject.png'
const PrideGroupImage = '/Assets/Images/Portfolio/PrideGroupProject.png'
const ZlataTradeImage = '/Assets/Images/Portfolio/Zlata-trade project.png'
const VladyDesignImage = '/Assets/Images/Portfolio/VladyDesignProject.png'
const PrideLogisticImage = '/Assets/Images/Portfolio/PrideLogisticProject.png'
/**/

export const ProjectsList = [
  {
    key: 'web-sites',
    label: 'Web-sites',
    content: [
      {
        img: ZlataTradeImage,
        title: 'Zlata-trade',
        id: 'zlata-project-page',
        link: '/projects/zlata-trade',
        size: { xs: 12, md: 7, lg: 5, xl: 5 },
        // // Component: <ZlataTrade />
      },
      {
        img: FCBalkanyImage,
        title: 'FC Balkany',
        link: '/projects/balkany',
        id: 'balkany-project-page',
        size: { xs: 12, md: 5, lg: 4, xl: 3 },
        // // Component: <Balkany />
      },
      {
        img: PrideLogisticImage,
        title: 'Pride Logistic',
        id: 'pride-project-page',
        link: '/projects/pride-logistic',
        size: { xs: 12, md: 5, lg: 3, xl: 4 },
        // // Component: <PrideLogistic />
      },
      {
        img: VladyDesignImage,
        title: 'Vlady design',
        id: 'vlady-project-page',
        isNavBlack: true,
        link: '/projects/vlady-design',
        size: { xs: 12, md: 7, lg: 4, xl: 4 },
        // // Component: <VladyDesign />
      },
      {
        img: BeeGamesImage,
        title: 'Bee Games',
        id: 'bee-games-project-page',
        link: '/projects/bee-games',
        size: { xs: 12, md: 7, lg: 4, xl: 5 },
        // Component: <BeeGames />
      },
      {
        img: PrideGroupImage,
        id: 'pride-group-project-page',
        title: 'Pride group',
        link: '/projects/pride-group',
        size: { xs: 12, md: 5, lg: 4, xl: 3 },
        // Component: <PrideGroup />
      },
      {
        img: GastrobarImage,
        id: 'gastrobar-page',
        title: 'Gastrobar',
        link: '/projects/gastrobar',
        size: { xs: 12, md: 4, lg: 8, xl: 9 },
        // Component: <Gastrobar />
      },
      {
        img: BessarabskiyImage,
        id: 'gastrobar-page',
        title: 'Bessarabskiy dvorik',
        link: '/projects/bessarabskiy',
        size: { xs: 12, md: 8, lg: 4, xl: 3 },
        // Component: <Bessarabskiy />
      },
      {
        img: MarinistImage,
        id: 'marinist-page',
        title: 'Marinist',
        link: '/projects/marinist',
        size: { xs: 12, md: 7, lg: 5, xl: 4 },
        // Component: <Marinist/>
      },
      {
        img: TwoAreImage,
        id: 'two-are-page',
        title: 'Two are',
        link: '/projects/two-are',
        size: { xs: 12, md: 5, lg: 7, xl: 4 },
        // Component: <TwoAre/>
      },
      {
        img: VipYogaImage,
        id: 'vip-yoga-page',
        title: 'Vip Yoga',
        isNavBlack: true,
        link: '/projects/vip-yoga',
        size: { xs: 12, md: 5, lg: 7, xl: 4 },
        // Component: <VipYoga/>
      },
      {
        img: AtticImage,
        id: 'attic-page',
        title: 'Attic stroy',
        link: '/projects/attic-stroy',
        size: { xs: 12, md: 7, lg: 5, xl: 8 },
        // Component: <Attic/>
      }
    ]
  },
  {
    key: 'design',
    label: 'Design',
    content: [
      {
        img: MarinistImage,
        id: 'marinist-page',
        title: 'Marinist',
        link: '/projects/marinist',
        size: { xs: 12, md: 7, lg: 5, xl: 5 },
        // Component: <Marinist/>
      },
      {
        img: ProjectImg,
        title: 'Design page 2',
        link: '/projects',
        size: { xs: 12, md: 5, lg: 4, xl: 3 }
      },
      {
        img: ProjectImg,
        title: 'Design page 3',
        link: '/projects',
        size: { xs: 12, md: 5, lg: 3, xl: 4 }
      },
      {
        img: ProjectImg,
        title: 'Design page 4',
        link: '/projects',
        size: { xs: 12, md: 7, lg: 4, xl: 4 }
      },
      {
        img: ProjectImg,
        title: 'Design page 5',
        link: '/projects',
        size: { xs: 12, md: 7, lg: 4, xl: 5 }
      },
      {
        img: ProjectImg,
        title: 'Design page 6',
        link: '/projects',
        size: { xs: 12, md: 5, lg: 4, xl: 3 }
      }
    ]
  },
  {
    key: 'identity',
    label: 'Identity',
    content: [
      {
        img: ProjectImg,
        title: 'Identity page 1',
        link: '/projects',
        size: { xs: 12, md: 7, lg: 5, xl: 5 }
      },
      {
        img: ProjectImg,
        title: 'Identity page 2',
        link: '/projects',
        size: { xs: 12, md: 5, lg: 4, xl: 3 }
      },
      {
        img: ProjectImg,
        title: 'Identity page 3',
        link: '/projects',
        size: { xs: 12, md: 5, lg: 3, xl: 4 }
      },
      {
        img: ProjectImg,
        title: 'Identity page 4',
        link: '/projects',
        size: { xs: 12, md: 7, lg: 4, xl: 4 }
      },
      {
        img: ProjectImg,
        title: 'Identity page 5',
        link: '/projects',
        size: { xs: 12, md: 7, lg: 4, xl: 5 }
      },
      {
        img: ProjectImg,
        title: 'Identity page 6',
        link: '/projects',
        size: { xs: 12, md: 5, lg: 4, xl: 3 }
      }
    ]
  }
]
