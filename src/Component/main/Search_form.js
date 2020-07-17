import React from "react";
import { Search, Submit, IsLoading } from "../Redux /actions";
import { connect } from "react-redux";
function Search_form({ Search, Submit, text, IsLoading }) {
  const onChange = (e) => {
    Search(e.currentTarget.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    Submit(text);
    IsLoading();
  };
  return (
    <div className="jumbotron jumbotron-fluid mt-5 text-center">
      <div className="container">
        <h1 className="display-4 mb-3">
          <i className="fa fa-search" /> Search for a movie ,TV series ..
        </h1>
        {/* Search form  */}
        <form id="searchForm" onSubmit={(e) => onSubmit(e)}>
          <input
            type="text"
            className="form-control"
            name="searchText"
            placeholder="Search Movies, TV Series ..."
            onChange={(e) => onChange(e)}
          />
          <button type="submit" className="btn btn-primary btn-bg mt-3">
            Search
          </button>
        </form>
        {/* end of search form */}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    text: state.movies.text,
  };
};
export default connect(mapStateToProps, { Search, Submit, IsLoading })(
  Search_form
);
