import React, { useEffect, useState } from 'react'
import { ImageWrapper, SectionLayout } from '../../SectionsComponents'

const QuoteCommas = '/Assets/Images/Services/LandingPage/QuoteCommas.svg'

export const ServiceQuote = ({ quotes }) => {
  const [emptyMsg, setEmptyMsg] = useState('')
  const [randQuote, setRandQuote] = useState('')
  
  useEffect(() => {
    setRandQuote(quotes[Math.floor(Math.random() * quotes.length)])
  }, [])
  
  const handleGenerate = () => {
    const getRandNumb = Math.floor(Math.random() * quotes.length)
    const getRandQuote = quotes[getRandNumb]
    
    if (quotes.length === 0) {
      setEmptyMsg('Упс, цитатки кончились :(')
    }
    
    setRandQuote(getRandQuote)
    quotes.splice(getRandNumb, 1)
  }
  
  return (
    <SectionLayout id="service-quote-section">
      <div className="quote-box">
        <ImageWrapper src={QuoteCommas} className="quote-commas" />
        <p className="quote-text">{emptyMsg ? emptyMsg : randQuote}</p>
      </div>
      <button type="button" className="custom-btn" onClick={handleGenerate}><span>Сгенерировать</span></button>
    </SectionLayout>
  )
}