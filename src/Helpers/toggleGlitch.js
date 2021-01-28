import {useEffect, useState} from "react";

export const toggleGlitch = (wrap) => {
    const [scrolled, setScrolled] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            if(wrap) {
                const elem = wrap.current;
                if(window.scrollY > elem.getBoundingClientRect().height + 50) {
                    setScrolled(false)
                } else if(window.scrollY < elem.getBoundingClientRect().height + 50) {
                    setScrolled(true)
                }
            }
        }


        if(wrap) {
            document.addEventListener('scroll', handleScroll)
        }

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return { scrolled }
}