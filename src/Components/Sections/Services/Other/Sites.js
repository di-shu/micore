import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ImageWrapper, MyScrollAnimation, SectionDesc, SectionLayout, SectionTitle } from '../../../../Components'
import { useDeviceDetect } from '../../../../Helpers'

const SiteCrm = '/images/Services/Other/SiteCrm.png'
const SitePortal = '/images/Services/Other/SitePortal.png'
const SiteCatalog = '/images/Services/Other/SiteCatalog.png'
const InternetShop = '/images/Services/Other/InternetShop.png'
const SiteLogistic = '/images/Services/Other/SiteLogistic.png'

const SitesConfigs = [
  { title: 'Интернет магазин', image: InternetShop },
  { title: 'Сайт-каталог', image: SiteCatalog },
  { title: 'Портал', image: SitePortal },
  { title: 'CRM', image: SiteCrm },
  { title: 'Логистика', image: SiteLogistic }
]

export const Sites = () => {
  const { mobile } = useDeviceDetect()

  return (
    <SectionLayout id="other-sites">
      <Row>
        {SitesConfigs.map((site, index) => (
          <Col key={`site_${index}`} className={`col-site-wrap${index % 2 !== 0 ? ' col-odd' : ''}`} xs={12}>
            <Row>
              <Col xs={12} md={6}>
                <MyScrollAnimation delay={[200, 400]}>
                  <SectionTitle title={site.title} className="site-title"/>
                  <SectionDesc className="site-desc" children={site.desc} display={!mobile}/>
                </MyScrollAnimation>
                <MyScrollAnimation animationName={index % 2 ? 'fadeInLeft' : 'fadeInRight'}>
                  <ImageWrapper src={site.image} className="site-image" display={mobile}/>
                </MyScrollAnimation>
              </Col>
              <Col xs={12} md={6}>
                <MyScrollAnimation animationName={index % 2 ? 'fadeInLeft' : 'fadeInRight'}>
                  <ImageWrapper src={site.image} className="site-image" display={!mobile}/>
                </MyScrollAnimation>
                <MyScrollAnimation>
                  <SectionDesc className="site-desc" children={site.desc} display={mobile}/>
                </MyScrollAnimation>
              </Col>
            </Row>
            <ImageWrapper isDot className="site-dots" display={index + 1 !== SitesConfigs.length}/>
          </Col>
        ))}
      </Row>
    </SectionLayout>
  )
}
