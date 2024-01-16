import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) =>{
    const {resObj }= props;
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId} = resObj?.info;
    const{deliveryTime}= resObj?.info.sla;
       return (
       <div className="m-4 p-4 w-[250px] bg-gray-50 transition-transform transform-gpu hover:scale-95" >
       <img
        className="rounded-lg w-full h-32 object-cover  "
         alt="res-logo"
          src={CDN_URL+cloudinaryImageId}/>
          <h3 className="font-bold py-4 text-lg overflow-hidden max-w-full truncate">{name}</h3>
          <h4 className="cuisines overflow-hidden max-w-full truncate">{cuisines.join(", ")}</h4>
          <h4>{avgRating}</h4>
          <h4>{deliveryTime} minuts</h4>
          <h4>{costForTwo}</h4>
       </div>
    )
 }

//Higher order function for promoted restaurants 
//takes input a compnent and output a copmonent they are pure fucntion
//... spread operator

 export const withPromotedLabel=(RestaurantCard)=>{
   return(props) =>{
      return(
         <div>
            <label className="absolute bg-black  bg-opacity-75 text-white m-2 p-2 shadow-md   z-10 rounded-lg">Promoted</label>
         <RestaurantCard {...props}/>
         </div>
      )
   }
}

 export default RestaurantCard;