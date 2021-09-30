const initialState = {
  game: { platforms: [] },
  screenshot: { results: [] },
};

const detailReducer = (state = initialState, action) => {
  if (action.type === "GET_DETAIL")
    return {
      ...state,
      game: action.payload.game,
      screenshot: action.payload.screenshot,
    };

  return { ...state };
};

export default detailReducer;
