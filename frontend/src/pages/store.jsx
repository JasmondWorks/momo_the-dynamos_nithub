//import ProductCard from '../components/ProductCard';
import ProductCard from "../component/store/productCard";
//import MyItems from '../components/MyItems';
import MyItems from "../component/store/myItems";
//import CoinDisplay from '../components/CoinDisplay';
import CoinDisplay from "../component/store/coinDisplay";
import BuyCoins from "../component/store/buyCoin";
import { ArrowLeftIcon, X } from "lucide-react";
import { Link } from "react-router-dom";
import BorderLayout from "../component/borderLayout";
import goBackIcon from "../assets/goBackIcon.svg";
import storeIcon from "../assets/storeIcon.svg";
import { useState } from "react";

const products = [
  { id: 1, name: "1 Day Trainer", cost: 50 },
  { id: 2, name: "3 Day Trainer", cost: 120 },
  { id: 3, name: "7 Day Trainer", cost: 250 },
];

function Store() {
  const [coins, setCoins] = useState(200);
  const [myItems, setMyItems] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  const handleBuy = (product) => {
    if (coins >= product.cost) {
      setCoins(coins - product.cost);
      setMyItems((prev) => [...prev, product]);
    } else {
      alert("Not enough coins!");
    }
  };

  return (
    <BorderLayout>
      <div className="p-8 space-y-6 min-h-screen flex flex-col justify-center">
        <header className="flex justify-between items-center">
          <Link to="/">
            <img src={goBackIcon} alt="back icon" className="h-4" />
          </Link>
          <h2 className="text-base font-bold text-center">STORE</h2>
          <Link to="#" className="bg-[var(--color-primary)] p-2 rounded-full">
            <img src={storeIcon} alt="store icon" className="" />
          </Link>
        </header>
        <div className="max-w-4xl mx-auto w-full space-y-16">
          {isDialogOpen && (
            <div className="p-5 bg-[var(--color-gradient)] rounded-lg relative space-y-4">
              <button
                className="rounded-full bg-white p-2 absolute top-2 right-2 cursor-pointer"
                onClick={() => setIsDialogOpen(false)}
              >
                <X color="#333" strokeWidth={3} size={18} />
              </button>
              <h3 className="font-bold text-lg">SUPER</h3>
              <p>Get faster response for 2-6 people</p>
              <button className="text-white rounded-lg bg-[var(--color-tertiary)] p-3 w-full cursor-pointer font-medium text-center">
                Try free
              </button>
            </div>
          )}
          <div className="flex justify-between items-center mb-3">
            <CoinDisplay coins={coins} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* <div className="flex gap-4 overflow-auto no-scrollbar"> */}
            {products.map((product) => (
              <div className="w-full min-w-[200px]">
                <ProductCard
                  key={product.id}
                  product={product}
                  onBuy={handleBuy}
                />
              </div>
            ))}
          </div>
          <MyItems items={myItems} />
          <BuyCoins />
        </div>
      </div>
    </BorderLayout>
  );
}

export default Store;
