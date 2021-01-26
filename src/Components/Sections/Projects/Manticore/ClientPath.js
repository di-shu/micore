import React, {useEffect, useRef} from 'react'
import { PhoneScreen } from "./PhoneScreen";
import { SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'

export const ClientPath = () => {

    return (
        <SectionLayout id="manticore-client-path">
            <SectionTitle>
                Путь клиента
            </SectionTitle>
            <SectionDesc>
                So you have heard about this site or you have been to it, but you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier            </SectionDesc>
            {/*<PhoneScreen/>*/}
        </SectionLayout>
    )
}
