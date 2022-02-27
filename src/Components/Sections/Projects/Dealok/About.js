import React from 'react'
import { SectionLayout, SectionTitle } from '../../../SectionsComponents'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const About = () => {
  return (
    <SectionLayout
      id="dealok-about"
    >
			<Row>
				<Col md={12} lg={6}>
					<SectionTitle title="About Project"/>
				</Col>
				<Col md={12} lg={6} className="about-items">
					<div className="about-item">
						<h3 className='about-item__title'>Client</h3>
						<p className='about-item__text'>Наши клиенты из сферы юриспруденции. Проработать в ней ни один год, они поняли, что есть запрос на поиск граммотных специалистов. Поскольку они понимает свою сферу и запускала ранее два проекта, они пришла к нам с чётким видением и задачей на проект.</p>
					</div>
					<div className="about-item">
						<h3 className='about-item__title'>Main task</h3>
						<p className='about-item__text'>Свести нотариусов, юристов и адвокатов на одной платформе. Дать им возможность проводить сделки внутри платформы.</p>
					</div>
					<div className="about-item">
						<h3 className='about-item__title'>Solution</h3>
						<p className='about-item__text'>Реализовать аналог фриланс-биржи, где пользователи проверялись бы админами на наличие лицензии. Для MVP версии реализовать: работу с аккаунтом, сделки, отзывы, уведомления и чат.</p>
					</div>
				</Col>
			</Row>
    </SectionLayout>
  )
}