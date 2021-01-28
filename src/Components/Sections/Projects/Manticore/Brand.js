import React from 'react'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
/*IMAGES*/
const image = '/images/Manticore/socks.jpg'

export const Brand = () => {
    return (
        <SectionLayout id="manticore-brand">
            <SectionTitle>
                Носители бренда
            </SectionTitle>
            <SectionDesc>
                Важным элементом бренда являются его носители. Забрендировать можно что-угодно, будь то носки или медицинские маски. Как говорится, почему бы и нет?
            </SectionDesc>
            <ImageWrapper isDot/>
            <ImageWrapper src={image}/>
        </SectionLayout>
    )
}
