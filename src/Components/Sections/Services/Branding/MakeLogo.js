import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useDeviceDetect } from '../../../../Helpers'
import { ImageWrapper, MyScrollAnimation, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'

const LogoImage = '/images/logo.svg'

const LettersArray = [
  '/images/Services/Branding/MLetters/mi-1.svg',
  '/images/Services/Branding/MLetters/mi-2.svg',
  '/images/Services/Branding/MLetters/mi-3.svg',
  '/images/Services/Branding/MLetters/mi-4.svg',
  '/images/Services/Branding/MLetters/mi-5.svg',
  '/images/Services/Branding/MLetters/mi-6.svg',
  '/images/Services/Branding/MLetters/mi-7.svg',
  '/images/Services/Branding/MLetters/mi-8.svg',
  '/images/Services/Branding/MLetters/mi-9.svg',
  '/images/Services/Branding/MLetters/mi-10.svg',
  '/images/Services/Branding/MLetters/mi-11.svg',
  '/images/Services/Branding/MLetters/mi-12.svg',
  '/images/Services/Branding/MLetters/mi-13.svg',
  '/images/Services/Branding/MLetters/mi-14.svg',
  '/images/Services/Branding/MLetters/mi-15.svg',
  '/images/Services/Branding/MLetters/mi-16.svg',
  '/images/Services/Branding/MLetters/mi-17.svg',
  '/images/Services/Branding/MLetters/mi-18.svg',
  '/images/Services/Branding/MLetters/mi-19.svg',
  '/images/Services/Branding/MLetters/mi-20.svg',
  '/images/Services/Branding/MLetters/mi-21.svg',
  '/images/Services/Branding/MLetters/mi-22.svg',
  '/images/Services/Branding/MLetters/mi-23.svg',
  '/images/Services/Branding/MLetters/mi-24.svg',
  '/images/Services/Branding/MLetters/mi-25.svg',
  '/images/Services/Branding/MLetters/mi-26.svg',
  '/images/Services/Branding/MLetters/mi-27.svg',
  '/images/Services/Branding/MLetters/mi-28.svg',
  '/images/Services/Branding/MLetters/mi-29.svg',
  '/images/Services/Branding/MLetters/mi-30.svg',
  '/images/Services/Branding/MLetters/mi-31.svg',
  '/images/Services/Branding/MLetters/mi-32.svg',
  '/images/Services/Branding/MLetters/mi-33.svg',
  '/images/Services/Branding/MLetters/mi-34.svg',
  '/images/Services/Branding/MLetters/mi-35.svg',
  '/images/Services/Branding/MLetters/mi-36.svg'
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
    <SectionLayout id="branding-make-logo" Header={() => <ImageWrapper isDot display={!minWidthLaptop}/>}>
      <Row>
        <Col xs={12} lg={6}>
          <MyScrollAnimation delay={[200, 400, 600]}>
            <SectionTitle title="Как разрабатывается логотип" isContentWhite/>
            <SectionDesc isContentWhite className="d-none d-lg-block">
              Иногда заказчикам кажется, что лого появляется по нажатию на волшебную кнопку "создать логотип" (кнопка
              справа, кстати), но лого создаётся исходя из брифа и последующего анализа рынка. В ходе работы мы пробуем
              разные идеи, шрифты, символы и дизайнерские приёмы, но в конечном итоге мы предоставляем 3 дотошно
              проработанных концепции
            </SectionDesc>
            <div className="making-logo-wrap d-flex d-lg-none">
              <ImageWrapper src={selectedLetter}
                            className={`logo-image ${isLastLetter ? 'active' : ''} ${startChange ? 'start-change' : ''}`}/>
              <button className={`custom-btn ${startChange ? 'hide' : ''}`} onClick={changeLetter}>
                <span>Создать логотип</span></button>
            </div>
          </MyScrollAnimation>
        </Col>
        <Col xs={12} lg={6}>
          <MyScrollAnimation delay={[200, 400]}>
            <SectionDesc isContentWhite className="d-block d-lg-none"/>
            <div className="making-logo-wrap d-none d-lg-flex">
              <ImageWrapper src={selectedLetter}
                            className={`logo-image ${isLastLetter ? 'active' : ''} ${startChange ? 'start-change' : ''}`}/>
              <button className={`custom-btn ${startChange ? 'hide' : ''}`} onClick={changeLetter}>
                <span>Создать логотип</span></button>
            </div>
          </MyScrollAnimation>
        </Col>
      </Row>
    </SectionLayout>
  )
}
