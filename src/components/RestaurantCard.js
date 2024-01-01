import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) =>{
    const {resObj }= props;
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId} = resObj?.info;
    const{deliveryTime}= resObj?.info.sla;
       return (
       <div className="res-card" style={{background:"#f0f0f0"}}>
       <img
        className="res-logo"
         alt="res-logo"
          src={CDN_URL+cloudinaryImageId}/>
          <h3>{name}</h3>
          <h4 className="cuisines">{cuisines.join(",")}</h4>
          <h4>{avgRating}</h4>
          <h4>{deliveryTime} minuts</h4>
          <h4>{costForTwo}</h4>
       </div>
    )
 }
 export default RestaurantCard;