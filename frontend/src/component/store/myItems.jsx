import React from 'react';

function MyItems({ items }) {
  if (items.length === 0) return null;

  return (
    <div>
      <h2 className="text-xl font-bold mt-8">My items</h2>
      <div className="flex gap-4 mt-2 overflow-x-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-purple-500 text-white p-4 rounded-lg shadow min-w-[120px] text-center"
          >
            <div className="text-3xl mb-1">🎁</div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyItems;
