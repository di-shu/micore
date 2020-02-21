import React from 'react'
import { SkillsList } from '../../Config'
import { SectionTitle, SectionWrapper, TabWrap } from '../../../Components'
/* STYLES */
import '~/Styles/Pages/Sections/About/skills.scss'

export const Skills = ({ animation }) => {
  return (
    <section id="about-skills-section" className="section">
      <SectionTitle title="Our skills"/>
      <SectionWrapper>
        <TabWrap
          isSkills
          tabs={SkillsList}
          animation={animation}
        />
      </SectionWrapper>
    </section>
  )
}

