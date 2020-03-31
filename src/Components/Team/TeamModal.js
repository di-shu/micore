import React from 'react'
import dynamic from 'next/dynamic'
import Modal from 'react-bootstrap/Modal'
import { TeamList } from '../Config'
import { useDeviceDetect } from '../../Helpers'
import { ImageWrapper } from '../SectionsComponents'

const Slider = dynamic(() => import('react-slick'), { ssr: false })
const Logo = '/Assets/Images/logo.png'
const CollapseArrow = '/Assets/Images/About/modal-collapse-arrow.png'

const CustomNextArrow = (props) => {
  const { className, onClick } = props
  
  return (
    <div onClick={onClick} className={className}>
      <span>NEXT</span>
    </div>
  )
}
const CustomPrevArrow = (props) => {
  const { className, onClick } = props
  
  return (
    <div onClick={onClick} className={className}>
      <span>PREV</span>
    </div>
  )
}
const SliderConfig = {
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

const MemberSlider = ({ index, configs, team }) => {
  const { mobile } = useDeviceDetect()
  
  return mobile && (
    <div className="team-slider-wrap">
      <Slider initialSlide={index} {...configs}>
        {team.map(({ slideImage, fullName, position, description }, index) => (
          <div key={`team-member_${index}`} className="team-custom-slide">
            <ImageWrapper src={slideImage} className="team-image-wrap"/>
            <div className="team-info-wrap">
              <h5 className="member-name" children={fullName}/>
              <div className="member-bottom-wrap">
                <p className="member-position" children={position}/>
                <p className="member-description" children={description}/>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
const MemberCard = ({ img, fullName, position, desc }) => {
  const { mobile } = useDeviceDetect()
  
  return !mobile && (
    <div className="team-card-wrap">
      <ImageWrapper src={img} className="team-image-wrap"/>
      <div className="team-info-wrap">
        <h5 className="member-name" children={fullName}/>
        <p className="member-position" children={position}/>
        <p className="member-description" children={desc}/>
      </div>
    </div>
  )
}

export const TeamModal = (props) => {
  const { isOpen, index, close } = props
  const { mobile } = useDeviceDetect()
  const { slideImage, fullName, position, description } = TeamList[index]
  
  return (
    <Modal
      show={isOpen}
      onHide={close}
      backdrop={false}
      dialogClassName={`member-modal`}
    >
      <Modal.Header>
        {mobile && (
          <div className="close-icon" onClick={close}>
            <span/>
            <span/>
          </div>
        )}
        <ImageWrapper src={CollapseArrow} className="collapse-arrow" onClick={close} display={!mobile}/>
      </Modal.Header>
      <Modal.Body>
        <MemberSlider team={TeamList} index={index} configs={SliderConfig}/>
        <MemberCard img={slideImage} fullName={fullName} position={position} desc={description}/>
      </Modal.Body>
    </Modal>
  )
}
