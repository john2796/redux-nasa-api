import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { fetchPhoto } from "./store/actions";
import NasaCard from "./component/Card";

class App extends Component {
  componentDidMount() {
    const { fetchPhoto } = this.props;
    fetchPhoto();
  }

  render() {
    const { loading, errors, nasa } = this.props;
    if (!nasa) {
      return (
        <div className="loading-spinner">
          <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />
        </div>
      );
    }
    return (
      <div className="App">
        <h1 className="nasa-title">NASA Photo of the day </h1>
        {loading && (
          <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />
        )}
        {!errors && <h1 style={{ color: "red" }}>{errors}</h1>}
        <NasaCard nasa={nasa} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
  loading: state.nasa.loading,
  nasa: state.nasa.ptoDay
});

export default connect(
  mapStateToProps,
  { fetchPhoto }
)(App);
