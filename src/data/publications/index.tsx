interface Publication {
  title: string
  description: string
  url: string
  year: string
}

interface Publications {
  [key: string]: Publication[]
}

const publications: Publications = {
  en: [
    {
      title: 'LARC VSSS - Deep RobôCIn Team Description Paper',
      description: `This Team Description Paper (TDP) presents the proposal 
      developed by RobôCIn from the Center for Informatics at UFPE to 
      participate in the IEEE Very Small Size Soccer (VSSS) category. 
      This TDP describes the modules used in the control and planning of 
      the robots' actions, as well as their mechanical and electronic 
      specifications. In this team, all decision-making processes of the 
      robots have been learned through deep reinforcement learning algorithms 
      aimed at creating cooperative gameplay strategies among the agents.`,
      url: 'https://drive.google.com/file/d/1eXhvWIobnj6UIcc4j9Oz_hVGRf111mmQ/view?usp=sharing',
      year: '2020',
    },
    {
      title: 'LARC VSSS RoboCInTeamDescriptionPaper',
      description: `This Team Description Paper (TDP) aims to describe the 
      project developed by the RobôCIn team from the Center for Informatics 
      at UFPE for participation in the IEEE Very Small Size Soccer competition. 
      This TDP outlines the main systems developed, including the computer 
      vision-based localization system, the path planning technique based on 
      potential fields, decision-making processes, as well as communication 
      among the robots, the control system, and the electronic and mechanical 
      systems of the designed robot. Additionally, it covers the changes made 
      in our system and the simulator used for the competition.`,
      url: 'https://drive.google.com/file/d/1ECSFp6jNRP5xRFf6uZQ88PVMgmmMfx32/view?usp=sharing',
      year: '2020',
    },
    {
      title: 'LARC SSL RobôCIn Team Description Paper',
      description: `RobôCIn has been participating in Latin American 
      Robotics Competition (LARC) since 2016 and competed
      for the first time in the RoboCup in 2019. In this paper, we
      present our new robot version intending to attend the Small Size
      League (SSL) in the virtual LARC 2020. The main focus of this
      paper is to detail our improvements in the strategy and software
      development, and our mechanics, sharing our experience trying
      to develop almost the entire robot 3D printed, and our electronic
      system enhancements for the upcoming competitions. We hope
      to contribute with the league showing our successful experience
      with a 3D printed robot in three competitions and our approach
      to optimize the communication with the base station by using
      Ethernet protocol instead of Serial protocol.`,
      url: 'https://drive.google.com/file/d/1T1V85O52XtzJNzzFPfx9zgiwbCtCI3aG/view?usp=sharing',
      year: '2020',
    },
    {
      title: 'LARC 2D RobôCIn Team Description Paper',
      description: `RobôCIn Soccer Simulation 2D team started in 2018
      at the Universidade Federal de Pernambuco. Our first competition 
      was at Joao Pessoa, Paraıba, Brazil in Latin American
      Robotics Competition (LARC) 2018 where we obtained the 4th
      place against teams from Latin America. In 2019 we participated
      for the first time at the RoboCup, obtained the 9th place and
      we also participated at the Brazil RoboCup Open 2019 (LARC)
      where we obtained the 2nd place. In this paper we describe the
      evolution of the approaches developed last year and the new
      improvements and research we made for the simulation 2D.`,
      url: 'https://drive.google.com/file/d/1znnr5cyuY65DoTcDpxU-T3Yr5-G8OGdA/view?usp=sharing',
      year: '2020',
    },
    {
      title: 'RoboCup 2D RobôCIn Team Description Paper',
      description: `RobôCIn Soccer Simulation 2D team started in 2018 at the
      Universidade Federal de Pernambuco. Our first competition was at Jo ̃ao
      Pessoa, Para ́ıba, Brazil in Latin American Robotics Competition (LARC)
      2018 where we obtained the 4th place against teams from Latin America.
      In 2019 we participated for the first time at the RoboCup, obtained the
      9th place and we also participated at the Brazil RoboCup Open 2019
      (LARC) where we obtained the 2nd place. In this paper we describe the
      evolution of the approaches developed last year and the new improvements 
      and researches we made for the simulation 2D.`,
      url: 'https://drive.google.com/file/d/18Ks2sXszC07OcG-MGqaweFwE67zkj0ox/view?usp=sharing',
      year: '2020',
    },
    {
      title: 'RoboCup SSL RobôCIn Team Description Paper',
      description: `RobôCIn has been participating in Latin American 
      Robotics Competition (LARC) since 2016 and competed
      for the first time in the RoboCup in 2019. In this paper, we
      present our new robot version intending to attend the Small Size
      League (SSL) in the virtual LARC 2020. The main focus of this
      paper is to detail our improvements in the strategy and software
      development, and our mechanics, sharing our experience trying
      to develop almost the entire robot 3D printed, and our electronic
      system enhancements for the upcoming competitions. We hope
      to contribute with the league showing our successful experience
      with a 3D printed robot in three competitions and our approach
      to optimize the communication with the base station by using
      Ethernet protocol instead of Serial protocol.`,
      url: 'https://drive.google.com/file/d/19JM3qFBc7fzibiK2Zz58AMR2kULgeIU7/view?usp=sharing',
      year: '2020',
    },
    {
      title: 'LARC VSSS - Deep RobôCIn Team Description Paper',
      description: `This Team Description Paper (TDP) presents the proposal 
      developed by RoboCIn AI from the Center for Informatics at UFPE to 
      participate in the IEEE Very Small Size Soccer (VSSS) category. This 
      TDP describes the modules used in the control and planning of the 
      robots' actions, as well as their mechanical and electronic specifications. 
      In this team, all decision-making processes of the robots have been 
      learned through deep reinforcement learning algorithms aimed at creating 
      cooperative gameplay strategies among the agents.`,
      url: 'https://drive.google.com/file/d/1s2ToGYM4ySNUzRExIYJRVqC2ukWt0-Tz/view?usp=sharing',
      year: '2019',
    },
    {
      title: 'LARC VSSS RobôCIn Team Description Paper',
      description: `This Team Description Paper (TDP) aims to describe the 
      project developed by the RobôCIn team from the Center for Informatics 
      at UFPE for participation in the IEEE Very Small Size Soccer competition. 
      This TDP outlines the main systems developed: the computer vision-based 
      localization system, the path planning technique based on potential fields, 
      decision-making processes, as well as communication among the robots, 
      the control system, and the electronic and mechanical systems of the robot 
      designed for the competition.`,
      url: 'https://drive.google.com/file/d/1k1rcyWuTSyBDaP6en4713CHqe-SuL_4i/view?usp=sharing',
      year: '2019',
    },
    {
      title: 'LARC SSL RobôCIn Team Description Paper',
      description: `RobôCIn has been participating in Latin American 
      Robotics Competition (LARC) since 2016. In this paper, we
      present the second version of our robot intending to compete
      in the Small Size League (SSL) in LARC 2019 in Rio Grande,
      RS. The main focus of this paper is to detail the mechanical
      and electronic systems we developed, as well as the strategy and
      software solutions we designed to attend the LARC competition.`,
      url: 'https://drive.google.com/file/d/1BuiaWockqkmqAGaianFkIW0nB5U9igXh/view?usp=sharing',
      year: '2019',
    },
    {
      title: 'RoboCup 2D RobôCIn Team Description Paper',
      description: `RobôCIn Soccer Simulation 2D team started in 2018 at
      the Universidade Federal de Pernambuco. Our first competition was at
      João Pessoa, Paraíba, Brazil in Latin American Robotics Competition
      (LARC) 2018 where we obtained the 4th place against teams from Latin
      America. In this paper we describe some of the approaches that we are
      currently developing for our second year of research in the category,
      focusing our studies on the use of Deep Reinforcement Learning and
      Statistical Methods for decision making in the agents' chain action.`,
      url: 'https://drive.google.com/file/d/1eLLsckcm_ZZ4hjfC91C3-wYeYI_s88At/view?usp=sharing',
      year: '2019',
    },
    {
      title: 'RoboCup SSL RobôCIn Team Description Paper',
      description: `RobôCIn has been participating in Latin American Robotics
      Competition (LARC) since 2016. In this paper, we present the first version 
      of our robot intending to compete in the Small Size League (SSL)  
      in RoboCup 2019 in Sydney, Australia. The main focus of this paper is
      to detail the mechanical and electronic systems we developed, as well as
      the strategy and software solutions we designed to attend the RoboCup
      competition.`,
      url: 'https://drive.google.com/file/d/1Ei2RmSHkUYPyYwjqrE4SNU2t8lGeeRlY/view?usp=sharing',
      year: '2019',
    },
    {
      title: 'LARC 2D RobôCIn Team Description Paper',
      description: `This Team Description Paper (TDP) aims to introduce 
      the RobôCIn team to the RoboCup Soccer Simulation 2D category of 
      the Latin American and Brazilian Robotics Competition (LARC/CBR) 
      2018, a competition scheduled to take place from November 6 to 
      10 in João Pessoa/PB. The paper will describe the initial advancements 
      in developing a competitive team using Artificial Intelligence strategies.`,
      url: 'https://drive.google.com/file/d/1kJzyheu4KqPs3gNBWqGFVFKNblyZZ-i_/view?usp=sharing',
      year: '2018',
    },
    {
      title: 'LARC VSSS RobôCIn Team Description Paper',
      description: `This Team Description Paper (TDP) aims to describe 
      the project developed by the RobôCIn team from the Center for Informatics 
      at UFPE for participation in the IEEE Very Small Size Soccer competition. 
      This TDP outlines the main systems developed: the computer vision-based 
      localization system, the path planning technique based on potential fields, 
      decision-making processes, as well as communication among the robots, 
      the control system, and the electronic and mechanical systems of the robot 
      designed for the competition.`,
      url: 'https://drive.google.com/file/d/12jeJdtw1-oSvunhtGvP_gOCNZ2aIXy8l/view?usp=sharing',
      year: '2018',
    },
    {
      title: 'LARC VSSS - Deep RobôCIn Team Description Paper',
      description: `This Team Description Paper (TDP) presents the proposal 
      developed by RoboCIn AI from the Center for Informatics at UFPE to 
      participate in the IEEE Very Small Size Soccer (VSSS) category. This 
      TDP describes the modules used in the control and planning of the 
      robots' actions, as well as their mechanical and electronic specifications.
       In this team, all decision-making processes of the robots have been 
       learned through machine learning algorithms aimed at creating 
       cooperative gameplay strategies among the agents.`,
      url: 'https://drive.google.com/file/d/1ei5_X6fsvqswS3OMIs-NncoPLQEp6ACa/view?usp=sharing',
      year: '2018',
    },
    {
      title: 'LARC SSL RobôCIn Team Description Paper',
      description: `This Team Description Paper (TDP) aims to introduce the RobôCIn 
      team to the RoboCup Small Size League (SSL) category of the Latin American 
      and Brazilian Robotics Competition (LARC/CBR) 2018, a competition scheduled 
      to take place from November 6 to 10 in João Pessoa/PB. The paper will describe 
      the initial advancements in the areas of mechanics, software, and embedded 
      systems, highlighting the high-level software architecture, path planning, 
      mechanical design of the base, dribbler, and kick, as well as the low-level 
      architecture.`,
      url: 'https://drive.google.com/file/d/1Xz-0uJ1a5WIVV52-1jRJ_QzlrOX-dMM_/view?usp=sharing',
      year: '2018',
    },
    {
      title: 'LARC @HOME RobôCIn Team Description Paper',
      description: `The RoboCup@Home aims to develop service and 
      assistive robot technology with relevance for
      future personal domestic applications. Commonly, the
      RoboCup@Home tasks involve object detection and
      recognition, mapping and navigation, and human interaction. 
      This year is the first time that we are going to
      participate in RoboCup@Home, on LARC 2018, using
      our TIAGo from PAL Robotics and we are searching
      for and developing new features for it. TIAGo com-
      bines mobility, perception, manipulation and human-
      robot interaction capabilities. We had developed pack-
      ages with ROS and Gazebo (open-source simulator),
      and after we test in a real scenario. In this year,
      we could develop an initial framework to participate
      in RoboCup@Home. Our future work consists in to
      improve our manipulation package, and speak/image
      datasets to perform more real scenarios tests.`,
      url: 'https://drive.google.com/file/d/1Hz-8tzZ62IByJBgF5c1NCOqhNkbxF509/view?usp=sharing',
      year: '2018',
    },
    {
      title: 'LARC VSSS RobôCIn Team Description Paper',
      description: `This Team Description Paper (TDP) aims to describe 
      the project developed by the RobôCIn team from the Center for 
      Informatics at UFPE for participation in the IEEE Very Small 
      Size Soccer competition. This TDP outlines the main systems 
      developed: the computer vision-based localization system, the 
      path planning technique based on potential fields, decision-making 
      processes, as well as communication among the robots, the control 
      system, and the electronic and mechanical systems of the robot 
      designed for the competition.`,
      url: 'https://drive.google.com/file/d/15BG8V8fPHGtHVo2kIh9-t0QRIEDp0HxY/view?usp=sharing',
      year: '2017',
    },
    {
      title: 'LARC VSSS RobôCIn Team Description Paper',
      description: `This article aims to describe the project developed 
      by the RoboCIn team from the Center for Informatics at UFPE for 
      participation in the IEEE Very Small Size Soccer competition. The 
      main systems developed are outlined in this article, including the 
      computer vision-based localization system, the technique developed 
      for path planning based on potential fields, as well as the electronic 
      and mechanical design of the robot and the chassis designed for the 
      mentioned category.`,
      url: 'https://drive.google.com/file/d/1ACJRu-fMEcJOH3oMYlBA3IeYUify6nS3/view?usp=sharing',
      year: '2016',
    },
  ],
  ptBR: [
    {
      title: 'LARC VSSS - Deep RobôCIn Team Description Paper',
      description: `Este Team Description Paper (TDP) apresenta a
      proposta desenvolvida pelo RobôCIn do Centro de Informática
      da UFPE para participar na categoria IEEE Very Small Size
      Soccer (VSSS). Este TDP descreve os módulos utilizados no
      controle e planejamento das ações dos robôs, assim como suas
      especificações mecânicas e eletrônicas. Nesta equipe todas as
      tomadas de decisões dos robôs foram aprendidas através de
      algoritmos de aprendizagem profunda por reforço que visam
      criar estratégias de jogo de forma cooperativa entres os agentes.`,
      url: 'https://drive.google.com/file/d/1eXhvWIobnj6UIcc4j9Oz_hVGRf111mmQ/view?usp=sharing',
      year: '2020',
    },
    {
      title: 'LARC VSSS RoboCInTeamDescriptionPaper',
      description: `Este Team Description Paper (TDP) tem
      como objetivo descrever o projeto desenvolvido pela
      equipe RobôCIn, do Centro de Informática da UFPE,
      para participação na competição IEEE Very Small Size
      Soccer. Neste TDP são descritos os principais siste-
      mas desenvolvidos: o sistema de localização por visão  
      computacional, a técnica de planejamento de caminho
      baseada em campos potenciais, as tomadas de decisão,
      bem como a comunicação entre os robôs, o sistema
      de controle, o sistemas eletrônico e mecânico do robô
      projetado, e as mudanças feitas no nosso sistema e no
      simulador utilizado para a competição.`,
      url: 'https://drive.google.com/file/d/1ECSFp6jNRP5xRFf6uZQ88PVMgmmMfx32/view?usp=sharing',
      year: '2020',
    },
    {
      title: 'LARC SSL RobôCIn Team Description Paper',
      description: `O RobôCIn tem participado da Competição 
      Latino-Americana de Robótica (LARC) desde 2016 e competiu pela 
      primeira vez na RoboCup em 2019. Neste artigo, apresentamos nossa 
      nova versão de robô com o objetivo de participar da Small Size 
      League (SSL) na LARC virtual de 2020. O foco principal deste 
      artigo é detalhar nossas melhorias na estratégia e no desenvolvimento 
      de software, além de nossas atualizações na mecânica, compartilhando 
      nossa experiência ao tentar desenvolver quase todo o robô impresso em 
      3D, e nossos aprimoramentos no sistema eletrônico para as competições 
      futuras. Esperamos contribuir com a liga, demonstrando nossa experiência 
      bem-sucedida com um robô impresso em 3D em três competições e nossa 
      abordagem para otimizar a comunicação com a estação base, utilizando 
      o protocolo Ethernet em vez do protocolo Serial.`,
      url: 'https://drive.google.com/file/d/1T1V85O52XtzJNzzFPfx9zgiwbCtCI3aG/view?usp=sharing',
      year: '2020',
    },
    {
      title: 'LARC 2D RobôCIn Team Description Paper',
      description: `A equipe de Soccer Simulation 2D do RobôCIn foi fundada 
      em 2018 na Universidade Federal de Pernambuco. Nossa primeira competição 
      ocorreu em João Pessoa, Paraíba, Brasil, na Competição Latino-Americana 
      de Robótica (LARC) de 2018, onde conquistamos o 4º lugar contra equipes 
      da América Latina. Em 2019, participamos pela primeira vez da RoboCup, 
      obtendo o 9º lugar, e também participamos do Brazil RoboCup Open 2019 
      (LARC), onde conquistamos o 2º lugar. Neste artigo, descrevemos a evolução 
      das abordagens desenvolvidas no ano passado e as novas melhorias e pesquisas 
      que realizamos para a simulação 2D.`,
      url: 'https://drive.google.com/file/d/1znnr5cyuY65DoTcDpxU-T3Yr5-G8OGdA/view?usp=sharing',
      year: '2020',
    },
    {
      title: 'RoboCup 2D RobôCIn Team Description Paper',
      description: `A equipe de Soccer Simulation 2D do RobôCIn foi fundada 
      em 2018 na Universidade Federal de Pernambuco. Nossa primeira competição 
      ocorreu em João Pessoa, Paraíba, Brasil, na Competição Latino-Americana 
      de Robótica (LARC) de 2018, onde conquistamos o 4º lugar contra equipes 
      da América Latina. Em 2019, participamos pela primeira vez da RoboCup, 
      obtendo o 9º lugar, e também participamos do Brazil RoboCup Open 2019 
      (LARC), onde conquistamos o 2º lugar. Neste artigo, descrevemos a evolução 
      das abordagens desenvolvidas no ano passado e as novas melhorias e pesquisas 
      que realizamos para a simulação 2D.`,
      url: 'https://drive.google.com/file/d/18Ks2sXszC07OcG-MGqaweFwE67zkj0ox/view?usp=sharing',
      year: '2020',
    },
    {
      title: 'RoboCup SSL RobôCIn Team Description Paper',
      description: `O RobôCIn tem participado da Competição 
      Latino-Americana de Robótica (LARC) desde 2016 e competiu pela 
      primeira vez na RoboCup em 2019. Neste artigo, apresentamos nossa 
      nova versão de robô com o objetivo de participar da Small Size 
      League (SSL) na LARC virtual de 2020. O foco principal deste 
      artigo é detalhar nossas melhorias na estratégia e no desenvolvimento 
      de software, além de nossas atualizações na mecânica, compartilhando 
      nossa experiência ao tentar desenvolver quase todo o robô impresso em 
      3D, e nossos aprimoramentos no sistema eletrônico para as competições 
      futuras. Esperamos contribuir com a liga, demonstrando nossa experiência 
      bem-sucedida com um robô impresso em 3D em três competições e nossa 
      abordagem para otimizar a comunicação com a estação base, utilizando 
      o protocolo Ethernet em vez do protocolo Serial.`,
      url: 'https://drive.google.com/file/d/19JM3qFBc7fzibiK2Zz58AMR2kULgeIU7/view?usp=sharing',
      year: '2020',
    },
    {
      title: 'LARC VSSS - Deep RobôCIn Team Description Paper',
      description: `Este Team Description Paper (TDP) aprensenta a
      proposta desenvolvida por RoboCIn IA do Centro de Informática
      da UFPE para participar na categoria IEEE Very Small Size
      Soccer (VSSS). Este TDP descreve os módulos utilizados no
      controle e planejamento das ações dos robôs, assim como suas
      especificações mecânicas e eletrônicas. Nesta equipe todas as
      tomadas de decisões dos robôs foram aprendidas através de
      algoritmos de aprendizagem profunda por reforço que visam
      criar estratégias de jogo de forma cooperativa entres os agentes.`,
      url: 'https://drive.google.com/file/d/1s2ToGYM4ySNUzRExIYJRVqC2ukWt0-Tz/view?usp=sharing',
      year: '2019',
    },
    {
      title: 'LARC VSSS RobôCIn Team Description Paper',
      description: `Este Team Description Paper (TDP) tem
      como objetivo descrever o projeto desenvolvido pela
      equipe RobôCIn, do Centro de Informática da UFPE
      para participação na competição IEEE Very Small Size
      Soccer. Neste TDP são descritos os principais siste-
      mas desenvolvidos: o sistema de localização por visão 
      computacional, a técnica de planejamento de caminho
      baseada em campos potenciais, as tomadas de decisão,
      bem como a comunicação entre os robôs, o sistema de
      controle, e o sistemas eletrônico e mecânico do robô
      projetado para a competição.`,
      url: 'https://drive.google.com/file/d/1k1rcyWuTSyBDaP6en4713CHqe-SuL_4i/view?usp=sharing',
      year: '2019',
    },
    {
      title: 'LARC SSL RobôCIn Team Description Paper',
      description: `RobôCIn tem participado da Competição Latino-Americana 
      de Robótica (LARC) desde 2016. Neste artigo, apresentamos a segunda 
      versão do nosso robô com a intenção de competir na Small Size League 
      (SSL) na LARC 2019 em Rio Grande, RS. O foco principal deste artigo 
      é detalhar os sistemas mecânicos e eletrônicos que desenvolvemos, 
      assim como a estratégia e as soluções de software que projetamos para 
      participar da competição LARC.`,
      url: 'https://drive.google.com/file/d/1BuiaWockqkmqAGaianFkIW0nB5U9igXh/view?usp=sharing',
      year: '2019',
    },
    {
      title: 'RoboCup 2D RobôCIn Team Description Paper',
      description: `A equipe de Soccer Simulation 2D do RobôCIn foi 
      iniciada em 2018 na Universidade Federal de Pernambuco. Nossa 
      primeira competição ocorreu em João Pessoa, Paraíba, Brasil, na 
      Competição Latino-Americana de Robótica (LARC) de 2018, onde 
      conquistamos o 4º lugar entre as equipes da América Latina. Neste 
      artigo, descrevemos algumas das abordagens que estamos desenvolvendo 
      atualmente para nosso segundo ano de pesquisa na categoria, focando 
      nossos estudos no uso de Aprendizado Profundo por Reforço e Métodos 
      Estatísticos para tomada de decisões na ação em cadeia dos agentes.`,
      url: 'https://drive.google.com/file/d/1eLLsckcm_ZZ4hjfC91C3-wYeYI_s88At/view?usp=sharing',
      year: '2019',
    },
    {
      title: 'RoboCup SSL RobôCIn Team Description Paper',
      description: `O RobôCIn tem participado da Competição Latino-Americana 
      de Robótica (LARC) desde 2016. Neste artigo, apresentamos a primeira 
      versão do nosso robô com a intenção de competir na Small Size League (SSL) 
      na RoboCup 2019 em Sydney, Austrália. O foco principal deste artigo é detalhar 
      os sistemas mecânicos e eletrônicos que desenvolvemos, assim como a estratégia 
      e as soluções de software que projetamos para participar da competição RoboCup.`,
      url: 'https://drive.google.com/file/d/1Ei2RmSHkUYPyYwjqrE4SNU2t8lGeeRlY/view?usp=sharing',
      year: '2019',
    },
    {
      title: 'LARC 2D RobôCIn Team Description Paper',
      description: `Este Team Description Paper (TDP) tem
      por objetivo introduzir a equipe RobôCIn na categoria
      RoboCup Soccer Simulation 2D da Latin American and
      Brazilian Robotics Competition (LARC/CBR) 2018,
      competição que ocorrerá de 6 a 10 de novembro em
      João Pessoa/PB. Serão descritos os primeiros avanços
      no desenvolvimento de um time competitivo usando
      estratégias de Inteligência Artificial.`,
      url: 'https://drive.google.com/file/d/1kJzyheu4KqPs3gNBWqGFVFKNblyZZ-i_/view?usp=sharing',
      year: '2018',
    },
    {
      title: 'LARC VSSS RobôCIn Team Description Paper',
      description: `Este Team Description Paper (TDP) tem
      como objetivo descrever o projeto desenvolvido pela
      equipe RobôCIn, do Centro de Informática da UFPE
      para participação na competição IEEE Very Small Size    
      Soccer. Neste TDP são descritos os principais sistemas 
      desenvolvidos: o sistema de localização por visão
      computacional, a técnica de planejamento de caminho
      baseada em campos potenciais, as tomadas de decisão,
      bem como a comunicação entre os robôs, o sistema de
      controle, e o sistemas eletrônico e mecânico do robô
      projetado para a competição.`,
      url: 'https://drive.google.com/file/d/12jeJdtw1-oSvunhtGvP_gOCNZ2aIXy8l/view?usp=sharing',
      year: '2018',
    },
    {
      title: 'LARC VSSS - Deep RobôCIn Team Description Paper',
      description: `Este Team Description Paper (TDP) aprensenta a
      proposta desenvolvida por RoboCIn IA do Centro de Informática 
      da UFPE para participar na categoria IEEE Very Small
      Size Soccer (VSSS). Este TDP descreve os módulos utilizados
      no controle e planejamento das ações dos robôs, assim como
      suas especificações mecânicas e eletrônicas. Nesta equipe todas
      as tomadas de decisões dos robôs foram aprendidas através
      de algoritmos de aprendizagem de máquinas que visam criar
      estratégias de jogo de forma cooperativa entres os agentes.`,
      url: 'https://drive.google.com/file/d/1ei5_X6fsvqswS3OMIs-NncoPLQEp6ACa/view?usp=sharing',
      year: '2018',
    },
    {
      title: 'LARC SSL RobôCIn Team Description Paper',
      description: `Este Team Description Paper (TDP) tem por obje-
      tivo introduzir a equipe RobôCIn na categoria RoboCup Small   
      Size League (SSL) da Latin American and Brazilian Robotics
      Competition (LARC/CBR) 2018, competição que ocorrerá de
      6 a 10 de novembro em João Pessoa/PB. Serão descritos os   
      primeiros avanços nas áreas de mecânica, software e embar-
      cados, destacando a arquitetura de software de alto nível, o
      planejamento de caminhos, o projeto mecânico da base, do
      dribbler e do chute, e a arquitetura de baixo nível.`,
      url: 'https://drive.google.com/file/d/1Xz-0uJ1a5WIVV52-1jRJ_QzlrOX-dMM_/view?usp=sharing',
      year: '2018',
    },
    {
      title: 'LARC @HOME RobôCIn Team Description Paper',
      description: `O RoboCup@Home tem como objetivo desenvolver 
      tecnologia de robôs de serviço e assistência com relevância 
      para futuras aplicações domésticas pessoais. Comumente, as 
      tarefas do RoboCup@Home envolvem detecção e reconhecimento 
      de objetos, mapeamento e navegação, e interação humana. 
      Este ano é a primeira vez que participaremos do RoboCup@Home, 
      na LARC 2018, utilizando nosso TIAGo da PAL Robotics, e 
      estamos buscando e desenvolvendo novas funcionalidades 
      para ele. O TIAGo combina mobilidade, percepção, manipulação 
      e capacidades de interação humano-robô. Desenvolvemos pacotes 
      com ROS e Gazebo (simulador de código aberto) e testamos em um 
      cenário real. Neste ano, conseguimos desenvolver um framework 
      inicial para participar do RoboCup@Home. Nosso trabalho futuro 
      consiste em aprimorar nosso pacote de manipulação e conjuntos 
      de dados de fala/imagem para realizar testes em cenários 
      mais realistas.`,
      url: 'https://drive.google.com/file/d/1Hz-8tzZ62IByJBgF5c1NCOqhNkbxF509/view?usp=sharing',
      year: '2018',
    },
    {
      title: 'LARC VSSS RobôCIn Team Description Paper',
      description: `Este Team Description Paper (TDP) tem
      como objetivo descrever o projeto desenvolvido pela
      equipe RobôCIn, do Centro de Informática da UFPE
      para participação na competição IEEE Very Small Size
      Soccer. Neste TDP são descritos os principais sistemas
      desenvolvidos: o sistema de localização por visão computacional, 
      a técnica de planejamento de caminho,
      baseada em campos potenciais, as tomadas de decisão,
      bem como a comunicação entre os robôs e o sistema
      de controle, e o sistemas eletrônico e mecânico do robô
      projetado para a competição.`,
      url: 'https://drive.google.com/file/d/15BG8V8fPHGtHVo2kIh9-t0QRIEDp0HxY/view?usp=sharing',
      year: '2017',
    },
    {
      title: 'LARC VSSS RobôCIn Team Description Paper',
      description: `Este artigo tem como objetivo descrever o
      projeto desenvolvido pela equipe RoboCIn, do Centro
      de Informática da UFPE para participação na competição IEEE 
      Very Small Size Soccer. Neste artigo são
      descritos os principais sistemas desenvolvidos: o sistema de 
      localização por visão computacional, a técnica
      desenvolvida para planejamento de caminho baseada
      em campos potenciais, bem como o projeto eletrônico e
      mecânico do robô e o chassis projetado para a categoria
      citada.`,
      url: 'https://drive.google.com/file/d/1ACJRu-fMEcJOH3oMYlBA3IeYUify6nS3/view?usp=sharing',
      year: '2016',
    },
  ],
}

