import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { SectionLine } from './SectionLine'
import { TypeSomething } from './TypeSomething'
import { ProjectInfoWrap } from './ProjectInfoWrap'
import { ImageWrapper } from '../ImageWrapper'
import { SectionLayout } from '../SectionLayout'
import { SectionDesc, SectionTitle } from '../SectionInfo'
import { useDeviceDetect } from '../../../Helpers'

export const ProjectAboutSection = (props) => {
  const { Content, description, name, year, link, additionalInfo, isLine, isOverflow } = props
  const { desktop } = useDeviceDetect()
  
  return (
    <>
      <SectionLayout
        id="about-projects-section"
        Header={() => Content ? Content : null}
        sectionClassName={isOverflow ? 'is-overflow' : ''}
        Footer={() => isLine ? <SectionLine direction="bottom"/> : null}
      >
        <ImageWrapper isDot display={desktop}/>
        <SectionTitle title="О проекте"/>
        <Row className="grid-container">
          <Col xs={12} lg={6} className="grid-item">
            <ProjectInfoWrap
              name={name}
              year={year}
              link={link}
              isProjectInfo
            />
          </Col>
          <Col xs={12} lg={6} className="grid-item">
            <SectionDesc withDot children={description}/>
          </Col>
        </Row>
        <TypeSomething content={additionalInfo} size={3}/>
      </SectionLayout>
    </>
  )
}
