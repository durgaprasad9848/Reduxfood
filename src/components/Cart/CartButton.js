import classes from './CartButton.module.css';
import { change } from '../Reducer/Cartredux';
import { useDispatch } from 'react-redux';

const CartButton = (props) => {

  const dispatch = useDispatch();
  const Cartshowhandler = (e) =>{
    e.preventDefault();
    dispatch(change());
  }


  return (
    <button className={classes.button} onClick={Cartshowhandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
