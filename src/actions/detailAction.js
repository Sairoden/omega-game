import axios from "axios";
import { gameDetailsUrl, gameScreenshotUrl } from "../api";

export const loadDetail = id => async dispatch => {
  try {
    const detailData = await axios.get(gameDetailsUrl(id));
    const screenshotData = await axios.get(gameScreenshotUrl(id));

    dispatch({
      type: "GET_DETAIL",
      payload: {
        game: detailData.data,
        screenshot: screenshotData.data,  
      },
    });
  } catch (err) {
    console.log(err);
  }
};
