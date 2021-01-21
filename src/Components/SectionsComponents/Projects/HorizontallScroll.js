import React, {useEffect, useRef, useState} from 'react'

export const HorizontalScroll = ({children}) => {
    const wrapper = useRef(null);
    const [isBottom, setIsBottom] = useState(false)

    const handleScroll = (e) => {
        const window = e.currentTarget;

        if(wrapper.current.getBoundingClientRect().top <= 0) {
            setIsBottom(true);
        } else {
            setIsBottom(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div ref={wrapper} onScroll={handleScroll} className={`horizontal-scroll`}>
            <div className="horizontal-scroll__container">
                {children}
            </div>
        </div>
    )
}