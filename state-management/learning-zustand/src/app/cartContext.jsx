import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useCartStore = create(
  devtools(
    persist(
      (set) => ({
        cartItems: [],
        addToCart: (cartItem) => {
          set((state) => ({
            cartItems: [...state.cartItems, cartItem],
          }));
        },
        removeFromCart: (itemID) => {
          set((state) => ({
            cartItems: state.cartItems.filter(
              (cartItem) => cartItem.id !== itemID
            ),
          }));
        },
      }),
      {
        name: "cartItems",
      }
    )
  )
);

export default useCartStore;
