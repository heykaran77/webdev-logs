import React from "react";
import Item from "./components/item";
import useCartStore from "./app/cartContext";

const App = () => {
  const cartItems = useCartStore((state) => state.cartItems);

  const items = [
    {
      name: "Macbook air m4",
      price: 1096,
    },
    {
      name: "Macbook Pro M5",
      price: 2099,
    },
    {
      name: "iPad Pro",
      price: 799,
    },
    {
      name: "Apple Watch",
      price: 399,
    },
    {
      name: "AirPods Pro",
      price: 249,
    },
    {
      name: "Magic Keyboard",
      price: 199,
    },
  ];
  return (
    <div className="bg-neutral-900 min-h-screen px-20 py-10">
      <div className="grid grid-cols-3 gap-4">
        {items.map((item, idx) => {
          return <Item key={idx} name={item.name} price={item.price} />;
        })}
      </div>

      <div>
        <h2 className="text-2xl mt-4 text-white">Cart Items</h2>
        <div className="grid grid-cols-3 gap-4 mt-2">
          {cartItems.map((item) => {
            return <Item key={item.id} name={item.name} price={item.price} />;
          })}
        </div>

        <h2 className="text-white text-3xl mt-4 flex justify-end">
          Total bill:{" "}
          <span className="font-bold text-green-500">
            ${cartItems.reduce((total, item) => total + item.price, 0)}
          </span>
        </h2>
      </div>
    </div>
  );
};

export default App;
