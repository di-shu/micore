import React, { useState } from 'react'
import Slider from 'react-slick'
import { isMobileOnly } from 'react-device-detect'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { Team } from '../../Config'
import { useDeviceDetect } from '../../../Helpers'
import { ImageWrapper, TeamModal } from '../.'

const CustomNextArrow = (props) => {
  const { className, onClick } = props
  
  return (
    <div onClick={onClick} className={className}>
      <Typography variant="subtitle1" children="NEXT" component="p"/>
    </div>
  )
}
const CustomPrevArrow = (props) => {
  const { className, onClick } = props
  
  return (
    <div onClick={onClick} className={className}>
      <Typography variant="subtitle1" children="PREV" component="p"/>
    </div>
  )
}
const ModalSliderConfig = {
  speed: 800,
  dots: false,
  infinite: true,
  slidesToShow: 1,
  swipe: false,
  touchMove: false,
  slidesToScroll: 1,
  nextArrow: <CustomNextArrow className="custom-next-arrow"/>,
  prevArrow: <CustomPrevArrow className="custom-prev-arrow"/>
}
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
  const isLaptop = useDeviceDetect(true)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isCloseModal, setIsCloseModal] = useState(false)
  const [memberIndex, setMemberIndex] = useState(0)
  
  const openModal = (index) => {
    setIsOpenModal(true)
    setIsCloseModal(false)
    setMemberIndex(index)
  }
  const closeModal = () => {
    setIsCloseModal(true)
    setTimeout(() => setIsOpenModal(false), 600)
  }
  
  return (
    <section id="about-third-section" className="section">
      <Container maxWidth="lg" className="wrapper">
        <Grid container className="info-grid-container">
          <Grid item xs={12} md={7} className="info-grid-item">
            <div className="info-wrap">
              <Typography variant="h2" children="Our team" className="section-title"/>
              <Typography className="section-description">
                This website which duis aute irure dolor in rep ehenderit in voluptate velit esse cillum dolo rez eu fugia nulla pariatur.
                Excepteur sint occae cat cupid atat non proident, sunt in culpa qui officia de.
                This website which duis aute irure dolor in rep ehenderit in voluptate velit esse cillum dolo rez eu fugia nulla pariatur.
                Excepteur sint occae cat cupid atat non proident, sunt in culpa qui officia de
              </Typography>
            </div>
          </Grid>
          {isLaptop && (
            <Grid item md={5} className="info-grid-item">
              <ImageWrapper isDot />
            </Grid>
          )}
        </Grid>
        {isMobileOnly ? (
          <div className="team-wrapper">
            {Team(openModal).map(({ image, position, name, onClick }, index) => {
              return (
                <div key={`team-member-${name}_${index}`} className="team-card" onClick={() => onClick(index)}>
                  <div className="member-image">
                    <img src={image} alt="Team member"/>
                  </div>
                  <Typography className="member-name">
                    <span>{position}:</span> {name}
                  </Typography>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="section-slider-wrap">
            <Slider {...TeamSliderConfig}>
              {Team(openModal).map(({ image, position, name, onClick }, index) => {
                return (
                  <div key={`team-member_${index}`} className="member-slide" onClick={() => onClick(index)}>
                    <div className="member-image">
                      <img src={image} alt="Team member"/>
                    </div>
                    <Typography className="member-name">
                      <span>{position}:</span> {name}
                    </Typography>
                  </div>
                )
              })}
            </Slider>
          </div>
        )}
      </Container>
      {isOpenModal && (
        <TeamModal
          index={memberIndex}
          isOpen={isOpenModal}
          isClose={isCloseModal}
          closeModal={closeModal}
          slideSettings={ModalSliderConfig}
        />
      )}
    </section>
  )
}
