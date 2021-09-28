const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  if (action.type === "FETCH_GAME") return { ...state };
  return { ...state };
};

export default gamesReducer;
