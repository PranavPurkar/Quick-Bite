import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { useState,useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnnameReact, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    //subscribing to the store using selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);


    return (
        <div className="flex bg-pink-100 justify-between" >
            <img className="w-24 rounded-full" src= {LOGO_URL}/>
            <ul className="flex m-6 p-4 ">
                <li className="px-4">
                    Online Status : {onlineStatus ? "🟢" : "🔴"}
                </li>
                <li className="px-4">
                    <Link to="/">Home</Link>
                </li>
                <li className="px-4">
                    <Link to="/about">About us</Link> 
                </li>
                <li className="px-4">
                    <Link to="/contact">contact us</Link> 
                </li>
                <li className="px-4">
                    <Link to="/Grocery">Grocery</Link> 
                </li>
                <li className="px-4">
                    <Link to="/cart">🛒 - ({cartItems.length} Items)</Link>
                </li>
                <button className="loginbtn bg-red-300 px-4 rounded-lg"
                onClick={() => {
                   btnnameReact==="Login"?setBtnName("Logout"):setBtnName("Login");
                }}>
                    {btnnameReact}
                </button>
                <li className="px-4">{loggedInUser}</li>    
            </ul>
        </div>
    );
};

export default Header;