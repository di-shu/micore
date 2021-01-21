import React from 'react'
import {
    About,
    AboutName,
    Main,
    Why,
    SimplyWords,
    DevelopingLogo
} from '../../src/Components/Sections/Projects/Manticore'
import { MainWrapper } from '~/Components/SectionsComponents'
/*STYLES*/

import '~/Styles/Pages/Projects/manticore.scss'

const Manticore = () => {
    return (
        <MainWrapper id="manticore-project-page">
            <Main/>
            <About/>
            <Why/>
            <AboutName/>
            <SimplyWords/>
            <DevelopingLogo/>
        </MainWrapper>
    )
}

export default Manticore
