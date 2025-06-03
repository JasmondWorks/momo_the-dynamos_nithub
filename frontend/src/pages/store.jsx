import React, { useState } from 'react';
//import ProductCard from '../components/ProductCard';
import ProductCard from '../component/store/productCard';
//import MyItems from '../components/MyItems';
import MyItems from '../component/store/myItems';
//import CoinDisplay from '../components/CoinDisplay';
import CoinDisplay from '../component/store/coinDisplay';
import BuyCoins from '../component/store/buyCoin';
import { ArrowLeftIcon } from 'lucide-react';
import {Link} from "react-router-dom"

const products = [
  { id: 1, name: '1 Day Trainer', cost: 50 },
  { id: 2, name: '3 Day Trainer', cost: 120 },
  { id: 3, name: '7 Day Trainer', cost: 250 },
];

function Store() {
  const [coins, setCoins] = useState(200);
  const [myItems, setMyItems] = useState([]);

  const handleBuy = (product) => {
    if (coins >= product.cost) {
      setCoins(coins - product.cost);
      setMyItems((prev) => [...prev, product]);
    } else {
      alert('Not enough coins!');
    }
  };

  return (
    <div className="p-8 space-y-6 min-h-screen flex flex-col justify-center ">
      <h2 className="text-2xl font-bold text-center">STORE</h2>
      <div className='flex justify-between items-center'>

        <Link to="/">
            <ArrowLeftIcon/>
        </Link>
                

      <CoinDisplay coins={coins} />
 

      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onBuy={handleBuy} />
        ))}
      </div>

      <MyItems items={myItems} />

      <BuyCoins/>
    </div>
  );
}

export default Store;
