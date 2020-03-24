import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
  SectionDesc,
  SectionTitle,
  ImageWrapper,
  SectionLayout,
  ProjectInfoWrap
} from '../../../SectionsComponents'
/*IMAGES*/
const Napkins = '/Assets/Images/Bessarabkiy/BessarabskiyNapkins.png'

export const Other = () => (
  <SectionLayout id="bessarabskiy-other" Footer={() => <ImageWrapper src={Napkins}/>}>
    <SectionTitle title="Other products"/>
    <Row>
      <Col xs={12} lg={6}>
        <ProjectInfoWrap
          isProjectInfo
          year="june, 2018"
          name="Бессарабский Дворик"
          link="bessarabskiy-dvorik.com"
        />
      </Col>
      <Col xs={12} lg={6}>
        <SectionDesc/>
      </Col>
    </Row>
  </SectionLayout>
)
