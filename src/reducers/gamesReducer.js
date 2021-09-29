const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  if (action.type === "FETCH_GAME")
    return { ...state, popular: action.payload.popular };
  return { ...state, ...action.payload };
};

export default gamesReducer;
