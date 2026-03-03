/**
 * Competition results for each RobôCIn category.
 *
 * Structure per category:
 *   competitions  – ordered array of competition names (used as column headers)
 *   rows          – array of { year, results } objects, newest first
 *                   results is a map of competition name → result string
 *
 * Result notation:
 *   '1st' / '2nd' / '3rd'  – podium finish
 *   'QF'                    – quarter-final
 *   'SF'                    – semi-final
 *   '—'                     – did not compete / no data
 */

export const categoryData = {
  ssl: {
    competitions: ['RoboCup', 'LARC/CBR'],
    rows: [
      { year: 2024, results: { 'RoboCup': '2nd',  'LARC/CBR': '1st' } },
      { year: 2023, results: { 'RoboCup': '1st',  'LARC/CBR': '1st' } },
      { year: 2022, results: { 'RoboCup': '3rd',  'LARC/CBR': '1st' } },
      { year: 2021, results: { 'RoboCup': '—',    'LARC/CBR': '1st' } },
      { year: 2019, results: { 'RoboCup': '1st',  'LARC/CBR': '1st' } },
      { year: 2018, results: { 'RoboCup': 'QF',   'LARC/CBR': '2nd' } },
      { year: 2017, results: { 'RoboCup': 'SF',   'LARC/CBR': '1st' } },
    ],
  },

  sim2d: {
    competitions: ['RoboCup', 'LARC/CBR'],
    rows: [
      { year: 2024, results: { 'RoboCup': '3rd',  'LARC/CBR': '1st' } },
      { year: 2023, results: { 'RoboCup': 'QF',   'LARC/CBR': '1st' } },
      { year: 2022, results: { 'RoboCup': 'SF',   'LARC/CBR': '1st' } },
      { year: 2021, results: { 'RoboCup': '—',    'LARC/CBR': '1st' } },
      { year: 2019, results: { 'RoboCup': '2nd',  'LARC/CBR': '1st' } },
      { year: 2018, results: { 'RoboCup': '3rd',  'LARC/CBR': '2nd' } },
    ],
  },

  drone: {
    competitions: ['RoboCup'],
    rows: [
      { year: 2024, results: { 'RoboCup': '1st' } },
      { year: 2023, results: { 'RoboCup': '1st' } },
      { year: 2022, results: { 'RoboCup': '2nd' } },
      { year: 2021, results: { 'RoboCup': '3rd' } },
    ],
  },

  humanoid: {
    competitions: ['RoboCup'],
    rows: [
      { year: 2024, results: { 'RoboCup': '3rd' } },
      { year: 2023, results: { 'RoboCup': 'QF'  } },
      { year: 2022, results: { 'RoboCup': 'SF'  } },
      { year: 2021, results: { 'RoboCup': '3rd' } },
    ],
  },
};
