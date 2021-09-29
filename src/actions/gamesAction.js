import axios from "axios";

import { popularGamesUrl, upcomingGamesUrl, newGamesUrl } from "../api";

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
