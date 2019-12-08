import React from "react";
import ReactDOM from "react-dom";
import Tdx from "../tdx";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Tdx />, div);
  ReactDOM.unmountComponentAtNode(div);
});
