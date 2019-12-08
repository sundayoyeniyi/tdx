import React from "react";
import { shallow } from "enzyme";
import Tdx from "../tdx";

describe("<Tdx /> functional component test", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Tdx />);
  });

  it("expects the Tdx componen tto have an outer div with classname tdx", () => {
    expect(
      wrapper
        .find("div")
        .at(0)
        .hasClass("tdx")
    ).toEqual(true);
  });

  it("expect the Tdx component to have a header with classname tdx-header", () => {
    expect(
      wrapper
        .find("header")
        .at(0)
        .hasClass("tdx-header")
    ).toEqual(true);
  });
});
