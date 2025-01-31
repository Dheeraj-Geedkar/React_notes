import {LOGO_URL} from "../utils/constants";
import logo_image from "../images/food_plasa_image.png" ;

const Header = () => {
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
               </ul>
            </div>
        </div>
    ) ;
  } ;

  export default Header ;