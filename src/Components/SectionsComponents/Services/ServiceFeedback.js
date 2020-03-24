import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { InputControl } from '../../Inputs'
import { SectionLayout, SectionTitle } from '../../SectionsComponents'

export const ServiceFeedback = ({ title, content }) => {
  const [user, setUser] = useState({ feedbackName: '', feedbackPhone: '', feedbackMessage: '' })
  const handleChange = (e) => {
    const { id, value } = e.target
    
    setUser((prev) => ({ ...prev, [id]: value }))
  }
  
  return (
    <SectionLayout id="service-feedback-section">
      {content}
      <SectionTitle title={title} isContentWhite />
      <Form className="form-wrap">
        <div className="form-row">
          <InputControl
            label="Name"
            id="feedbackName"
            onChange={handleChange}
            value={user.feedbackName}
          />
          <InputControl
            label="Phone"
            id="feedbackPhone"
            onChange={handleChange}
            value={user.feedbackPhone}
          />
          <InputControl
            label="Message"
            id="feedbackMessage"
            onChange={handleChange}
            value={user.feedbackMessage}
          />
        </div>
        <button type="submit" className="custom-btn"><span>Send</span></button>
      </Form>
    </SectionLayout>
  )
}
