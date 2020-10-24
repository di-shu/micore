import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import { InputControl } from '../Inputs'
import { useDeviceDetect } from '../../Helpers'
import { ImageWrapper, SectionTitle, SocialsWrap } from '../SectionsComponents'
import { Modal } from 'react-bootstrap'
/* IMAGES */
const MapMarker = '/images/map-marker.svg'
const FooterLogo = '/images/footer-logo.svg'
const ContactHand = '/images/contact-hand.png'

const InitValues = { name: '', phone: '', message: '' }

const FormInputs = [
  {
    id: 'name',
    label: 'Имя',
    required: true
  },
  {
    id: 'phone',
    type: 'tel',
    label: 'Телефон',
    mask: '+38 (099) 999-99-99',
    required: true
  },
  {
    rows: 4,
    id: 'message',
    type: 'textarea',
    placeholder: 'Сообщение'
  }
]

export const FooterSection = ({ isContact, animation }) => {
  const [loading, setLoading] = useState(false)
  const [modal, setModal] = useState(false)
  const [values, setValues] = useState(InitValues)
  const { pathname } = useRouter()
  const { mobile, desktop, minWidthLaptop } = useDeviceDetect()
  
  const openModal = () => {
    setModal(true)
  }
  
  const closeModal = () => {
    setModal(false)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
  
    setLoading(true)
    
    $.ajax({
      method: 'POST',
      url: 'http://micore-admin.comnd-x.com/send',
      data: {
        ...values,
        url: pathname,
        country: 'RU'
      },
      success: ()=> {
        openModal()
        setValues(InitValues)
        setLoading(false)
      },
      error: () => {
        alert('Ошибка при отправке запроса!')
      }
    })
  }

  const handleChange = e => {
    setValues({ ...values, [e.target.id]: e.target.value })
  }

  return (
    <section id="footer-section" className={`section ${!isContact ? 'footer-section' : 'active'}`}>
      <div className={`container-wrap ${animation ? 'on-enter' : 'on-leave'}`}>
        {isContact && minWidthLaptop && (
          <ImageWrapper src={ContactHand} className="image-wrap"/>
        )}
        <Container className="section-container">
          <Row>
            <Col xs={12} lg={6} xl={isContact ? 6 : 8}>
              <Form className="form-wrap" onSubmit={handleSubmit}>
                <Row>
                  <Col xs={12} lg={12} xl={isContact ? 12 : 5} className="col-form-wrap">
                    <SectionTitle className="contact-us" display={desktop} title="Связаться"/>
                    {FormInputs.map(({ id, label, placeholder, type, rows, display, required, mask }, index) => (
                      <InputControl
                        id={id}
                        type={type}
                        rows={rows}
                        mask={mask}
                        label={label}
                        value={values[id]}
                        required={required}
                        onChange={handleChange}
                        placeholder={placeholder}
                        key={`form-input_${index}`}
                        display={index === 2 ? isContact ? true : !desktop : true}
                      />
                    ))}
                    <div className="btn-wrap">
                      <button type="submit" className="btn-submit">
                        {loading && <div className="preloader" />}
                        <span>Отправить</span>
                      </button>
                    </div>
                  </Col>
                  {!isContact && desktop && (
                    <Col xl={{ span: 6, offset: 1 }} className="col-center-wrap">
                      <ImageWrapper src={FooterLogo} className="img-wrap"/>
                      <InputControl
                        rows={4}
                        id="message"
                        type="textarea"
                        value={values.message}
                        placeholder="Сообщение"
                        onChange={handleChange}
                      />
                    </Col>
                  )}
                </Row>
              </Form>
            </Col>
            <Col xs={12} lg={isContact ? 12 : 6} xl={isContact ? 12 : { span: 3, offset: 1 }} className="contact-info-wrap">
              {!isContact && desktop && <h2 className="section-title contacts">Контакты</h2>}
              <Row>
                <Col xs={12} lg={isContact ? 6 : 12}>
                  <div className="contact-wrap">
                    {isContact && <h3 className="contact-title">Контакты</h3>}
                    <a href="mailto:micore@gmail.com" className="contact-sub-title">micore@gmail.com</a>
                    <a href="tel:+380971840009" className="contact-sub-title"><span>+38 097 184 00 09</span></a>
                  </div>
                </Col>
                <Col xs={12} lg={isContact ? 6 : 12}>
                  <div className={`contact-wrap ${desktop ? ' mb-0' : ''}`}>
                    <h3 className="contact-title">Одесса</h3>
                    <h4 className="contact-sub-title">улица Львовская, 48</h4>
                    <h4 className="contact-sub-title with-line">
                      <span>Офис, 301</span>
                      <a href="https://goo.gl/maps/XCmNkLGyBsCcrXvM6" target="_blank" className="btn-show-map">
                        <img src={MapMarker} alt="Map icon"/>
                        <span>карта</span>
                      </a>
                    </h4>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <SocialsWrap/>
        </Container>
        {mobile && (
          <div className="copyright-container">
            <h6>2017-2020, all rights reserved</h6>
            <h6>Manticore development</h6>
          </div>
        )}
      </div>
  
      <Modal size="lg" centered show={modal} className="modal-success">
        <div className="modal-content-wrap">
          <h1 className="modal-title">Ваша заявка принята!</h1>
          <h5 className="modal-sub-title">Мы свяжемся с вами в ближайшее время!</h5>
          <button type="button" className="custom-btn" onClick={closeModal}>
            <span>Окей</span>
          </button>
        </div>
      </Modal>
    </section>
  )
}
