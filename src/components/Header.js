import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import {useNavigate,Link} from "react-router-dom";

const Header = () =>{

 const[btnName,setBtnName] = useState("Login");
 const navigate = useNavigate();
    return(
       <div className="header">
         <div className="logo-container">
       <img  
       className="logo" 
       src={LOGO_URL}/>
       </div>
          <div className="nav-items">
             <ul> 
               <li>
            <Link to="/">
               Home
            </Link>
            </li>
            <Link to="/">
               About
            </Link>
            <li>Contact Us</li>
            <li>Cart</li>
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