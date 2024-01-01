import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () =>{
   const [listofRestaurant,setlistofRestaurant] = useState([]);
   const[searchText,setSearchText] = useState("");
   const[filteredResa,setFilteredResa]=useState([]);



    useEffect(()=>{
   const fetchData = async () =>{
      const data = await fetch(
         "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D23.022505%26lng%3D72.5713621%26page_type%3DDESKTOP_WEB_LISTING"
    );
        //"https://kind-puce-bull-tie.cyclic.app/api/proxy/swiggy/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
      const json = await data.json();
      console.log("kjkjk",json);
         // Optional chaining and nullish coalescing
         const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];
         setlistofRestaurant(restaurants);
         setFilteredResa(restaurants);
   }
   fetchData();},
   []);
   const onlineStatus = useOnlineStatus();
   if (onlineStatus === false) {
      return <h1>Sorry but babe u are offline</h1>;
    }

    return  listofRestaurant.length === 0 ? <Shimmer /> :(
       <div className="body">
          <div className="filter">
          <div className="search">
            <input type="text" className="search-Box" 
            value={searchText}
               onChange={(e)=>{
                  setSearchText(e.target.value);
               }}
            />
            <button onClick={()=>{
               const filteredRest = listofRestaurant.filter((res)=>
               res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
               setFilteredResa(filteredRest);
            console.log(searchText)}
            }
            //filter the restaurant and update the UI
            >Search</button>
        </div>
            <button className="filter-btn" onClick={()=>{
           const filteredRes = listofRestaurant.filter(
                  (res)=> res.info.avgRating > 4
               );
               setlistofRestaurant(filteredRes);
            }}>
            Top Rated Restaurant
            </button>
          </div>
             <div className="res-container">
                {
                   filteredResa.map(restaurant => 
                   <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id} className="link-style"><RestaurantCard   resObj={restaurant}/></Link>)
                }
          </div>
       </div>
    )
    }

export default Body;    