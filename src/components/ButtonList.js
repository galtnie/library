import React, { Fragment } from "react";
import { connect } from "react-redux";
import data from "../data.json";
import { ButtonListWrapper, StyledGenreButton } from "../styles";
import PageTurnButtons from "./PageTurnButtons";
import { inputNewData } from "../actions";
import UpperLine from "./UpperLine";
import Stepper from "./Stepper";

class ButtonList extends React.Component {
  state = { data: null, clickedButton: null, section: null };

  componentDidMount() {
    this.setState({ data: data });
    let section;
    if (this.props.section) {
      section = this.props.section;
    } else if (this.props.location.state.section) {
      section = this.props.location.state.section;
    }
    this.setState({ section }, () => {
      this.determineClickedButton();
    });
  }

  determineClickedButton = () => {
    const { newData } = this.props;
    this.state.section === "genres"
      ? this.setState({ clickedButton: newData.genre })
      : this.setState({ clickedButton: newData.subgenre });
  };

  handleButtonClick = name => {
    const { inputNewData, newData } = this.props;
    this.setState({ clickedButton: name });

    if (name !== "Add new") {
      if (this.state.section === "genres") {
        inputNewData({
          genre: name,
          subgenre: newData.genre === name ? newData.subgenre : null,
        });
      } else if (this.state.section === "subgenres") {
        inputNewData({
          subgenre: name,
        });
      }
    } else {
      if (this.state.section === "genres") {
        inputNewData({
          genre: null,
          subgenre: null,
        });
      } else if (this.state.section === "subgenres") {
        inputNewData({
          subgenre: null,
        });
      }
    }
  };

  renderButton = name => {
    return (
      <StyledGenreButton
        key={name}
        variant={this.state.clickedButton === name ? "contained" : "outlined"}
        color="primary"
        size="large"
        onClick={() => this.handleButtonClick(name)}
      >
        {name}
      </StyledGenreButton>
    );
  };

  renderButtonList = () => {
    if (this.state.section === "genres" && this.state.data) {
      return this.state.data.genres.map(genre => {
        return this.renderButton(genre.name);
      });
    } else if (this.state.section === "subgenres" && this.state.data) {
      let genre = this.state.data.genres.find(
        genre => genre.name === this.props.newData.genre
      );
      return genre.subgenres.map(subgenre => {
        return this.renderButton(subgenre.name);
      });
    }
  };

  render() {
    return (
      <Fragment>
        <UpperLine />
        <Stepper />
        <ButtonListWrapper>
          {this.renderButtonList()}
          {this.renderButton("Add new")}
        </ButtonListWrapper>
        <PageTurnButtons
          section={this.state.section}
          enableNextData={this.state.clickedButton}
          // clickedButton={this.state.clickedButton}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    newData: state.newData,
  };
};
export default connect(
  mapStateToProps,
  { inputNewData }
)(ButtonList);
