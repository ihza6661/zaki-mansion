import { Helmet } from "react-helmet-async";
import { SITE_CONFIG, PROPERTY_DETAILS, CONTACT_CONFIG } from "@/data";

/**
 * SEO Head Component
 * Manages meta tags, Open Graph tags for social sharing, and structured data
 */
const SEOHead = () => {
  const pageTitle = `${PROPERTY_DETAILS.name} - ${PROPERTY_DETAILS.tagline}`;
  const pageDescription = `Discover ${PROPERTY_DETAILS.name} - premium residential property in ${PROPERTY_DETAILS.location}. Experience luxury living with world-class amenities and modern design.`;
  const siteUrl = SITE_CONFIG.url;
  const imageUrl = `${siteUrl}${SITE_CONFIG.ogImagePath}`;

  // Structured Data for Real Estate (Schema.org)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: PROPERTY_DETAILS.name,
    description: pageDescription,
    telephone: CONTACT_CONFIG.phone,
    email: CONTACT_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: PROPERTY_DETAILS.location,
      addressCountry: "ID",
    },
    url: siteUrl,
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content="id_ID" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content={imageUrl} />

      {/* WhatsApp Specific (uses Open Graph tags) */}
      <meta property="og:site_name" content={PROPERTY_DETAILS.name} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
};

export default SEOHead;
