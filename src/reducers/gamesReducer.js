const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  if (action.type === "FETCH_GAME")
    return {
      ...state,
      popular: action.payload.popular,
      upcoming: action.payload.upcoming,
      newGames: action.payload.newGames,
    };

  if (action.type === "FETCH_SEARCHED")
    return { ...state, searched: action.payload.searched };

  if (action.type === "CLEAR_SEARCHED") return { ...state, searched: [] };

  return { ...state, ...action.payload };
};

export default gamesReducer;
