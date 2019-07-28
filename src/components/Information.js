import React, { Fragment } from "react";
import { connect } from "react-redux";
import PageTurnButtons from "./PageTurnButtons";
import { inputNewData } from "../actions";
import TextFieldInput from "./TextFieldInput";
import UpperLine from "./UpperLine";
import Stepper from "./Stepper";
import { Redirect } from "react-router-dom";

class Inclusion extends React.Component {
  state = {
    enableCompleteButton: false,
    section: "information",
    fields: null,
    completed: false,
  };

  componentDidMount() {
    this.setState({ fields: this.props.fields });
  }

  handleChange = (name, value) => {
    const field = this.state.fields.find(field => field.name === name);
    field.value = value;
  };

  renderInputs = () => {
    return this.state.fields
      ? this.state.fields.map(field => {
          if (
            field.name === "Description" &&
            !this.props.newData.isDescriptionRequired
          ) {
            return null;
          }
          return (
            <TextFieldInput
              field={field}
              handleChange={this.handleChange}
              key={field.name}
            />
          );
        })
      : null;
  };

  addBook = () => {
    const information = {};
    const fields = this.state.fields;
    for (let i = 0; i < fields.length; i++) {
      information[fields[i].name] = fields[i].value;
    }
    const post = { ...this.props.newData, ...information };
    console.log(post);
    this.setState({ completed: true });
  };

  render() {
    return !this.state.completed ? (
      <Fragment>
        <UpperLine />
        <Stepper />
        <form
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexWrap: "wrap",
          }}
          onSubmit={e => {
            e.preventDefault();
            this.addBook();
          }}
        >
          {this.renderInputs()}

          <PageTurnButtons section={"information"} />
        </form>
      </Fragment>
    ) : (
      <Redirect to="/completion" />
    );
  }
}

const mapStateToProps = state => {
  return {
    newData: state.newData,
    fields: state.informationFields,
  };
};
export default connect(
  mapStateToProps,
  { inputNewData }
)(Inclusion);
