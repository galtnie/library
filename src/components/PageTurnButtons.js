import React from "react";
import { connect } from "react-redux";
import { PageTurnWrapper, PageTurnButton, BackButtonArrow } from "../styles";
import { Redirect } from "react-router-dom";
import { inputNewData } from "../actions";
import data from "../data.json";

class PageTurnButtons extends React.Component {
  state = {
    redirect: null,
  };

  handleNext = () => {
    const {
      enableNextData,
      section,
      inputNewData,
      name,
      isDescriptionChecked,
    } = this.props;

    switch (section) {
      case "genres":
        this.setState({
          redirect: enableNextData === "Add new" ? "genre" : "subgenres",
        });
        break;
      case "subgenres":
        this.setState({
          redirect: enableNextData === "Add new" ? "subgenre" : "information",
        });
        break;

      case "genre":
        inputNewData({ genre: name });
        this.setState({ redirect: "subgenre" });
        break;
      case "subgenre":
        inputNewData({
          subgenre: name,
          isDescriptionRequired: isDescriptionChecked,
        });
        this.setState({ redirect: "information" });
        break;
      case "information":
        this.setState({ redirect: "completion" });
        break;
      default:
        break;
    }
  };

  handleBack = () => {
    const {
      section,
      newData,
    } = this.props;

    switch (section) {
      case "subgenres":
        this.setState({ redirect: "genres" });
        break;
      case "genre":
        this.setState({
          redirect: "genres",
        });
        break;

      case "subgenre":
        {
          let existingGenre = data.genres.find(
            genre => genre.name === newData.genre
          );
          if (existingGenre) {
            this.setState({ redirect: "genres" });
          } else {
            this.setState({ redirect: "genre" });
          }
        }
        break;
      case "information":
        {
          let existingGenre = data.genres.find(
            genre => genre.name === newData.genre
          );
          if (existingGenre) {
            let existingSubgenre = existingGenre.subgenres.find(
              subgenre => subgenre.name === newData.subgenre
            );
            existingSubgenre
              ? this.setState({ redirect: "subgenres" })
              : this.setState({ redirect: "subgenre" });
          } else {
            this.setState({ redirect: "subgenre" });
          }
        }
        break;
      default:
        break;
    }
  };

  render() {
    const { enableNextData, section } = this.props;

    return this.state.redirect ? (
      <Redirect
        to={{
          pathname:
            this.state.redirect === "genres" ? "/" : `/${this.state.redirect}`,
          state: {
            section: this.state.redirect,
          },
        }}
      />
    ) : (
      <PageTurnWrapper>
        <PageTurnButton
          variant="contained"
          color={"default"}
          disabled={section === "genres" ? true : false}
          onClick={() => {
            this.handleBack();
          }}
        >
          <BackButtonArrow />
          Back
        </PageTurnButton>
        {section !== "information" ? (
          <PageTurnButton
            variant="contained"
            color="primary"
            type="submit"
            disabled={enableNextData ? false : true}
            onClick={() => {
              this.handleNext();
            }}
          >
            Next
          </PageTurnButton>
        ) : (
          <PageTurnButton
            variant="contained"
            color="secondary"
            type="submit"
            disabled={false}
          >
            Complete
          </PageTurnButton>
        )}
      </PageTurnWrapper>
    );
  }
}

const mapStatToProps = state => {
  return {
    stepper: state.stepper,
    newData: state.newData,
  };
};

export default connect(
  mapStatToProps,
  { inputNewData }
)(PageTurnButtons);
