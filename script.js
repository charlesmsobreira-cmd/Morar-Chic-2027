/**
 * MORAR CHIC — Interactive Navigation & Showcase
 * Top Header Reference: Zara Home (https://www.zarahome.com/br)
 * Hero Banner Reference: Prada (Holiday Collection / Cama Bordada & Cama Estampada)
 * Destaques Reference: Grid 4 Colunas x 2 Linhas (8 Produtos)
 */

/* ==========================================================================
   CONFIGURAÇÃO DO BANNER PRINCIPAL (HERO SECTION — EDITORIAL DE LUXO)
   Para alterar título, frase descritiva ou o botão principal, edite abaixo:
   ========================================================================== */
const HERO_BANNER_CONFIG = {
  desc: 'A harmonia sublime.',
  cta: { text: 'Descubra a coleção', link: '#destaques' }
};

/* ==========================================================================
   CONFIGURAÇÃO DOS PRODUTOS EM DESTAQUE (GRID 4 COLUNAS — FÁCIL EDIÇÃO)
   Para atualizar a vitrine de Destaques, altere os campos abaixo:
   - id: Número do card (1 a 8)
   - title: Nome/título do produto exibido centralizado abaixo da foto
   - image: Caminho do arquivo da foto em assets/images/ (ex: 'assets/images/DESTAQUE-1.jpg')
   - link: Link para a seção/produto (ex: '#cama', '#mesa-posta', etc.)
   ========================================================================== */
const DESTAQUES_CONFIG = [
  { id: 1, title: 'Coleção Jardim de Toile', image: 'assets/images/DESTAQUE-1.jpg', link: 'colecao-jardim-de-toile.html' },
  { id: 2, title: 'Coleção Naturale', image: 'assets/images/pdp-edredom-toile-2.jpg', link: '#mesa-posta' },
  { id: 3, title: 'Coleção Constance', image: 'assets/images/DESTAQUE-3.jpg', link: '#mesa-posta' },
  { id: 4, title: 'Coleção Windsor', image: 'assets/images/pdp-edredom-toile-3.jpg', link: '#pintados-a-mao' },
  { id: 5, title: 'Coleção Flore', image: 'assets/images/DESTAQUE-5.jpg', link: '#pintados-a-mao' },
  { id: 6, title: 'Coleção Orquídea Celeste', image: 'assets/images/pdp-edredom-toile-4.jpg', link: '#prataria-e-ouro' },
  { id: 7, title: 'Coleção Véu de Sintra', image: 'assets/images/DESTAQUE-7.jpg', link: '#mesa-posta' },
  { id: 8, title: 'Coleção St. Germain', image: 'assets/images/DESTAQUE-8.jpg', link: '#cama' }
];

/* ==========================================================================
   CONFIGURAÇÃO DA SUBPÁGINA: COLEÇÃO JARDIM DE TOILE (FÁCIL EDIÇÃO)
   Para alterar o nome da coleção, os produtos expostos (fotos e nomes)
   ou as 2 imagens e o vídeo central do tríptico, basta editar abaixo:
   - IMAGENS EXCLUSIVAS (SEM REPETIÇÃO): Usam fotos próprias da coleção
     (ESPECIAL-1..4, toile-triptico-esquerda e toile-triptico-direita).
   - QUANTIDADE FLEXÍVEL: O layout se adapta perfeitamente com 3, 4, 5
     ou quantos produtos desejar, mantendo alinhamento perfeito no topo!
   ========================================================================== */
const JARDIM_DE_TOILE_CONFIG = {
  collectionTitle: 'Coleção Jardim de Toile',

  // Produtos expostos na vitrine da coleção (fotos exclusivas não repetidas)
  products: [
    { id: 1, name: 'Jogo de Lençol Toile', image: 'assets/images/pdp-lencol-toile-1.jpg', link: 'produto-jogo-de-lencol-toile.html' },
    { id: 2, name: 'Kit Edredom Toile', image: 'assets/images/pdp-edredom-toile-1.jpg', link: 'produto-kit-edredom-toile.html' },
    { id: 3, name: 'Almofada Xadrez Toile', image: 'assets/images/pdp-almofada-xadrez-1.jpg', link: 'produto-almofada-xadrez-toile.html' },
    { id: 4, name: 'Almofada Bordada Toile', image: 'assets/images/pdp-almofada-bordada-1.jpg', link: 'produto-almofada-bordada-toile.html' }
  ],

  // Tríptico logo abaixo: 2 imagens exclusivas nas pontas + 1 vídeo no meio
  triptych: {
    leftImage: 'assets/images/toile-triptico-esquerda.jpg',
    leftAlt: 'Coleção Jardim de Toile — Painel Esquerdo',
    centerVideo: 'assets/images/video-jardim-de-toile.mp4',
    centerVideoPoster: 'assets/images/toile-triptico-esquerda.jpg',
    rightImage: 'assets/images/toile-triptico-direita.jpg',
    rightAlt: 'Coleção Jardim de Toile — Painel Direito'
  }
};

/* ==========================================================================
   CONFIGURAÇÃO DA SUBPÁGINA: PINTADOS À MÃO (FÁCIL EDIÇÃO)
   Para alterar o título principal, o texto descritivo introdutório ou
   os itens e links do menu horizontal da página, basta editar abaixo:
   ========================================================================== */
const PINTADOS_A_MAO_CONFIG = {
  // Título exibido no cabeçalho centralizado
  title: 'Pintados à Mão',

  // Texto introdutório sobre os produtos e arte em porcelana
  description: 'Há uma beleza especial naquilo que desperta os sentidos e torna cada ambiente único. Uma celebração da arte de viver, onde elegância, autenticidade e expressão se encontram em perfeita harmonia. Para quem acredita que a beleza não está apenas no olhar, mas na maneira de sentir.',

  // Itens do menu de navegação da página (links e rótulos)
  navItems: [
    { label: 'Lustres', link: '#todas-as-obras', active: true },
    { label: 'Decoração', link: '#arte-da-mesa', active: false },
    { label: 'Filtros e Talhas', link: '#pratos-de-parede', active: false },
    { label: 'Iluminação', link: '#centros-de-mesa', active: false },
    { label: 'Cachepots e Afins', link: '#encomendas', active: false }
  ],

  // Primeira Seção Assimétrica (layout da imagem de referência):
  asymSection: {
    title: 'Fig & Pomegranate',
    description: 'Este lustre artesanal é uma verdadeira obra de arte, produzido com riqueza de detalhes e acabamento primoroso. Sua composição reúne delicadas cacatuas em cerâmica, cuidadosamente moldadas e pintadas à mão, entre galhos ornamentais adornados por romãs, figos e exuberantes folhas de metal, formando um cenário inspirado na natureza em sua versão mais sofisticada.'
  }
};

/* ==========================================================================
   CONFIGURAÇÃO COMPLETA DAS PÁGINAS DE PRODUTO (PDP) & GUIA DE MEDIDAS
   - TODAS AS IMAGENS SÃO EXCLUSIVAS (não reutilizadas de outras páginas/seções).
   - O usuário pode alterar títulos, medidas, preços e fotos livremente abaixo:
   ========================================================================== */
