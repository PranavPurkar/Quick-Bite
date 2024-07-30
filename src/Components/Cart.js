import ItemList from "./ItemList";
import { useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return(
        <div className="text-center m-4 p-4 ">
            <h1 className="text-2xl font-bold"> Cart 🛒</h1>
            <div className="w-6/12 m-auto">
                <button className="p-2 m-2 rounded-lg bg-black text-white"
                onClick={handleClearCart}>
                    Clear Cart 🗑️
                </button>
                {cartItems.length === 0 && <h1>Cart is Empty ! Add items</h1>}
                <ItemList Items={cartItems}/>
            </div>
        </div> 
    );
};

export default Cart