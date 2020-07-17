import { SEARCH, SUBMIT, GETMOVIE, LOADING } from "../actions";
const init_state = {
  text: "",
  movies: [],
  loading: false,
  movie: [],
};

export default (state = init_state, action) => {
  switch (action.type) {
    case SEARCH:
      console.log(`search key word ${action.payload.text}`);
      return {
        ...state,
        text: action.payload.text,
        loading: false,
      };
    case SUBMIT:
      console.log(action.payload.res);
      return {
        ...state,
        movies: action.payload.res,
        loading: false,
      };

    case GETMOVIE:
      console.log("get movie");
      console.log(action.payload.res);
      return {
        ...state,
        movie: action.payload.res,
        loading: false,
      };
    case LOADING:
      console.log("loadinf is true");
      return {
        ...state,
        loading: true,
      };
    default:
      return { ...state, loading: false };
  }
};
