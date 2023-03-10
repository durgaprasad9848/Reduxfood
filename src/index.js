import ReactDOM from 'react-dom/client';
import cartRedux from './components/Reducer/Cartredux';
import Fetchred from './components/Reducer/Fetchred';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const store = configureStore({
    reducer: {
        cart : cartRedux,
        fetchhand : Fetchred,
    },
},
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<Provider store = {store}>
<App />
</Provider>
);
