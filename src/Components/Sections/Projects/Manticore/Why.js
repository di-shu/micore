import React from 'react'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
/*IMAGES*/
const Xzibit = '/images/ManticoreProject/Xzibit.png'

export const Why = () => {
  return (
    <SectionLayout
      id="manticore-why"
      Footer={() => (
        <ImageWrapper src={Xzibit}>
          <p className="image-text">
            Мы поместили кейс в кейсе, чтобы вы могли читать кейс, пока находитесь в кейсе.
          </p>
        </ImageWrapper>
      )}
    >
      <SectionTitle title="Что это и зачем?" isContentWhite/>
      <SectionDesc isContentWhite withDot>
        Это кейс того, как мы создавали себя. Спойлер: в конце странице есть блок с описанием, как мы делали этот кейс. Кейс в кейсе. Привет xzibit’у. Хотели ещё монитор
        где-то поместить, но не нашли подходящего места. Зачем? Потому что можем.
      </SectionDesc>
    </SectionLayout>
  )
}
