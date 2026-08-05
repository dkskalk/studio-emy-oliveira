# ESPECIFICAÇÃO DE ARQUITETURA E STACK TÉCNICA
## Portal Web Institucional & Autoridade — Dra. Emely Oliveira (CRBM 07300)

### 1. VISÃO GERAL DA ARQUITETURA
O portal web foi projetado para oferecer uma experiência digital imersiva, ultrarrápida e sem o aspecto de templates genéricos de WordPress ou código gerado por IA. A arquitetura segue os princípios de **Single-Page Application (SPA) progressiva e altamente performática**, combinando animações suaves, tipografia de luxo e SEO de alta autoridade.

---

### 2. TECNOLOGIAS E FRAMEWORKS (STACK CHAVE)

```
[ FRONTEND CORE ]
  ├── HTML5 Semântico (Acessibilidade WCAG 2.1 AA)
  ├── CSS3 Custom Properties (Quiet Luxury Design System)
  ├── JavaScript ES6+ / Modular Architecture
  └── Google Fonts API (Cormorant Garamond + Inter)

[ ESTILIZAÇÃO & DESIGN SYSTEM ]
  ├── CSS Grid & Flexbox Responsivo Avançado
  ├── Backdrop Filters (Efeito de Vidro Fosco no Menu)
  ├── CSS Custom Variables (Tokens de Cores, Sombras e Raios)
  └── Keyframe Animations (Glows, Parallax e Soft Reveals)

[ INTERATIVIDADE & ANIMAÇÕES ]
  ├── Intersection Observer API (Scroll Reveal Suave)
  ├── Dynamic Form Validation (Agendamento VIP & Contato)
  ├── Custom Timeline & Interactive Tabs (Método Emy Oliveira)
  └── Floating WhatsApp Widget com Resposta Automática VIP

[ PERFORMANCE & SEO LOCAL ]
  ├── JSON-LD Schema (MedicalBusiness / Physician / CRBM 07300)
  ├── Open Graph Protocol & Meta Tags de Alta Conversão
  ├── Core Web Vitals Optimization (Lazy Loading, Preconnect)
  └── Responsive Images & High DPI Assets
```

---

### 3. COMPONENTES DO DESIGN SYSTEM (CUSTOM CSS)

1. **Menu Flutuante Transparente com Glassmorphism Fosco**:
   - Posição fixa no topo.
   - Transição suave na rolagens de transparente para fundo branco/marfim fosco (`backdrop-filter: blur(12px)`), com borda inferior fina em tom dourado escovado.

2. **Hero Architectural Section (100vh)**:
   - Imagem de fundo completa da Dra. Emely Oliveira (`Emely.jpeg`).
   - Placa de parede 3D da Logomarca (`Logo.jpeg`) com efeito de relevo e retroiluminação aquecida.
   - Tipografia Serifada Editorial em grande escala com CTA privativo de agendamento.

3. **Cartões Editoriais de Especialidades**:
   - Proporção visual elegante, revelação com efeito de opacidade ao deslizar.
   - Moldura dourada ultra-fina (`1px`) que se ilumina suavemente ao passar o cursor.

4. **Linha do Tempo Interativa da Experiência do Cliente**:
   - Estrutura visual passo a passo (Primeiro Contato → Avaliação → Planejamento → Tratamento → Acompanhamento → Resultados).

5. **Galeria Editorial Assimétrica**:
   - Layout inspirado em revistas europeias de arquitetura e design (*Architectural Digest / Vogue Living*).

---

### 4. CRITÉRIOS DE PERFORMANCE & QUALIDADE
- **FCP (First Contentful Paint)**: < 1.0s
- **LCP (Largest Contentful Paint)**: < 1.8s
- **CLS (Cumulative Layout Shift)**: 0.00
- **Sem frameworks pesados desnecessários**: Garantindo carregamento instantâneo em redes móveis 5G e Wi-Fi.
- **Responsividade Total**: Experiência fluida e idêntica a apps nativos premium do iOS em iPhones e iPads.
