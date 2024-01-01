
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () =>{
//Extract resId from the hook
 const{resId} = useParams();

 const resInfo = useRestaurantMenu(resId);
    //getting error because we were trying to access values from resInfo which were null
    if(resInfo===null){
        return <Shimmer/>
    }
const{ name ,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

const{itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

console.log("itemcards",itemCards);

    return(
      <div className="menu">
       <ul>
        <li>{name}</li>
        <li>{cuisines.join(" ")}-{costForTwoMessage}</li>
        <h2>Menu</h2>
        {itemCards.map(item =><li key={item.card.info.id}>{item.card.info.name} - {"Rs"}{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)}
       </ul>
       
      </div>
    );
}
export default RestaurantMenu;