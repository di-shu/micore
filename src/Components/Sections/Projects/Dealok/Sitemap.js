import React from "react";
import {
  ImageWrapper,
  SectionLayout,
  SectionTitle,
} from "../../../SectionsComponents";

const sitemapImg = "/images/Dealok/sitemap.png";
const sitemapBottomImg = "/images/Dealok/sitemap-bottom.jpg";

export const Sitemap = () => {
  return (
      <SectionLayout id="dealok-sitemap" Footer={() => <ImageWrapper src={sitemapBottomImg} />}>
        <SectionTitle title="Sitemap" />
				<ImageWrapper src={sitemapImg} className="sitemap-img"/>
      </SectionLayout>
  );
};
