import React from "react";
//import momoCoin from "../assets/momoCoin.svg"
import momoCoin from "../../assets/momoCoin.svg";

const coinPackages = [
  { id: 1, amount: 50, price: "$10" },
  { id: 2, amount: 100, price: "$50" },
  { id: 3, amount: 250, price: "$100" },
];

function BuyCoins() {
  const handleBuy = (packageItem) => {
    // Redirect to payment gateway URL
    const paymentURL = `https://example-payment.com/pay?coins=${packageItem.amount}&price=${packageItem.price}`;
    window.open(paymentURL, "_blank"); // opens in a new tab
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Buy Coins</h2>
      <div
        className="flex gap-4 flex-col rounded-full"
        onClick={() => handleBuy(pkg)}
      >
        {coinPackages.map((pkg) => (
          <div
            onClick={() => handleBuy(pkg)}
            key={pkg.id}
            className="bg-[#EEE7EF] w-full border border-[#8E44AD] text-black p-4 rounded-xl min-w-[150px] shadow  hover:bg-[#8E44AD] hover:text-white cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-5 items-center">
                <img src={momoCoin} alt="" className="h-12" />
                <div className="h-full flex flex-col justify-between">
                  <p className="font-semibold text-lg">{pkg.amount} Coins</p>
                  <p className="opacity-70">Discounted price</p>
                </div>
              </div>

              <p className="text-base font-bold">{pkg.price}</p>
            </div>
            {/* <button
              onClick={() => handleBuy(pkg)}
              className="bg-[#8E44AD] text-white px-4 py-2 rounded hover:bg-yellow-600"
            >
              Buy
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuyCoins;
