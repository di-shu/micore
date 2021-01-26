import { SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
import { ImageWrapper } from '../../../SectionsComponents';

const image = '/images/Manticore/notebook-wow.png'

export const WowEffect = () => {
    return(
        <SectionLayout id="manticore-wow">
            <SectionTitle>
                WOW-эффект
            </SectionTitle>
            <SectionDesc>
                This website which duis aute irure dolor  in rep ehenderit in voluptate velit esse cillum dolo rez eu fugia nulla pariatur. Excepteur sint occae cat cupid atat non proident, sunt in  culpa qui officia de Thi
            </SectionDesc>
            <ImageWrapper src={image}/>
            <ImageWrapper isDot/>
        </SectionLayout>
    )
}