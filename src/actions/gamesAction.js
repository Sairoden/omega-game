import axios from "axios";

import {
  popularGamesUrl,
  upcomingGamesUrl,
  newGamesUrl,
  searchGameUrl,
} from "../api";

// Action Creator
export const loadGames = () => async dispatch => {
  try {
    // FETCH AXIOS
    const popularData = await axios.get(popularGamesUrl());
    const newGamesData = await axios.get(newGamesUrl());
    const upcomingData = await axios.get(upcomingGamesUrl());

    dispatch({
      type: "FETCH_GAME",
      payload: {
        popular: popularData.data.results,
        upcoming: upcomingData.data.results,
        newGames: newGamesData.data.results,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const fetchSearch = game_name => async dispatch => {
  const searchGames = await axios.get(searchGameUrl(game_name));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: { searched: searchGames.data.results },
  });
};
