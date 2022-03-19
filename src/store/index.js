import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';

const store = set => ({
  cart: [],
  addToCart: product =>
    set(
      ({ cart }) => {
        const index = cart.findIndex(p => p.id === product.id);
        if (index !== -1) {
          cart[index].quantity++;
          return { cart: [...cart] };
        }
        return { cart: [...cart, { ...product, quantity: 1 }] };
      },
      false,
      'cart/addToCart'
    ),
  removeFromCart: productId =>
    set(prevState => ({ cart: [...prevState.cart.filter(p => p.id !== productId)] })),
  updateItemQuantity: (prodId, quantity) =>
    set(({ cart }) => {
      const index = cart.findIndex(p => p.id === prodId);
      if (index !== -1) {
        cart[index].quantity = quantity;
        return { cart: [...cart] };
      }
      return cart;
    }),
});
// Usage with a plain action store, it will log actions as "setState"
export const useStore = create(
  devtools(
    // redux(
    persist(store, {
      name: 'shop-cart',
    }),
    { name: 'cart', serialize: { options: true }, anonymousActionType: 'cart' }
  )
  // )
);
