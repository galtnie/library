import React from "react";
import { Container } from "@material-ui/core";
import { ButtonList, Inclusion, Information, Completion } from "./components";
import { Route } from "react-router-dom";
import { StyledPaper } from "./styles";

function App() {
  return (
    <Container maxWidth="md">
      <StyledPaper component="div" elevation={2}>
        <Route
          path="/"
          exact
          render={props => <ButtonList {...props} section={"genres"} />}
        />
        <Route
          path="/subgenres"
          render={props => <ButtonList {...props} section={"subgenres"} />}
        />
        <Route
          path="/genre"
          render={props => <Inclusion {...props} section={"genre"} />}
        />
        <Route
          path="/subgenre"
          render={props => <Inclusion {...props} section={"subgenre"} />}
        />
        <Route
          path="/information"
          component={Information}
          section={"information"}
        />
        <Route path="/completion" component={Completion} />
      </StyledPaper>
    </Container>
  );
}

export default App;
