const en = {
  navbar: {
    options: {
      home: 'Home',
      categories: 'Categories',
      team: 'Team',
      papers: 'Papers',
    },
  },
  footer: {
    contact: 'Contact Us',
    location: {
      label: 'Find Us',
      address:
        'Ave. Jorn. Aníbal Fernandes, no number - Cidade Universitária, Recife, PE, Brazil. Zip Code: 50740-560',
    },
  },
  categories_page: {
    page_header: {
      title: 'Categories',
      description: `Our teams develop technologies 
      that compete in various categories, such as:`,
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
        description: `The Small Size League (SSL) represents a 
        competition that demands proficiency across various domains. 
        Our endeavors encompass the development of mechanical models, 
        electronic systems, communication protocols, and the 
        implementation of artificial intelligence for our robots. 
        An SSL match unfolds between two teams, each comprised of six 
        robots. These robots are constrained by specific dimensions; 
        they must fit within a 180 mm diameter circle and should not 
        exceed 15 cm in size. Notably, our vision system, which processes 
        data from four cameras, plays a crucial role in identifying and 
        normalizing all objects within the field.`,
        table_header: 'Small Size League - Results',
      },
      {
        title: 'Very Small Size League',
        competitions: 'LARC | IronCup',
        description: `The Very Small Size Soccer (VSSS) competition 
        is a multifaceted challenge that necessitates excellence in 
        key domains within RoboCIn. This includes advanced computer 
        vision techniques for extracting critical game-related 
        information, the deployment of artificial intelligence 
        algorithms to orchestrate precise movements for scoring 
        goals and defending against adversaries, and a robust 
        integration of electronics and mechanics to craft agents 
        that seamlessly navigate the playing field.`,
        approaches: [
          {
            title: 'Deep Learning',
            description: `we employ reinforcement learning to 
            train our agents, whereby rewards are assigned for 
            both favorable and unfavorable actions. This method 
            encourages the agents to maximize their rewards, 
            ultimately leading to optimal decision-making in 
            various game scenarios.`,
          },
          {
            title: 'Determinic',
            description: `we utilize deterministic algorithms in 
            our approach to guide our robots' actions. This 
            entails meticulously programming the strategic decisions 
            executed by our players.`,
          },
        ],
        table_header: 'Very Small Size League - Results',
      },
      {
        title: '2D Simulation',
        competitions: 'RoboCup | LARC | IronCup',
        description: `In 2D Simulation, two teams of eleven autonomous 
        agents play soccer in a virtual two-dimensional stadium 
        controlled by a central server called SoccerServer. This 
        server has complete knowledge of the game, including player 
        and ball positions, and facilitates communication between the 
        server and agents. Players receive sensor data and can perform 
        actions like running, turning, or kicking.`,
        table_header: '2D Simulation - Results',
      },
      {
        title: 'Drone',
        competitions: 'LARC',
        description: 'Description of Drone',
        table_header: 'Drone - Results',
      },
    ],
  },
  content: 'This content is in English',
  home: {
    banner: {
      headline: {
        title: `"Brazilian team wins second title in the world's 
        largest robotics competition"`,
        complement: `Read more at:`,
      },
      achievements: [
        {
          title: 'Small Size League World Champions',
          description: '1st place on RoboCup 2023 - Division B',
        },
        {
          title: 'Small Size League Latin American Champion',
          description:
            '1st place on Latin American Robotics Competition 2022 and 1st place on RoboCup 2023',
        },
        {
          title: '2D Simulation Latin American Champion',
          description:
            '1st place on Latin American Robotics Competition 2022, 2nd at IronCup 2023 and 6th at RoboCup 2023',
        },
        {
          title: 'Very Small Size Soccer Latin American and Brazilian Champion',
          description:
            '1st and 3th place on Latin American Robotics Competition 2022, 1st and 2nd at IronCup 2023',
        },
        {
          title: 'Best Brazilian Team Campaign of 2022',
          description:
            'Five championships won, first Brazilian team to win the RoboCup in the Small Size League',
        },
      ],
    },
    activities: {
      competitions_card: {
        title: 'Competitions',
        description:
          'We take part in national and international robotics competitions such as RoboCup, LARC and IRONcup.',
      },
      research_card: {
        title: 'Research',
        description:
          'We do research in various problems in the field of robotics',
      },
      development_card: {
        title: 'Development',
        description: 'We develop the software and hardware of our robots',
      },
      activity_card_button: 'See more',
    },
    about_us: {
      title: 'About Us',
      description: `We're a robotics Research & Development group
      from the Federal University of Pernambuco, Brazil. 
      We started out with 15 students and two professors
      back in 2015 and today we rely on dozens of members and awards. 
      We develop tecnologies applied to robotics with machine learning,
      computer vision, mechatronics and electronics engineering.`,
      features: {
        awards: 'Awards',
        papers: 'Papers',
        members: 'Members',
      },
    },
    sponsors: {
      title: 'Our Sponsors',
      call_to_action: `Do you want your brand here as well?
      Contact us:`,
    },
    infoPopup: {
      competitions: {
        title: 'Competitions',
        description: `We take part in national and 
        international robotics competitions such as 
        RoboCup, LARC and IRONcup.`,
      },
      research: {
        title: 'Research',
        description:
          'We do research in various problems in the field of robotics',
      },
      development: {
        title: 'Development',
        description: 'We develop the software and hardware of our robots',
      },
    },
  },
}

export default en
