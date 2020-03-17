import React, { useEffect } from 'react'
import styled from 'styled-components'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import { ActiveLink, ImageWrapper } from '../SectionsComponents'
import { AnimationClass, useDeviceDetect } from '../../Helpers'

const CardWrap = styled(Col)`
  height: 200px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    transform: translateX(0);
    transition: all 1s cubic-bezier(0.64, 0.04, 0.35, 1);
    transition-delay: ${props => props.delay}s;
    background-color: #10151b;
    z-index: 5;
  }
`

export const TabWrap = ({ animation, tabs, isSlice, isSkills }) => {
  const getProjects = (arr) => isSlice ? arr : arr.slice(0, 6)
  const { mobile, desktop } = useDeviceDetect()
  
  useEffect(() => {
    tabs.map((tab) => tab.content && tab.content.map((content) => content.delay = Number(Math.random().toFixed(2))))
  }, [])
  
  return (
    <Tab.Container id="portfolio-tabs" defaultActiveKey={tabs[0].key} transition={false}>
      <Nav variant="pills" className={AnimationClass({ animation, className: 'tab-wrap' })}>
        {tabs.map((tab, index) => (
          <Nav.Item key={`${tab.key}_${index}`} className="tab-item">
            <Nav.Link eventKey={tab.key} className="tab-link">{tab.label}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      <Tab.Content className={AnimationClass({ animation, className: 'tab-content-wrap' })}>
        {tabs.map((tab, index) => (
          <Tab.Pane key={`tab_${index}`} eventKey={tab.key}>
            {isSkills ? (
              <Accordion defaultActiveKey={tab.content[0].value}>
                {tab.content.map((content, index) => (
                  <Card key={`skill_${index}`} className="skill-row">
                    <Card.Header className="skill-header">
                      <Accordion.Toggle as={Card.Header} eventKey={mobile ? content.value : 'panel1'} className="skill-toggle">
                        <p className="skill-name">{content.name}</p>
                        <ImageWrapper src={content.icon} className="skill-icon"/>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={mobile ? content.value: 'panel1'} className="skill-collapse">
                      <Card.Body className="skill-body">
                        <p className="skill-description">{content.description}</p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                ))}
              </Accordion>
            ) : (
              <Row>
                {tab.content && getProjects(tab.content).map((content, index) => (
                  <CardWrap
                    key={`card_${index}`}
                    xs={content.size.xs}
                    md={content.size.md}
                    lg={content.size.lg}
                    xl={content.size.xl}
                    delay={content.delay}
                    className={AnimationClass({ animation, className: 'card-wrap' })}
                  >
                    <ActiveLink link={content.link} className="project-nav-link"/>
                    <ImageWrapper src={content.img} className="project-image"/>
                    <h6 className="project-title">{content.title}</h6>
                    {desktop && <p className="project-link" children="View project"/>}
                  </CardWrap>
                ))}
              </Row>
            )}
          </Tab.Pane>
        ))}
      </Tab.Content>
    </Tab.Container>
  )
}
