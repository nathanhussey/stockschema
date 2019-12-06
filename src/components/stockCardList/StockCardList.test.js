import React from "react";
import { shallow } from "enzyme";
import StockCardList from "./StockCardList";

it("expect to render stockCardList", () => {
  const mockStockList = [];
  expect(
    shallow(<StockCardList stockList={mockStockList} />)
  ).toMatchSnapshot();
});
