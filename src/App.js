import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { searchPhoto } from "./store/actions";

import {
  Form,
  FormGroup,
  Input,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
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
        <div className="wrapper">
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
            <Loader
              type="Ball-Triangle"
              color="#00BFFF"
              height="90"
              width="60"
            />
          )}
        </div>

        <div className="container">
          {filteredImages.map((x, i) => {
            console.log(x.data[0]);
            return (
              <Card key={i}>
                <CardImg
                  top
                  width="100%"
                  src={x.links[0].href}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>{x.data[0].title}</CardTitle>
                  <CardSubtitle>{x.data[0].date_created}</CardSubtitle>
                  <CardText>{x.data[0].secondary_creator}</CardText>
                </CardBody>
              </Card>
            );
          })}
        </div>
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
