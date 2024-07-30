import { useState,useEffect } from "react"
import { ITEMS_URL } from "./constant"

const useRestaurantMenu = (resId) => {
    const [ItemList, setItemList] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(ITEMS_URL + resId);
        const json = await data.json();
        setItemList(json.data);
    }

    return ItemList;
}

export default useRestaurantMenu