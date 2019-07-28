import React from "react";
import {
  MuiThemeProvider,
  createMuiTheme,
  CssBaseline,
  Container,
} from "@material-ui/core";
import { deepPurple, indigo, grey } from "@material-ui/core/colors";
import { Provider } from "react-redux";
import store from "./store";
import { ButtonList, Inclusion, Information, Completion } from "./components";
import { BrowserRouter, Route } from "react-router-dom";
import { StyledPaper } from "./styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: deepPurple[500],
    },
    background: {
      paper: "#fff",
      default: grey[100],
    },
  },
  "@global": {
    "html, body, #root": {
      width: "100%",
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="md">
          <StyledPaper component="div" elevation={2}>
            <BrowserRouter>
              <Route
                path="/"
                exact
                render={props => <ButtonList {...props} section={"genres"} />}
              />
              <Route
                path="/subgenres"
                render={props => (
                  <ButtonList {...props} section={"subgenres"} />
                )}
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
            </BrowserRouter>
          </StyledPaper>
        </Container>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
