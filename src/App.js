import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { searchPhoto } from "./store/actions";
import { Button, Form, FormGroup, Input } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      link: null
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e, firstlink) => {
    e.preventDefault();
    console.log("handlesubmit", firstlink);
    if (!this.state.query.length) return;
    this.props.searchPhoto(this.state.query, firstlink);
    // this.props.getCollectImg(href);
    this.setState({ query: "" });
  };

  render() {
    const { loading, errors, searchD } = this.props;
    console.log(errors);
    const data =
      searchD &&
      searchD.collection.items.filter((x, idx) => idx < 9).map(x => x.data[0]);

    const href =
      searchD &&
      searchD.collection.items.filter((x, idx) => idx < 9).map(x => x.href);
    const firstlink = href && href[0];
    console.log("firstlink", firstlink);

    return (
      <div className="App">
        {searchD && !searchD.collection.items.length && (
          <h1 className="red">Search not found</h1>
        )}
        {errors && <h1 style={{ color: "red" }}>{errors.message}</h1>}
        <h1 className="nasa-title">NASA Photo of the day </h1>
        <Form onSubmit={e => this.handleSubmit(e, firstlink)}>
          <FormGroup>
            <Input
              type="text"
              name="query"
              placeholder="search here.."
              value={this.state.query}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button type="submit">search</Button>
        </Form>
        {loading && (
          <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />
        )}
        {data && data.map((y, idx) => <div key={idx}>{y.center}</div>)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
  loading: state.nasa.loading,
  searchD: state.nasa.searchD
});

export default connect(
  mapStateToProps,
  { searchPhoto }
)(App);
