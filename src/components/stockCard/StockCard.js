import React from "react";

const StockCard = ({ logo, name, price, marketCap }) => {
  console.log(marketCap);
  return (
    <div>
      <img alt="logo" src={logo} />
      <h1>{name}</h1>
      <h2>{marketCap}</h2>
      <h2>{price}</h2>
    </div>
  );
};

export default StockCard;
