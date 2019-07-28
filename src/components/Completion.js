import React from "react";
import { connect } from "react-redux";
import { Typography, Button } from "@material-ui/core";
import { resetNewData } from "../actions";
import { Redirect } from "react-router-dom";
import tick from "../images/tick.png";

class Completion extends React.Component {
  state = {
    returnBack: false,
  };

  addAnotherBook = () => {
    this.props.resetNewData();
    this.setState({ returnBack: true });
  };

  render() {
    return this.state.returnBack ? (
      <Redirect to="/" />
    ) : (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${tick})`,
            width: "23rem",
            height: "10rem",
            backgroundPosition: "center",
            backgroundSize: "38%",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Typography variant="body1">Book added successfully</Typography>
        <Button
          color="primary"
          size="large"
          onClick={() => {
            this.addAnotherBook();
          }}
          variant="contained"
          style={{ marginTop: "2rem" }}
        >
          Add another book
        </Button>
      </div>
    );
  }
}

export default connect(
  null,
  { resetNewData }
)(Completion);
