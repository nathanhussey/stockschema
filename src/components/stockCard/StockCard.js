import React from "react";

const StockCard = ({ logo, name, marketCap, price, volume, priceChange }) => {
  return (
    <div>
      <img alt="logo" src={logo} />
      <h1>{name}</h1>
      <h2>{marketCap}</h2>
      <h2>{price}</h2>
      <h2>{volume}</h2>
      <h2>{priceChange}</h2>
    </div>
  );
};

export default StockCard;
