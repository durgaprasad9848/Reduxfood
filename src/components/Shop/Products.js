import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { DATA } from '../DATA';

const Products = (props) => {
//  DATA.map((product)=>console.log(product.price));
  Object.keys(DATA).map((product)=>console.log(DATA[product].price));
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          Object.keys(DATA).map((product)=>
           <ProductItem
           id = {product}
           title = {DATA[product].title}
           price = {DATA[product].price}
           description = {DATA[product].description}
           />
          )
        }
    
      </ul>
    </section>
  );
};

export default Products;
