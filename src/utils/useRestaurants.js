import { useEffect, useState } from "react"
import { RESTAURANTS } from "./constant"

const useRestaurants=()=>{

    const[listOfRestaurants,setListOfRestaurants] = useState([]);

    useEffect(()=>{
     fetchData();
    },[])

    const fetchData = async() =>{
        const data = await fetch(RESTAURANTS);
        const json = await data.json();
        console.log("kjkjk",json);
         // Optional chaining and nullish coalescing
         const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];
        setListOfRestaurants(restaurants);
    }

    return listOfRestaurants;

    
}
export default useRestaurants;