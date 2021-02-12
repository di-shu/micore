import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Form from 'react-bootstrap/Form'
import { Modal } from 'react-bootstrap'
import { InputControl } from '../../Inputs'
import { MyScrollAnimation, SectionLayout, SectionTitle } from '../../SectionsComponents'

const InitUser = { feedbackName: '', feedbackPhone: '', feedbackMessage: '' }

export const ServiceFeedback = ({ title, content }) => {
  const [loading, setLoading] = useState(false)
  const [modal, setModal] = useState(false)
  const [user, setUser] = useState(InitUser)
  const { pathname } = useRouter()
  
  const openModal = () => {
    setModal(true)
  }
  
  const closeModal = () => {
    setModal(false)
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    
    setUser((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  
    setLoading(true)
    
    $.ajax({
      method: 'POST',
      url: 'https://micore-admin.comnd-x.com/send',
      data: {
        name: user.feedbackName,
        phone: user.feedbackPhone,
        message: user.feedbackMessage,
        url: pathname,
        country: 'RU'
      },
      success: () => {
        openModal()
        setUser(InitUser)
        setLoading(false)
      },
      error: () => {
        alert('Ошибка при отправке запроса!')
      }
    })
  }
  
  return (
    <SectionLayout id="service-feedback-section">
      {content}
      <MyScrollAnimation delay={[0]}>
        <SectionTitle title={title} isContentWhite />
      </MyScrollAnimation>
      <Form className="form-wrap" onSubmit={handleSubmit}>
        <MyScrollAnimation delay={[200, 400, 600, 800, 1000]}>
          <InputControl
            required
            label="Имя"
            id="feedbackName"
            onChange={handleChange}
            value={user.feedbackName}
          />
          <InputControl
            required
            label="Телефон"
            id="feedbackPhone"
            onChange={handleChange}
            mask="+38 (099) 999-99-99"
            value={user.feedbackPhone}
          />
          <InputControl
            rows={1}
            type="textarea"
            id="feedbackMessage"
            placeholder="Сообщение"
            onChange={handleChange}
            value={user.feedbackMessage}
          />
          <button type="submit" className="custom-btn">
            {loading && <div className="preloader" />}
            <span>Связаться</span>
          </button>
        </MyScrollAnimation>
      </Form>
      
      <Modal size="lg" centered show={modal} className="modal-success">
        <div className="modal-content-wrap">
          <h1 className="modal-title">Ваша заявка принята!</h1>
          <h5 className="modal-sub-title">Мы свяжемся с вами в ближайшее время!</h5>
          <button type="button" className="custom-btn" onClick={closeModal}>
            <span>Окей</span>
          </button>
        </div>
      </Modal>
    </SectionLayout>
  )
}
