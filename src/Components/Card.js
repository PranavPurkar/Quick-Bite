import { CDN_URL } from "../utils/constant";
import Restaurant from "./Restaurant";

const Card = (props) => {
    const {resData} = props;

    return (
        <div className="card ml-11 mt-5 p-5 w-[250px] bg-gray-100 hover:bg-gray-200 rounded-xl">
            {resData.info.availability.opened===true?
            <label className="absolute bg-green-300 text-black p-1 rounded-lg">OPEN </label>: 
            <label className="absolute bg-red-300 text-black p-1 rounded-lg">CLOSED</label>}
            <img className="image rounded-lg" src={CDN_URL + resData.info.cloudinaryImageId}/>
            <h3 className="font-bold text-lg p-4 ">{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(', ')}</h4>
            <h4>{resData.info.avgRating} stars</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime} minutes</h4>
        </div>
    );
};

//this function is not used in this project, it is for learning purpose, it is a higher order function and used to show the promoted restaurants.
export const OpenorNot = (Card) => {
    return (props) => {
        return (
            <label className="absolute bg-green-300 text-black p-1 rounded-lg">OPEN </label>,
            <Card {...props} />
        );
    };
};

export default Card;
