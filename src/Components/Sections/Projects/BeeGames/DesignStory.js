import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
import { useDeviceDetect } from '../../../../Helpers'
/* IMAGES */
const BeeLogo = '/images/BeeGames/MainLogo.svg'

export const DesignStory = () => {
  const { minWidthLaptop } = useDeviceDetect()

  return (
    <SectionLayout id="bee-games-design-story">
      <Row>
        <Col xs={12} lg={6}>
          <SectionTitle title="Логотип"/>
          <ImageWrapper src={BeeLogo} display={!minWidthLaptop}/>
          <SectionDesc>
            Основной символ повторяет форму соты: bee с англ. - пчела. В соте зашифрованы буквы “B” и “G”.
            В букве “G” также присутствует стрелка, направленная в центр соты - символизирует вовлеченность в игру ее события.
            Характерные для пчелиного окраса черный и желтый цвета, продолжают общую идею.  Шрифт в названии стилизован под игровой.
          </SectionDesc>
        </Col>
        {
          minWidthLaptop && (
            <Col lg={6}>
              <ImageWrapper src={BeeLogo}/>
            </Col>
          )
        }
      </Row>
    </SectionLayout>
  )
}
