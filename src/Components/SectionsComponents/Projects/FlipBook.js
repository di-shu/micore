import React, { useEffect, useRef, useState } from 'react'
/*IMAGES*/
const ArrowLeft = '/Assets/Images/FlipbookArrL.svg'
const ArrowRight = '/Assets/Images/FlipbookArrR.svg'
const ArrowLeftW = '/Assets/Images/FlipbookArrLW.svg'
const ArrowRightW = '/Assets/Images/FlipbookArrRW.svg'

export const FlipBook = ({ isNavWhite, pages }) => {
  let fadeClass = useRef(null)
  const [isBookOpen, setIsBookOpen] = useState(false)

  useEffect(() => {
    if (fadeClass) {
      $(fadeClass).turn({
        width: window.innerWidth < 577 ? 340 : window.innerWidth < 991 ? 690 : window.innerWidth < 1199 ? 800 : 1100,
        height: window.innerWidth < 577 ? 250 : window.innerWidth < 1199 ? 350 : 400,
        autoCenter: true,
        display: window.innerWidth < 577 ? 'single' : 'double',
        duration: 1200,
        turnCorners: 'bl, br'
      })
    }
  }, [])

  const goToPrevPage = () => {
    $('.flipbook').turn('previous')
  }

  const goToNextPage = () => {
    $('.flipbook').turn('next')
  }

  const handleFlipClick = () => {
    setIsBookOpen(true)
    !isBookOpen && $('.flipbook').turn('next')
  }

  return (
    <div className={`flipbook-container ${isBookOpen ? 'isOpen' : ''}`} onClick={handleFlipClick}>
      <div className="open-wrap">
        <span className="sub-title">click to open</span>
        <span className="line"/>
        <span className="circle"/>
      </div>
      <div className="flipbook" ref={el => fadeClass = el}>
        {pages && pages.map((page, index) => (
          <div key={index} className="page">
            <img src={page} alt="Brandbook page"/>
          </div>
        ))}
      </div>
      <div className="logobook-nav">
        <img src={isNavWhite ? ArrowLeftW : ArrowLeft} className="arrow-left" onClick={goToPrevPage} alt="Arrow left"/>
        <p style={{ color: isNavWhite ? '#fff' : '#493a33' }}>flip page</p>
        <img src={isNavWhite ? ArrowRightW : ArrowRight} className="arrow-right" onClick={goToNextPage} alt="Arrow right"/>
      </div>
    </div>
  )
}
