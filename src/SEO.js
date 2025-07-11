// src/components/SEO.js
import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description, keywords, image, url }) => {
  const siteName = "Tesseract Flex Fuel";
  const defaultTitle = `${siteName} — Sustainable Biodiesel Manufacturer`;
  const fullTitle = title ? `${siteName} — ${title}` : defaultTitle;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta
        name="description"
        content={
          description ||
          "Tesseract Flex Fuel is India’s next-generation biodiesel and flex fuel manufacturer driving sustainable energy solutions."
        }
      />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph for social sharing */}
      <meta property="og:title" content={fullTitle} />
      <meta
        property="og:description"
        content={
          description ||
          "Tesseract Flex Fuel is India’s next-generation biodiesel and flex fuel manufacturer driving sustainable energy solutions."
        }
      />
      <meta property="og:url" content={url || "https://www.tesseractflexfuel.com/"} />
      <link rel="canonical" href={url || "https://www.tesseractflexfuel.com/"} />
    </Helmet>
  );
};

export default SEO;
