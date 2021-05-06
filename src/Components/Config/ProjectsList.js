const AtticImage = '/images/Portfolio/attic.jpg'
const TwoAreImage = '/images/Portfolio/twoare.jpg'
const VipYogaImage = '/images/Portfolio/yoga.jpg'
const MarinistImage = '/images/Portfolio/Marinist.jpg'
const GastrobarImage = '/images/Portfolio/gastrobar.jpg'
const BessarabskiyImage = '/images/Portfolio/dvorik.jpg'
const BeeGamesImage = '/images/Portfolio/beegame.jpg'
const FCBalkanyImage = '/images/Portfolio/fcbalkans.jpg'
const PrideGroupImage = '/images/Portfolio/pride_group.jpg'
const ZlataTradeImage = '/images/Portfolio/zlata-trade.jpg'
const VladyDesignImage = '/images/Portfolio/vlady.jpg'
const PrideLogisticImage = '/images/Portfolio/pridelogistics.jpg'
const ManticoreImage = '/images/Portfolio/manticore_preview.jpg'

export const Sizes = {
  getIterations: function (matches, index) {
    const needle = matches.length
    const per = Math.floor(index / needle)
    const i = (index - (per * needle))
  
    return matches[i]
  },
  getMDSize: function (index) {
    const matches = [7, 5, 5, 7]
    
    return this.getIterations(matches, index)
  },
  getLGSize: function (index) {
    const matches = [5, 4, 3, 4, 4, 4]
  
    return this.getIterations(matches, index)
  },
  getXLSize: function (index) {
    const matches = [5, 3, 4, 6, 3, 3]
    
    return this.getIterations(matches, index)
  }
}

export const NewProjectsList = {
  projects: {
    pride_logistic: {
      img: PrideLogisticImage,
      title: 'Pride Logistics',
      link: '/projects/pride-logistic'
    },
    marinist: {
      title: 'Marinist',
      img: MarinistImage,
      link: '/projects/marinist'
    },
    vlady: {
      img: VladyDesignImage,
      title: 'Vlady design',
      link: '/projects/vlady-design'
    },
    fcbalkans: {
      img: FCBalkanyImage,
      title: 'FC Balkany',
      link: '/projects/balkany'
    },
    zlata_trade: {
      img: ZlataTradeImage,
      title: 'Zlata-trade',
      link: '/projects/zlata-trade'
    },
    bee_games: {
      img: BeeGamesImage,
      title: 'Bee Games',
      link: '/projects/bee-games'
    },
    two_are: {
      img: TwoAreImage,
      title: 'Two are',
      link: '/projects/two-are'
    },
    vip_yoga: {
      img: VipYogaImage,
      title: 'Vip Yoga',
      link: '/projects/vip-yoga'
    },
    pride_group: {
      img: PrideGroupImage,
      title: 'Pride group',
      link: '/projects/pride-group'
    },
    gastrobar: {
      title: 'Gastrobar',
      img: GastrobarImage,
      link: '/projects/gastrobar'
    },
    attic: {
      img: AtticImage,
      title: 'Attic stroy',
      link: '/projects/attic-stroy'
    },
    bessarabskiy: {
      img: BessarabskiyImage,
      title: 'Bessarabskiy dvorik',
      link: '/projects/bessarabskiy'
    },
    manticore: {
      img: ManticoreImage,
      title: 'Manticore Development',
      link: '/projects/manticore'
    }
  },
  getExcept: function (keys) {
    let newObj = this.getALl()
  
    keys.forEach(key => {
      delete newObj[key]
    })
  
    return newObj
  },
  getALl: function () {
    return Object.assign({}, this.projects)
  },
  getByKeys: function (keys) {
    let sorted = {}
    let res = Object.keys(this.projects)
      .filter(key => keys.includes(key))
      .reduce((arr, key) => {
        arr[key] = this.projects[key]
        
        return arr
      }, [])
    
    keys.map(item => {
      sorted[item] = res[item]
    })
    
    return sorted
  }
}

export const Portfolios = {
  getSlicedTabs: function (sliceCount = 6, t) {
    return this.getTabs(t).map(tab => ({ ...tab, content: tab.content.slice(0, sliceCount) }))
  },
  getTabs: function (translation) {
    return [
      {
        key: 'all',
        content: this.getALl(),
        label: translation('portfolio.all')
      },
      {
        key: 'web-sites',
        content: this.getWebSites(),
        label: translation('portfolio.web')
      },
      {
        key: 'ux/ui',
        content: this.getUIUX(),
        label: translation('portfolio.design')
      },
      {
        key: 'branding',
        content: this.getBranding(),
        label: translation('portfolio.branding')
      }
    ]
  },
  getALl: function () {
    return Object.values(NewProjectsList.getALl())
  },
  getWebSites: function () {
    return Object.values(NewProjectsList.getByKeys(['zlata_trade', 'fcbalkans', 'pride_logistic', 'vlady', 'bessarabskiy', 'marinist']))
  },
  getUIUX: function () {
    return Object.values(NewProjectsList.getByKeys(['bee_games', 'attic']))
  },
  getBranding: function () {
    return Object.values(NewProjectsList.getExcept(['bee_games']))
  }
}

export const Services = {
  getLanding: function () {
    return Object.values(NewProjectsList.getByKeys(['pride_logistic', 'vlady', 'bee_games']))
  },
  getCorporate: function () {
    return Object.values(NewProjectsList.getByKeys(['pride_group', 'marinist', 'zlata_trade']))
  },
  getBrand: function () {
    return Object.values(NewProjectsList.getByKeys(['fcbalkans', 'zlata_trade', 'two_are']))
  },
  getOthers: function () {
    return Object.values(NewProjectsList.getByKeys(['fcbalkans', 'marinist', 'pride_logistic']))
  }
}
