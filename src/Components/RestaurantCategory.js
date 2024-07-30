import ItemList from "./ItemList";


const RestaurantCategory = ({data,showItems,setShowIndex}) => {
  
    //concept is known as lifting the state up.
    const HandleClick = () => {
        setShowIndex()
    }

    return <div>
            {/* header */}
            <div className="w-6/12 m-auto my-4 shadow-lg bg-gray-50 p-4">
            <div className=" flex justify-between cursor-pointer " onClick={HandleClick}>
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>
               {showItems && <ItemList Items={data.itemCards}/>}
            </div>
            {/* Accordian body */}

         
    </div>
}

export default RestaurantCategory;