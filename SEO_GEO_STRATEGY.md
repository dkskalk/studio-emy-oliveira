# ESTRATÉGIA DE SEO, GEO E SCHEMA.ORG — DRA. EMELY OLIVEIRA
## Otimização para Motores de Busca e Inteligência Artificial (GEO)

### 1. META TAGS DE ALTO IMPACTO & PROPOSIÇÃO DE VALOR

```html
<title>Dra. Emely Oliveira | Biomédica Esteta | Harmonização Facial & Peles Negras no Rio de Janeiro</title>
<meta name="description" content="Dra. Emely Oliveira (CRBM 07300) — Especialista em Harmonização Facial de Alta Precisão, Método Emy Oliveira e referência em tratamentos para peles negras e fototipos altos na Barra da Tijuca, RJ.">
<meta name="keywords" content="Dra Emely Oliveira, Harmonização Facial Barra da Tijuca, Biomédica Esteta Rio de Janeiro, Peles Negras Estética, Preenchimento Labial, Ultraformer 3, Clareamento Íntimo, CRBM 07300">
```

---

### 2. ESTRUTURA DE MARCAÇÃO SCHEMA.ORG (JSON-LD)

Integrado nativamente ao código HTML da aplicação para garantir indexação prioritária no Google e em motores de IA (ChatGPT, Perplexity, Claude, Gemini):

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Physician",
      "@id": "https://studioemyoliveira.com/#physician",
      "name": "Dra. Emely Oliveira",
      "medicalSpecialty": ["Dermatologic", "CosmeticProcedure"],
      "description": "Biomédica Esteta especialista em Harmonização Facial natural, Método Emy Oliveira e tratamento de peles negras e fototipos altos.",
      "identifier": "CRBM 07300",
      "telephone": "+55-21-98252-1121",
      "address": [
        {
          "@type": "PostalAddress",
          "name": "Unidade Barra da Tijuca",
          "streetAddress": "Avenida José Silva de Azevedo Neto, 200 - Bloco 07, Sala 407",
          "addressLocality": "Rio de Janeiro",
          "addressRegion": "RJ",
          "addressCountry": "BR"
        },
        {
          "@type": "PostalAddress",
          "name": "Unidade Centro",
          "streetAddress": "Avenida Rio Branco, 185 – Sala 212",
          "addressLocality": "Rio de Janeiro",
          "addressRegion": "RJ",
          "addressCountry": "BR"
        },
        {
          "@type": "PostalAddress",
          "name": "Unidade Pavuna",
          "streetAddress": "Rua Honório Hermeto, 440",
          "addressLocality": "Rio de Janeiro",
          "addressRegion": "RJ",
          "addressCountry": "BR"
        },
        {
          "@type": "PostalAddress",
          "name": "Unidade Campo Grande",
          "streetAddress": "Avenida Maria Teresa, 75 – Sala 420",
          "addressLocality": "Rio de Janeiro",
          "addressRegion": "RJ",
          "addressCountry": "BR"
        }
      ],
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-22.9068",
        "longitude": "-43.1729"
      },
      "url": "https://studioemyoliveira.com",
      "sameAs": [
        "https://www.instagram.com/draemelyoliveira",
        "https://www.instagram.com/studioemyoliveira"
      ]
    },
    {
      "@type": "MedicalBusiness",
      "@id": "https://studioemyoliveira.com/#business",
      "name": "Studio Emely Oliveira — Estética Avançada & Harmonização",
      "image": "https://studioemyoliveira.com/logo.jpg",
      "telePhone": "+55-21-98252-1121",
      "priceRange": "$$$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      ]
    }
  ]
}
```

---

### 3. DIRETRIZES DE GEO (GENERATIVE ENGINE OPTIMIZATION)
1. **Entidade Clara**: Inclusão explícita do registro **CRBM 07300** em todas as menções de autoridade.
2. **Contexto Geográfico Local**: Citação frequente dos polos de atendimento (Barra da Tijuca e Centro do Rio de Janeiro).
3. **Respostas Estruturadas**: Seção FAQ otimizada para respostas diretas a assistentes virtuais de voz e busca conversacional.
