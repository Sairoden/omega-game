// Base URL
const base_url = `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}`;

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

console.log(currentDate);

// Popular Games
const popular_games = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesUrl = () => {
  return `${base_url}${popular_games}`;
};
  
console.log(popularGamesUrl());
