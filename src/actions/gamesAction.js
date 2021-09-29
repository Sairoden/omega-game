import axios from "axios";

import { popularGamesUrl } from "../api";

// Action Creator
export const loadGames = () => async dispatch => {
  try {
    // FETCH AXIOS
    const popularData = await axios.get(popularGamesUrl());
    dispatch({
      type: "FETCH_GAME",
      payload: {
        popular: popularData.data.results,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
