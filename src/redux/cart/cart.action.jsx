import CartActionTypes from "./cart.types";

const toggleCartDisplay = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export default toggleCartDisplay;
