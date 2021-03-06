import React from "react";
import { setAxiosDefaults } from "./api";
import Input from "./component/input/index";
import List from "./component/list/index";
import WriteButton from "./component/button/index";
import "./App.css";
// import Cors from "cors";

// const cors = require("cors");

const App = () => {
  setAxiosDefaults();
  return (
    <div>
      <Input></Input>
      <List></List>
      <WriteButton></WriteButton>
    </div>
  );
};

export default App;
