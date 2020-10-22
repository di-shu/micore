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
  {
    image: InternetShop,
    title: 'Интернет магазин',
    desc: 'При росте интернет-магазина становится вопрос в разработке индивидуального продукта под бизнес-процессы ' +
      'компании, так как шаблонного решения не хватает и компания постоянно упирается в ограничения. Мы разрабатываем ' +
      'магазины с уникальным дизайном на Laravel\'е, которые заточены под нужды компании'
  },
  {
    image: SiteCatalog,
    title: 'Сайт-каталог',
    desc: 'Решение для компаний с большим количеством товаров и услуг. На сайте предоставлены информация о компании, ' +
      'категории, цены, описание, без покупки онлайн'
  },
  {
    title: 'Портал',
    image: SitePortal,
    desc: 'Как правило, структура порталов разветвленная и при разработке важно учесть особенности: масштабируемость, ' +
      'устойчивость к нагрузкам, защиты информации, аналитика и мониторинг информации, удобство управление порталом'
  },
  {
    title: 'CRM',
    image: SiteCrm,
    desc: 'При переходе компании из малого бизнеса в средний либо крупный растёт отдел продаж. Появляется необходимость ' +
      'в собственной CRM системе, так как процесс коммуникации становится невозможным без правильной организации и ' +
      'автоматизации бизнес-процессов'
  },
  {
    title: 'Логистика',
    image: SiteLogistic,
    desc: 'Одна из наших специализаций - это логистические системы. Мы разрабатывали логистику как веб продукт для ' +
      'зернового трейдера в течении нескольких лет и готовы предоставить нашу экспертизу в разработке подобного продукта'
  }
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
