const en = {
  navbar: {
    options: {
      home: 'Home',
      categories: 'Categories',
      team: 'Team',
      papers: 'Publications',
      recruitment: 'Recruitment',
      blog: 'Blog',
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
        'Very Small Size Soccer',
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
        exceed 150 mm in height. Notably, our vision system, which processes 
        data from four cameras, plays a crucial role in identifying and 
        normalizing all objects within the field.`,
        table_header: 'Small Size League - Results',
      },
      {
        title: 'Very Small Size Soccer',
        competitions: 'LARC | IronCup',
        description: `The Very Small Size Soccer (VSSS) competition 
        is a multifaceted challenge that necessitates excellence in 
        key domains within RobôCIn. This includes advanced computer 
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
        table_header: 'Very Small Size Soccer - Results',
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
        description: `RobôCIn's drone category was designed for the 
        development of autonomous flying robots and related technologies.  
        To validate our work, we seek to participate in competitions and 
        symposiums, mainly LARC and RoboCup Brazil.  In it we participated in the 
        Flying Robots Trial League.  In this competition there are four 
        challenges that the robot must be able to perform autonomously, 
        generally involving reading and detecting objects, searching and 
        moving between platforms and transporting loads.`,
        table_header: 'Drone - Results',
      },
    ],
    resultsTables: {
      vssl: {
        label: 'VSSL - Results',
        th: ['Year', 'LARC', 'IRONCup'],
        trs: [
          ['2021', '1º 3v3 RL', '1º'],
          ['2020', '4º DET, 5º RL', '3º RL, 5º DET'],
          ['2019', '4º DET, 5º RL', '3º RL'],
          ['2018', '3º', '3º'],
          ['2017', '5º', 'N/A'],
          ['2016', '16º', 'N/A'],
        ],
      },
      ssl: {
        label: 'SSL - Results',
        th: ['Year', 'LARC', 'Robocup'],
        trs: [
          [
            '2023',
            '1st',
            '1st Div B, 1st Ball Placement Technical Challenge, 5th Chip Pass Challenge',
          ],
          [
            '2022',
            '1st',
            '1st Div B, 1st Ball Placement Technical Challenge, 2nd Vision Blackout, 3rd Dribbling Challenge',
          ],
          [
            '2021',
            '1st',
            '3rd Div A/B, 1st Ball Placement Technical Challenge, 5th Hardware Challenge',
          ],
          ['2020', '1st', 'Postponed'],
          ['2019', '5th', '3rd/4th Div B'],
          ['2018', '5th', 'N/A'],
        ],
      },
      simulation: {
        label: '2D Simulation - Results',
        th: ['Year', 'RoboCup', 'LARC', 'IRONCup'],
        trs: [
          ['2023', '6th', '1st', '2nd'],
          ['2022', '10th', '1st', '3rd'],
          ['2021', '7th', '1st', '3rd'],
          ['2020', 'Postponed', '3rd', '6th'],
          ['2019', '9th', '2nd', 'N/A'],
          ['2018', 'N/A', '4th', '6th'],
        ],
      },
    },
  },
  content: 'This content is in English',
  home: {
    banner: {
      headline: {
        title: `excellence in Research and Development 
        in Robotics and Artificial Intelligence.`,
        complement: `Our Artifical Intelligence, Computer Vision
        and engineering are world-wide champions.`,
      },
      heading: 'Award-winning AI and Robotics Research',
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
    recruitment: {
      recruiting: "We're recruiting new members!",
      cta: 'Learn more',
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
  publications_page: {
    header: {
      title: 'Publications',
      description: 'Check out our Team Description Papers and research below',
    },
    team_description_papers: {
      title: 'Team Description Papers',
      description: `We organize overviews of our Team Description Papers each 
      year, documents that group information and explanations about our designs. 
      Check out the content of the articles by clicking on their titles!`,
      button_label: `See documents`,
    },
    publications_list: {
      header: {
        title: 'Our Papers',
        description: 'Check out our description papers below',
      },
      default_filter_options: {
        all: 'All',
        recent: 'Most recent',
      },
      publication_card: {
        url_label: 'Read',
      },
      filter_results: {
        fallback: 'Oops! No publications were found for this year.',
      },
    },
  },
  blog_page: {
    header: {
      title: 'Engineering blog',
      description: 'Building Smarter, Safer, and More Capable Robots',
    },
    publications_list: {
      header: {
        title: 'Our Posts',
        description: 'Check out our posts below',
      },
      default_filter_options: {
        all: 'All',
        recent: 'Most recent',
      },
      publication_card: {
        url_label: 'Read',
      },
      filter_results: {
        fallback: 'Oops! No publications were found for this year.',
      }
    },

  },
  recruitment_page: {
    header: 'We\'re recruiting new members!',
    cta: 'Apply now!',
  },
}

export default en
