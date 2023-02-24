import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { useSelector,useDispatch } from "react-redux";
import {useEffect} from 'react';
import { Fragment } from 'react';
import axios from 'axios';
import { changestatus } from './components/Reducer/Fetchred';
import { refresh } from './components/Reducer/Cartredux';
let initial = true;
function App() {
 
 const show = useSelector((state) => state.cart.showCart);
 const cart = useSelector((state)=>state.cart.items);
 const fetchstatus = useSelector((state)=>state.fetchhand.status);
 const isVisible = useSelector((state)=>state.fetchhand.isVisible);
  const dispatch = useDispatch();
  useEffect(()=>{
    if(initial)
    {
      initial = false;
      return;
    }
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

  useEffect(()=>{
    axios.get("https://test-api-c7d27-default-rtdb.firebaseio.com/cartdata.json")
    .then((response)=>{
    //  console.log(response.data)
    if(response.data!==null){
    dispatch(refresh(response.data))
    }
  })
  },[]);

 

  return (
    <Fragment> 
     {isVisible &&  <Notification status={fetchstatus[0]}  title={fetchstatus[0]} message = {fetchstatus[1]}/>}
    <Layout>
      {show && <Cart />}
      <Products />
    </Layout>
    </Fragment> 
  );
}

export default App;
