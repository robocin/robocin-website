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
    competitions: ['LARC', 'RoboCup', 'CBR'],
    rows: [
      { year: 2025, results: { 'RoboCup': '3rd Div A', 'CBR': '1st' } },
      { year: 2024, results: { 'LARC': '1st', 'RoboCup': '4th Div A' } },
      { year: 2023, results: { 'LARC': '1st', 'RoboCup': '1st Div B, 1st Ball Placement Technical Challenge, 5th Chip Pass Challenge' } },
      { year: 2022, results: { 'LARC': '1st', 'RoboCup': '1st Div B, 1st Ball Placement Technical Challenge, 2nd Vision Blackout, 3rd Dribbling Challenge' } },
      { year: 2021, results: { 'LARC': '1st', 'RoboCup': '3rd Div A/B, 1st Ball Placement Technical Challenge, 5th Hardware Challenge' } },
      { year: 2020, results: { 'LARC': '1st', 'RoboCup': 'Postponed' } },
      { year: 2019, results: { 'LARC': '5th', 'RoboCup': '3rd/4th Div B' } },
      { year: 2018, results: { 'LARC': '5th', 'RoboCup': 'N/A' } },
    ],
  },

  sim2d: {
    competitions: ['RoboCup', 'LARC', 'IRONCup', 'RCX', 'Iran Open', 'CBR'],
    rows: [
      { year: 2026, results: { 'IRONCup': '1st' } },
      { year: 2025, results: { 'RoboCup': '4th', 'IRONCup': '1st', 'RCX': '3rd', 'Iran Open': '4th', 'CBR': '3rd' } },
      { year: 2024, results: { 'RoboCup': '6th',       'LARC': '1st', 'IRONCup': '2nd', 'RCX': '1st', 'Iran Open': '5th' } },
      { year: 2023, results: { 'RoboCup': '6th',       'LARC': '1st', 'IRONCup': '2nd' } },
      { year: 2022, results: { 'RoboCup': '10th',      'LARC': '1st', 'IRONCup': '3rd' } },
      { year: 2021, results: { 'RoboCup': '7th',       'LARC': '1st', 'IRONCup': '3rd' } },
      { year: 2020, results: { 'RoboCup': 'Postponed', 'LARC': '3rd', 'IRONCup': '6th' } },
      { year: 2019, results: { 'RoboCup': '9th',       'LARC': '2nd', 'IRONCup': 'N/A' } },
      { year: 2018, results: { 'RoboCup': 'N/A',       'LARC': '4th', 'IRONCup': '6th' } },
    ],
  },

  drone: {
    competitions: ['LARC', 'FIRA', 'CBR'],
    rows: [
      { year: 2025, results: { 'CBR': '1st' } },
      { year: 2024, results: { 'LARC': '3rd', 'FIRA': '1st' } },
      { year: 2023, results: { 'LARC': '2nd at Flying Robots Trial League Technical Challenge, 3rd at Flying Robots Trial League' } },
      { year: 2022, results: { 'LARC': '3rd at Flying Robots Trial League Technical Challenge' } },
    ],
  },

  humanoid: {
    competitions: [],
    rows: [],
  },
};
