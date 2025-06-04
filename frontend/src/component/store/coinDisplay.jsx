import React from "react";
import momoCoin from "../../assets/momoCoin.svg";

function CoinDisplay({ coins }) {
  return (
    <div className="text-right text-lg font-semibold text-black">
      <span className="flex justify-end items-center gap-3">
        <img src={momoCoin} alt="" className="size-6" /> Coins: {coins}
      </span>
    </div>
  );
}

export default CoinDisplay;
