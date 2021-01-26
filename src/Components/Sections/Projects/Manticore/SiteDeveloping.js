import { SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
import { ImageWrapper } from '../../../SectionsComponents';


export const SiteDeveloping = () => {
    return(
        <SectionLayout id="manticore-site-developing">
            <SectionTitle>
                Разработка сайта
            </SectionTitle>
            <SectionDesc>
                Чтобы разработать сайт, каким вы его видете, нам нужно было: щепотка статуй, немного негативного фона, абстракция и множество креативных идей с приправкой анимаций
            </SectionDesc>
            <ImageWrapper isDot/>
        </SectionLayout>
    )
}