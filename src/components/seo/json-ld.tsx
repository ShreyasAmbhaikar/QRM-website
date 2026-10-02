export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": "https://quantumreachmedia.com/#localbusiness",
        "name": "Quantum Reach Media",
        "alternateName": ["QRM", "Quantum Reach Media Pune"],
        "legalName": "Quantum Reach Media",
        "url": "https://quantumreachmedia.com",
        "logo": "https://quantumreachmedia.com/qrm-logo-transparent.webp",
        "image": "https://quantumreachmedia.com/qrm-logo-transparent.webp",
        "description": "Premier SEO & digital marketing agency in Pune specializing in Google #1 rankings, Google Map Pack dominance, AEO/GEO optimization, high-ROI paid ads, and high-performance Next.js web development.",
        "telephone": "+917738812028",
        "email": "contact@quantumreachmedia.com",
        "priceRange": "₹₹",
        "currenciesAccepted": "INR, USD",
        "paymentAccepted": "Cash, Credit Card, UPI, Bank Transfer",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Survey Number 43, Lohar Arcade, Somnath Nagar, Wadgaon Sheri",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411014",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 18.5558427,
          "longitude": 73.9214858
        },
        "hasMap": "https://www.google.com/maps/place/Quantum+Reach+Media,+Pune/data=!4m2!3m1!1s0x0:0xe9c0270609fb909b",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          }
        ],
        "areaServed": [
          { "@type": "City", "name": "Pune" },
          { "@type": "City", "name": "Wadgaon Sheri" },
          { "@type": "City", "name": "Viman Nagar" },
          { "@type": "City", "name": "Kalyani Nagar" },
          { "@type": "City", "name": "Kharadi" },
          { "@type": "City", "name": "Baner" },
          { "@type": "City", "name": "Hinjawadi" },
          { "@type": "City", "name": "Kothrud" },
          { "@type": "AdministrativeArea", "name": "Maharashtra" },
          { "@type": "Country", "name": "India" }
        ],
        "founder": [
          {
            "@type": "Person",
            "name": "Tushar Tanpure",
            "jobTitle": "Founder & Marketing Manager"
          },
          {
            "@type": "Person",
            "name": "Shreyas Ambhaikar",
            "jobTitle": "Co-Founder, SEO Strategist & Website Developer"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "6",
          "bestRating": "5",
          "worstRating": "1"
        },
        "sameAs": [
          "https://www.google.com/maps/place/Quantum+Reach+Media,+Pune/data=!4m2!3m1!1s0x0:0xe9c0270609fb909b",
          "https://linkedin.com",
          "https://x.com",
          "https://instagram.com",
          "https://youtube.com"
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://quantumreachmedia.com/#organization",
        "name": "Quantum Reach Media",
        "url": "https://quantumreachmedia.com",
        "logo": "https://quantumreachmedia.com/qrm-logo-transparent.webp",
        "founder": [
          {
            "@type": "Person",
            "name": "Tushar Tanpure"
          },
          {
            "@type": "Person",
            "name": "Shreyas Ambhaikar"
          }
        ],
        "sameAs": [
          "https://www.google.com/maps/place/Quantum+Reach+Media,+Pune/data=!4m2!3m1!1s0x0:0xe9c0270609fb909b",
          "https://linkedin.com",
          "https://x.com",
          "https://instagram.com"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://quantumreachmedia.com/#website",
        "url": "https://quantumreachmedia.com",
        "name": "Quantum Reach Media",
        "alternateName": "QRM",
        "description": "Best SEO & Digital Marketing Agency in Pune",
        "inLanguage": "en-IN",
        "publisher": {
          "@id": "https://quantumreachmedia.com/#organization"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
