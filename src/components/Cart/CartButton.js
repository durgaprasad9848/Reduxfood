import classes from './CartButton.module.css';
import { change } from '../Reducer/Cartredux';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const CartButton = (props) => {

  var count = useSelector((state)=>state.cart.cartCount)
  const dispatch = useDispatch();
  const Cartshowhandler = (e) =>{
    e.preventDefault();
    dispatch(change());
  }


  return (
    <button className={classes.button} onClick={Cartshowhandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{count}</span>
    </button>
  );
};

export default CartButton;
