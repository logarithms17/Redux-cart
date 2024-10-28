import { toggle } from '../../store/uiSlice';
import classes from './CartButton.module.css';

import { useDispatch, useSelector } from 'react-redux';

const CartButton = (props) => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.items)

  const handleToggleModal = () => {
    dispatch(toggle())
  }

  return (
    <button className={classes.button} onClick={handleToggleModal}>
      <span>My Cart</span>
      <span className={classes.badge} >{items.length}</span>
    </button>
  );
};

export default CartButton;
