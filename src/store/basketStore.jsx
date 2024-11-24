import { create } from "zustand";

export const useProductBasket = create((set) => ({
  productBasket: [],
  displayBasket: false,
  addToBasket: (product) =>
    set((state) => ({ productBasket: [...state.productBasket, product] })),
  removeFromBasket: (productID) =>
    set((state) => ({
      productBasket: state.productBasket.filter(
        (product) => product.id !== productID
      ),
    })),
  clearBasket: () => set({ productBasket: [] }),
  toggleProductBasket: () =>
    set((state) => ({
      displayBasket: !state.displayBasket,
    })),
}));
