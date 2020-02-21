import React from 'react'
import Slider from 'react-slick'
import { isMobileOnly } from 'react-device-detect'
import Dialog from '@material-ui/core/Dialog'
import Typography from '@material-ui/core/Typography'
import { Team } from '../Config'
import Link from 'next/link'

const logo = '/Assets/Images/logo.png'
const CollapseArrow = '/Assets/Images/About/modal-collapse-arrow.png'

export const TeamModal = (props) => {
  const { isOpen, isClose, closeModal, slideSettings, index } = props
  const { slideImage, fullName, position, description } = Team()[index]
  
  return (
    <Dialog
      keepMounted
      open={isOpen}
      onClose={closeModal}
      PaperComponent="div"
      fullScreen={isMobileOnly}
      transitionDuration={{ enter: 500, exit: 500 }}
      className={`member-modal ${isClose ? 'on-leave' : 'on-enter'}`}
    >
      {isMobileOnly ? (
        <div className="modal-header">
          <Link href="/">
            <a className="logo-link">
              <img src={logo} alt="Logo"/>
            </a>
          </Link>
          <div className="close-icon" onClick={closeModal}>
            <span/>
            <span/>
          </div>
        </div>
      ) : (
        <div className="collapse-arrow" onClick={closeModal}>
          <img src={CollapseArrow} alt="Arrow"/>
        </div>
      )}
      {isMobileOnly ? (
        <div className="team-slider-wrap">
          <Slider initialSlide={index} {...slideSettings}>
            {Team().map(({ slideImage, fullName, position, description }, index) => {
              return (
                <div key={`team-member_${index}`} className="team-custom-slide">
                  <div className="team-image-wrap">
                    <img src={slideImage} alt="Team member"/>
                  </div>
                  <div className="team-info-wrap">
                    <Typography variant="h5" className="member-name" children={fullName}/>
                    <div className="member-bottom-wrap">
                      <Typography variant="subtitle1" component="p" className="member-position" children={position}/>
                      <Typography variant="subtitle2" component="p" className="member-description" children={description}/>
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      ) : (
        <div className="team-card-wrap">
          <div className="team-image-wrap">
            <img src={slideImage} alt="Team member"/>
          </div>
          <div className="team-info-wrap">
            <Typography variant="h5" className="member-name" children={fullName}/>
            <Typography variant="subtitle1" component="p" className="member-position" children={position}/>
            <Typography variant="subtitle2" component="p" className="member-description" children={description}/>
          </div>
        </div>
      )}
      {isMobileOnly && (
        <div className="modal-footer">
          <Typography children="Tram-pam-pam"/>
          <Typography children="Manticore development"/>
        </div>
      )}
    </Dialog>
  )
}
