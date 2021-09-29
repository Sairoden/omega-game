const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  if (action.type === "FETCH_GAME") return { ...state };
  return { ...state, ...action.payload };
};

// ACTION CREATOR
const fetchGames = userData => {
  return {
    type: "FETCH_GAMES",
  };
};

export default gamesReducer;
