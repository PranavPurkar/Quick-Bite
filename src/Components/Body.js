import Card,{OpenorNot} from "./Card";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    //creating a local state using usestate utility function
    const [ListRestaurants, setListRestaurants] = useState([]);
    const [filteredList, setFilteredList] = useState([]);

    const [SearchRestaurant,setSearchRestaurant] = useState("");

    const RestaurantOpen = OpenorNot(Card);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING'
        );
        const json = await data.json();
        console.log(json);
        setListRestaurants(json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredList(json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    console.log(ListRestaurants)
    const onlineStatus = useOnlineStatus();

    if(!onlineStatus){
        return <h1>Looks Like you're offline.Please check your internet connection</h1>;
    }
    if(ListRestaurants.length === 0){
        return <Shimmer/>;
    }

    return (
        <div className="body">
            <div className="filter flex">
                <input type="text" className="py-2 my-5 ml-5 border border-solid border-black rounded-lg" value={SearchRestaurant}
                onChange={(e) => setSearchRestaurant(e.target.value)}/>
                <button className="bg-green-100 px-2 m-4 rounded-lg" onClick={() => 
                {
                        const updatedList = ListRestaurants.filter(
                            (res) => res.info.cuisines.join(', ').toLowerCase().includes(SearchRestaurant.toLowerCase())
                                   || res.info.name.toLowerCase().includes(SearchRestaurant.toLowerCase())
                        );
                        
                        setFilteredList(updatedList);
                    }
                }>🔍</button>
                <button 
                className="px-4 bg-gray-100 m-4 rounded-lg hover:bg-gray-200" 
                onClick={() => {
                     const updatedList = ListRestaurants.filter(
                        (res) => res.info.avgRating > 4
                );
                    setListRestaurants(updatedList); 
                }}
                >
                Top Rated Restaurants (4⭐+)
                </button>
            </div>
            <div className="cards flex flex-wrap" >
                {/* <Card resData = {resList[0]}/>
                <Card resData = {resList[1]}/>
                <Card resData = {resList[2]}/>
                <Card resData = {resList[3]}/>
                <Card resData = {resList[4]}/>
                <Card resData = {resList[5]}/>
                <Card resData = {resList[6]}/>
                <Card resData = {resList[7]}/>
                <Card resData = {resList[8]}/>
                <Card resData = {resList[9]}/>  */}
                {filteredList.map((restaurants) => 
                (<Link key={restaurants.info.id} to={"/restaurant/" + restaurants.info.id}>
                    {restaurants.info.availability.opened===true?
                    (<RestaurantOpen resData={restaurants}/>):(<Card  resData={restaurants} />)}</Link>))}
            </div>
        </div>
    );
};

export default Body;