import React, { useEffect, useState } from 'react'
import { ImageWrapper, SectionLayout } from '../../SectionsComponents'

const QuoteCommas = '/Assets/Images/Services/LandingPage/QuoteCommas.svg'

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
        {quotes.map((quote, index) => <p key={`quote_${index}`} className={`quote-text ${index === randIndex ? 'show' : ''}`}>{quote}</p>)}
      </div>
      <button type="button" className="custom-btn" onClick={handleGenerate}><span>Сгенерировать</span></button>
    </SectionLayout>
  )
}