const scientificPublications = [
  {
    title: `Improving Inertial Odometry Through Particle Swarm 
      Optimization in the RoboCup Small Size League`,
    description: `Lucas Cavalcanti, João G. Melo, Riei Joaquim & Edna Barros `,
    url: `https://link.springer.com/chapter/10.1007/978-3-031-55015-7_8`,
    year: `2023`,
  },
  {
    title: `Dataset and Baseline Experiments for 
    Self-Localization and Tracking in the RoboCup 
    Small Size League`,
    description: `João G. Melo, Lucas Cavalcanti, 
    Riei Joaquim, Victor Araújo, Edna Barros`,
    url: `https://ieeexplore.ieee.org/document/10333068`,
    year: `2023`,
  },
  {
    title: `A Model-based Approach to the Development and 
    Verification of Robotic Systems for Competitions`,
    description: `Marcus Santos, Madiel Conserva Filho, Augusto Sampaio`,
    url: `https://ieeexplore.ieee.org/document/10333030`,
    year: `2023`,
  },
  {
    title: `Towards an Autonomous RoboCup Small Size League Robot`,
    description: `João G. Melo, Felipe Martins, Lucas Cavalcanti, 
    Roberto Fernandes, Victor Araújo, Riei Joaquim, João G. Monteiro.`,
    url: `https://ieeexplore.ieee.org/document/9996004`,
    year: `2022`,
  },
  {
    title: `Web Soccer Monitor: An Open-Source 2D Soccer 
    Simulation Monitor for the Web and the Foundation 
    for a New Ecosystem`,
    description: `Mateus FB Soares, Tsang I Ren, 
    Paulo SG de Mattos Neto, Edna NS Barros`,
    url: `https://link.springer.com/chapter/10.1007/978-3-031-28469-4_16`,
    year: `2022`,
  },
  {
    title: `A Library and Web Platform for RoboCup Soccer Matches Data Analysis`,
    description: `Felipe NA Pereira, Mateus FB Soares, 
    Olavo R Conceição, Tales T Alves, Tiago HRP Gonçalves, 
    José R da Silva, Tsang I Ren, Paulo SG de Mattos Neto, 
    Edna NS Barros`,
    url: `https://link.springer.com/chapter/10.1007/978-3-031-28469-4_15`,
    year: `2022`,
  },
  {
    title: `An Embedded Monocular Vision Approach for Ground-Aware 
      Objects Detection and Position Estimation`,
    description: `João G. Melo & Edna Barros`,
    url: `https://link.springer.com/chapter/10.1007/978-3-031-28469-4_9`,
    year: `2022`,
  },
  {
    title: `A Telemetry-Based PI Tuning Strategy for Low-Level Control of an Omnidirectional Mobile Robot`,
    description: `Victor Araújo, Felipe Martins, Roberto Fernandes & Edna Barros `,
    url: `https://link.springer.com/chapter/10.1007/978-3-030-98682-7_16`,
    year: `2021`,
  },
  {
    title: `Dataset and Benchmarking of Real-Time Embedded 
      Object Detection for RoboCup SSL`,
    description: `Roberto Fernandes, Walber M. Rodrigues & Edna Barros`,
    url: `https://link.springer.com/chapter/10.1007/978-3-030-98682-7_5`,
    year: `2021`,
  },
  {
    title: `rSoccer: A Framework for Studying Reinforcement 
    Learning in Small and Very Small Size Robot Soccer`,
    description: `Felipe B. Martins, Mateus G. Machado, 
      Hansenclever F. Bassani, Pedro H. M. Braga & 
      Edna S. Barros`,
    url: `https://link.springer.com/chapter/10.1007/978-3-030-98682-7_14`,
    year: `2021`,
  },
  {
    title: `Optimized Wireless Control and Telemetry 
    Network for Mobile Soccer Robots`,
    description: `Lucas Cavalcanti, Riei Joaquim, Edna Barros`,
    url: `https://link.springer.com/chapter/10.1007/978-3-030-98682-7_15`,
    year: `2021`,
  },
  {
    title: `Mechanical and Dynamic Analysis for Design 
    and Development of a RoboCup SSL Dribbling Mechanism`,
    description: `Victor Araújo, Edgleyson Silva, João Guilherme Monteiro, 
    Rebecca Sousa, Cecilia Silva, Pedro Henrique Santana`,
    url: `https://ieeexplore.ieee.org/document/9605377`,
    year: `2021`,
  },
  {
    title: `An Analysis of Reinforcement Learning Applied 
    to Coach Task in IEEE Very Small Size Soccer`,
    description: `Carlos H. C. Pena, Mateus G. Machado, 
    Mariana S. Barros, José D.P. Silva, Lucas D. Macie, 
    Tsang Ing Ren, Edna N.S. Barros, Pedro H.M. Braga, 
    Hansenclever F. Bassani`,
    url: ``,
    year: `2020`,
  },
  {
    title: `A Data Analysis Graphical user Interface 
    for RoboCup 2D Soccer Simulation League`,
    description: `Felipe N. A. Pereira, 
    Mateus F. B. Soares, Edna N. S. Barros`,
    url: `https://ieeexplore.ieee.org/abstract/document/9307104`,
    year: `2020`,
  },
]

export { scientificPublications }
export default publications
