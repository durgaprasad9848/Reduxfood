import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { add,remove } from '../Reducer/Cartredux';
import { useDispatch } from 'react-redux';
const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description,id } = props;


  const handleAddToCart = (product) => {
  
    dispatch(add(product));
  };

 console.log("pid",id);
  return (
    <li className={classes.item} id={id}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={()=>{handleAddToCart({title:props.title,price:props.price,description:props.description,id:id})}}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
