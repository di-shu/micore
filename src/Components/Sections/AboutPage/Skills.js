import React from 'react'
import { SkillsList } from '../../Config'
import { SectionTitle, SectionWrapper, TabWrap } from '../../../Components'
/* STYLES */
import '~/Styles/Sections/About/skills.scss'

export const Skills = ({ animation }) => {
  return (
    <section id="about-skills-section" className="section">
      <SectionWrapper>
        <SectionTitle title="Our skills"/>
        <TabWrap
          isSkills
          tabs={SkillsList}
          animation={animation}
        />
      </SectionWrapper>
    </section>
  )
}

