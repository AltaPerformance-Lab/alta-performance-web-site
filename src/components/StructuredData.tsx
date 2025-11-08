// components/StructuredData.tsx

const StructuredData = () => {
  // IMPORTANTE: Preencha com seus dados reais quando os tiver
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService", // Perfeito para uma agência/software house
    "name": "Alta Performance Web",
    "url": "https://www.altaperformanceweb.com.br", // Seu domínio
    // "logo": "https://www.altaperformanceweb.com.br/logo.png", // (Adicionar quando tiver)
    "description": "Agência de desenvolvimento de sites, e-commerce e sistemas 100% sob medida com foco em alta performance.",
    // "address": { // (Adicionar quando tiver o endereço físico)
    //   "@type": "PostalAddress",
    //   "streetAddress": "Sua Rua, 123",
    //   "addressLocality": "Sua Cidade",
    //   "addressRegion": "Seu Estado",
    //   "postalCode": "Seu CEP",
    //   "addressCountry": "BR"
    // },
    // "telephone": "+55-64-99999-9999", // (Seu telefone comercial)
    "serviceType": [ // Nossos serviços
      "Desenvolvimento de Software Sob Medida",
      "Desenvolvimento de E-commerce",
      "Criação de Sites",
      "Sistemas Web"
    ]
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://www.altaperformanceweb.com.br",
    "potentialAction": { // <-- Isso é o que pode gerar a "caixa de busca" no Google
      "@type": "SearchAction",
      "target": "https://www.altaperformanceweb.com.br/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  );
};

export default StructuredData;