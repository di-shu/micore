import { SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
import { ImageWrapper } from '../../../SectionsComponents';

const image = '/images/Manticore/statues.png'

export const Statues = () => {
    return(
        <SectionLayout id="manticore-statues">
            <SectionTitle>
                Статуи
            </SectionTitle>
            <SectionDesc>
                Ключевая особенность сайта - это статуи. Страшно представить сколько ушло времени на поиск, обработку, шлифовку. Но в этом наша уникальность и оно того стоило.
            </SectionDesc>
            <ImageWrapper isDot/>
            <ImageWrapper src={image}/>
        </SectionLayout>
    )
}