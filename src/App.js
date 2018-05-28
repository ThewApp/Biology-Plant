import React, { Component, Fragment } from "react";
// import logo from './logo.svg';
// import './App.css';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import blue from "@material-ui/core/colors/blue";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./fonts/fonts.css";
import { HashRouter } from "react-router-dom";
import TopBar from "./components/TopBar";
import RootApp from "./pages/RootApp";

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: blue
  },
  typography: {
    fontFamily: '"Roboto", "Noto Serif Thai", "Helvetica", "Arial", sans-serif'
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <HashRouter>
          <Fragment>
            <TopBar />
            <RootApp />
          </Fragment>
        </HashRouter>
      </MuiThemeProvider>

      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
