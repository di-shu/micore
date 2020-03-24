import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../../Components'
import { useDeviceDetect } from '../../../../Helpers'

const SiteCrm = '/Assets/Images/Services/Other/SiteCrm.png'
const SitePortal = '/Assets/Images/Services/Other/SitePortal.png'
const SiteCatalog = '/Assets/Images/Services/Other/SiteCatalog.png'
const InternetShop = '/Assets/Images/Services/Other/InternetShop.png'
const SiteLogistic = '/Assets/Images/Services/Other/SiteLogistic.png'

const SitesConfigs = [
  { title: 'Интернет магазин', image: InternetShop },
  { title: 'Сайт-каталог', image: SiteCatalog },
  { title: 'Портал', image: SitePortal },
  { title: 'CRM', image: SiteCrm },
  { title: 'Логистика', image: SiteLogistic },
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
                <SectionTitle title={site.title} className="site-title" />
                <SectionDesc className="site-desc" children={site.desc} display={!mobile} />
                <ImageWrapper src={site.image} className="site-image" display={mobile} />
              </Col>
              <Col xs={12} md={6}>
                <ImageWrapper src={site.image} className="site-image" display={!mobile} />
                <SectionDesc className="site-desc" children={site.desc} display={mobile} />
              </Col>
            </Row>
            <ImageWrapper isDot className="site-dots" display={index + 1 !== SitesConfigs.length} />
          </Col>
        ))}
      </Row>
    </SectionLayout>
  )
}
