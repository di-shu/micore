import React , { useEffect, useState, useRef} from "react"
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle, HorizontalScroll } from '../../../SectionsComponents'
import {useScroll} from "../../../../Helpers";

export const DevelopingLogo = () => {


    return (
        <SectionLayout  id="manticore-developing__logo">
            <HorizontalScroll>
                <div className="developing-logo__step">
                    <SectionTitle>Разработка <span>лого</span></SectionTitle>
                    <SectionDesc>Со старта мы знали каким будет лого. Забив на другие идеи, прорабатали форму и интервалы.</SectionDesc>
                    <ImageWrapper src="/images/Manticore/grey_logo.svg"/>
                </div>
                <div className="developing-logo__step">
                    <SectionTitle>Проработка <span>Цвета</span></SectionTitle>
                    <SectionDesc>Важный этап - проработка цветовой гаммы лого. Мы не смогли выбрать конкретные оттенки и оставили все. Ну почти все.</SectionDesc>
                    <ImageWrapper src="/images/Manticore/logo_micore.svg"/>
                </div>
                <div className="developing-logo__step">
                    <SectionTitle>Добавляем <span>изюминку</span></SectionTitle>
                    <SectionDesc>Ну, не совсем изюминку. Мы добавили точку и значок торговой марки. Зато как это дополнило логотип.</SectionDesc>
                    <ImageWrapper src="/images/Manticore/logo_micore.svg"/>
                </div>
            </HorizontalScroll>
            <div className="wh-wrap">
                <div className="wh"></div>
                <div className="wh"></div>
                <div className="wh"></div>
            </div>
        </SectionLayout>
    )
}