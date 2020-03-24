import React from 'react'
import Slider from 'react-slick'

const SliderConfigs = {
  speed: 800,
  dots: true,
  arrows: false,
  slidesToScroll: 1,
  customPaging: () => <div className="custom-dot"><span/></div>
}

export const SectionSlider = (props) => {
  const { slidesToShow = 1, slides, className } = props
  
  return (
    <div className={`section-slider-wrap ${className ? className : ''}`}>
      <Slider
        slidesToShow={slidesToShow}
        {...SliderConfigs}
        {...props}
      >
        {slides && slides.map((slide, index) => (
          <div key={`slide_${index}`} className="slide-wrap">
            <div className="slide-image-wrap">
              <img src={slide.img} alt={`Slide_${index}`} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
