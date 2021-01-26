import React, {useEffect, useRef, useState} from 'react'

export const HorizontalScroll = ({children}) => {
    return (
        <div className={`horizontal-scroll`}>
            <div className="horizontal-scroll__container">
                {children}
            </div>
        </div>
    )
}