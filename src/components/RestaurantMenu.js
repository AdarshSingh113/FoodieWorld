
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import React,{useState } from "react";
const RestaurantMenu = () =>{
//Extract resId from the hook
 const{resId} = useParams();

 const[showIndex,setShowIndex] = useState(1);

 const resInfo = useRestaurantMenu(resId);
    //getting error because we were trying to access values from resInfo which were null
    if(resInfo===null){
        return <Shimmer/>
    }
const{ name ,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

const{itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

// console.log("itemcards",resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR);

const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
c.card?.card?.["@type"] === 
"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);
//console.log(categories);
    return(
      <div className="text-center">
       <ul>
        <li className="font-extrabold my-4 p-2 ">{name}</li>
        <li className="font-semibold">{cuisines.join(" ")}-{costForTwoMessage}</li>
       </ul>
       {/* Accordance */}
       {categories.map((category,index)=> (
        // Controllled component *
         <RestaurantCategory key={category?.card?.card.title} data={category?.card?.card}
         showItems={index===showIndex ?  true : false}
         setShowIndex = {()=>setShowIndex(index)}
         />
       ))}

       
      </div>
    );
}
export default RestaurantMenu;