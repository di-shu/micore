import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Form from 'react-bootstrap/Form'
import { Modal } from 'react-bootstrap'
import useTranslation from 'next-translate/useTranslation'
import { InputControl } from '../../Inputs'
import { MyScrollAnimation, SectionLayout, SectionTitle } from '../../SectionsComponents'

const InitUser = { feedbackName: '', feedbackPhone: '', feedbackMessage: '' }

export const ServiceFeedback = ({ title, content }) => {
  const { t } = useTranslation()
  const { pathname } = useRouter()
  const [user, setUser] = useState(InitUser)
  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(false)

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
            id="feedbackName"
            onChange={handleChange}
            value={user.feedbackName}
            label={t('services:feedback.name')}
          />
          <InputControl
            required
            id="feedbackPhone"
            onChange={handleChange}
            mask="+38 (099) 999-99-99"
            value={user.feedbackPhone}
            label={t('services:feedback.phone')}
          />
          <InputControl
            rows={1}
            type="textarea"
            id="feedbackMessage"
            onChange={handleChange}
            value={user.feedbackMessage}
            placeholder={t('services:feedback.message')}
          />
          <button type="submit" className="custom-btn">
            {loading && <div className="preloader" />}
            <span>{t('services:feedback.button')}</span>
          </button>
        </MyScrollAnimation>
      </Form>
      
      <Modal size="lg" centered show={modal} className="modal-success">
        <div className="modal-content-wrap">
          <h1 className="modal-title">{t('common:modal_success.title')}</h1>
          <h5 className="modal-sub-title">{t('common:modal_success.subtitle')}</h5>
          <button type="button" className="custom-btn" onClick={closeModal}>
            <span>{t('common:modal_success.button')}</span>
          </button>
        </div>
      </Modal>
    </SectionLayout>
  )
}
