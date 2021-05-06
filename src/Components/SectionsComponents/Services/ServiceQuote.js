import React, { useEffect, useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { ImageWrapper, MyScrollAnimation, SectionLayout } from '../../SectionsComponents'

const QuoteCommas = '/images/Services/LandingPage/QuoteCommas.svg'

export const ServiceQuote = ({ quotes }) => {
  const { t } = useTranslation('services')
  const [randIndex, setRandIndex] = useState(0)
  const [word, setWord] = useState(t('empty_quote'));
  
  useEffect(() => {
    // setRandIndex(Math.floor(Math.random() * quotes.length))
      handleGenerate()
  }, [])

  const handleGenerate = () => {
    const getRandNumb = Math.floor(Math.random() * quotes.length)
    // const $quote = $('.quote-text')

    // $quote.removeClass('show')
    // $($quote[getRandNumb]).addClass('show')

   if(quotes.length !== 0) {
       setWord(quotes.pop())
   } else {
       setWord(t('empty_quote'))
   }
  }
  
  return (
    <SectionLayout id="service-quote-section">
      <div className="quote-box">
        <ImageWrapper src={QuoteCommas} className="quote-commas"/>
        <MyScrollAnimation delay={[0]}>
          {/*{quotes.map((quote, index) =>*/}
          {/*  <div key={`quote_${index}`} className={`quote-text ${index === 2 ? 'show' : ''}`}>*/}
          {/*    {quote}*/}
          {/*  </div>*/}
          {/*)}*/}
          {<div className="quote-text show">
            {word}
          </div>}
        </MyScrollAnimation>
      </div>
      <MyScrollAnimation delay={[200]}>
        <button type="button" className="custom-btn" onClick={handleGenerate}><span>{t('button_quote')}</span></button>
      </MyScrollAnimation>
    </SectionLayout>
  )
}