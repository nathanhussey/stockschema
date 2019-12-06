import { shallow } from "enzyme";
import React from "react";
import FinancialsTreemapCard from "./FinancialsTreemapCard";

it("expect to render finTreemapCard", () => {
  expect(shallow(<FinancialsTreemapCard />)).toMatchSnapshot();
});
