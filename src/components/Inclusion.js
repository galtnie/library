import React, { Fragment } from "react";
import { connect } from "react-redux";
import {
  withStyles,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import PageTurnButtons from "./PageTurnButtons";
import UpperLine from "./UpperLine";
import Stepper from "./Stepper";

const classes = {
  checkboxLabel: {
    marginTop: "5rem",
  },
};

class Inclusion extends React.Component {
  state = {
    name: "",
    isDescriptionChecked: false,
  };

  componentDidMount() {
    const { section, newData } = this.props;
    if (section === "genre" && newData.genre) {
      this.setState({ name: newData.genre });
    } else if (section === "subgenre" && newData.subgenre) {
      this.setState({ name: newData.subgenre });
    }
  }

  handleInputChange = event => {
    this.setState({ name: event.target.value });
  };

  toggleDescriptionCheckbox = () => {
    this.setState({
      isDescriptionChecked: !this.state.isDescriptionChecked,
    });
  };

  render() {
    const { classes, section } = this.props;

    return (
      <Fragment>
        <UpperLine />
        <Stepper />
        <form>
          <div style={{ width: "100%" }}>
            <TextField
              label={`${section.charAt(0).toUpperCase() +
                section.slice(1)} name`}
              margin="dense"
              variant="outlined"
              type={"text"}
              className="field"
              fullWidth={true}
              required={true}
              onChange={this.handleInputChange}
              value={this.state.name}
            />
          </div>
          {section === "subgenre" ? (
            <div style={{ width: "100%", marginTop: "1rem" }}>
              <FormControlLabel
                value="end"
                control={
                  <Checkbox
                    checked={this.state.isDescriptionChecked}
                    onClick={this.toggleDescriptionCheckbox}
                    value="checkedB"
                    color="primary"
                    inputProps={{
                      "aria-label": "secondary checkbox",
                    }}
                  />
                }
                labelPlacement="end"
                label="Description is required for this subgenre"
                classes={{ root: classes.checkboxLabel }}
              />
            </div>
          ) : null}

          <PageTurnButtons
            section={section}
            enableNextData={this.state.name}
            isPreviousNew={true}
            name={this.state.name}
            isDescriptionChecked={this.state.isDescriptionChecked}
          />
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    newData: state.newData,
  };
};
export default connect(mapStateToProps)(withStyles(classes)(Inclusion));
