/**
 * Static list of RobôCIn scientific publications.
 * Each entry links to its original source on IEEE Xplore, SpringerLink, or similar platforms.
 *
 * Fields:
 *   id      — unique numeric identifier
 *   year    — publication year (number)
 *   title   — full paper title
 *   authors — ordered list of author names
 *   venue   — conference or journal abbreviation shown as badge
 *   url     — link to the original publication
 */

const publications = [
  // ── 2025 ────────────────────────────────────────────────────────────────────
  {
    id: 1,
    year: 2025,
    title: 'Onboard Perception and Localization for Resource-Constrained Dynamic Environments: A RoboCup Small Size League Case Study',
    authors: ['João G. Melo', 'Lucas Cavalcanti', 'Riei Joaquim', 'Victor Araújo', 'Edna Barros'],
    venue: 'JINT',
    url: 'https://link.springer.com/article/10.1007/s10846-025-02259-8',
  },
  {
    id: 2,
    year: 2025,
    title: 'Aplicação do Método FTOPSIS-Class na Classificação e Seleção de Passes no Futebol de Robôs',
    authors: ['Matheus Paixão Gumercindo dos Santos', 'Adiel Teixeira de Almeida Filho'],
    venue: '',
    url: 'https://repositorio.ufpe.br/bitstream/123456789/66009/1/TCC%20Matheus%20Paix%c3%a3o%20Gumercindo%20dos%20Santos.pdf',
  },
  {
    id: 3,
    year: 2025,
    title: 'PilotStation: estação de controle de múltiplos drones baseada em web',
    authors: ['Tiago Henrique Rodrigues Pedrosa Gonçalves', 'Edna Natividade da Silva Barros'],
    venue: '',
    url: 'https://repositorio.ufpe.br/bitstream/123456789/65552/3/TCC%20Tiago%20Henrique%20Rodrigues%20Pedrosa%20Gon%c3%a7alves.pdf',
  },
  {
    id: 4,
    year: 2025,
    title: 'Efficient Lines Detection for Robot Soccer',
    authors: ['João G. Melo', 'João P. Mafaldo', 'Edna Barros'],
    venue: 'ArXiv',
    url: 'https://arxiv.org/abs/2507.19469',
  },
  {
    id: 5,
    year: 2025,
    title: 'Analysis of the Introduction Trajectory Planning in Control Applied in Small Size League Robots',
    authors: ['Riei Rodrigues', 'Lucas Cavalcanti', 'João Melo', 'Edna Barros', 'Hansenclever F. Bassani'],
    venue: 'RoboCup',
    url: 'https://link.springer.com/chapter/10.1007/978-3-031-85859-8_12',
  },
  // ── 2024 ────────────────────────────────────────────────────────────────────
  {
    id: 6,
    year: 2024,
    title: 'Reinforcement Learning-driven automatic calibration for color segmentation-based robot detection',
    authors: ['Clara Acruchi', 'Geovany Icaro L. Nunes', 'Thiago José A. Souza', 'Breno Cavalcanti', 'Adiel Teixeira de A. Filho', 'Mateus G. Machado', 'Edna Barros'],
    venue: 'LARS',
    url: 'https://ieeexplore.ieee.org/document/10786410',
  },
  {
    id: 7,
    year: 2024,
    title: 'SPO: Single Pass Optimization for Soccer Simulation 2D',
    authors: ['Walber M. Rodrigues', 'Pedro V. Cunha', 'Rafael R. De Labio', 'Mateus G. Machado', 'Paulo S. G. De Mattos Neto', 'Edna N. S. Barros'],
    venue: 'LARS',
    url: 'https://ieeexplore.ieee.org/abstract/document/10786402',
  },
  {
    id: 8,
    year: 2024,
    title: 'Architecture, Implementation and Performance Analysis of a Microservices-Based System for the RoboCup Small Size League',
    authors: ['Matheus Vinícius Teotonio do Nascimento Andrade', 'Augusto Cezar Alves Sampaio'],
    venue: '',
    url: 'https://repositorio.ufpe.br/handle/123456789/58253',
  },
  {
    id: 9,
    year: 2024,
    title: 'RobôCIn SSL-Unification: A Modular Software Architecture for Dynamic Multi-robot Systems',
    authors: ['Victor Araújo', 'Riei Rodrigues', 'José Cruz', 'Lucas Cavalcanti', 'Matheus Andrade', 'Matheus Santos', 'João Melo', 'Pedro Oliveira', 'Ryan Morais', 'Edna Barros'],
    venue: 'RoboCup',
    url: 'https://link.springer.com/chapter/10.1007/978-3-031-55015-7_26',
  },
  {
    id: 10,
    year: 2024,
    title: 'Análise das Implicações da adição de Planejamento de Trajetórias no Controle de Robôs Omnidirecionais Aplicado ao Futebol de Robôs',
    authors: ['Riei Joaquim Matos Rodrigues', 'Edna Natividade da Silva Barros', 'Hansenclever de França Bassani'],
    venue: '',
    url: 'https://attena.ufpe.br/bitstream/123456789/59275/7/TCC%20Riei%20Joaquim%20Matos%20Rodrigues.pdf',
  },
  {
    id: 11,
    year: 2024,
    title: 'Improving Inertial Odometry Through Particle Swarm Optimization in the RoboCup Small Size League',
    authors: ['Lucas Cavalcanti', 'João G. Melo', 'Riei Joaquim', 'Edna Barros'],
    venue: 'RoboCup',
    url: 'https://link.springer.com/chapter/10.1007/978-3-031-55015-7_8',
  },
  // ── 2023 ────────────────────────────────────────────────────────────────────
  {
    id: 12,
    year: 2023,
    title: 'Dataset and Baseline Experiments for Self-Localization and Tracking in the RoboCup Small Size League',
    authors: ['João G. Melo', 'Lucas Cavalcanti', 'Riei Joaquim', 'Victor Araújo', 'Edna Barros'],
    venue: 'BRACIS',
    url: 'https://ieeexplore.ieee.org/abstract/document/10333068',
  },
  {
    id: 13,
    year: 2023,
    title: 'Exploring multi-agent deep reinforcement learning in IEEE very small size soccer',
    authors: ['Felipe B. Martins', 'Hansenclever F. Bassani'],
    venue: '',
    url: 'https://repositorio.ufpe.br/handle/123456789/54823',
  },
  {
    id: 14,
    year: 2023,
    title: 'Onboard perception and localization for resource-constrained dynamic environments: a RoboCup small size League Case Study',
    authors: ['João G. Melo', 'Edna Barros'],
    venue: '',
    url: 'https://repositorio.ufpe.br/handle/123456789/52045',
  },
  {
    id: 15,
    year: 2023,
    title: 'Exploring Reinforcement Learning in Path Planning for Omnidirectional Robot Soccer',
    authors: ['José Cruz', 'Edna Natividade da Silva Barros'],
    venue: '',
    url: 'https://repositorio.ufpe.br/bitstream/123456789/51592/5/Exploring_Reinforcement_Learning_in_Path_Planning_for_Omnidirectional_Robot_Soccer.pdf',
  },
  {
    id: 16,
    year: 2023,
    title: 'An Embedded Monocular Vision Approach for Ground-Aware Objects Detection and Position Estimation',
    authors: ['João G. Melo', 'Edna Barros'],
    venue: 'RoboCup',
    url: 'https://link.springer.com/chapter/10.1007/978-3-031-28469-4_9',
  },
  // ── 2022 ────────────────────────────────────────────────────────────────────
  {
    id: 17,
    year: 2022,
    title: 'Towards an Autonomous RoboCup Small Size League Robot',
    authors: ['João G. Melo', 'Felipe Martins', 'Lucas Cavalcanti', 'Roberto Fernandes', 'Victor Araújo', 'Riei Joaquim', 'Edna Barros'],
    venue: 'BRACIS',
    url: 'https://ieeexplore.ieee.org/abstract/document/9996004',
  },
  {
    id: 18,
    year: 2022,
    title: 'A Library and Web Platform for RoboCup Soccer Matches Data Analysis',
    authors: ['Felipe Nunes de Almeida Pereira', 'Mateus Ferreira Borges Soares', 'Olavo R Conceição', 'Tales T Alves', 'Tiago HRP Gonçalves', 'José R da Silva', 'Edna Natividade da Silva Barros', 'Tsang I Ren', 'Paulo SG de Mattos Neto'],
    venue: 'RoboCup',
    url: 'https://link.springer.com/chapter/10.1007/978-3-031-28469-4_15',
  },
  {
    id: 19,
    year: 2022,
    title: 'Web Soccer Monitor: An Open-Source 2D Soccer Simulation Monitor for the Web and the Foundation for a New Ecosystem',
    authors: ['Mateus Ferreira Borges Soares', 'Edna Natividade da Silva Barros', 'Tsang I Ren', 'Paulo SG de Mattos Neto'],
    venue: 'RoboCup',
    url: 'https://link.springer.com/chapter/10.1007/978-3-031-28469-4_16',
  },
  {
    id: 20,
    year: 2022,
    title: 'A Telemetry-Based PI Tuning Strategy for Low-Level Control of an Omnidirectional Mobile Robot',
    authors: ['Victor Araújo', 'Felipe Martins', 'Roberto Fernandes', 'Edna Barros'],
    venue: 'RoboCup',
    url: 'https://link.springer.com/chapter/10.1007/978-3-030-98682-7_16',
  },
  {
    id: 21,
    year: 2022,
    title: 'rSoccer: A Framework for Studying Reinforcement Learning in Small and Very Small Size Robot Soccer',
    authors: ['Felipe B. Martins', 'Mateus G. Machado', 'Pedro H. M. Braga', 'Hansenclever F. Bassani', 'Edna S. Barros'],
    venue: 'RoboCup',
    url: 'https://link.springer.com/chapter/10.1007/978-3-030-98682-7_14',
  },
  {
    id: 22,
    year: 2022,
    title: 'Dataset and Benchmarking of Real-Time Embedded Object Detection for RoboCup SSL',
    authors: ['Roberto Fernandes', 'Walber M. Rodrigues', 'Edna Barros'],
    venue: 'ArXiv',
    url: 'https://arxiv.org/pdf/2106.14597',
  },
  // ── 2021 ────────────────────────────────────────────────────────────────────
  {
    id: 23,
    year: 2021,
    title: 'Mechanical and Dynamic Analysis for Design and Development of a RoboCup SSL Dribbling Mechanism',
    authors: ['Victor Araújo', 'Edgleyson Silva', 'João Guilherme Monteiro', 'Rebecca Sousa', 'Cecilia Silva', 'Pedro Henrique Santana', 'Edna Barros'],
    venue: 'BRACIS',
    url: 'https://ieeexplore.ieee.org/abstract/document/9605377',
  },
  // ── 2020 ────────────────────────────────────────────────────────────────────
  {
    id: 24,
    year: 2020,
    title: 'A Data Analysis Graphical User Interface for RoboCup 2D Soccer Simulation League',
    authors: ['Felipe Nunes de Almeida Pereira', 'Mateus Ferreira Borges Soares', 'Edna Natividade da Silva Barros'],
    venue: 'LARS',
    url: 'https://ieeexplore.ieee.org/abstract/document/9307104',
  },
  {
    id: 25,
    year: 2020,
    title: 'Uma abordagem para tuning de um controlador PI para motores brushless DC: um estudo de caso aplicado ao controle de movimento de um robô omnidirecional',
    authors: ['Victor Hugo Sabino dos Santos Araújo', 'Augusto Cezar Alves Sampaio'],
    venue: '',
    url: 'https://repositorio.ufpe.br/bitstream/123456789/38117/1/DISSERTA%C3%87%C3%83O%20Victor%20Hugo%20Sabino%20dos%20Santos%20Ara%C3%BAjo.pdf',
  },
];

export default publications;
