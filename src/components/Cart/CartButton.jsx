import { useDispatch, useSelector } from "react-redux";
import { toggleCartActions } from "../../store/toggle-cart";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(toggleCartActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{products}</span>
    </button>
  );
};

export default CartButton;
