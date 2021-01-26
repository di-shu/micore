import { SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
import { ImageWrapper } from '../../../SectionsComponents';

const image = '/images/Services/Branding/MainStatue.png'

export const Modernizing = () => {
    return(
        <SectionLayout id="manticore-modernizing">
            <ImageWrapper isDot/>
            <SectionTitle>
                <span>О</span>современивание классики
            </SectionTitle>
            <SectionDesc>
                This website which duis aute irure dolor  in rep ehenderit in voluptate velit esse cillum dolo rez eu fugia nulla pariatur. Excepteur sint occae cat cupid atat non proident, sunt in  culpa qui officia de This website which duis aute irure dolor  in rep ehenderit in vol
            </SectionDesc>
            <ImageWrapper src={image}/>
        </SectionLayout>
    )
}