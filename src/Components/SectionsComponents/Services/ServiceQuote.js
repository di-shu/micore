import React, { useEffect, useState } from 'react'
import { ImageWrapper, MyScrollAnimation, SectionLayout } from '../../SectionsComponents'

const QuoteCommas = '/images/Services/LandingPage/QuoteCommas.svg'

export const ServiceQuote = ({ quotes }) => {
  const [randIndex, setRandIndex] = useState(0)
  
  useEffect(() => {
    setRandIndex(Math.floor(Math.random() * quotes.length))
  }, [])

  const handleGenerate = () => {
    const getRandNumb = Math.floor(Math.random() * quotes.length)
    const $quote = $('.quote-text')

    $quote.removeClass('show')
    $($quote[getRandNumb]).addClass('show')
  }
  
  return (
    <SectionLayout id="service-quote-section">
      <div className="quote-box">
        <ImageWrapper src={QuoteCommas} className="quote-commas" />
        <MyScrollAnimation delay={[0]}>
          {quotes.map((quote, index) => <p key={`quote_${index}`} className={`quote-text ${index === randIndex ? 'show' : ''}`}>{quote}</p>)}
        </MyScrollAnimation>
      </div>
      <MyScrollAnimation delay={[200]}>
        <button type="button" className="custom-btn" onClick={handleGenerate}><span>Сгенерировать</span></button>
      </MyScrollAnimation>
    </SectionLayout>
  )
}