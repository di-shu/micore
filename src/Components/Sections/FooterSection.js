import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import { InputControl } from '../Inputs'
import { useDeviceDetect } from '../../Helpers'
import { SocialsWrap, ImageWrapper, ActiveLink } from '../SectionsComponents'
/* IMAGES */
const MapMarker = '/Assets/Images/map-marker.svg'
const FooterLogo = '/Assets/Images/footer-logo.svg'
const ContactHand = '/Assets/Images/contact-hand.png'

const FormInputs = [
  {
    id: 'name',
    label: 'Name'
  },
  {
    id: 'phone',
    label: 'Phone number'
  },
  {
    rows: 4,
    id: 'message',
    type: 'textarea',
    label: 'Type message...'
  }
]

export const FooterSection = ({ isContact, animation, isBottom }) => {
  const { mobile, laptop, desktop } = useDeviceDetect()
  const [values, setValues] = useState({ name: '', phone: '', message: '' })
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleChange = e => {
    setValues({ ...values, [e.target.id]: e.target.value })
  }
  
  return (
    <section id="footer-section" className={`${!isBottom ? 'section' : ''} ${isBottom ? 'active' : ''} ${!isContact ? 'footer-section' : 'active'}`}>
      <div className={`container-wrap ${animation || isBottom ? 'on-enter' : 'on-leave'}`}>
        {isContact && (laptop || desktop) && (
          <div className="image-wrap">
            <img src={ContactHand} alt="Hand"/>
          </div>
        )}
        <Container className={`section-container ${isBottom ? 'on-enter' : 'on-leave'}`}>
          <Row>
            <Col xs={12} lg={6} xl={isContact ? 6 : 8}>
              <Form className="form-wrap" onSubmit={handleSubmit}>
                <Row>
                  <Col xs={12} lg={12} xl={isContact ? 12 : 5} className="col-form-wrap">
                    <h2 className="section-title contact-us">Contact us</h2>
                    {FormInputs.map(({ id, label, type, rows, display }, index) => (
                      <InputControl
                        id={id}
                        type={type}
                        rows={rows}
                        label={label}
                        value={values[id]}
                        onChange={handleChange}
                        key={`form-input_${index}`}
                        display={index === 2 ? !desktop : true}
                      />
                    ))}
                    <div className="btn-wrap">
                      <button type="submit" className="btn-submit"><span>SEND</span></button>
                    </div>
                  </Col>
                  {!isContact && desktop && (
                    <Col xl={{ span: 6, offset: 1 }} className="col-center-wrap">
                      <div className="img-wrap">
                        <img src={FooterLogo} alt="Logo"/>
                      </div>
                      <InputControl
                        rows={4}
                        id="message"
                        type="textarea"
                        value={values.message}
                        label="Type message..."
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
                      <div className="btn-show-map">
                        {isContact ? (
                          <>
                            <img src={MapMarker} alt="Map icon"/>
                            <span>see map</span>
                          </>
                        ) : (
                          <ActiveLink link="/contact" className="btn-show-map">
                            <ImageWrapper src={MapMarker} />
                            <span>contact us</span>
                          </ActiveLink>
                        )}
                      </div>
                    </h4>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <SocialsWrap />
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
