const initialState = {
  game: { platforms: [] },
  screenshot: { results: [] },
  isLoading: true,
};

const detailReducer = (state = initialState, action) => {
  if (action.type === "GET_DETAIL")
    return {
      ...state,
      game: action.payload.game,
      screenshot: action.payload.screenshot,
      isLoading: false,
    };

  if (action.type === "LOADING_DETAIL") return { isLoading: true };

  return { ...state };
};

export default detailReducer;
