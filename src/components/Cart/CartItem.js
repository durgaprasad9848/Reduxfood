import classes from './CartItem.module.css';
import { add,remove } from '../Reducer/Cartredux';
import { useDispatch } from 'react-redux';

const CartItem = (props) => {
  const { title, quantity, total, price,id } = props.item;
 const dispatch = useDispatch();

  const removeitemHandler = (id) =>{
    dispatch(remove(id))
 
  }
  const additemHandler = (addData) =>{
  dispatch(add(addData))
 
  }

  return (
    <li className={classes.item} id={id}>
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
          <button onClick={()=>removeitemHandler(id)}>-</button>
          <button onClick={()=>additemHandler({ title, quantity, total, price,id })}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