const PDP_CONFIG = {
  // Imagem exclusiva do Drawer "Qual é o meu tamanho?"
  sizeGuideImage: 'assets/images/guia-de-tamanhos-cama.jpg',
  sizeGuideAlt: 'Guia Visual de Medidas e Proporções de Camas Morar Chic',
  sizeGuideAdvice: '<strong>Medidas Especiais:</strong> Possui cama articulada ou colchão de altura sob medida? Nossos Client Advisors confeccionam peças customizadas.',

  /* ==========================================================================
     TEXTO DOS CLIENT ADVISORS (FÁCIL EDIÇÃO)
     Para alterar o texto exibido abaixo do botão COMPRAR (telefone, WhatsApp ou e-mail),
     edite livremente a mensagem abaixo:
     ========================================================================== */
  clientAdvisors: {
    message: 'Este é um produto produzido sob encomenda, o processo de produção leva em média 30 dias úteis.'
  },

  // Dados exclusivos de cada produto (identificados por data-pdp-id no <body>)
  products: {
    'jogo-de-lencol-toile': {
      title: 'Jogo de Lençol Jardim Toile',
      ctaText: 'COMPRAR',
      description: 'Confeccionado em percal de puro algodão egípcio 400 fios, o Jogo de Lençol Toile apresenta a clássica temática pastoral francesa reinterpretada com máxima sutileza e requinte. O toque acetinado de textura sedosa garante noites de conforto supremo e uma estética atemporal à cama posta. O conjunto é composto por 1 lençol de cima com vira dobrada e barra bordada, 1 lençol inferior com elástico integral e 2 fronhas com 4 abas estruturadas e pespontos artesanais de alta alfaiataria.',

      // TABELA DE MEDIDAS E PREÇOS (FÁCIL EDIÇÃO)
      // - Altere os valores de cada tamanho livremente.
      // - Para ativar ou desativar uma medida, mude enabled para true ou false.
      // - Você pode adicionar novas medidas nesta lista a qualquer momento.
      sizes: [
        { name: 'Casal', price: 1650.00, enabled: true },
        { name: 'Queen', price: 1850.00, enabled: true },
        { name: 'King', price: 2150.00, enabled: true },
        { name: 'Super King', price: 2450.00, enabled: true }
      ],
      cashDiscountPercent: 5, // Desconto à vista no Pix (ex: 5%)

      gallery: [
        { src: 'assets/images/pdp-lencol-toile-1.jpg', alt: 'Jogo de Lençol Toile — Visão Geral da Cama' },
        { src: 'assets/images/pdp-lencol-toile-2.jpg', alt: 'Jogo de Lençol Toile — Detalhes da Estampa e Tecido' },
        { src: 'assets/images/pdp-lencol-toile-3.jpg', alt: 'Jogo de Lençol Toile — Ambientação Quarto de Luxo' },
        { src: 'assets/images/pdp-lencol-toile-4.jpg', alt: 'Jogo de Lençol Toile — Artesanato e Detalhes' }
      ],
      buyTogether: {
        eyebrow: 'SUGESTÃO DE COMPOSIÇÃO',
        title: 'Compre Junto',
        subtitle: 'Adquira a combinação completa da Coleção Jardim de Toile com apenas um clique.',
        companionProductId: 'kit-edredom-toile', // Vincula ao produto complementar para sincronizar títulos automaticamente
        item1: {
          tag: 'PRODUTO ATUAL',
          image: 'assets/images/compre-junto-lencol.jpg'
        },
        item2: {
          tag: 'COMBINAÇÃO PERFEITA',
          image: 'assets/images/pdp-edredom-toile-1.jpg',
          link: 'produto-kit-edredom-toile.html'
        },
        totalLabel: '2 PRODUTOS SELECIONADOS',
        installments: 'ou em até 10x sem juros no cartão',
        buttonText: 'COMPRAR JUNTO'
      }
    },
    'kit-edredom-toile': {
      title: 'Kit Edredom Toile',
      ctaText: 'COMPRAR',
      description: 'O Kit Edredom Toile une o conforto térmico inteligente do enchimento com fibra siliconada termossensível à nobreza pura do percal acetinado 400 fios em algodão egípcio. O design pastoral toile de Jouy adiciona um toque de romance bucólico e sofisticação aristocrática à atmosfera do dormitório. O conjunto inclui 1 edredom pantografado com volume envolvente e toque sedoso, acompanhado por 2 porta-travesseiros matelassados com 4 abas e fechamento transpassado de alfaiataria.',

      // TABELA DE MEDIDAS E PREÇOS (FÁCIL EDIÇÃO)
      sizes: [
        { name: 'Casal', price: 2200.00, enabled: true },
        { name: 'Queen', price: 2450.00, enabled: true },
        { name: 'King', price: 2750.00, enabled: true },
        { name: 'Super King', price: 3100.00, enabled: true }
      ],
      cashDiscountPercent: 5, // Desconto à vista no Pix (ex: 5%)

      gallery: [
        { src: 'assets/images/pdp-edredom-toile-1.jpg', alt: 'Kit Edredom Toile — Visão Geral da Cama' },
        { src: 'assets/images/pdp-edredom-toile-2.jpg', alt: 'Kit Edredom Toile — Detalhes do Pantografado' },
        { src: 'assets/images/pdp-edredom-toile-3.jpg', alt: 'Kit Edredom Toile — Ambientação Quarto de Luxo' },
        { src: 'assets/images/pdp-edredom-toile-4.jpg', alt: 'Kit Edredom Toile — Detalhes dos Porta-travesseiros' }
      ],
      buyTogether: {
        eyebrow: 'SUGESTÃO DE COMPOSIÇÃO',
        title: 'Compre Junto',
        subtitle: 'Adquira a combinação completa da Coleção Jardim de Toile com apenas um clique.',
        companionProductId: 'jogo-de-lencol-toile', // Vincula ao produto complementar para sincronizar títulos automaticamente
        item1: {
          tag: 'PRODUTO ATUAL',
          image: 'assets/images/pdp-edredom-toile-1.jpg'
        },
        item2: {
          tag: 'COMBINAÇÃO PERFEITA',
          image: 'assets/images/compre-junto-lencol.jpg',
          link: 'produto-jogo-de-lencol-toile.html'
        },
        totalLabel: '2 PRODUTOS SELECIONADOS',
        installments: 'ou em até 10x sem juros no cartão',
        buttonText: 'COMPRAR JUNTO COM 1 CLIQUE'
      }
    }
  }
};

/* ==========================================================================
   CONFIGURAÇÃO DO LOGOTIPO OFICIAL DO MENU (FÁCIL EDIÇÃO)
   Para trocar a logo, basta colocar as versões na pasta assets/logo/:
   - logo-white.png: versão branca para o cabeçalho transparente sobre o hero
   - logo-dark.png: versão escura/preta para o cabeçalho transformado/branco
   ========================================================================== */
const SITE_LOGO_CONFIG = {
  whiteImage: 'assets/logo/logo-white.png',
  darkImage: 'assets/logo/logo-dark.png',
  alt: 'Morar Chic',
  fallbackText: 'MORAR CHIC'
};

/* ==========================================================================
   CONFIGURAÇÃO DA SEÇÃO PINTADOS À MÃO NA HOME (BANNER 21:9 — FÁCIL EDIÇÃO)
   Para alterar título, texto descritivo, botão ou foto da Home, edite abaixo:
   ========================================================================== */
const PINTADOS_HOME_BANNER_CONFIG = {
  title: 'Pintados à Mão',
  desc: 'Peças únicas pinceladas artesanalmente. Traços exclusivos que transformam a casa em uma galeria viva.',
  btnText: 'Conhecer',
  btnLink: 'pintados-a-mao.html',
  image: 'assets/images/imagem-14.jpg'
};

/* ==========================================================================
   NOVA SEÇÃO: CONFIGURAÇÃO DE PRATARIA E OURO (LAYOUT EDITORIAL SPLIT)
   Inspirado na referência de alta joalheria & mesa (Tania Bulhões):
   - Metade esquerda com fundo creme linho nobre (#FAF6F0), ornamento floral,
     tag de edição, título serif clássico, narrativa e botão "DESCUBRA".
   - Metade direita com foto editorial de alta resolução.
   Para alterar textos, foto ou link sem IA, edite abaixo:
   ========================================================================== */
const PRATARIA_OURO_CONFIG = {
  tag: 'EDIÇÃO PRESTIGE',
  title: 'PRATARIA & OURO',
  desc: 'Há gerações, a nobreza da prataria cinzelada e o brilho eterno do ouro transformam ocasiões à mesa em rituais inesquecíveis. Apresentamos peças desenhadas para atravessar o tempo como verdadeiras joias de afeto, celebração e elegância atemporal.',
  btnText: 'EXPLORE',
  btnLink: '#prataria-e-ouro',
  image: 'assets/images/imagem-16.jpg',
  ornament: 'assets/images/ramo-botanico.svg'
};

/* ==========================================================================
   CONFIGURAÇÃO DA SEÇÃO LOUÇAS (REFERÊNCIA ABSOLUTA LOUIS VUITTON)
   - Título e Introdução Únicos da Categoria Louças
   - 3 Banners Superiores (Idêntico à referência LV)
   - 2 Banners Inferiores Centralizados (Mesmo tamanho dos superiores)
   Para alterar títulos, subtítulos, fotos ou links, edite abaixo:
   ========================================================================== */
const LOUCAS_CONFIG = {
  sectionTitle: 'Louças',
  sectionSubtitle: 'Descubra a história e a nobreza de vestir a mesa — um savoir-faire excepcional onde cada peça transforma a composição em arte viva.',
  bannersTop: [
    {
      id: 4,
      title: 'Porcelanas Pip Studio',
      image: 'assets/images/imagem-4.jpg',
      btnText: 'Explore',
      link: '#mesa-posta'
    },
    {
      id: 5,
      title: 'Louças Conceito',
      image: 'assets/images/imagem-5.jpg',
      btnText: 'Explore',
      link: '#mesa-posta'
    },
    {
      id: 6,
      title: 'Porcelanas Tea Delight',
      image: 'assets/images/imagem-6.jpg',
      btnText: 'Explore',
      link: '#mesa-posta'
    }
  ],
  bannersBottom: []
};

/* ==========================================================================
   SEÇÃO DE LANÇAMENTO NO FIM DO SITE (REUTILIZANDO BANNER LOUÇAS PINTADAS À MÃO)
   - Imagem quadrada centralizada (assets/images/imagem-8.jpg)
   - Botões inferiores apenas visuais (sem hover e sem funcionalidade)
   ========================================================================== */
const LANCAMENTO_CONFIG = {
  image: 'assets/images/imagem-8.jpg',
  alt: 'Lançamento — Louças Pintadas à Mão',
  btnText: 'Conhecer',
  btnLink: 'pintados-a-mao.html',
  visualButtons: [
    'Novidades',
    'Louças Pintadas à Mão',
    'Coleções Especiais'
  ]
};

/* ==========================================================================
   RESET DE SCROLL: AO RECARREGAR (F5), A PÁGINA SEMPRE VOLTA AO TOPO
   ========================================================================== */
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

