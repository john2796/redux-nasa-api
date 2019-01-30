import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { fetchPhoto } from "./store/actions";
import NasaCard from "./component/Card";
import { Button } from "reactstrap";
class App extends Component {
  // componentDidMount() {
  //   const { fetchPhoto } = this.props;
  // }

  render() {
    const { loading, errors, nasa, fetchPhoto } = this.props;
    return (
      <div className="App">
        <h1 className="nasa-title">NASA Photo of the day </h1>
        <Button onClick={() => fetchPhoto()}>Button</Button>
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
