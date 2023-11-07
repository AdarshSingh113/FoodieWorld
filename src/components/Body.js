import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () =>{
   const [listofRestaurant,setlistofRestaurant] = useState([]);
   const[searchText,setSearchText] = useState("");
   const[filteredResa,setFilteredResa]=useState([]);

    useEffect(()=>{
      fetchData();},
      []);

   const fetchData = async () =>{
      const data = await fetch(
        // "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8852716&lng=80.9237942&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);
      //optional chaaining
      setlistofRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredResa(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   };
    //Conditional Rendering
      // if(listofRestaurant.length === 0){
      //    return <Shimmer />;
      // }


    return listofRestaurant.length === 0 ? <Shimmer /> :(
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
                   filteredResa.map(restaurant => <RestaurantCard key={restaurant.info.id}  resObj={restaurant}/>)
                }
          </div>
       </div>
    )
    }

export default Body;    