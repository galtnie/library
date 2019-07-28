import React from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";

class UpperLine extends React.Component {
  render() {
    return (
      <Typography paragraph variant="body1">
        <span style={{ paddingLeft: "2%" }}>Add book - New Book</span>
      </Typography>
    );
  }
}

export default connect()(UpperLine);
