import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { searchPhoto } from "./store/actions";
import { Button, Form, FormGroup, Input } from "reactstrap";

const photos = [
  {
    src: "http://example.com/example/img1.jpg",
    width: 4,
    height: 3
  },
  {
    src: "http://example.com/example/img2.jpg",
    width: 1,
    height: 1
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      link: null
    };
  }

  componentDidMount() {
    this.props.searchPhoto();
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.query.length) return;
    this.props.searchPhoto(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    const { loading, errors, searchD } = this.props;
    let filteredImages = searchD.filter(x => x.links[0].href.includes(".jpg"));
    return (
      <div className="App">
        {errors && <h1 style={{ color: "red" }}>{errors.message}</h1>}
        <h1 className="nasa-title">NASA Photo of the day </h1>
        <Form onSubmit={e => this.handleSubmit(e)}>
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
        {filteredImages.map((x, i) => {
          return (
            <div key={i}>
              <div className="container">
                <div className={`box${i} box`}>
                  <img
                    className={`img${i} images`}
                    alt="testing"
                    src={x.links[0].href}
                  />
                  <h2>{x.data[0].title}</h2>
                  <p>{x.data[0].date_created}</p>
                  {/* <p>{x.data[0].description}</p> */}
                </div>
              </div>
            </div>
          );
        })}
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
