// Base URL
const base_url = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_KEY}`;
// bc5a72d772fb4d5b932e753fb23a5f6d
// Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;

  if (month < 10) return `0${month}`;
  return month;
};

// Getting the date
const getCurrentDay = () => {
  const day = new Date().getDate();

  if (day < 10) return `0${day}`;
  return day;
};

// Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular Games
const popular_games = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;
export const newGamesUrl = () => `${base_url}${newGames}`;

// Game Details
export const gameDetailsUrl = game_id =>
  `https://api.rawg.io/api/games/${game_id}?key=${process.env.REACT_APP_RAWG_KEY}`;

// Game Screenshots
export const gameScreenshotUrl = game_id =>
  `https://api.rawg.io/api/games/${game_id}/screenshots?key=${process.env.REACT_APP_RAWG_KEY}`;

// Searched game
export const searchGameUrl = game_name =>
  `${base_url}&search=${game_name}&page_size=9`;

// games?search=Far Cry 6&page_size=9
