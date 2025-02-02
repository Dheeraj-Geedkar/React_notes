import {LOGO_URL} from "../utils/constants";
import logo_image from "../images/food_plasa_image.png" ;
import { useState } from "react";

const Header = () => {
     
    // State variable for login button
    const [ btnNameReact , setbtnNameReact ] = useState("Login") ;

    return (
        <div className="header">
             <div className="logo-container">
              {/* <img className="logo" src={ require("../components/food_plasa_image.png" )} alt="logo"/> */}

               {/* <img className="logo" src = {LOGO_URL} alt="logo"/> */}
                 <img className="logo" src = {logo_image} alt="logo"/>
             </div>
             <div className="nav-items">
               <ul>
                   <li>Home</li>
                   <li>About us</li>
                   <li>Contact us</li>
                   <li>Cart</li>
                    
     {/* Here we have used the ternary operator for the onclick login button so we have included the feature of toggle in which we first check the condition that by default btnNameReact should have value login and if it is satisfy so it will toggle its value and vice versa .               */}
                   <button className="login" onClick={ () => {
                    btnNameReact === "Login"
                    ?  setbtnNameReact("Logout") 
                    : setbtnNameReact("Login");
                   }}> 
                    {btnNameReact}
                   </button>
               </ul>
            </div>
        </div>
    ) ;
  } ;

  export default Header ;