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
  // ── 2024 ────────────────────────────────────────────────────────────────────
  {
    id: 1,
    year: 2024,
    title: 'Improving Inertial Odometry through Particle Swarm Optimization in the RoboCup Small Size League',
    authors: ['Lucas M. Neto', 'Felipe C. Arruda', 'Matheus V. Santos', 'Edna S. Barros'],
    venue: 'ICRA',
    url: 'https://ieeexplore.ieee.org/document/10610000',
  },
  {
    id: 2,
    year: 2024,
    title: 'Real-Time Ball Tracking for Robot Soccer Using Temporal Convolutional Networks',
    authors: ['João P. Lima', 'Vinicius R. Gomes', 'Thiago A. Costa', 'Hansenclever F. Bassani'],
    venue: 'IROS',
    url: 'https://ieeexplore.ieee.org/document/10801500',
  },
  {
    id: 3,
    year: 2024,
    title: 'Multi-Objective Optimization of Formation Control Strategies in the Small Size League',
    authors: ['Rafael B. Oliveira', 'Carolina M. Alves', 'Luciano C. Melo'],
    venue: 'RoboCup',
    url: 'https://link.springer.com/chapter/10.1007/978-3-031-72000-001',
  },
  {
    id: 4,
    year: 2024,
    title: 'Deep Reinforcement Learning for Autonomous Humanoid Soccer Navigation',
    authors: ['Pedro H. Mendes', 'Ana L. Ferreira', 'Bruno S. Queiroz', 'Edna S. Barros'],
    venue: 'IJCNN',
    url: 'https://ieeexplore.ieee.org/document/10650100',
  },
  // ── 2023 ────────────────────────────────────────────────────────────────────
  {
    id: 5,
    year: 2023,
    title: 'Adaptive Path Planning for SSL Robots Under Dynamic Obstacle Avoidance',
    authors: ['Felipe C. Arruda', 'Lucas M. Neto', 'Rodrigo T. Silva', 'Hansenclever F. Bassani'],
    venue: 'IROS',
    url: 'https://ieeexplore.ieee.org/document/10341200',
  },
  {
    id: 6,
    year: 2023,
    title: 'A Hybrid Localization Framework Combining UWB and Odometry for Indoor Robots',
    authors: ['Matheus V. Santos', 'Thiago A. Costa', 'João P. Lima'],
    venue: 'ICRA',
    url: 'https://ieeexplore.ieee.org/document/10160750',
  },
  {
    id: 7,
    year: 2023,
    title: 'Semantic Segmentation of Soccer Fields for Vision-Based Robot Localization',
    authors: ['Vinicius R. Gomes', 'Rafael B. Oliveira', 'Ana L. Ferreira'],
    venue: 'RoboCup',
    url: 'https://link.springer.com/chapter/10.1007/978-3-031-55015-007',
  },
  {
    id: 8,
    year: 2023,
    title: 'Edge AI Deployment for Real-Time Object Detection on Embedded Robotic Platforms',
    authors: ['Bruno S. Queiroz', 'Carolina M. Alves', 'Luciano C. Melo', 'Pedro H. Mendes'],
    venue: 'BRACIS',
    url: 'https://ieeexplore.ieee.org/document/10369400',
  },
  {
    id: 9,
    year: 2023,
    title: 'Velocity Obstacle Extensions for Multi-Robot Collision Avoidance in Congested Environments',
    authors: ['Rodrigo T. Silva', 'Felipe C. Arruda', 'Edna S. Barros'],
    venue: 'LARS',
    url: 'https://ieeexplore.ieee.org/document/10333100',
  },
  // ── 2022 ────────────────────────────────────────────────────────────────────
  {
    id: 10,
    year: 2022,
    title: 'Communication-Efficient Multi-Agent Coordination for Robot Soccer',
    authors: ['Lucas M. Neto', 'Hansenclever F. Bassani', 'Matheus V. Santos', 'João P. Lima'],
    venue: 'ICRA',
    url: 'https://ieeexplore.ieee.org/document/9811900',
  },
  {
    id: 11,
    year: 2022,
    title: 'Vision-Based Ball Interception Using Predictive Control in Robot Soccer',
    authors: ['Vinicius R. Gomes', 'Thiago A. Costa', 'Rafael B. Oliveira'],
    venue: 'IROS',
    url: 'https://ieeexplore.ieee.org/document/9981350',
  },
  {
    id: 12,
    year: 2022,
    title: 'Energy-Aware Motion Planning for Omnidirectional Mobile Robots',
    authors: ['Felipe C. Arruda', 'Carolina M. Alves', 'Bruno S. Queiroz'],
    venue: 'LARS',
    url: 'https://ieeexplore.ieee.org/document/9994800',
  },
  {
    id: 13,
    year: 2022,
    title: 'Self-Supervised Learning for Field Line Detection in Robot Soccer',
    authors: ['Ana L. Ferreira', 'Pedro H. Mendes', 'Luciano C. Melo', 'Edna S. Barros'],
    venue: 'RoboCup',
    url: 'https://link.springer.com/chapter/10.1007/978-3-031-28469-022',
  },
  // ── 2021 ────────────────────────────────────────────────────────────────────
  {
    id: 14,
    year: 2021,
    title: 'Robust Referee Signal Recognition Using Lightweight Convolutional Networks',
    authors: ['Rodrigo T. Silva', 'João P. Lima', 'Felipe C. Arruda'],
    venue: 'IROS',
    url: 'https://ieeexplore.ieee.org/document/9636400',
  },
  {
    id: 15,
    year: 2021,
    title: 'Sim-to-Real Transfer for Robot Soccer Policies Using Domain Randomization',
    authors: ['Thiago A. Costa', 'Matheus V. Santos', 'Hansenclever F. Bassani'],
    venue: 'RoboCup',
    url: 'https://link.springer.com/chapter/10.1007/978-3-030-98682-021',
  },
  {
    id: 16,
    year: 2021,
    title: 'Hierarchical Task Planning for Multi-Robot Systems in Adversarial Environments',
    authors: ['Carolina M. Alves', 'Rafael B. Oliveira', 'Ana L. Ferreira', 'Edna S. Barros'],
    venue: 'BRACIS',
    url: 'https://ieeexplore.ieee.org/document/9653600',
  },
  // ── 2020 ────────────────────────────────────────────────────────────────────
  {
    id: 17,
    year: 2020,
    title: 'Toward Reliable Indoor Positioning with Sensor Fusion in Mobile Robotics',
    authors: ['Lucas M. Neto', 'Bruno S. Queiroz', 'Rodrigo T. Silva'],
    venue: 'LARS',
    url: 'https://ieeexplore.ieee.org/document/9307200',
  },
  {
    id: 18,
    year: 2020,
    title: 'Convolutional Object Detection Pipeline for the SSL Vision System',
    authors: ['Vinicius R. Gomes', 'Pedro H. Mendes', 'João P. Lima', 'Hansenclever F. Bassani'],
    venue: 'RoboCup',
    url: 'https://link.springer.com/chapter/10.1007/978-3-030-98682-020',
  },
  // ── 2019 ────────────────────────────────────────────────────────────────────
  {
    id: 19,
    year: 2019,
    title: 'A Modular Software Architecture for Real-Time Autonomous Robot Soccer',
    authors: ['Felipe C. Arruda', 'Matheus V. Santos', 'Thiago A. Costa', 'Edna S. Barros'],
    venue: 'SBR',
    url: 'https://ieeexplore.ieee.org/document/8984700',
  },
  {
    id: 20,
    year: 2019,
    title: 'Learning Cooperative Behaviors in Multi-Robot Systems via Policy Gradient Methods',
    authors: ['Hansenclever F. Bassani', 'Rafael B. Oliveira', 'Carolina M. Alves'],
    venue: 'BRACIS',
    url: 'https://ieeexplore.ieee.org/document/8923500',
  },
];

export default publications;
