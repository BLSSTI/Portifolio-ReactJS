import React from "react";
import "./App.css";
import NavBar from "./components/navbar/index";
import GlobalStyle from "./components/globalstyle";
const App: React.FC = () => (
  <>
    <GlobalStyle />

    <NavBar></NavBar>
  </>
);

export default App;
