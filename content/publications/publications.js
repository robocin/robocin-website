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
  // ── 2023 ────────────────────────────────────────────────────────────────────
  {
    id: 1,
    year: 2023,
    title: 'Improving Inertial Odometry Through Particle Swarm Optimization in the RoboCup Small Size League',
    authors: ['Lucas Cavalcanti', 'João G. Melo', 'Riei Joaquim', 'Edna Barros'],
    venue: 'RoboCup',
    url: 'https://link.springer.com/chapter/10.1007/978-3-031-55015-7_8',
  },
  {
    id: 2,
    year: 2023,
    title: 'Dataset and Baseline Experiments for Self-Localization and Tracking in the RoboCup Small Size League',
    authors: ['João G. Melo', 'Lucas Cavalcanti', 'Riei Joaquim', 'Victor Araújo', 'Edna Barros'],
    venue: 'BRACIS',
    url: 'https://ieeexplore.ieee.org/document/10333068',
  },
  {
    id: 3,
    year: 2023,
    title: 'A Model-based Approach to the Development and Verification of Robotic Systems for Competitions',
    authors: ['Marcus Santos', 'Madiel Conserva Filho', 'Augusto Sampaio'],
    venue: 'BRACIS',
    url: 'https://ieeexplore.ieee.org/document/10333030',
  },
  // ── 2022 ────────────────────────────────────────────────────────────────────
  {
    id: 4,
    year: 2022,
    title: 'Towards an Autonomous RoboCup Small Size League Robot',
    authors: ['João G. Melo', 'Felipe Martins', 'Lucas Cavalcanti', 'Roberto Fernandes', 'Victor Araújo', 'Riei Joaquim', 'João G. Monteiro'],
    venue: 'BRACIS',
    url: 'https://ieeexplore.ieee.org/document/9996004',
  },
  {
    id: 5,
    year: 2022,
    title: 'Web Soccer Monitor: An Open-Source 2D Soccer Simulation Monitor for the Web and the Foundation for a New Ecosystem',
    authors: ['Mateus FB Soares', 'Tsang I Ren', 'Paulo SG de Mattos Neto', 'Edna NS Barros'],
    venue: 'RoboCup',
    url: 'https://link.springer.com/chapter/10.1007/978-3-031-28469-4_16',
  },
  {
    id: 6,
    year: 2022,
    title: 'A Library and Web Platform for RoboCup Soccer Matches Data Analysis',
    authors: ['Felipe NA Pereira', 'Mateus FB Soares', 'Olavo R Conceição', 'Tales T Alves', 'Tiago HRP Gonçalves', 'José R da Silva', 'Tsang I Ren', 'Paulo SG de Mattos Neto', 'Edna NS Barros'],
    venue: 'RoboCup',
    url: 'https://link.springer.com/chapter/10.1007/978-3-031-28469-4_15',
  },
  {
    id: 7,
    year: 2022,
    title: 'An Embedded Monocular Vision Approach for Ground-Aware Objects Detection and Position Estimation',
    authors: ['João G. Melo', 'Edna Barros'],
    venue: 'RoboCup',
    url: 'https://link.springer.com/chapter/10.1007/978-3-031-28469-4_9',
  },
  // ── 2021 ────────────────────────────────────────────────────────────────────
  {
    id: 8,
    year: 2021,
    title: 'A Telemetry-Based PI Tuning Strategy for Low-Level Control of an Omnidirectional Mobile Robot',
    authors: ['Victor Araújo', 'Felipe Martins', 'Roberto Fernandes', 'Edna Barros'],
    venue: 'RoboCup',
    url: 'https://link.springer.com/chapter/10.1007/978-3-030-98682-7_16',
  },
  {
    id: 9,
    year: 2021,
    title: 'Dataset and Benchmarking of Real-Time Embedded Object Detection for RoboCup SSL',
    authors: ['Roberto Fernandes', 'Walber M. Rodrigues', 'Edna Barros'],
    venue: 'RoboCup',
    url: 'https://link.springer.com/chapter/10.1007/978-3-030-98682-7_5',
  },
  {
    id: 10,
    year: 2021,
    title: 'rSoccer: A Framework for Studying Reinforcement Learning in Small and Very Small Size Robot Soccer',
    authors: ['Felipe B. Martins', 'Mateus G. Machado', 'Hansenclever F. Bassani', 'Pedro H. M. Braga', 'Edna S. Barros'],
    venue: 'RoboCup',
    url: 'https://link.springer.com/chapter/10.1007/978-3-030-98682-7_14',
  },
  {
    id: 11,
    year: 2021,
    title: 'Optimized Wireless Control and Telemetry Network for Mobile Soccer Robots',
    authors: ['Lucas Cavalcanti', 'Riei Joaquim', 'Edna Barros'],
    venue: 'RoboCup',
    url: 'https://link.springer.com/chapter/10.1007/978-3-030-98682-7_15',
  },
  {
    id: 12,
    year: 2021,
    title: 'Mechanical and Dynamic Analysis for Design and Development of a RoboCup SSL Dribbling Mechanism',
    authors: ['Victor Araújo', 'Edgleyson Silva', 'João Guilherme Monteiro', 'Rebecca Sousa', 'Cecilia Silva', 'Pedro Henrique Santana'],
    venue: 'BRACIS',
    url: 'https://ieeexplore.ieee.org/document/9605377',
  },
  // ── 2020 ────────────────────────────────────────────────────────────────────
  {
    id: 13,
    year: 2020,
    title: 'An Analysis of Reinforcement Learning Applied to Coach Task in IEEE Very Small Size Soccer',
    authors: ['Carlos H. C. Pena', 'Mateus G. Machado', 'Mariana S. Barros', 'José D.P. Silva', 'Lucas D. Macie', 'Tsang Ing Ren', 'Edna N.S. Barros', 'Pedro H.M. Braga', 'Hansenclever F. Bassani'],
    venue: '',
    url: '',
  },
  {
    id: 14,
    year: 2020,
    title: 'A Data Analysis Graphical user Interface for RoboCup 2D Soccer Simulation League',
    authors: ['Felipe N. A. Pereira', 'Mateus F. B. Soares', 'Edna N. S. Barros'],
    venue: 'LARS',
    url: 'https://ieeexplore.ieee.org/abstract/document/9307104',
  },
];

export default publications;
