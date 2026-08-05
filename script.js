/* ==========================================================================
   INTERATIVIDADE E REVELAÇÃO EDITORIAL — DRA. EMELY OLIVEIRA (CRBM 07300)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Efeito de Scroll no Navbar (Glassmorphism & Linha Dourada)
  const navbar = document.getElementById('navbar');
  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll();

  // 2. Menu Mobile Toggle (Responsividade Estilo Apple)
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      mobileToggle.classList.toggle('open');
    });

    // Fechar menu ao clicar em um item
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // 3. Scroll Reveal com IntersectionObserver (Animação Fade-In Discreta)
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.05
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    revealObserver.observe(el);
  });

  // Fallback de segurança: Garante que todos os elementos fiquem visíveis caso o observer seja bloqueado
  setTimeout(() => {
    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      el.classList.add('revealed');
    });
  }, 1200);

  // Estilo CSS dinâmico para classe revealed
  const styleSheet = document.createElement('style');
  styleSheet.innerText = `
    .reveal-on-scroll.revealed {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(styleSheet);

  // 4. FAQ Accordion Logic
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      // Fechar outros itens
      faqItems.forEach(otherItem => otherItem.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 5. Formulário de Agendamento VIP → Redirecionamento Inteligente para WhatsApp
  const vipForm = document.getElementById('vipForm');
  if (vipForm) {
    vipForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nome = document.getElementById('formNome').value.trim();
      const telefone = document.getElementById('formTelefone').value.trim();
      const interesse = document.getElementById('formInteresse').value;
      const mensagem = document.getElementById('formMensagem').value.trim();

      const text = `Olá, Dra. Emely Oliveira! Meu nome é ${nome} (${telefone}).\nTenho interesse em: ${interesse}.\nMensagem: ${mensagem}`;
      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/5521982521121?text=${encodedText}`;

      window.open(whatsappUrl, '_blank');
    });
  }

  // 6. Navegação entre as Abas das 4 Unidades
  const locationTabBtns = document.querySelectorAll('.location-tab-btn');
  const locationPanes = document.querySelectorAll('.location-pane');

  locationTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      locationTabBtns.forEach(b => b.classList.remove('active'));
      locationPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });

});
