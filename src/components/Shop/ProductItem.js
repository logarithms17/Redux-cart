import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/cartSlice';
import { toggle } from '../../store/uiSlice';
import { useSelector } from 'react-redux';

const ProductItem = (props) => {
  const { title, price, description } = props;
  const dispatch = useDispatch();

  const showModal = useSelector(state => state.ui.cartIsVisible)

  const handleAddItem = () => {
    if (!showModal) {
      dispatch(toggle())
    }
    
    dispatch(
      addItem({
        name: title,
        amount: 1,
        price
      })
    )
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddItem}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