function initApp() {
  window.scrollTo(0, 0);

  // Formata valores numéricos para moeda Real Brasileiro (BRL)
  function formatBRL(val) {
    if (typeof val === 'number') {
      return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
    const n = parseFloat(val);
    if (!isNaN(n)) {
      return n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
    return 'R$ 0,00';
  }

  // Transição suave e limpa entre páginas (elimina flick de scroll)
  document.querySelectorAll('a[href$=".html"], a[href="index.html"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      if (link.target === '_blank' || e.ctrlKey || e.metaKey || e.shiftKey) return;
      const href = link.getAttribute('href');
      if (!href) return;

      e.preventDefault();
      document.body.classList.add('page-transitioning');
      setTimeout(() => {
        window.location.href = href;
      }, 130);
    });
  });

  const siteHeader = document.getElementById('siteHeader');
  siteHeader?.classList.add('active');

  /* ==========================================================================
     1. IN-VIEW SCROLL REVEALS (SCROLL NATIVO DIRETO — SEM SCROLL LENTO/LENIS)
     ========================================================================== */
  const inviewTargets = document.querySelectorAll('[data-scroll-inview]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('inview');
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  function checkInViewElements() {
    inviewTargets.forEach((el) => observer.observe(el));
  }
  checkInViewElements();

  /* ==========================================================================
     2. HEADER FLAT NO SCROLL (REFERÊNCIA ZARA HOME)
     ========================================================================== */
  function handleScroll() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Transição flat no header quando rola a tela (sem transparência) ou em subpáginas de fundo branco
    if (siteHeader) {
      const isSubpageSolid = siteHeader.classList.contains('subpage-solid-header');
      siteHeader.classList.toggle('scrolled', isSubpageSolid || scrollY > 40);
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ==========================================================================
     2B. BANNER PRINCIPAL (HERO SECTION — EDITORIAL DE LUXO)
     ========================================================================== */
  const heroBannerTitle = document.getElementById('heroBannerTitle');
  const heroBannerDesc = document.getElementById('heroBannerDesc');
  const heroBtnCollection = document.getElementById('heroBtnCollection');

  if (heroBannerTitle) {
    heroBannerTitle.remove();
  }
  if (typeof HERO_BANNER_CONFIG !== 'undefined' && HERO_BANNER_CONFIG) {
    if (heroBannerDesc && HERO_BANNER_CONFIG.desc) heroBannerDesc.textContent = HERO_BANNER_CONFIG.desc;
    if (heroBtnCollection && HERO_BANNER_CONFIG.cta) {
      heroBtnCollection.textContent = HERO_BANNER_CONFIG.cta.text;
      heroBtnCollection.setAttribute('href', HERO_BANNER_CONFIG.cta.link);
    }
  }

  /* ==========================================================================
     3. RENDERIZAÇÃO DOS PRODUTOS EM DESTAQUE (GRID 4 COLUNAS X 2 LINHAS)
     ========================================================================== */
  const destaquesTrack = document.getElementById('destaquesTrack');
  if (destaquesTrack && Array.isArray(DESTAQUES_CONFIG) && DESTAQUES_CONFIG.length > 0) {
    destaquesTrack.innerHTML = DESTAQUES_CONFIG.map((item) => `
      <article class="destaques-card" data-destaque-id="${item.id}">
        <a href="${item.link}" class="destaques-card-link">
          <div class="destaques-card-media">
            <img src="${item.image}" alt="${item.title}" class="destaque-img" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';">
            <div class="destaque-img-placeholder" style="display:none;">
              <span class="destaque-ph-label">${item.image.split('/').pop()}</span>
              <span class="destaque-ph-hint">Adicione a foto em assets/images/</span>
            </div>
          </div>
          <div class="destaques-card-info">
            <h3 class="destaque-item-title">${item.title}</h3>
          </div>
        </a>
      </article>
    `).join('');
  }

  /* ==========================================================================
     3A-LOGO. LOGOMARCA OFICIAL NO MENU SUPERIOR (TRANSIÇÃO WHITE / DARK)
     ========================================================================== */
  const headerLogoWhite = document.getElementById('siteHeaderLogoWhite');
  const headerLogoDark = document.getElementById('siteHeaderLogoDark');
  const headerLogoLegacy = document.getElementById('siteHeaderLogo');

  if (typeof SITE_LOGO_CONFIG === 'object' && SITE_LOGO_CONFIG !== null) {
    if (headerLogoWhite && SITE_LOGO_CONFIG.whiteImage) {
      headerLogoWhite.src = SITE_LOGO_CONFIG.whiteImage;
      if (SITE_LOGO_CONFIG.alt) headerLogoWhite.alt = SITE_LOGO_CONFIG.alt;
    }
    if (headerLogoDark && SITE_LOGO_CONFIG.darkImage) {
      headerLogoDark.src = SITE_LOGO_CONFIG.darkImage;
      if (SITE_LOGO_CONFIG.alt) headerLogoDark.alt = SITE_LOGO_CONFIG.alt;
    }
    if (headerLogoLegacy && (SITE_LOGO_CONFIG.darkImage || SITE_LOGO_CONFIG.image)) {
      headerLogoLegacy.src = SITE_LOGO_CONFIG.darkImage || SITE_LOGO_CONFIG.image;
    }
  }

  /* ==========================================================================
     3B. SEÇÃO PINTADOS À MÃO (BANNER 21:9 — ATUALIZAÇÃO DINÂMICA)
     ========================================================================== */
  const pintadosTitle = document.getElementById('pintadosTitle');
  const pintadosDesc = document.getElementById('pintadosDesc');
  const pintadosBtn = document.getElementById('pintadosBtn');
  const pintadosImg = document.getElementById('pintadosImg');

  if (typeof PINTADOS_HOME_BANNER_CONFIG === 'object' && PINTADOS_HOME_BANNER_CONFIG !== null) {
    if (pintadosTitle && PINTADOS_HOME_BANNER_CONFIG.title) {
      pintadosTitle.textContent = PINTADOS_HOME_BANNER_CONFIG.title;
    }
    if (pintadosDesc && PINTADOS_HOME_BANNER_CONFIG.desc) {
      const p = pintadosDesc.querySelector('p') || pintadosDesc;
      p.innerHTML = PINTADOS_HOME_BANNER_CONFIG.desc;
    }
    if (pintadosBtn) {
      if (PINTADOS_HOME_BANNER_CONFIG.btnText) {
        const span = pintadosBtn.querySelector('span');
        if (span) span.textContent = PINTADOS_HOME_BANNER_CONFIG.btnText;
        else pintadosBtn.textContent = PINTADOS_HOME_BANNER_CONFIG.btnText;
      }
      if (PINTADOS_HOME_BANNER_CONFIG.btnLink) {
        pintadosBtn.href = PINTADOS_HOME_BANNER_CONFIG.btnLink;
      }
    }
    if (pintadosImg && PINTADOS_HOME_BANNER_CONFIG.image) {
      pintadosImg.src = PINTADOS_HOME_BANNER_CONFIG.image;
    }
  }

  /* ==========================================================================
     3C. SEÇÃO LOUÇAS (REFERÊNCIA LOUIS VUITTON — LINKS SEPARADOS PARA IMAGEM E BOTÃO)
     ========================================================================== */
  if (typeof LOUCAS_CONFIG === 'object' && LOUCAS_CONFIG !== null) {
    const titleEl = document.getElementById('loucasSectionTitle');
    const subtitleEl = document.getElementById('loucasSectionSubtitle');
    if (titleEl && LOUCAS_CONFIG.sectionTitle) titleEl.textContent = LOUCAS_CONFIG.sectionTitle;
    if (subtitleEl && LOUCAS_CONFIG.sectionSubtitle) subtitleEl.textContent = LOUCAS_CONFIG.sectionSubtitle;

    // Linha Superior: 3 Banners
    const topCards = document.querySelectorAll('#loucasRowTop .loucas-lv-card');
    if (Array.isArray(LOUCAS_CONFIG.bannersTop) && topCards.length > 0) {
      topCards.forEach((card, idx) => {
        const data = LOUCAS_CONFIG.bannersTop[idx];
        if (!data) return;

        const img = card.querySelector('.loucas-lv-img');
        const title = card.querySelector('.loucas-lv-card-title');
        const btn = card.querySelector('.loucas-lv-btn');
        const mediaLink = card.querySelector('.loucas-lv-media-link');
        const legacyLink = card.querySelector('.loucas-lv-card-link');

        if (img && data.image) img.src = data.image;
        if (title && data.title) title.textContent = data.title;
        if (btn && data.btnText) btn.textContent = data.btnText;
        if (btn && data.link) btn.href = data.link;
        if (mediaLink && data.link) mediaLink.href = data.link;
        if (legacyLink && data.link) legacyLink.href = data.link;
      });
    }

    // Linha Inferior: 2 Banners Centralizados
    const bottomCards = document.querySelectorAll('#loucasRowBottom .loucas-lv-card');
    if (Array.isArray(LOUCAS_CONFIG.bannersBottom) && bottomCards.length > 0) {
      bottomCards.forEach((card, idx) => {
        const data = LOUCAS_CONFIG.bannersBottom[idx];
        if (!data) return;

        const img = card.querySelector('.loucas-lv-img');
        const title = card.querySelector('.loucas-lv-card-title');
        const btn = card.querySelector('.loucas-lv-btn');
        const mediaLink = card.querySelector('.loucas-lv-media-link');
        const legacyLink = card.querySelector('.loucas-lv-card-link');

        if (img && data.image) img.src = data.image;
        if (title && data.title) title.textContent = data.title;
        if (btn && data.btnText) btn.textContent = data.btnText;
        if (btn && data.link) btn.href = data.link;
        if (mediaLink && data.link) mediaLink.href = data.link;
        if (legacyLink && data.link) legacyLink.href = data.link;
      });
    }
  }

  /* ==========================================================================
     3C-PRATARIA. NOVA SEÇÃO: PRATARIA E OURO (LAYOUT EDITORIAL SPLIT — TANIA BULHÕES)
     ========================================================================== */
  const pratariaTagline = document.getElementById('pratariaTagline');
  const pratariaTitle = document.getElementById('pratariaTitle');
  const pratariaDesc = document.getElementById('pratariaDesc');
  const pratariaBtn = document.getElementById('pratariaBtn');
  const pratariaImg = document.getElementById('pratariaImg');
  const pratariaOrnamentImg = document.getElementById('pratariaOrnamentImg');

  if (typeof PRATARIA_OURO_CONFIG === 'object' && PRATARIA_OURO_CONFIG !== null) {
    if (pratariaTagline && PRATARIA_OURO_CONFIG.tag) {
      pratariaTagline.textContent = PRATARIA_OURO_CONFIG.tag;
    }
    if (pratariaTitle && PRATARIA_OURO_CONFIG.title) {
      pratariaTitle.textContent = PRATARIA_OURO_CONFIG.title;
    }
    if (pratariaDesc && PRATARIA_OURO_CONFIG.desc) {
      const p = pratariaDesc.querySelector('p') || pratariaDesc;
      p.innerHTML = PRATARIA_OURO_CONFIG.desc;
    }
    if (pratariaBtn) {
      if (PRATARIA_OURO_CONFIG.btnText) {
        const textSpan = pratariaBtn.querySelector('.prataria-btn-text') || pratariaBtn.querySelector('span');
        if (textSpan) textSpan.textContent = PRATARIA_OURO_CONFIG.btnText;
        else pratariaBtn.textContent = PRATARIA_OURO_CONFIG.btnText;
      }
      if (PRATARIA_OURO_CONFIG.btnLink) {
        pratariaBtn.href = PRATARIA_OURO_CONFIG.btnLink;
      }
    }
    if (pratariaImg && PRATARIA_OURO_CONFIG.image) {
      pratariaImg.src = PRATARIA_OURO_CONFIG.image;
    }
    if (pratariaOrnamentImg && PRATARIA_OURO_CONFIG.ornament) {
      pratariaOrnamentImg.src = PRATARIA_OURO_CONFIG.ornament;
    }
  }

  /* ==========================================================================
     3C-LANCAMENTO. SEÇÃO DE LANÇAMENTO NO FIM DO SITE (BANNER LOUÇAS PINTADAS À MÃO)
     ========================================================================== */
  const lancamentoImg = document.getElementById('lancamentoImg');
  const lancamentoBtn = document.getElementById('lancamentoBtn');
  const lancamentoVisualNav = document.getElementById('lancamentoVisualNav');
  if (typeof LANCAMENTO_CONFIG === 'object' && LANCAMENTO_CONFIG !== null) {
    if (lancamentoImg && LANCAMENTO_CONFIG.image) {
      lancamentoImg.src = LANCAMENTO_CONFIG.image;
      if (LANCAMENTO_CONFIG.alt) lancamentoImg.alt = LANCAMENTO_CONFIG.alt;
    }
    if (lancamentoBtn) {
      if (LANCAMENTO_CONFIG.btnText) lancamentoBtn.textContent = LANCAMENTO_CONFIG.btnText;
      if (LANCAMENTO_CONFIG.btnLink) lancamentoBtn.href = LANCAMENTO_CONFIG.btnLink;
    }
    if (lancamentoVisualNav && Array.isArray(LANCAMENTO_CONFIG.visualButtons)) {
      lancamentoVisualNav.innerHTML = LANCAMENTO_CONFIG.visualButtons
        .map((label, idx) => {
          const btn = `<span class="lancamento-visual-btn">${label}</span>`;
          const sep = idx < LANCAMENTO_CONFIG.visualButtons.length - 1 ? `<span class="lancamento-nav-divider">|</span>` : '';
          return btn + sep;
        })
        .join('');
    }
  }

  /* ==========================================================================
     3D. SUBPÁGINA: COLEÇÃO JARDIM DE TOILE (NAVEGAÇÃO, VITRINE & TRÍPTICO)
     ========================================================================== */
  function renderJardimDeToile() {
    const jardimCollectionTitle = document.getElementById('jardimCollectionTitle');
    const jardimCollectionsNav = document.getElementById('jardimCollectionsNav');
    const jardimProductsRow = document.getElementById('jardimProductsRow');
    const triptychLeftImg = document.getElementById('triptychLeftImg');
    const triptychCenterVideo = document.getElementById('triptychCenterVideo');
    const triptychRightImg = document.getElementById('triptychRightImg');

    // Sincroniza o menu de navegação com as coleções presentes no grid da Home Page
    if (jardimCollectionsNav && Array.isArray(DESTAQUES_CONFIG) && DESTAQUES_CONFIG.length > 0) {
      jardimCollectionsNav.innerHTML = DESTAQUES_CONFIG.map((col, idx) => {
        const isActive = idx === 0;
        const href = isActive
          ? 'colecao-jardim-de-toile.html'
          : (col.link && !col.link.startsWith('#') ? col.link : `index.html${col.link || '#destaques'}`);
        return `
          <li>
            <a href="${href}" class="lv-collection-nav-link${isActive ? ' active' : ''}"${isActive ? ' aria-current="page"' : ''}>
              ${col.title}
            </a>
          </li>
        `;
      }).join('');
    }

    if (typeof JARDIM_DE_TOILE_CONFIG === 'object' && JARDIM_DE_TOILE_CONFIG !== null) {
      if (jardimCollectionTitle && JARDIM_DE_TOILE_CONFIG.collectionTitle) {
        jardimCollectionTitle.textContent = JARDIM_DE_TOILE_CONFIG.collectionTitle;
      }

      if (jardimProductsRow && Array.isArray(JARDIM_DE_TOILE_CONFIG.products) && JARDIM_DE_TOILE_CONFIG.products.length > 0) {
        jardimProductsRow.innerHTML = JARDIM_DE_TOILE_CONFIG.products.map((prod, idx) => `
          <article class="lv-product-item" data-product-slot="${prod.id || idx + 1}">
            <a href="${prod.link || '#triptico-colecao'}" class="lv-product-link">
              <div class="lv-product-media">
                <img src="${prod.image}" alt="${prod.name}" class="lv-product-img">
              </div>
              <h2 class="lv-product-name">${prod.name}</h2>
            </a>
          </article>
        `).join('');
      }

      if (JARDIM_DE_TOILE_CONFIG.triptych) {
        const trip = JARDIM_DE_TOILE_CONFIG.triptych;
        if (triptychLeftImg && trip.leftImage) {
          triptychLeftImg.src = trip.leftImage;
          if (trip.leftAlt) triptychLeftImg.alt = trip.leftAlt;
        }
        if (triptychCenterVideo) {
          if (trip.centerVideoPoster) triptychCenterVideo.poster = trip.centerVideoPoster;
          if (trip.centerVideo) {
            triptychCenterVideo.src = trip.centerVideo;
            const source = triptychCenterVideo.querySelector('source');
            if (source) source.src = trip.centerVideo;
            triptychCenterVideo.load();
            triptychCenterVideo.play().catch(() => {});
          }
        }
        if (triptychRightImg && trip.rightImage) {
          triptychRightImg.src = trip.rightImage;
          if (trip.rightAlt) triptychRightImg.alt = trip.rightAlt;
        }
      }
    }
  }

  // Executa a renderização dinâmica da subpágina
  renderJardimDeToile();

  // Renderização Dinâmica e Fácil Edição da Subpágina Pintados à Mão
  function renderPintadosAMao() {
    const isPintadosPage = document.body && (
      document.body.getAttribute('data-subpage') === 'pintados-a-mao' ||
      window.location.pathname.includes('pintados-a-mao')
    );
    if (!isPintadosPage) return;
    if (typeof PINTADOS_A_MAO_CONFIG !== 'object' || !PINTADOS_A_MAO_CONFIG) return;

    const titleEl = document.getElementById('pintadosPageTitle');
    const descEl = document.getElementById('pintadosPageDesc');
    const navListEl = document.getElementById('pintadosNavList');

    if (titleEl && PINTADOS_A_MAO_CONFIG.title) {
      titleEl.textContent = PINTADOS_A_MAO_CONFIG.title;
    }

    if (descEl && PINTADOS_A_MAO_CONFIG.description) {
      descEl.textContent = PINTADOS_A_MAO_CONFIG.description;
    }

    if (navListEl && Array.isArray(PINTADOS_A_MAO_CONFIG.navItems) && PINTADOS_A_MAO_CONFIG.navItems.length > 0) {
      navListEl.innerHTML = PINTADOS_A_MAO_CONFIG.navItems.map((item, idx) => `
        <li>
          <a href="${item.link}" class="lv-collection-nav-link ${item.active ? 'active' : ''}" ${item.active ? 'aria-current="page"' : ''} data-nav-index="${idx}">
            ${item.label}
          </a>
        </li>
      `).join('');

      // Adiciona interatividade aos links do menu horizontal
      const navLinks = navListEl.querySelectorAll('.lv-collection-nav-link');
      navLinks.forEach((link) => {
        link.addEventListener('click', () => {
          navLinks.forEach((l) => {
            l.classList.remove('active');
            l.removeAttribute('aria-current');
          });
          link.classList.add('active');
          link.setAttribute('aria-current', 'page');
        });
      });
    }

    if (PINTADOS_A_MAO_CONFIG.asymSection) {
      const asymTitle = document.getElementById('asymSecTitle');
      const asymDesc = document.getElementById('asymSecDesc');
      if (asymTitle && PINTADOS_A_MAO_CONFIG.asymSection.title) {
        asymTitle.textContent = PINTADOS_A_MAO_CONFIG.asymSection.title;
      }
      if (asymDesc && PINTADOS_A_MAO_CONFIG.asymSection.description) {
        asymDesc.textContent = PINTADOS_A_MAO_CONFIG.asymSection.description;
      }
    }

    // Verifica slots de imagem para ativar classe .has-image mesmo com cache do navegador
    document.querySelectorAll('.lv-mag-slot').forEach((slot) => {
      const img = slot.querySelector('.lv-mag-slot-img');
      if (img) {
        if (img.complete && img.naturalWidth > 0) {
          slot.classList.add('has-image');
        } else {
          img.addEventListener('load', () => slot.classList.add('has-image'));
          img.addEventListener('error', () => slot.classList.remove('has-image'));
        }
      }
    });
  }

  window.renderPintadosAMao = renderPintadosAMao;
  renderPintadosAMao();

  // Formata valores numéricos para moeda Real Brasileiro (BRL)
  function formatBRL(val) {
    if (typeof val === 'number') {
      return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
    const num = parseFloat(String(val).replace(/[^0-9,-]/g, '').replace(',', '.'));
    return isNaN(num) ? String(val) : num.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  // Renderização Dinâmica e Fácil Edição das Páginas de Produto (PDP)
  function renderProductPage() {
    const pdpId = document.body.getAttribute('data-pdp-id');
    if (!pdpId || typeof PDP_CONFIG !== 'object' || !PDP_CONFIG.products || !PDP_CONFIG.products[pdpId]) return;

    const prodData = PDP_CONFIG.products[pdpId];

    // Atualiza o <title> do documento e o título principal na página
    if (prodData.title) {
      document.title = `${prodData.title} — Morar Chic`;
      const titleEl = document.querySelector('.pdp-title');
      if (titleEl) titleEl.textContent = prodData.title;
    }

    const ctaEl = document.getElementById('pdpCtaBtn');
    const descEl = document.getElementById('pdpDescText');
    const galleryEl = document.getElementById('pdpMediaGallery');

    if (ctaEl && prodData.ctaText) ctaEl.textContent = prodData.ctaText;
    if (descEl && prodData.description) descEl.textContent = prodData.description;

    // Atualização Dinâmica do Texto dos Client Advisors (Fácil Edição)
    const advisorEl = document.querySelector('.pdp-advisor-note');
    const advisorMessage = (prodData && prodData.clientAdvisorsMessage) || 
                           (PDP_CONFIG.clientAdvisors && PDP_CONFIG.clientAdvisors.message);
    if (advisorEl && advisorMessage) {
      advisorEl.innerHTML = advisorMessage;
    }

    // Galeria de Fotos Exclusivas
    if (galleryEl && Array.isArray(prodData.gallery) && prodData.gallery.length > 0) {
      galleryEl.innerHTML = prodData.gallery.map((imgItem, idx) => `
        <figure class="pdp-gallery-item">
          <img src="${imgItem.src}" alt="${imgItem.alt || prodData.title}" class="pdp-gallery-img" loading="${idx === 0 ? 'eager' : 'lazy'}">
        </figure>
      `).join('');
    }

    // Gerenciamento de Medidas e Preço Inicial "A partir de:"
    const activeSizes = Array.isArray(prodData.sizes) ? prodData.sizes.filter(s => s.enabled !== false) : [];
    const lowestPrice = activeSizes.length > 0 ? Math.min(...activeSizes.map(s => Number(s.price))) : 0;

    const priceFromWrap = document.getElementById('pdpPriceFromWrap');
    const priceFromVal = document.getElementById('pdpPriceFromVal');
    const priceSelectedWrap = document.getElementById('pdpPriceSelectedWrap');
    const sizeCurrentVal = document.getElementById('pdpSizeCurrentVal');
    const optionsPanel = document.getElementById('pdpSizeOptionsPanel');

    // Estado Inicial: sem medida selecionada
    if (priceFromVal && lowestPrice > 0) {
      priceFromVal.textContent = formatBRL(lowestPrice);
    }
    if (priceFromWrap) priceFromWrap.style.display = 'flex';
    if (priceSelectedWrap) priceSelectedWrap.style.display = 'none';

    if (sizeCurrentVal) {
      sizeCurrentVal.textContent = 'Selecione o tamanho';
      sizeCurrentVal.classList.add('placeholder');
    }

    // Botão de compra inicialmente desabilitado
    if (ctaEl) {
      ctaEl.classList.add('disabled');
      ctaEl.setAttribute('aria-disabled', 'true');
      ctaEl.removeAttribute('href');
    }

    // Popula o menu de tamanhos com base na lista de sizes configurada
    if (optionsPanel && activeSizes.length > 0) {
      optionsPanel.innerHTML = activeSizes.map(s => `
        <button type="button" class="pdp-size-option-btn" data-size="${s.name}" data-price="${s.price}" role="option">
          <span>${s.name}</span>
          <span class="pdp-opt-price">${formatBRL(s.price)}</span>
        </button>
      `).join('');
    }

    // Sincronização Automática da Seção Compre Junto (Títulos sincronizados em tempo real)
    if (prodData.buyTogether) {
      const bt = prodData.buyTogether;
      const btEyebrow = document.getElementById('pdpBtEyebrow');
      const btTitle = document.getElementById('pdpBtTitle');
      const btSub = document.getElementById('pdpBtSub');
      const btImg1 = document.getElementById('pdpBtImg1');
      const btTag1 = document.getElementById('pdpBtTag1');
      const btName1 = document.getElementById('pdpBtName1');
      const btPrice1 = document.getElementById('pdpBtPrice1');
      const btImg2 = document.getElementById('pdpBtImg2');
      const btTag2 = document.getElementById('pdpBtTag2');
      const btName2 = document.getElementById('pdpBtName2');
      const btPrice2 = document.getElementById('pdpBtPrice2');
      const btTotalLabel = document.getElementById('pdpBtTotalLabel');
      const btTotalPrice = document.getElementById('pdpBtTotalPrice');
      const btInstallments = document.getElementById('pdpBtInstallments');
      const btCtaBtn = document.getElementById('pdpBtCtaBtn');

      if (btEyebrow && bt.eyebrow) btEyebrow.textContent = bt.eyebrow;
      if (btTitle && bt.title) btTitle.textContent = bt.title;
      if (btSub && bt.subtitle) btSub.textContent = bt.subtitle;

      // PRODUTO 1: Sempre herda automaticamente o título exato do produto atual!
      if (btName1) btName1.textContent = prodData.title;
      if (btTag1 && bt.item1?.tag) btTag1.textContent = bt.item1.tag;
      if (btImg1 && bt.item1?.image) { btImg1.src = bt.item1.image; btImg1.alt = prodData.title; }
      if (btPrice1) btPrice1.textContent = formatBRL(lowestPrice);

      // PRODUTO 2: Se vinculado ao companionProductId, herda o título exato do outro produto
      let companionTitle = bt.item2?.name || 'Produto Complementar';
      let companionLowestPrice = 0;
      if (bt.companionProductId && PDP_CONFIG.products[bt.companionProductId]) {
        const comp = PDP_CONFIG.products[bt.companionProductId];
        companionTitle = comp.title;
        const compSizes = Array.isArray(comp.sizes) ? comp.sizes.filter(s => s.enabled !== false) : [];
        if (compSizes.length > 0) companionLowestPrice = Math.min(...compSizes.map(s => Number(s.price)));
      }

      if (btName2) {
        btName2.textContent = companionTitle;
        if (bt.item2?.link) btName2.setAttribute('href', bt.item2.link);
      }
      if (btTag2 && bt.item2?.tag) btTag2.textContent = bt.item2.tag;
      if (btImg2 && bt.item2?.image) { btImg2.src = bt.item2.image; btImg2.alt = companionTitle; }
      if (btPrice2 && companionLowestPrice > 0) btPrice2.textContent = formatBRL(companionLowestPrice);

      // Cálculo do Total do Compre Junto
      const combinedTotal = (lowestPrice > 0 && companionLowestPrice > 0) ? (lowestPrice + companionLowestPrice) : 4300;
      if (btTotalLabel && bt.totalLabel) btTotalLabel.textContent = bt.totalLabel;
      if (btTotalPrice) btTotalPrice.textContent = formatBRL(combinedTotal);
      if (btInstallments) btInstallments.textContent = `ou em até 10x de ${formatBRL(combinedTotal / 10)} sem juros`;
      if (btCtaBtn) {
        if (bt.buttonText) btCtaBtn.textContent = bt.buttonText;
        const btMsg = encodeURIComponent(`Olá! Quero comprar junto com 1 clique: ${prodData.title} + ${companionTitle} (Total: ${formatBRL(combinedTotal)}) da Morar Chic.`);
        btCtaBtn.setAttribute('href', `https://wa.me/5517997140030?text=${btMsg}`);
      }
    }
  }

  renderProductPage();

  // Acordeons das Páginas de Produto (PDP Estilo Editorial Louis Vuitton)
  document.querySelectorAll('.pdp-accordion-header').forEach((btn) => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.pdp-accordion-item');
      if (parent) {
        parent.classList.toggle('open');
      }
    });
  });

  // Seletor de Tamanho Sofisticado da PDP & Atualização de Preços
  const sizePickerWrap = document.getElementById('pdpSizePickerWrap');
  const sizeTriggerBtn = document.getElementById('pdpSizeTriggerBtn');
  const sizeCurrentVal = document.getElementById('pdpSizeCurrentVal');
  const pdpCtaBtn = document.getElementById('pdpCtaBtn');
  const pdpBtCtaBtn = document.getElementById('pdpBtCtaBtn');

  if (sizeTriggerBtn && sizePickerWrap) {
    sizeTriggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      sizePickerWrap.classList.toggle('open');
    });

    // Delegação de evento para suportar opções populadas dinamicamente
    sizePickerWrap.addEventListener('click', (e) => {
      const optBtn = e.target.closest('.pdp-size-option-btn');
      if (!optBtn) return;
      e.stopPropagation();

      const pdpId = document.body.getAttribute('data-pdp-id');
      const prodData = (pdpId && typeof PDP_CONFIG === 'object' && PDP_CONFIG.products) ? PDP_CONFIG.products[pdpId] : null;

      const selectedSizeName = optBtn.getAttribute('data-size') || optBtn.querySelector('span')?.textContent.trim();
      const rawPrice = optBtn.getAttribute('data-price');
      const sizePrice = rawPrice ? parseFloat(rawPrice) : 1850;

      if (sizeCurrentVal) {
        sizeCurrentVal.textContent = selectedSizeName;
        sizeCurrentVal.classList.remove('placeholder');
      }

      sizePickerWrap.querySelectorAll('.pdp-size-option-btn').forEach((b) => b.classList.remove('active'));
      optBtn.classList.add('active');
      sizePickerWrap.classList.remove('open');

      // Atualiza os valores detalhados na tela
      const priceFromWrap = document.getElementById('pdpPriceFromWrap');
      const priceSelectedWrap = document.getElementById('pdpPriceSelectedWrap');
      const priceTotalVal = document.getElementById('pdpPriceTotalVal');
      const priceInstallments = document.getElementById('pdpPriceInstallments');
      const priceCash = document.getElementById('pdpPriceCash');

      if (priceFromWrap) priceFromWrap.style.display = 'none';
      if (priceSelectedWrap) priceSelectedWrap.style.display = 'flex';

      // 1. Valor Total
      if (priceTotalVal) priceTotalVal.textContent = formatBRL(sizePrice);

      // 2. Valor das parcelas em até 10x sem juros
      const parcelValue = sizePrice / 10;
      if (priceInstallments) priceInstallments.textContent = `em até 10x de ${formatBRL(parcelValue)} sem juros`;

      // 3. Valor à vista com desconto no Pix
      const discountPercent = (prodData && prodData.cashDiscountPercent) ? prodData.cashDiscountPercent : 5;
      const cashValue = sizePrice * (1 - discountPercent / 100);
      if (priceCash) priceCash.textContent = `ou ${formatBRL(cashValue)} à vista com ${discountPercent}% de desconto no Pix`;

      // Habilita o botão COMPRAR
      if (pdpCtaBtn) {
        pdpCtaBtn.classList.remove('disabled');
        pdpCtaBtn.setAttribute('aria-disabled', 'false');
        const productTitle = (prodData && prodData.title) || document.querySelector('.pdp-title')?.textContent.trim() || 'Produto';
        const msg = encodeURIComponent(`Olá! Gostaria de comprar o ${productTitle} (Tamanho: ${selectedSizeName} — ${formatBRL(sizePrice)}) da Morar Chic.`);
        pdpCtaBtn.setAttribute('href', `https://wa.me/5517997140030?text=${msg}`);
      }

      // Atualiza também o Compre Junto com o tamanho selecionado
      if (pdpBtCtaBtn && prodData) {
        const item1Name = prodData.title;
        const item2Name = document.getElementById('pdpBtName2')?.textContent.trim() || 'Produto Complementar';
        const btMsg = encodeURIComponent(`Olá! Quero comprar junto com 1 clique: ${item1Name} (Tamanho: ${selectedSizeName}) + ${item2Name} da Morar Chic.`);
        pdpBtCtaBtn.setAttribute('href', `https://wa.me/5517997140030?text=${btMsg}`);
      }
    });

    document.addEventListener('click', (e) => {
      if (!sizePickerWrap.contains(e.target)) {
        sizePickerWrap.classList.remove('open');
      }
    });
  }

  // Botão COMPRAR: Adiciona o produto à sacola e abre o drawer da sacola
  if (pdpCtaBtn) {
    pdpCtaBtn.addEventListener('click', (e) => {
      if (pdpCtaBtn.classList.contains('disabled')) {
        e.preventDefault();
        if (sizePickerWrap) {
          sizePickerWrap.classList.add('open');
          sizePickerWrap.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
      }

      e.preventDefault();
      const productTitle = (prodData && prodData.title) || document.querySelector('.pdp-title')?.textContent.trim() || 'Produto Toile';
      const productPrice = currentPrice || (prodData && prodData.basePrice) || 1850;
      const productImg = (prodData && prodData.media && prodData.media[0] && prodData.media[0].src) || document.querySelector('.pdp-main-slide img')?.getAttribute('src') || 'assets/images/DESTAQUE-1.jpg';
      const sizeName = selectedSizeName || 'Queen';

      addToCart({
        id: `${productTitle}_${sizeName}`,
        title: productTitle,
        variant: `Tamanho: ${sizeName}`,
        price: productPrice,
        image: productImg,
        quantity: 1
      });

      openCartDrawer();
    });
  }

  // Compre Junto com 1 Clique: Adiciona os 2 produtos à sacola
  if (pdpBtCtaBtn) {
    pdpBtCtaBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const item1Name = (prodData && prodData.title) || 'Jogo de Lençol Toile';
      const sizeName = selectedSizeName || 'Queen';
      const item1Price = currentPrice || 1850;
      const item1Img = (prodData && prodData.media && prodData.media[0] && prodData.media[0].src) || 'assets/images/DESTAQUE-1.jpg';

      const item2Name = document.getElementById('pdpBtName2')?.textContent.trim() || 'Kit Edredom Toile';
      const item2Price = 2450;
      const item2Img = 'assets/images/pdp-edredom-toile-1.jpg';

      addToCart({
        id: `${item1Name}_${sizeName}`,
        title: item1Name,
        variant: `Tamanho: ${sizeName}`,
        price: item1Price,
        image: item1Img,
        quantity: 1
      });

      addToCart({
        id: `${item2Name}_${sizeName}`,
        title: item2Name,
        variant: `Tamanho: ${sizeName}`,
        price: item2Price,
        image: item2Img,
        quantity: 1
      });

      openCartDrawer();
    });
  }

  // Gaveta Lateral: Qual é o meu tamanho? (Padrão Louis Vuitton)
  const sizeGuideTrigger = document.getElementById('pdpSizeGuideTrigger');
  const sizeDrawer = document.getElementById('pdpSizeDrawer');
  const sizeDrawerBackdrop = document.getElementById('pdpSizeDrawerBackdrop');
  const sizeDrawerClose = document.getElementById('pdpSizeDrawerClose');

  function openSizeDrawer() {
    sizeDrawer?.classList.add('open');
    sizeDrawerBackdrop?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeSizeDrawer() {
    sizeDrawer?.classList.remove('open');
    sizeDrawerBackdrop?.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Sincroniza a imagem e o tópico do Guia de Tamanhos a partir de PDP_CONFIG
  const pdpSizeGuideImg = document.getElementById('pdpSizeGuideImg');
  const pdpSizeGuideAdvice = document.getElementById('pdpSizeGuideAdvice');
  if (typeof PDP_CONFIG === 'object') {
    if (pdpSizeGuideImg && PDP_CONFIG.sizeGuideImage) {
      pdpSizeGuideImg.src = PDP_CONFIG.sizeGuideImage;
      if (PDP_CONFIG.sizeGuideAlt) pdpSizeGuideImg.alt = PDP_CONFIG.sizeGuideAlt;
    }
    if (pdpSizeGuideAdvice && PDP_CONFIG.sizeGuideAdvice) {
      pdpSizeGuideAdvice.innerHTML = PDP_CONFIG.sizeGuideAdvice;
    }
  }

  sizeGuideTrigger?.addEventListener('click', (e) => {
    e.preventDefault();
    openSizeDrawer();
  });

  sizeDrawerClose?.addEventListener('click', closeSizeDrawer);
  sizeDrawerBackdrop?.addEventListener('click', closeSizeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sizeDrawer?.classList.contains('open')) {
      closeSizeDrawer();
    }
  });

  // Bloco de Descrição com Degradê Suave e "Ler mais"
  const pdpReadMoreBtn = document.getElementById('pdpReadMoreBtn');
  const pdpDescWrapper = document.getElementById('pdpDescWrapper');

  if (pdpReadMoreBtn && pdpDescWrapper) {
    pdpReadMoreBtn.addEventListener('click', () => {
      const isExpanded = pdpDescWrapper.classList.toggle('is-expanded');
      pdpReadMoreBtn.textContent = isExpanded ? 'Ler menos' : 'Ler mais';
    });
  }

  /* ==========================================================================
     SIMULADOR / CALCULADOR DE FRETE E PRAZO NA PDP (CONFORTO VISUAL)
     ========================================================================== */
  const pdpShippingForm = document.getElementById('pdpShippingForm');
  const pdpShippingInput = document.getElementById('pdpShippingInput');
  const pdpShippingSubmitBtn = document.getElementById('pdpShippingSubmitBtn');
  const pdpShippingResults = document.getElementById('pdpShippingResults');
  const pdpShippingLoading = document.getElementById('pdpShippingLoading');
  const pdpShippingOptions = document.getElementById('pdpShippingOptions');

  if (pdpShippingInput) {
    // Máscara automática de CEP (00000-000)
    pdpShippingInput.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g, '').slice(0, 8);
      if (v.length > 5) {
        v = v.replace(/^(\d{5})(\d)/, '$1-$2');
      }
      e.target.value = v;
    });

    const calculateShipping = () => {
      const rawVal = pdpShippingInput.value.replace(/\D/g, '');
      if (rawVal.length < 5) {
        pdpShippingInput.focus();
        return;
      }

      if (pdpShippingResults) pdpShippingResults.style.display = 'block';
      if (pdpShippingLoading) pdpShippingLoading.style.display = 'flex';
      if (pdpShippingOptions) pdpShippingOptions.innerHTML = '';

      setTimeout(() => {
        if (pdpShippingLoading) pdpShippingLoading.style.display = 'none';

        // Cálculo pseudo-aleatório / simulador refinado baseado nos dígitos do CEP
        const seed = rawVal.split('').reduce((acc, char) => acc + parseInt(char, 10), 0);
        const sedexVal = (36 + (seed % 9) * 1.5).toFixed(2).replace('.', ',');
        const pacVal = (21 + (seed % 6) * 1.2).toFixed(2).replace('.', ',');
        const sedexDays = 2 + (seed % 2);
        const pacDays = 5 + (seed % 3);

        if (pdpShippingOptions) {
          pdpShippingOptions.innerHTML = `
            <div class="pdp-ship-card">
              <div class="pdp-ship-left">
                <div class="pdp-ship-title-wrap">
                  <span class="pdp-ship-name">Sedex Express</span>
                  <span class="pdp-ship-badge express">Mais Rápido</span>
                </div>
                <span class="pdp-ship-days">Chega em até ${sedexDays} dias úteis</span>
              </div>
              <div class="pdp-ship-price">R$ ${sedexVal}</div>
            </div>

            <div class="pdp-ship-card">
              <div class="pdp-ship-left">
                <div class="pdp-ship-title-wrap">
                  <span class="pdp-ship-name">PAC Convencional</span>
                  <span class="pdp-ship-badge">Econômico</span>
                </div>
                <span class="pdp-ship-days">Chega em ${pacDays} a ${pacDays + 2} dias úteis</span>
              </div>
              <div class="pdp-ship-price">R$ ${pacVal}</div>
            </div>

            <div class="pdp-ship-card">
              <div class="pdp-ship-left">
                <div class="pdp-ship-title-wrap">
                  <span class="pdp-ship-name">Frete Cortesia Morar Chic</span>
                  <span class="pdp-ship-badge">Especial</span>
                </div>
                <span class="pdp-ship-days">Embalagem nobre para presente (4 a 6 dias úteis)</span>
              </div>
              <div class="pdp-ship-price free">Grátis</div>
            </div>

            <div class="pdp-ship-disclaimer">
              Previsão simulada para o CEP informado a partir do nosso Centro de Distribuição.
            </div>
          `;
        }
      }, 350);
    };

    pdpShippingSubmitBtn?.addEventListener('click', calculateShipping);
    pdpShippingForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      calculateShipping();
    });
    pdpShippingInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        calculateShipping();
      }
    });
  }

  /* ==========================================================================
     PÁGINA DE PRODUTO 2: CONTROLES INTERATIVOS (REFERÊNCIA CHESTERFIELD)
     Miniaturas verticais, Seletor de Quantidade, Adicionar ao Pedido & Compartilhar
     ========================================================================== */
  const pdp2Thumbs = document.querySelectorAll('.pdp2-thumb-btn');
  const pdp2MainImg = document.getElementById('pdp2MainImg');
  if (pdp2Thumbs.length > 0 && pdp2MainImg) {
    pdp2Thumbs.forEach((thumb) => {
      thumb.addEventListener('click', () => {
        pdp2Thumbs.forEach((t) => t.classList.remove('active'));
        thumb.classList.add('active');
        const newSrc = thumb.getAttribute('data-src');
        if (newSrc && pdp2MainImg.getAttribute('src') !== newSrc) {
          pdp2MainImg.style.opacity = '0.35';
          setTimeout(() => {
            pdp2MainImg.setAttribute('src', newSrc);
            pdp2MainImg.style.opacity = '1';
          }, 150);
        }
      });
    });
  }

  // Seletor de Quantidade PDP2
  const pdp2QtyMinus = document.getElementById('pdp2QtyMinus');
  const pdp2QtyPlus = document.getElementById('pdp2QtyPlus');
  const pdp2QtyVal = document.getElementById('pdp2QtyVal');
  let pdp2CurrentQty = 1;

  pdp2QtyMinus?.addEventListener('click', () => {
    if (pdp2CurrentQty > 1) {
      pdp2CurrentQty -= 1;
      if (pdp2QtyVal) pdp2QtyVal.textContent = String(pdp2CurrentQty);
    }
  });

  pdp2QtyPlus?.addEventListener('click', () => {
    if (pdp2CurrentQty < 99) {
      pdp2CurrentQty += 1;
      if (pdp2QtyVal) pdp2QtyVal.textContent = String(pdp2CurrentQty);
    }
  });

  // Botão ADICIONAR AO PEDIDO na PDP2 -> adiciona na Sacola e abre Drawer
  const pdp2AddBtn = document.getElementById('pdp2AddBtn');
  if (pdp2AddBtn) {
    pdp2AddBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const pName = pdp2AddBtn.getAttribute('data-name') || 'Almofada Toile';
      const pPrice = parseFloat(pdp2AddBtn.getAttribute('data-price') || '380');
      const pImg = pdp2AddBtn.getAttribute('data-img') || 'assets/images/pdp-almofada-xadrez-1.jpg';
      const pSku = pdp2AddBtn.getAttribute('data-sku') || 'MC-00031.223';
      const qty = pdp2CurrentQty || 1;

      addToCart({
        id: pSku,
        title: pName,
        variant: '50x50cm • Enchimento incluso',
        price: pPrice,
        image: pImg,
        quantity: qty
      });

      openCartDrawer();
    });
  }

  // Botão Compartilhar PDP2
  const pdp2ShareBtn = document.getElementById('pdp2ShareBtn');
  if (pdp2ShareBtn) {
    pdp2ShareBtn.addEventListener('click', async () => {
      const pageTitle = document.title || 'Morar Chic';
      const pageUrl = window.location.href;
      if (navigator.share) {
        try {
          await navigator.share({
            title: pageTitle,
            text: `Confira este produto exclusivo na Morar Chic: ${pageTitle}`,
            url: pageUrl
          });
        } catch (err) {
          // Usuário cancelou
        }
      } else {
        try {
          await navigator.clipboard.writeText(pageUrl);
          const shareSpan = pdp2ShareBtn.querySelector('span');
          if (shareSpan) {
            const originalText = shareSpan.textContent;
            shareSpan.textContent = 'Link copiado!';
            setTimeout(() => {
              shareSpan.textContent = originalText;
            }, 2000);
          }
        } catch (e) {
          prompt('Copie o link do produto:', pageUrl);
        }
      }
    });
  }

  // Acordeons em páginas PDP (incluindo PDP2)
  document.querySelectorAll('.pdp2-page-wrapper .pdp-accordion-header').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.pdp-accordion-item');
      if (item) {
        item.classList.toggle('active');
        const icon = btn.querySelector('.pdp-accordion-icon');
        if (icon) {
          icon.textContent = item.classList.contains('active') ? '−' : '+';
        }
      }
    });
  });

  // Navegação nativa ao clicar em qualquer link de âncora (#) com compensação do header
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerH = siteHeader ? siteHeader.offsetHeight : 80;
        const isFullBleed = href === '#hero';
        const scrollOffset = isFullBleed ? 0 : -headerH - 12;
        const targetPos = target.getBoundingClientRect().top + window.pageYOffset + scrollOffset;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    });
  });

  /* ==========================================================================
     4. SISTEMA DE BUSCA MORAR CHIC (LOUIS VUITTON & GAVETA)
     ========================================================================== */
  function executeSearch(query) {
    if (!query) return;
    const mapSearch = [
      { keys: ['cama', 'lençol', 'lencol', 'edredom', 'bordada', 'estampada', 'quarto'], target: '#cama' },
      { keys: ['mesa', 'louça', 'louca', 'pip', 'concept', 'taça', 'taca', 'faqueiro', 'jantar', 'porcelana'], target: '#mesa-posta' },
      { keys: ['pintado', 'mão', 'mao', 'atelier', 'arte'], target: '#pintados-a-mao' },
      { keys: ['prata', 'ouro', 'bandeja', 'baixela'], target: '#prataria-e-ouro' },
      { keys: ['destaque', 'coleção', 'colecao', 'toile', 'naturale', 'constance', 'sonhare', 'flore', 'alvorada'], target: '#destaques' },
      { keys: ['institucional', 'sobre', 'missão', 'missao', 'história', 'historia', '2015'], target: '#institucional' }
    ];
    const found = mapSearch.find((item) => item.keys.some((k) => query.includes(k)));
    const targetEl = document.querySelector(found ? found.target : '#destaques');
    if (targetEl) {
      closeLvSearch();
      closeDrawer();
      const headerH = siteHeader ? siteHeader.offsetHeight : 84;
      const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - headerH - 12;
      window.scrollTo({ top: targetPos, behavior: 'smooth' });
    }
  }

  /* ==========================================================================
     5. HEADER LOUIS VUITTON (REFERÊNCIA ABSOLUTA: https://br.louisvuitton.com/por-br/homepage)
     - Hover no header: fundo branco sólido (#ffffff) e textos/ícones pretos (#000000) via CSS
     - Clique em "Menu": abre a gaveta lateral à esquerda
     - Clique em "Buscar": abre o painel de busca
     ========================================================================== */
  const lvMenuTrigger = document.querySelector('.lv-menu-trigger') || document.getElementById('hamburgerBtn');
  const lvSearchTrigger = document.getElementById('lvSearchTrigger');
  const lvSearchPanel = document.getElementById('lvSearchPanel');
  const lvSearchInput = document.getElementById('lvSearchInput');
  const lvSearchCloseBtn = document.getElementById('lvSearchCloseBtn');
  const lvHeaderBackdrop = document.getElementById('lvHeaderBackdrop');
  const lvWishlistBtn = document.getElementById('lvWishlistBtn');

  const lateralDrawer = document.getElementById('lateralDrawer') || document.getElementById('mobileMenu');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const drawerBackdrop = document.getElementById('drawerBackdrop') || document.getElementById('zaraDrawerBackdrop');

  function openDrawer() {
    closeLvSearch();
    lateralDrawer?.classList.add('active');
    drawerBackdrop?.classList.add('active');
    lateralDrawer?.setAttribute('aria-hidden', 'false');
    lvMenuTrigger?.setAttribute('aria-expanded', 'true');
    document.body.classList.add('drawer-open');
    siteHeader?.classList.add('drawer-open');
  }

  function closeDrawer() {
    lateralDrawer?.classList.remove('active');
    drawerBackdrop?.classList.remove('active');
    lateralDrawer?.setAttribute('aria-hidden', 'true');
    lvMenuTrigger?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('drawer-open');
    siteHeader?.classList.remove('drawer-open');
  }

  function openLvSearch() {
    closeDrawer();
    siteHeader?.classList.add('search-open');
    lvSearchPanel?.classList.add('active');
    lvSearchPanel?.setAttribute('aria-hidden', 'false');
    lvSearchTrigger?.classList.add('active');
    lvSearchTrigger?.setAttribute('aria-expanded', 'true');
    lvHeaderBackdrop?.classList.add('active');
    setTimeout(() => {
      lvSearchInput?.focus();
    }, 150);
  }

  function closeLvSearch() {
    siteHeader?.classList.remove('search-open');
    lvSearchPanel?.classList.remove('active');
    lvSearchPanel?.setAttribute('aria-hidden', 'true');
    lvSearchTrigger?.classList.remove('active');
    lvSearchTrigger?.setAttribute('aria-expanded', 'false');
    lvHeaderBackdrop?.classList.remove('active');
  }

  // Clique em "Menu" abre/fecha a gaveta lateral da esquerda
  lvMenuTrigger?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (lateralDrawer?.classList.contains('active')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  // Clique em "Buscar" abre/fecha o painel de busca
  lvSearchTrigger?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (siteHeader?.classList.contains('search-open')) {
      closeLvSearch();
    } else {
      openLvSearch();
    }
  });

  lvSearchCloseBtn?.addEventListener('click', closeLvSearch);

  lvSearchInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = lvSearchInput.value.trim().toLowerCase();
      if (val) executeSearch(val);
      closeLvSearch();
      lvSearchInput.blur();
    }
  });

  document.querySelectorAll('.lv-suggest-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      const q = pill.getAttribute('data-query');
      if (q) {
        if (lvSearchInput) lvSearchInput.value = pill.textContent.trim();
        executeSearch(q);
        closeLvSearch();
      }
    });
  });

  lvHeaderBackdrop?.addEventListener('click', closeLvSearch);

  /* ==========================================================================
     GERENCIADOR DA SACOLA DE COMPRAS LATERAL (CART DRAWER)
     - Ícone de sacolinha no topo substitui o coração
     - Contador dinâmico (badge) atualizado em tempo real
     - Botão comprar adiciona o produto e abre a sacola
     - Cliente visualiza os produtos com miniatura, tamanho, quantidade e preço
     ========================================================================== */
  const CART_STORAGE_KEY = 'morarchic_cart_items';
  const cartDrawer = document.getElementById('cartDrawer');
  const cartDrawerBackdrop = document.getElementById('cartDrawerBackdrop');
  const cartDrawerClose = document.getElementById('cartDrawerClose');
  const cartContinueBtn = document.getElementById('cartContinueBtn');
  const lvBagBtn = document.getElementById('lvBagBtn');

  function getCart() {
    try {
      const data = localStorage.getItem(CART_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  function saveCart(cart) {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {}
    updateCartUI();
  }

  function addToCart(item) {
    const cart = getCart();
    const existingIndex = cart.findIndex((i) => i.id === item.id);
    if (existingIndex > -1) {
      cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + (item.quantity || 1);
    } else {
      cart.push({ ...item, quantity: item.quantity || 1 });
    }
    saveCart(cart);

    // Efeito pop no badge
    const badges = document.querySelectorAll('.lv-bag-badge');
    badges.forEach((b) => {
      b.classList.add('pop');
      setTimeout(() => b.classList.remove('pop'), 280);
    });
  }

  function removeFromCart(id) {
    let cart = getCart();
    cart = cart.filter((i) => i.id !== id);
    saveCart(cart);
  }

  function updateCartQty(id, delta) {
    const cart = getCart();
    const item = cart.find((i) => i.id === id);
    if (item) {
      item.quantity = (item.quantity || 1) + delta;
      if (item.quantity <= 0) {
        removeFromCart(id);
        return;
      }
      saveCart(cart);
    }
  }

  function getCartTotals() {
    const cart = getCart();
    const count = cart.reduce((acc, i) => acc + (i.quantity || 1), 0);
    const subtotal = cart.reduce((acc, i) => acc + ((i.price || 0) * (i.quantity || 1)), 0);
    return { count, subtotal };
  }

  function updateCartUI() {
    const cart = getCart();
    const { count, subtotal } = getCartTotals();

    // Atualiza badges em todas as instâncias do cabeçalho
    const badges = document.querySelectorAll('.lv-bag-badge');
    badges.forEach((b) => {
      b.textContent = count;
      b.style.display = count > 0 ? 'inline-flex' : 'none';
    });

    const countTitle = document.getElementById('cartCountTitle');
    if (countTitle) countTitle.textContent = count;

    const subtotalEl = document.getElementById('cartSubtotalVal');
    if (subtotalEl) subtotalEl.textContent = formatBRL(subtotal);

    const bodyEl = document.getElementById('cartDrawerBody');
    const footerEl = document.getElementById('cartDrawerFooter');

    if (!bodyEl) return;

    if (cart.length === 0) {
      bodyEl.innerHTML = `
        <div class="cart-empty-state">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          <p class="cart-empty-text">Sua sacola de compras está vazia no momento.</p>
          <a href="index.html#destaques" class="cart-empty-link" id="cartEmptyExploreLink">Explorar Coleções</a>
        </div>
      `;
      if (footerEl) footerEl.style.display = 'none';
      document.getElementById('cartEmptyExploreLink')?.addEventListener('click', closeCartDrawer);
      return;
    }

    if (footerEl) footerEl.style.display = 'block';

    bodyEl.innerHTML = cart.map((item) => `
      <div class="cart-item" data-cart-id="${item.id}">
        <div class="cart-item-media">
          <img src="${item.image}" alt="${item.title}" class="cart-item-img" onerror="this.src='assets/images/DESTAQUE-1.jpg';">
        </div>
        <div class="cart-item-info">
          <div class="cart-item-header">
            <h4 class="cart-item-title">${item.title}</h4>
            <button type="button" class="cart-item-remove" data-id="${item.id}" aria-label="Remover item">✕</button>
          </div>
          <div class="cart-item-variant">${item.variant || ''}</div>
          <div class="cart-item-bottom">
            <div class="cart-qty-control">
              <button type="button" class="cart-qty-btn cart-qty-minus" data-id="${item.id}">−</button>
              <span class="cart-qty-num">${item.quantity}</span>
              <button type="button" class="cart-qty-btn cart-qty-plus" data-id="${item.id}">+</button>
            </div>
            <div class="cart-item-price">${formatBRL(item.price * item.quantity)}</div>
          </div>
        </div>
      </div>
    `).join('');

    // Eventos de remover e alterar quantidade
    bodyEl.querySelectorAll('.cart-item-remove').forEach((btn) => {
      btn.addEventListener('click', () => {
        removeFromCart(btn.getAttribute('data-id'));
      });
    });

    bodyEl.querySelectorAll('.cart-qty-minus').forEach((btn) => {
      btn.addEventListener('click', () => {
        updateCartQty(btn.getAttribute('data-id'), -1);
      });
    });

    bodyEl.querySelectorAll('.cart-qty-plus').forEach((btn) => {
      btn.addEventListener('click', () => {
        updateCartQty(btn.getAttribute('data-id'), 1);
      });
    });

    // Atualiza link do WhatsApp no Checkout com resumo formatado
    const checkoutBtn = document.getElementById('cartCheckoutBtn');
    if (checkoutBtn) {
      let orderMsg = `Olá Morar Chic! Gostaria de finalizar o pedido da minha sacola:\n\n`;
      cart.forEach((i, idx) => {
        orderMsg += `${idx + 1}. ${i.title} (${i.variant}) - Qtd: ${i.quantity} x ${formatBRL(i.price)} = ${formatBRL(i.price * i.quantity)}\n`;
      });
      orderMsg += `\n*Total: ${formatBRL(subtotal)}*\nFrete Cortesia Especial.`;
      checkoutBtn.setAttribute('href', `https://wa.me/5517997140030?text=${encodeURIComponent(orderMsg)}`);
      checkoutBtn.setAttribute('target', '_blank');
      checkoutBtn.setAttribute('rel', 'noopener noreferrer');
    }
  }

  function openCartDrawer() {
    updateCartUI();
    cartDrawer?.classList.add('active');
    cartDrawerBackdrop?.classList.add('active');
    cartDrawer?.setAttribute('aria-hidden', 'false');
    cartDrawerBackdrop?.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeCartDrawer() {
    cartDrawer?.classList.remove('active');
    cartDrawerBackdrop?.classList.remove('active');
    cartDrawer?.setAttribute('aria-hidden', 'true');
    cartDrawerBackdrop?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  lvBagBtn?.addEventListener('click', openCartDrawer);
  document.querySelectorAll('.lv-bag-btn').forEach((btn) => {
    btn.addEventListener('click', openCartDrawer);
  });
  cartDrawerClose?.addEventListener('click', closeCartDrawer);
  cartDrawerBackdrop?.addEventListener('click', closeCartDrawer);
  cartContinueBtn?.addEventListener('click', closeCartDrawer);

  // Inicializa a Sacola no carregamento
  updateCartUI();

  const drawerSearchInput = document.getElementById('drawerSearchInput');
  drawerSearchInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      executeSearch(drawerSearchInput.value.trim().toLowerCase());
      drawerSearchInput.blur();
    }
  });

  closeDrawerBtn?.addEventListener('click', closeDrawer);
  drawerBackdrop?.addEventListener('click', closeDrawer);

  document.querySelectorAll('.drawer-nav-link, .drawer-sec-link, .mobile-link').forEach((link) => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLvSearch();
      closeCartDrawer();
      if (lateralDrawer?.classList.contains('active')) {
        closeDrawer();
      }
    }
  });

  /* ==========================================================================
     6. NUMBERED IMAGE MAP MODAL (imagem 1 .. imagem 20)
     ========================================================================== */
  const imageSlotsData = [
    { id: 1, name: 'imagem 1', section: 'Hero Section', desc: 'Banner principal fullscreen: Quarto Casal em Linho Belga & Luminária de Piso' },
    { id: 2, name: 'imagem 2', section: 'Mesa Posta (Frase Introdutória)', desc: 'Frase de introdução às Louças Morar Chic (substituiu o banner de cupom)' },
    { id: 4, name: 'imagem 4', section: 'Mesa Posta', desc: 'Pip Studio — Porcelana' },
    { id: 5, name: 'imagem 5', section: 'Mesa Posta', desc: 'Concept — Cerâmica' },
    { id: 6, name: 'imagem 6', section: 'Mesa Posta', desc: 'Faqueiro Aço Inox Champagne Fosco 24 Peças' },
    { id: 7, name: 'imagem 7', section: 'Mesa Posta', desc: 'Kit Mesa Posta Linho Puro Bordado (6 Lugares)' },
    { id: 14, name: 'imagem 14', section: 'Pintados à Mão', desc: 'Banner Panorâmico 21:9: Coleção Porcelana Pintada à Mão Botânica & Filete Ouro (arquivo: imagem-14.jpg)' },
    { id: 16, name: 'imagem 16', section: 'Prataria e Ouro', desc: 'Layout Editorial Split (estilo Tania Bulhões): Fotografia de Prataria & Ouro (arquivo: assets/images/imagem-16.jpg)' },
    { id: 'logo-white', name: 'Logotipo Branco', section: 'Menu Superior (Topo)', desc: 'Logo branca para cabeçalho transparente sobre o hero (assets/logo/logo-white.png)' },
    { id: 'logo-dark', name: 'Logotipo Escuro', section: 'Menu Superior (Transformado)', desc: 'Logo escura/preta para cabeçalho transformado com fundo branco (assets/logo/logo-dark.png)' }
  ];

  const imageMapModal = document.getElementById('imageMapModal');
  const imageMapList = document.getElementById('imageMapList');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const closeModalBackdrop = document.getElementById('closeModalBackdrop');

  function openImageModal() {
    imageMapModal?.classList.add('active');
    imageMapModal?.setAttribute('aria-hidden', 'false');
  }

  function closeImageModal() {
    imageMapModal?.classList.remove('active');
    imageMapModal?.setAttribute('aria-hidden', 'true');
  }

  function scrollToImageSlot(id) {
    closeImageModal();
    setTimeout(() => {
      const target = document.querySelector(`[data-img-id="${id}"]`);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        target.classList.remove('pulse-highlight');
        void target.offsetWidth;
        target.classList.add('pulse-highlight');
      }
    }, 150);
  }

  if (imageMapList) {
    imageSlotsData.forEach((slot) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'modal-slot-item';
      btn.innerHTML = `
        <div class="modal-slot-top">
          <span class="modal-slot-name">${slot.name}</span>
          <span class="modal-slot-section">${slot.section}</span>
        </div>
        <div class="modal-slot-desc">${slot.desc}</div>
      `;
      btn.addEventListener('click', () => scrollToImageSlot(slot.id));
      imageMapList.appendChild(btn);
    });
  }

  ['openImageMapBtn', 'openImageMapMobileBtn', 'openImageMapDrawerBtn', 'openImageMapBtn2', 'openImageMapBtn3', 'footerMapLink'].forEach((btnId) => {
    const el = document.getElementById(btnId);
    el?.addEventListener('click', (e) => {
      e.preventDefault();
      siteHeader?.classList.remove('open');
      closeDrawer();
      openImageModal();
    });
  });

  const accountTriggerBtn = document.getElementById('accountTriggerBtn');
  accountTriggerBtn?.addEventListener('click', () => {
    const rodape = document.getElementById('rodape');
    rodape?.scrollIntoView({ behavior: 'smooth' });
  });

  closeModalBtn?.addEventListener('click', closeImageModal);
  closeModalBackdrop?.addEventListener('click', closeImageModal);

  // Clicking any numbered image box on the page also highlights its slot info
  document.querySelectorAll('[data-img-id]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = el.getAttribute('data-img-id');
      const box = el.classList.contains('numbered-image') ? el : el.querySelector('.numbered-image');
      if (box) {
        box.classList.remove('pulse-highlight');
        void box.offsetWidth;
        box.classList.add('pulse-highlight');
      }
      console.log(`Selecionado: imagem ${id}`);
    });
  });
}

// Inicializa a aplicação de forma imediata ou ao carregar o DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

window.addEventListener('load', () => {
  window.scrollTo(0, 0);
  // Reforço para garantir sincronização imediata em subpáginas
  if (typeof renderJardimDeToile === 'function') {
    renderJardimDeToile();
  }
  if (typeof renderPintadosAMao === 'function') {
    renderPintadosAMao();
  }
});
