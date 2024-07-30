import { CDN_URL } from "../utils/constant"
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";

const ItemList = ({Items}) => {
     

    const dispatch = useDispatch();
    const HandleAddItem = (item) => {
        //dispatch an action
        dispatch(addToCart(item));
    }




    return (
        <div>
            {Items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-b-2  border-gray-200 text-left flex justify-between">
                    <div className="w-9/12">
                        <div className="py-2"> 
                            <span>{item.card.info.name}</span>
                            <span> - ₹ {item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button className="p-1 rounded-lg bg-black text-white shadow-lg"
                             onClick={() => HandleAddItem(item)}>
                                ADD +
                            </button>
                        </div>
                        <img src={CDN_URL + item.card.info.imageId} />
                    </div>
                </div> 
            ))} 
        </div>
    ) 
}

export default ItemList