import React from "react" ;
import ReactDOM from "react-dom/client" ;
import Header from "./components/Header";
import Body from "./components/Body";

          // Use of props = > Pass data dynamically to a component
               
           //             Method - 1
        

        // Method - 2 props  ( Object destructure )

// const RestaurantCard = ( { imageSrc , resName , cuisine , stars , time } ) =>{
//     return (
//        <div className="res-card" style = {{ backgroundColor : "rgb(211, 211, 211)" }}> 
//                                            {/* iniline css applied   */}
//             {/* <img className="res-logo" src={ require({imageSrc})} alt="res-logo"/> */}
//            <h3> { resName }</h3>
//            <h4> { cuisine }</h4>
//            <h4> { stars } </h4>
//            <h4> { time } </h4>
//       </div>
//     ) ;
// };


//          resList is the array which contains 15 different dish card objects from api data from backend

const AppLayout = () =>{
  return (
    <div className="app">
       <Header />
       <Body />
    </div>
  ) ;
} ;


const root = ReactDOM.createRoot(document.getElementById('root') ) ;

root.render(<AppLayout/> ) ;
