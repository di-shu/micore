import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useDeviceDetect } from '../../../../Helpers'
import { ProjectInfoWrap, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'

export const Fonts = () => {
  const { desktop } = useDeviceDetect()

  return (
    <SectionLayout id="marinist-fonts">
      <SectionTitle title="Fonts" display={!desktop} />
      <SectionDesc withDot display={!desktop} />
      <Row>
        <Col xs={12} lg={6}>
          <Row>
            <Col xs={6}>
              <p className="font-example medium">
                AaBbCcDdEe
                FfGgHhIiJjKk
                LlMmNnOoPp
                QqRrSsTt Uu
                VvWwXxYyZz
                1234567890
              </p>
            </Col>
            <Col xs={6}>
              <p className="font-example regular">
                AaBbCcDdEe
                FfGgHhIiJjKk
                LlMmNnOoPp
                QqRrSsTt Uu
                VvWwXxYyZz
                1234567890
              </p>
            </Col>
          </Row>
        </Col>
        <Col xs={12} lg={6}>
          <ProjectInfoWrap>
            <p>Main font</p>
            <SectionDesc withDot>Montserrat Medium</SectionDesc>
            <SectionDesc withDot>Monique Script Regular</SectionDesc>
          </ProjectInfoWrap>
        </Col>
      </Row>
    </SectionLayout>
  )
}
