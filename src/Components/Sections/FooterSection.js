import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import { InputControl } from '../Inputs'
import { ImageWrapper, SectionTitle, SocialsWrap } from '../SectionsComponents'
import { useDeviceDetect } from '../../Helpers'
/* IMAGES */
const MapMarker = '/images/map-marker.svg'
const FooterLogo = '/images/footer-logo.svg'
const ContactHand = '/images/contact-hand.png'

const InitValues = { name: '', phone: '', message: '' }

const FormInputs = [
  {
    id: 'name',
    label: 'Name',
    required: true
  },
  {
    id: 'phone',
    type: 'tel',
    label: 'Phone number',
    mask: '+38 (099) 999-99-99',
    required: true
  },
  {
    rows: 4,
    id: 'message',
    type: 'textarea',
    placeholder: 'Type message...'
  }
]

export const FooterSection = ({ isContact, animation }) => {
  const [values, setValues] = useState(InitValues)
  const { pathname } = useRouter()
  const { mobile, desktop, minWidthLaptop } = useDeviceDetect()

  const handleSubmit = (e) => {
    e.preventDefault()
    $.ajax({
      method: 'POST',
      url: 'http://micore-admin.comnd-x.com/send',
      data: {
        ...values,
        url: pathname,
        country: 'RU'
      }
    }).done(() => {
      setValues(InitValues)
      alert('Сообщение упешно отправлено!')
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
                    <SectionTitle className="contact-us" display={desktop} title="Contact us"/>
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
                      <button type="submit" className="btn-submit"><span>SEND</span></button>
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
                        placeholder="Type message..."
                        onChange={handleChange}
                      />
                    </Col>
                  )}
                </Row>
              </Form>
            </Col>
            <Col xs={12} lg={isContact ? 12 : 6} xl={isContact ? 12 : { span: 3, offset: 1 }} className="contact-info-wrap">
              {!isContact && desktop && <h2 className="section-title contacts">Contacts</h2>}
              <Row>
                <Col xs={12} lg={isContact ? 6 : 12}>
                  <div className="contact-wrap">
                    <h3 className="contact-title">Everything else</h3>
                    <h4 className="contact-sub-title">micore@gmail.com</h4>
                    <h4 className="contact-sub-title with-line"><span>38 097 184 00 09</span></h4>
                  </div>
                </Col>
                <Col xs={12} lg={isContact ? 6 : 12}>
                  <div className={`contact-wrap ${desktop ? ' mb-0' : ''}`}>
                    <h3 className="contact-title">Odessa</h3>
                    <h4 className="contact-sub-title">Francuskiy bulvar, 66/2</h4>
                    <h4 className="contact-sub-title with-line">
                      <span>Office, 702b</span>
                      <a href="https://goo.gl/maps/vU6GcPpd4y2cfwhz7" target="_blank" className="btn-show-map">
                        <img src={MapMarker} alt="Map icon"/>
                        <span>see map</span>
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
            <h6>Some text</h6>
            <h6>Manticore development</h6>
          </div>
        )}
      </div>
    </section>
  )
}
