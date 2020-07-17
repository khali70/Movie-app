import React from "react";
import { connect } from "react-redux";
import Spinner from "./spin_baby";
import Movies from "./movies";
import Form from "./Search_form";
function Main({ loading }) {
  return (
    <div className="text-center">
      <Form />
      {loading ? <Spinner /> : <Movies />}
    </div>
  );
}
const MapStateToProps = (state) => {
  return { loading: state.movies.loading };
};
export default connect(MapStateToProps)(Main);
