import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { useSelector,useDispatch } from "react-redux";
import {useEffect} from 'react';
import axios from 'axios';
import { changestatus } from './components/Reducer/Fetchred';

function App() {
 
 const show = useSelector((state) => state.cart.showCart);
 const cart = useSelector((state)=>state.cart.items);
 const fetchstatus = useSelector((state)=>state.fetchhand.status);
 
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(changestatus(['sending','sending cart data']));
    
    axios.put("https://test-api-c7d27-default-rtdb.firebaseio.com/cartdata.json", JSON.stringify(cart))
      .then((response) => {
        dispatch(changestatus(['success','send cart data successfully']));
        console.log("Server response:", response.data);
      })
      .catch((error) => {
        dispatch(changestatus(['error','data not send']));
        console.error("Error sending message:", error);
      });


  },[cart]);


  return (
    <Layout>
      <Notification status={fetchstatus[0]}  title={fetchstatus[0]} message = {fetchstatus[1]}/>
      {show && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
