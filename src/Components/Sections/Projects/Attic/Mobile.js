import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
  SectionDesc,
  SectionTitle,
  SectionLayout,
} from '../../../SectionsComponents'
import { SectionFooter } from './Config/MobileFooterContent'

export const Mobile = () => {
  return (
    <SectionLayout id="attic-mobile" Footer={SectionFooter} className="top-info-wrapper">
      <Row>
        <Col xs={12}>
          <SectionTitle title="Мобильная адаптация" />
        </Col>
      </Row>
    </SectionLayout>
  )
}
