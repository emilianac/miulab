// Para cadastrar um novo projeto no portfolio:
// 1. Coloque a imagem ou o video em images/produtos/.
// 2. Duplique um objeto abaixo.
// 3. Atualize id, titulo, categoria, imagem, descricao e detalhes.
// 4. Salve o arquivo. O site atualiza o portfolio automaticamente.

window.MIU_PORTFOLIO = {
  items: [
    {
      id: "banguela",
      title: "Banguela",
      category: "Personagens",
      label: "Projeto realizado",
      image: "images/produtos/banguela.jpeg",
      imageAlt: "Peca do personagem Banguela produzida em impressao 3D",
      description:
        "Uma referencia visual forte para quem quer personagens com acabamento bonito e presenca real na decoracao.",
      details: [
        "Projeto geek com destaque visual imediato.",
        "Boa referencia para pecas decorativas sob medida.",
        "Mostra nivel de acabamento e leitura do personagem."
      ],
      featured: true
    },
    {
      id: "hunterxhunter",
      title: "Hunter x Hunter",
      category: "Anime",
      label: "Projeto realizado",
      image: "images/produtos/hunterxhunter.jpeg",
      imageAlt: "Peca inspirada em Hunter x Hunter produzida em impressao 3D",
      description:
        "Exemplo de peca tematica para colecao, presente criativo ou decoracao personalizada com identidade forte.",
      details: [
        "Boa opcao para pedidos inspirados em anime.",
        "Detalhes pensados para valorizar o tema escolhido.",
        "Serve como base para novas referencias personalizadas."
      ],
      featured: true
    },
    {
      id: "yoshi",
      title: "Yoshi",
      category: "Games",
      label: "Projeto realizado",
      image: "images/produtos/yoshi.jpeg",
      imageAlt: "Peca do personagem Yoshi produzida em impressao 3D",
      description:
        "Projeto colorido e marcante para mostrar como personagens de games podem virar pecas com bastante personalidade.",
      details: [
        "Referencia forte para pecas de jogos e personagens.",
        "Bom exemplo de presenca visual em estante, quarto ou setup.",
        "Tambem aparece em video para mostrar melhor o volume final."
      ],
      featured: true
    },
    {
      id: "jack-skellington",
      title: "Suporte Alexa Jack Skellington",
      category: "Decoracao Geek",
      label: "Projeto realizado",
      image: "images/produtos/jack.png",
      imageAlt: "Suporte para Alexa inspirado em Jack Skellington",
      description:
        "Uma peca funcional com visual criativo, pensada para decorar e organizar o ambiente ao mesmo tempo.",
      details: [
        "Mistura utilidade com identidade visual forte.",
        "Boa referencia para suporte tematico e decorativo.",
        "Mostra como a personalizacao pode entrar no dia a dia."
      ],
      featured: false
    },
    {
      id: "mao-caveira",
      title: "Suporte Alexa Mao Caveira",
      category: "Decoracao Geek",
      label: "Projeto realizado",
      image: "images/produtos/maocaveira.png",
      imageAlt: "Suporte em formato de mao caveira para Alexa",
      description:
        "Um projeto com visual impactante para transformar um item funcional em parte da decoracao do ambiente.",
      details: [
        "Exemplo de tema forte com boa leitura visual.",
        "Combina decoracao, utilidade e presenca.",
        "Pode inspirar novos suportes personalizados."
      ],
      featured: false
    },
    {
      id: "suporte-vr",
      title: "Suporte para Headset VR",
      category: "Organizacao",
      label: "Projeto realizado",
      image: "images/produtos/vr.png",
      imageAlt: "Suporte para headset VR e controles produzido em impressao 3D",
      description:
        "Uma solucao funcional para organizar headset e controles em um unico suporte, com boa presenca visual e acabamento limpo.",
      details: [
        "Boa referencia para setups gamers e organizacao de bancada.",
        "Mostra uma peca funcional com leitura visual limpa e firme.",
        "Pode inspirar novos suportes e bases sob medida."
      ],
      featured: false
    }
  ],
  featuredVideo: {
    title: "Yoshi em video",
    description:
      "O video ajuda a mostrar volume, cor e presenca da peca pronta de um jeito que a foto sozinha nao entrega.",
    video: "images/produtos/yoshi.mp4",
    poster: "images/produtos/yoshi.jpeg",
    ctaMessage:
      "Ola! Vi o video do Yoshi no portfolio da Miu Lab 3D e quero um projeto nesse estilo."
  }
};
