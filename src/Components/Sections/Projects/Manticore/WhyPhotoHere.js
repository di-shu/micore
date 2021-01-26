import React from 'react'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
/*IMAGES*/
const image = '/images/Manticore/whythisphoto.png'

export const WhyPhotoHere = () => {
    return (
        <SectionLayout id="manticore-why-photo">
            <SectionTitle>
                Зачем тут это <span>фото</span>?
            </SectionTitle>
            <SectionDesc>
                Это же огонь. Что за странный вопрос?
            </SectionDesc>
            <ImageWrapper src={image}/>
        </SectionLayout>
    )
}
