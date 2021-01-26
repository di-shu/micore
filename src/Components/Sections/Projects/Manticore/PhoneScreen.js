import React, {createRef, useEffect, useRef} from 'react'
import { ReactSVG } from 'react-svg'
import { ImageWrapper } from '../../../SectionsComponents'
/*IMAGES*/
const phone = '/images/Manticore/Phone.jpg'
const snakeImg = '/images/Manticore/snake.svg'

export const PhoneScreen = () => {
    const snake = useRef(null);
    const wrapper = useRef(null);

    // const movingSnake = () => {
    //     if(snake.current && wrapper.current) {
    //         const elem = snake.current.container;
    //
    //         // clearInterval(int);
    //
    //         function setSnake () {
    //             elem.style.left = `${elem.offsetLeft + 8}px`;
    //
    //             if(elem.offsetLeft > wrapper.current.offsetWidth) {
    //                 elem.style.left = '-90px'
    //             }
    //             changeLetters()
    //
    //             setTimeout(() => {
    //                 setSnake()
    //             }, 250)
    //         }
    //
    //         setSnake()
    //
    //         // const int = setInterval(() => {
    //         //
    //         // }, 250)
    //
    //     }
    //
    // }

    // const getSnakeCoords = () => {
    //     if(snake.current) {
    //         return snake.current.container.offsetLeft;
    //     }
    // }
    //
    // const setLetters = () => {
    //     if(wrapper.current) {
    //         const letters = wrapper.current.querySelectorAll('.letter');
    //
    //         letters.forEach((item, index) => {
    //             if(index !== 0 && index !== letters.length - 1) {
    //                 item.style.left = `${item.offsetLeft + ((index + 1) * 11)}px`;
    //             } else if(index === letters.length - 1) {
    //                 item.style.left = `${item.offsetLeft + ((index + 1) * 12)}px`;
    //             }
    //             else {
    //                 item.style.left = `${item.offsetLeft + 6}px`;
    //             }
    //         })
    //     }
    // }
    //
    // const changeLetters = () => {
    //     const snakeLeft = getSnakeCoords();
    //     const letters = wrapper.current.querySelectorAll('.letter');
    //
    //     letters.forEach((item, index) => {
    //          if(snakeLeft + 87 >= item.offsetLeft && snakeLeft + 87 < item.offsetLeft + 10) {
    //              clearTimeout(timeout)
    //              item.style.visibility = 'hidden';
    //              const timeout = setTimeout(() => {
    //                  item.style.visibility = 'visible'
    //              }, 1000 + (index * 200))
    //          }
    //     })
    // }
    //
    // const scrollHandle = (e) => {
    //     if(window.scrollY >= wrapper.current.getBoundingClientRect().top) {
    //         // movingSnake()
    //     }
    // }
    //
    // useEffect(() => {
    //     setLetters()
    //     document.addEventListener('scroll', scrollHandle)
    // }, [])



    // useEffect(() => {
    //     document.addEventListener('scroll', function () {
    //         if(wrapper.current) {
    //             if(window.scrollY - 1000 >= wrapper.current.getBoundingClientRect().top) {
    //                 const letters = wrapper.current.querySelectorAll('.letter');
    //
    //                 letters.forEach((item, index) => {
    //                     setTimeout(() => {
    //                         item.visibility = 'hidden';
    //                     }, 5000 + (index * 100))
    //                 })
    //
    //             }
    //         }
    //     })
    // }, [])

    // const changeLetters = () => {
    //     let count = 2;
    //     if(wrapper.current) {
    //         const letters = wrapper.current.querySelectorAll('.letter');
    //
    //         if(count < 6) {
    //             setTimeout(() => {
    //                 (function () {
    //                     console.log('called')
    //                     letters[letters.length - 1].innerHTML = count;
    //                     count ++;
    //                 })()
    //             }, 5500 - (count * 240))
    //
    //         } else if(count === 6) {
    //             count = 2;
    //         }
    //
    //     }
    // }
    //
    // useEffect(() => {
    //     changeLetters()
    // }, [])

    return (
        <ImageWrapper src={phone}>
            <div ref={wrapper} className="client-path__screen">
                <div className="letters-wrap">
                    <span className="letter">Э</span>
                    <span className="letter">т</span>
                    <span className="letter">а</span>
                    <span className="letter">п</span>
                    <span className="letter">1</span>
                </div>
                <div className="stepname">брифинг</div>
                <ReactSVG ref={snake} src={snakeImg} className='snake-wrap'/>
            </div>
        </ImageWrapper>
    )
}
