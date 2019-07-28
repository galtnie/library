import React from "react";
import { connect } from "react-redux";
import {
  Stepper,
  Step,
  StepLabel,
  withStyles,
  Typography,
  StepConnector,
} from "@material-ui/core";

const classes = {
  stepper: {
    // width: "30rem",
    // padding: 0,
    // boxSizing: "content-box",
  },
  icon: {
    transform: "scale(2)",
    // color: "transparent !important",
    // backgroundColor: "transparent !important",
    //marginRight: "12rem !important",
  },
  connectorLine: {
    marginLeft: "1rem",
    marginRight: "1rem",
    //width: "10rem !important",
  },
};
class UpperLine extends React.Component {
  state = {
    activeStep: 0,
  };
  render() {
    const { stepper, classes, data } = this.props;
    console.log(data);
    const connector = (
      <StepConnector
        classes={{
          active: classes.connectorActive,
          completed: classes.connectorCompleted,
          disabled: classes.connectorDisabled,
          line: classes.connectorLine,
        }}
      />
    );

    return (
      <div style={{}}>
        <Stepper
          alternativeLabel
          connector={connector}
          classes={{
            root: classes.stepper,
          }}
        >
          {stepper.map(step => {
            return (
              <Step
                key={step.name}
                active={step.status === "active"}
                disabled={step.status === "disabled"}
                completed={step.status === "completed"}
              >
                <StepLabel
                  StepIconProps={{
                    classes: { root: classes.icon },
                  }}
                  icon={step.label}
                >
                  <Typography variant="body2">{step.name}</Typography>
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stepper: state.stepper,
    data: state.newData,
  };
};
export default connect(mapStateToProps)(withStyles(classes)(UpperLine));
