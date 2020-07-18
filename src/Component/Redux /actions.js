import axios from "axios";
import { APIKEY } from "../APIKEY";
export const SEARCH = "SEARCH";
export const SUBMIT = "SUBMIT";
export const GETMOVIE = "GETMOVIE";
export const LOADING = "LOADING";

export const Search = (text) => (dispatch) => {
  dispatch({ type: SEARCH, payload: { text } });
};
export const Submit = (text) => (dispatch) => {
  axios
    .get(`https://www.omdbapi.com/?apikey=${APIKEY}&S=${text}`)
    .then((res) =>
      dispatch({
        type: SUBMIT,
        payload: { res: res.data.Search },
      })
    )
    .catch((err) => console.log(err));
};
export const IsLoading = () => (dispatch) => {
  dispatch({ type: LOADING });
};
