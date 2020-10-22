import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Form from 'react-bootstrap/Form'
import { InputControl } from '../../Inputs'
import { MyScrollAnimation, SectionLayout, SectionTitle } from '../../SectionsComponents'

const InitUser = { feedbackName: '', feedbackPhone: '', feedbackMessage: '' }

export const ServiceFeedback = ({ title, content }) => {
  const [user, setUser] = useState(InitUser)
  const { pathname } = useRouter()

  const handleChange = (e) => {
    const { id, value } = e.target
    
    setUser((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    $.ajax({
      method: 'POST',
      url: 'http://micore-admin.comnd-x.com/send',
      data: {
        name: user.feedbackName,
        phone: user.feedbackPhone,
        message: user.feedbackMessage,
        url: pathname,
        country: 'RU'
      }
    }).done(() => {
      setUser(InitUser)
      alert('Сообщение упешно отправлено!')
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
          <button type="submit" className="custom-btn"><span>Связаться</span></button>
        </MyScrollAnimation>
      </Form>
    </SectionLayout>
  )
}
