import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
};

class FormConnected extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    let id = uuidv1();
    let title = this.state.title;
    this.props.addArticle({ id, title });
    this.setState({ title: "" });
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          className="form-control"
          value={title}
          onChange={this.handleChange}
        />
        <br />
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}

const Form = connect(
  null,
  mapDispatchToProps
)(FormConnected);
export default Form;
