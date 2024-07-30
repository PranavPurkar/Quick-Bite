import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../utils/cartSlice';

const appstore = configureStore({
    reducer: {  
        cart : cartReducer,
    },
});

export default appstore;