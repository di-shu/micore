import React from 'react'
import { MainWrapper } from '../../src/Components'
import {
    About,
    AboutName,
    Main,
    Why,
    SimplyWords,
    Brand,
    ClientPath,
    Modernizing,
    WowEffect,
    Statues,
    MobileAdaptation, Case
} from '../../src/Components/Sections/Projects/Manticore'
import '../../src/Styles/Pages/Projects/manticore.scss'

const Manticore = () => {
    return (
        <MainWrapper id="manticore-project-page">
            <Main/>
            <About/>
            <Why/>
            <AboutName/>
            <SimplyWords/>
            <Brand/>
            {/*<ClientPath/>*/}
            <Modernizing/>
            <WowEffect/>
            <Statues/>
            <MobileAdaptation/>
            <Case/>
        </MainWrapper>
    )
}

export default Manticore
