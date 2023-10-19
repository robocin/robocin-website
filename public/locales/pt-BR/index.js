const ptBR = {
  navbar: {
    options: {
      home: 'Início',
      categories: 'Categorias',
      team: 'Equipe',
      papers: 'Publicações',
    },
  },
  footer: {
    contact: 'Nosso contato',
    location: {
      label: 'Onde estamos',
      address:
        'Av. Jorn. Aníbal Fernandes, s/n - Cidade Universitária, Recife - PE, 50740-560',
    },
  },
  categories_page: {
    page_header: {
      title: 'Categorias',
      description: `Nossos times desenvolvem tecnologias que
      disputam títulos em várias categorias de competições, como:`,
      categories: [
        'Small Size League',
        'Very Small Size League',
        '2D Simulation',
        'Drone',
      ],
    },
    categories: [
      {
        title: 'Small Size League',
        competitions: 'RoboCup | LARC',
        description: `Small Size League (SSL) é uma competição 
          que requer o desenvolvimento de várias áreas. Nós 
          desenvolvemos o modelo mecânico, os sistemas eletrônicos 
          e de comunicação e a inteligência artifical dos robôs. 
          Um jogo de SSL ocorre entre duas equipes de seis robôs 
          cada. Os robôs tem dimensões limitadas, o robô deve 
          caber dentro de um círculo de 180 mm de diâmetro e 
          não deve ter mais de 15 cm. Todos os objetos no campo 
          são identificados e normalizados pelos sistema de visão 
          que processa os dados proveniente pelas 4 cameras.`,
        table_header: 'Small Size League - Resultados',
      },
      {
        title: 'Very Small Size League',
        competitions: 'LARC | IronCup',
        description: `Very Small Size Soccer (VSSS) é uma competição 
        que requer desenvolvimento nas principais áreas do RobôCIn, 
        visão computacional para detectar informações sobre a situação 
        do jogo; inteligência artificial para planejar todos os 
        movimentos dos robôs, para que a equipe possa marcar gols 
        e se defender dos adversários; e robótica que envolve eletrônica 
        e mecânica para criar agentes que precisam se mover perfeitamente 
        em campo.`,
        approaches: [
          {
            title: 'Deep Learning',
            description: `Nessa abordagem nós treinamos os agentes usando 
            aprendizado por reforço, ou seja, damos uma recompensa para 
            ações boas e ruins dos agentes, ele aprende a maximizar a 
            recompensa e com isso as melhores ações para cada situação.`,
          },
          {
            title: 'Determinic',
            description: `Nessa abordagem nós usamos algoritmos determinísticos 
            para decidir as ações dos nossos robôs, ou seja, programamos a 
            estratégia e decisões que nossos jogadores fazem.`,
          },
        ],
        table_header: 'Very Small Size League - Resultados',
      },
      {
        title: '2D Simulation',
        competitions: 'RoboCup | LARC | IronCup',
        description: `Na Simulação 2D duas equipes de onze agentes autônomos 
        jogam futebol em um estádio de futebol virtual bidimensional 
        representado por um servidor central, chamado SoccerServer. 
        Este servidor sabe tudo sobre o jogo, ou seja, a posição atual de 
        todos os jogadores e a bola, a física e assim por diante. O jogo 
        conta ainda com a comunicação entre o servidor e cada agente. Por um 
        lado, cada jogador recebe uma entrada relativa e ruidosa de seus 
        sensores virtuais (visuais, acústicos e físicos) e, por outro lado, 
        pode executar alguns comandos básicos (como correr, girar ou chutar) 
        para influenciar seu ambiente.`,
        table_header: '2D Simulation - Resultados',
      },
      {
        title: 'Drone',
        competitions: 'LARC',
        description: `Descrição de participação na categoria "drone".`,
        table_header: 'Drone - Resultados',
      },
    ],
  },
  content: 'Esse conteúdo está em português',
  home: {
    banner: {
      headline: {
        title: `"Equipe da UFPE conquista o bicampeonato da maior competição de
        robótica do mundo"`,
        complement: 'Leia mais em:',
      },
      achievements: [
        {
          title: 'Campeões Mundiais em SSL',
          description: '1º Lugar na RoboCup 2023 - Divisão B',
        },
        {
          title: 'Campeão Latino-americano de SSL',
          description:
            '1º Lugar na Competição Latino-americana de Robótica e 1º Lugar na RoboCup 2023',
        },
        {
          title: 'Campeão Latino-americano de Simulação 2D',
          description:
            '1º Lugar na Competição Latino-americana de Robótica, 2º na IronCup 2023 e 6º na RoboCup 2023',
        },
        {
          title: 'Campeão Latino-americano e nacional de VSS',
          description:
            '1º e 3º Lugar na Competição Latino-americana de Robótica de 2022, 1º e 2º na IronCup 2023',
        },
        {
          title: 'Melhor campanha de um time brasileiro de 2022',
          description:
            'Cinco campeonatos ganhos, sendo o primeiro time brasileiro a ganhar um na RoboCup na categoria de SSL',
        },
      ],
    },
    activities: {
      competitions_card: {
        title: 'Competições',
        description:
          'Participamos de competições internacionais como a RoboCup, LARC e IRONcup.',
      },
      research_card: {
        title: 'Pesquisa',
        description:
          'Fazemos pesquisa em várias áreas dentro do campo da robótica',
      },
      development_card: {
        title: 'Desenvolvimento',
        description: 'Desenvolvemos o software e hardware dos nossos robôs',
      },
      activity_card_button: 'Ver mais',
    },
    about_us: {
      title: 'Sobre nós',
      description: `Somos um grupo de pesquisa e desenvolvimento 
        em robótica do Centro de Informática da UFPE. Começamos
        com apenas 12 estudantes e dois professores em 2015 e hoje
        contamos com dezenas de membros e premiações nacionais e 
        internacionais. Desenvolvemos tecnologias aplicadas
        à robótica com inteligência artificial, visão computacional, 
        engenharia mecatrônica e eletrônica.`,
      features: {
        awards: 'Premiações',
        papers: 'Publicações',
        members: 'Membros',
      },
    },
    sponsors: {
      title: 'Nossos Patrocinadores',
      call_to_action: `Quer sua marca aqui também? 
      Entre em contato:`,
    },
    infoPopup: {
      competitions: {
        title: 'Competições',
        description:
          'Participamos de competições internacionais como a RoboCup, LARC e IRONcup.',
      },
      research: {
        title: 'Pesquisa',
        description:
          'Fazemos pesquisa em várias áreas dentro do campo da robótica',
      },
      development: {
        title: 'Desenvolvimento',
        description: 'Desenvolvemos o software e hardware dos nossos robôs',
      },
    },
  },
}

export default ptBR
