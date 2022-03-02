import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionLine,
  SectionTitle
} from '../../../SectionsComponents'

const MvpLogo = '/images/MyHouse/mvp-version.jpg'

export const MvpVersion = () => {

  return (
    <SectionLayout id="mvp-version-logo-design">
      <Row style={{ flexDirection: 'row', alignItems: 'center'}}>
        <Col xs={12} md={{ span: 6 }} xs={{ order: 'last' }} md={{ order: 'first' }} className="grid-item">
          <ImageWrapper src={MvpLogo}/>
        </Col>
        <Col xs={12} md={{ span: 6 }} lg={{ span: 5, offset: 1 }} className="grid-item">
            <SectionTitle title="MVP Версия"/>
          <SectionDesc>
            Первой задачей было разработать лендинг как MVP (минимально жизнеспособный продукт) для ознакомления аудитории с объектами компании. Такой подход позволил нам быстро стартануть и раскачивать рекламу на сайт, поскольку сайт как маркетинговый инструмент компания не использовала последние два года.
          </SectionDesc>
        </Col>
      </Row>
    </SectionLayout>
  );
}
