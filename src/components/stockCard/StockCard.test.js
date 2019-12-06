import React from "react";
import { shallow } from "enzyme";
import StockCard from "./StockCard";

it("expect to render stockCard", () => {
  expect(shallow(<StockCard />)).toMatchSnapshot();
});
