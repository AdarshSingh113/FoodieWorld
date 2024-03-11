import { useState,useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import {useNavigate,Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";


const Header = () =>{

 const[btnName,setBtnName] = useState("Login");

const onlineStatus = useOnlineStatus();

const {loggedInUser} = useContext(UserContext);

const cartItems = useSelector((store)=>store.cart.items);

console.log(cartItems);




    return(
       <div className="flex justify-between bg-red-100 shadow-xl sm:bg-transparent ">
         <div className="logo-container">
         <Link to="/">
             <img className="w-24" src={LOGO_URL}/>
             </Link>
       </div>
          <div className="flex items-center">
             <ul className="flex p-4 m-4"> 
               <li className="px-4">
                  OnlineStatus:{onlineStatus ? "✅" : "🔴" }
               </li>
               <li className="px-4">
            <Link to="/">
               Home
            </Link>
            </li>
            <Link to="/about">
               About
            </Link>
            {/* <li className="px-4">Contact Us</li> */}
            <li className="px-4 font-bold">
              <Link to="/cart">
               Cart-({cartItems.length} items) 
               </Link>
               </li>
            {/* <li className="px-4">
               <Link to="/grocery">
               GroceryMart
            </Link>
            </li> */}
            <button className="login" onClick={()=>{
               btnName ==="Login"?setBtnName("Logout"):setBtnName("Login")
            }}
            >{btnName}</button>
            <li className="px-4 font-semibold">
             {loggedInUser}
            </li>
           </ul>
          </div>
       </div>
    );
 };

 export default Header;