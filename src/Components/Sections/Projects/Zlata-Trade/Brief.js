import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionTitle
} from '../../../SectionsComponents'
import { useDeviceDetect } from '../../../../Helpers'
import { BriefList, BriefCard } from './Config'

export const Brief = () => {
  const { desktop } = useDeviceDetect()
  
  return (
    <SectionLayout id="zlata-brief">
      <SectionTitle title="Философия"/>
      <SectionDesc>
        На старте проекта мы определились о чем будет говорить новая айдентика. Важной ее составляющей выступает логотип
        компании. Главный символ в виде сокола имеет свою историю и глубокий смысл. В нем зашифрованы определяющие для
        компании ценности - уважение к прошлому и уверенность в будущем.
      </SectionDesc>
      {/*<ImageWrapper isDot display={desktop}/>*/}
      <Row className="grid-container-brief">
        {BriefList.map((brief, index) => (
          <Col key={`brief_${index}`} xs={12} md={6} lg={4} className="grid-item-brief">
            <BriefCard title={brief.title} desc={brief.desc}/>
          </Col>
        ))}
      </Row>
    </SectionLayout>
  )
}
