import useCartStore from "../app/cartContext";

const Item = ({ name, price }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <div className="border-2 border-neutral-500 p-4 rounded-md">
      <h3 className="text-neutral-600 text-xl mb-2">{name}</h3>
      <p className="text-teal-500 mb-2">Price: ${price}</p>
      <button
        onClick={() =>
          addToCart({
            id: Math.ceil(Math.random() * 1000000),
            name: name,
            price: price,
          })
        }
        className="px-4 py-2 bg-purple-800 text-white text-sm">
        Add to cart
      </button>
    </div>
  );
};

export default Item;
