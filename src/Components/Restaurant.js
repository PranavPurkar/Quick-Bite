import {useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu  from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
// import { ITEMS_URL } from "../utils/constant";


const Restaurant = ()=>{
   
    // const [ItemList,SetItemList] = useState(null);

    const {resid} = useParams();

    const ItemList = useRestaurantMenu(resid);

    const [showIndex, setShowIndex] = useState(null);

    // useEffect(()=>{
    //     FetchMenu();
    // },[]);
    

//    const FetchMenu = async ()=> {
//     const data = await fetch(ITEMS_URL + resid)
//     const json = await data.json();
//     console.log(json);
//     SetItemList(json.data);
//    }

if(ItemList === null){
    return <Shimmer/>
}


const {name,cuisines,avgRating,costForTwoMessage} = ItemList?.cards[2]?.card?.card?.info;

const {itemCards} = ItemList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;



const categories = ItemList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);


return (
    <div className="text-center">
        <h1 className="font-bold my-8 text-2xl">{name}</h1>
        <p className="text-sm font-bold">{cuisines.join(', ')} - {costForTwoMessage}</p>

        {/* categories accordians */}
        {categories.map((category,index) =>
             (<RestaurantCategory  key={category.card.card.title} 
             data = {category.card.card} 
             showItems = {index===showIndex?true:false}
             setShowIndex = {() => setShowIndex(index)} 
             />
        ))}  
    </div>
    );
};

export default Restaurant;