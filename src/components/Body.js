import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useEffect, useState,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";



const Body = () =>{
   const [listofRestaurant,setlistofRestaurant] = useState([]);
   const[searchText,setSearchText] = useState("");
   const[filteredResa,setFilteredResa]=useState([]);
   const[isFilterActive,setIsFilterActive]=useState(false);

   const PromotedRestaurant = withPromotedLabel(RestaurantCard);



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

    const {setUserName,loggedInUser} = useContext(UserContext);

    return  listofRestaurant.length === 0 ? <Shimmer /> :(
       <div className="body">
          <div className="filter flex">
          <div className="search p-4 m-4">
            <input type="text" className="border border-solid border-black " 
            value={searchText}
               onChange={(e)=>{
                  setSearchText(e.target.value);
               }}
            />
            <button className="px-3.5 py-1 bg-green-400 m-4 rounded-lg" onClick={()=>{
               const filteredRes = listofRestaurant.filter((res)=>
               res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
               setFilteredResa(filteredRes);
            console.log(searchText)}
            }
            //filter the restaurant and update the UI
            >Search</button>
        </div>
        <div className="search p-4 m-4 my-2 flex items-center">
         <div className="search p-4 my-2 m-4 flex items-center">
            <label>Name : </label>
            <input type="text" className=" p-2 "
            value={loggedInUser}
            onChange={(e)=>{
               setUserName(e.target.value)
            }}
            
            />
         </div>
            <button className="px-4 py-2 bg-gray-100" onClick={()=>{
               if(isFilterActive){
                  setFilteredResa(listofRestaurant)
               }
               else{
           const filteredRest = listofRestaurant.filter(
                  (res)=> res.info.avgRating > 4.0
               );
               setFilteredResa(filteredRest);
            }
            setIsFilterActive(!isFilterActive);
            }}>
            Rating 4.0+
            </button>
            </div>
          </div>
             <div className="flex flex-wrap">
                {
                   filteredResa.map(restaurant => 
                   <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id} className="link-style">
                    {restaurant.info.avgRating >4.3 ? (<PromotedRestaurant  resObj={restaurant}/> ) :
                     (<RestaurantCard   resObj={restaurant}/>)  
                  }   </Link>)
                }
          </div>
       </div>
    )
    }

export default Body;    