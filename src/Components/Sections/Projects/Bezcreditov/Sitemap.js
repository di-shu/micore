import React from 'react'
import { ImageWrapper, SectionLayout, SectionTitle } from '../../../SectionsComponents'

const SitemapImg = '/images/Bezcreditov/sitemap.png'
const Wallet = '/images/Bezcreditov/wallet.png'
const HalfCircle = '/images/Bezcreditov/half-circle.png'

export const Sitemap = () => {
  return (
    <SectionLayout id="bezcreditov-sitemap" Footer={() => <ImageWrapper src={HalfCircle} className="half-circle-image" />}>
			<SectionTitle title="Sitemap" />
      <ImageWrapper src={SitemapImg} className="sitemap-image" />
      <ImageWrapper src={Wallet} className="wallet-image" />
    </SectionLayout>
  )
}