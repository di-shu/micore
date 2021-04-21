import React from 'react'
import { HomePage } from '~/Components/Pages'
import { MainWrapper } from '~/Components/SectionsComponents'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home = (props) => {
  return (
    <MainWrapper id="main-page">
      <HomePage/>
    </MainWrapper>
  )
}

export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...await serverSideTranslations('en', ['common', 'home'])
    }
  }
}

export default Home
