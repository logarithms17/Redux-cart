import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { addAmount, deductAmount } from '../../store/cartSlice';

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
  const dispatch = useDispatch()

  const handleAddQuantity = (title) => {
    dispatch(addAmount({ name: title }))
  }

  const handleDeductQuantity = (title) => {
    console.log(title)
    dispatch(deductAmount({name: title}))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => handleDeductQuantity(title)}>-</button>
          <button onClick={() => handleAddQuantity(title)}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
