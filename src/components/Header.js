import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import {useNavigate,Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>{

 const[btnName,setBtnName] = useState("Login");

const onlineStatus = useOnlineStatus();
 const navigate = useNavigate();
    return(
       <div className="header">
         <div className="logo-container">
      <Link to="/"> <img  
       className="logo" 
       src={LOGO_URL}/></Link>
       </div>
          <div className="nav-items">
             <ul> 
               <li>
                  OnlineStatus:{onlineStatus ? "✅" : "🔴" }
               </li>
               <li>
            <Link to="/">
               Home
            </Link>
            </li>
            <Link to="/about">
               About
            </Link>
            <li>Contact Us</li>
            <li>Cart</li>
            <li>
               <Link to="/grocery">
               GroceryMart
            </Link>
            </li>
            <button className="login" onClick={()=>{
               btnName ==="Login"?setBtnName("Logout"):setBtnName("Login")
            }}
            >{btnName}</button>
           </ul>
          </div>
       </div>
    );
 };

 export default Header;