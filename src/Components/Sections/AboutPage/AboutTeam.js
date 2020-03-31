import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { TeamList } from '../../Config'
import { useDeviceDetect } from '../../../Helpers'
import { ImageWrapper, SectionDesc, SectionTitle, SectionWrapper, TeamModal } from '../../../Components'
/* STYLES */
import '~/Styles/Sections/About/team.scss'

const Slider = dynamic(() => import('react-slick'), { ssr: false })

const TeamSliderConfig = {
  speed: 800,
  dots: false,
  infinite: false,
  arrows: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  ]
}

export const AboutTeam = () => {
  const [memberIndex, setMemberIndex] = useState(0)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const { mobile, minWidthLaptop } = useDeviceDetect()

  const openModal = (index) => {
    setIsOpenModal(true)
    setMemberIndex(index)
  }

  const closeModal = () => {
    setIsOpenModal(false)
  }

  return (
    <section id="about-team-section" className="section">
      <SectionWrapper>
        <Row className="row-info">
          <Col xs={12} lg={7} className="col-info">
            <div className="info-wrap">
              <SectionTitle title="Our team"/>
              <SectionDesc/>
            </div>
          </Col>
          {minWidthLaptop && (
            <Col lg={5} className="info-grid-item">
              <ImageWrapper isDot/>
            </Col>
          )}
        </Row>

        {mobile && (
          <div className="team-wrapper">
            {TeamList.map(({ image, position, name }, index) => (
              <div key={`member-${name}_${index}`} className="team-card" onClick={() => openModal(index)}>
                <ImageWrapper src={image} className="member-image"/>
                <p className="member-name">
                  <span>{position}: </span>{name}
                </p>
              </div>
            ))}
          </div>
        )}
      </SectionWrapper>

      {!mobile && (
        <div className="section-slider-wrap">
          <Slider {...TeamSliderConfig}>
            {TeamList.map(({ image, position, name }, index) => (
              <div key={`team-member_${index}`} className="member-slide" onClick={() => openModal(index)}>
                <ImageWrapper src={image} className="member-image"/>
                <p className="member-name"><span>{position}:</span> {name}</p>
              </div>
            ))}
          </Slider>
        </div>
      )}
      <TeamModal index={memberIndex} isOpen={isOpenModal} close={closeModal}/>
    </section>
  )
}
