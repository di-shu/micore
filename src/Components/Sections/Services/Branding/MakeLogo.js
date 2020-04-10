import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useDeviceDetect } from '../../../../Helpers'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'

const LogoImage = '/Assets/Images/logo.svg'

const LettersArray = [
  '/Assets/Images/Services/Branding/MLetters/mi-1.svg',
  '/Assets/Images/Services/Branding/MLetters/mi-2.svg',
  '/Assets/Images/Services/Branding/MLetters/mi-3.svg',
  '/Assets/Images/Services/Branding/MLetters/mi-4.svg',
  '/Assets/Images/Services/Branding/MLetters/mi-5.svg',
  '/Assets/Images/Services/Branding/MLetters/mi-6.svg',
  '/Assets/Images/Services/Branding/MLetters/mi-7.svg',
  '/Assets/Images/Services/Branding/MLetters/mi-8.svg',
  '/Assets/Images/Services/Branding/MLetters/mi-9.svg',
  '/Assets/Images/Services/Branding/MLetters/mi-10.svg',
  '/Assets/Images/Services/Branding/MLetters/mi-11.svg',
  '/Assets/Images/Services/Branding/MLetters/mi-12.svg',
  '/Assets/Images/Services/Branding/MLetters/mi-13.svg',
  '/Assets/Images/Services/Branding/MLetters/mi-14.svg',
  '/Assets/Images/Services/Branding/MLetters/mi-15.svg',
  '/Assets/Images/Services/Branding/MLetters/mi-16.svg',
  '/Assets/Images/Services/Branding/MLetters/mi-17.svg',
  '/Assets/Images/Services/Branding/MLetters/mi-18.svg',
  '/Assets/Images/Services/Branding/MLetters/mi-19.svg',
  '/Assets/Images/Services/Branding/MLetters/mi-20.svg',
  '/Assets/Images/Services/Branding/MLetters/mi-21.svg',
  '/Assets/Images/Services/Branding/MLetters/mi-22.svg',
  '/Assets/Images/Services/Branding/MLetters/mi-23.svg',
  '/Assets/Images/Services/Branding/MLetters/mi-24.svg',
  '/Assets/Images/Services/Branding/MLetters/mi-25.svg',
  '/Assets/Images/Services/Branding/MLetters/mi-26.svg',
  '/Assets/Images/Services/Branding/MLetters/mi-27.svg',
  '/Assets/Images/Services/Branding/MLetters/mi-28.svg',
  '/Assets/Images/Services/Branding/MLetters/mi-29.svg',
  '/Assets/Images/Services/Branding/MLetters/mi-30.svg',
  '/Assets/Images/Services/Branding/MLetters/mi-31.svg',
  '/Assets/Images/Services/Branding/MLetters/mi-32.svg',
  '/Assets/Images/Services/Branding/MLetters/mi-33.svg',
  '/Assets/Images/Services/Branding/MLetters/mi-34.svg',
  '/Assets/Images/Services/Branding/MLetters/mi-35.svg',
  '/Assets/Images/Services/Branding/MLetters/mi-36.svg',
]

let count = 0

export const MakeLogo = () => {
  const [startChange, setStartChange] = useState(false)
  const [isLastLetter, setIsLastLetter] = useState(false)
  const [selectedLetter, setSelectedLetter] = useState(LettersArray[0])
  const { minWidthLaptop } = useDeviceDetect()

  const changeLetter = () => {
    setStartChange(true)
    const int = setInterval(() => {
      count++
      setSelectedLetter(LettersArray[count])

      if (count === LettersArray.length - 1) {
        clearInterval(int)
        setIsLastLetter(true)
        setTimeout(() => {
          setIsLastLetter(false)
          setSelectedLetter(LogoImage)
        }, 500)
      }
    }, 125)
  }

  return (
    <SectionLayout id="branding-make-logo" Header={() => <ImageWrapper isDot display={!minWidthLaptop} />}>
      <Row>
        <Col xs={12} lg={6}>
          <SectionTitle title="Как разрабатывается логотип" isContentWhite />
          <SectionDesc isContentWhite className="d-none d-lg-block"/>
          <div className="making-logo-wrap d-flex d-lg-none">
            <ImageWrapper src={selectedLetter} className={`logo-image ${isLastLetter ? 'active' : ''} ${startChange ? 'start-change' : ''}`} />
            <button className={`custom-btn ${startChange ? 'hide' : ''}`} onClick={changeLetter}><span>Создать логотип</span></button>
          </div>
        </Col>
        <Col xs={12} lg={6}>
          <SectionDesc isContentWhite className="d-block d-lg-none"/>
          <div className="making-logo-wrap d-none d-lg-flex">
            <ImageWrapper src={selectedLetter} className={`logo-image ${isLastLetter ? 'active' : ''} ${startChange ? 'start-change' : ''}`} />
            <button className={`custom-btn ${startChange ? 'hide' : ''}`} onClick={changeLetter}><span>Создать логотип</span></button>
          </div>
        </Col>
      </Row>
    </SectionLayout>
  )
}
