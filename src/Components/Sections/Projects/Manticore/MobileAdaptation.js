import { SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
import { ImageWrapper } from '../../../SectionsComponents';

const image = '/images/Manticore/mobiles.png'

export const MobileAdaptation = () => {
    return(
        <SectionLayout id="manticore-mobile-adaptation">
            <SectionTitle>
                Мобильная адаптация
            </SectionTitle>
            <SectionDesc>
                This website which duis aute irure dolor  in rep ehenderit in voluptate velit esse cillum dolo rez eu fugia nulla pariatur. Excepteur sint occae cat cupid atat non proident, sunt in  culpa qui officia de This website             </SectionDesc>
            <ImageWrapper src={image}/>
            <ImageWrapper isDot/>
        </SectionLayout>
    )
}