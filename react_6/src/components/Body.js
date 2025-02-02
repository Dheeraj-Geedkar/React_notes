import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";

// Whenever state variables update , react triggers a  reconciliation cycle ( rerenders the component )

const Body = () =>{

  const [listOfRestaurants , setListOfRestaurants] = useState([]) ;
// Let initially the list of restaurants or the state variable should have no data , and the new data will be fetched from the swiggy live api

 const[ searchText , setSearchText ] = useState("") ;
// searchText is the state variable which is bind to the search button to track the value , user has typed in the search input box . Let it initially be empty string
 const[filteredRestaurant , setfilteredRestaurant] = useState([]) ;

  /*

   useEffect( () => {
           console.log( " useEffect called ");
 
   } , [] ) ;

  console.log( " body called ");

   Here o/p => 

  body called 
    useEffect called 
  
*/

useEffect( () => {
  
  fetchData() ;  

} , [] ) ;

// Write a function to fetch the data 
const fetchData = async () => {

       const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING") ;

       const json = await data.json() ; 
       // Converts data to Json format

       console.log(json); 

   setListOfRestaurants( json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants ) ;
   setfilteredRestaurant( json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants ) ;
 //  setListOfRestaurants( json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants ) ;
    // extract the list of restaurants from the swiggy live api
// For Good readability of the setlistofrestaurants we should apply optional chaining

 // Initially we will also set the filtered restaurant data same as the listofrestaurants as we do not want to keep the filtered restaurant data empty as well as for good user experience we put the initial data of listofrestaurant ,  Inside filteredrestaurants
} ;

/*

 Create a shimmer UI
 Conditional rendering
if ( listOfRestaurants.length === 0 ){
  return <Shimmer /> ;
}

*/

// ============================================================================

        //     use of ternary operator for shimmer UI
return listOfRestaurants.length === 0 ?  (
       <Shimmer/>    // length == 0 execute 
      ) : (
                             // length != 0 execute 
    <div className="body" >       
       <div className="filter">

        {/* Create a search box */}
        <div className="search">
          <input
           type="text"
           className="search-box" 
           value = {searchText} 
           onChange = { (e) => {
            setSearchText(e.target.value) ;
    // At first if we type anything on the search box so it do not take in the value inside the input box because the value of the input box is tied to the search text which is the state variable and we cannot directly update the value of a state variable therefore we use a handler known as onChange and inside that while changing the data , the new data will be updated using the setsearchtext or setstate variable method hence we can update the value of the input box and get the data        

           }}
           />
          <button onClick={ () => {
            console.log(searchText);

  //  So the filter method will iterate all the Restaurant data and we will filtre out the content written inside the search box with the includes function         
            const filteredRestaurant = listOfRestaurants.filter(
               (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
               ) ;

               setfilteredRestaurant(filteredRestaurant) ;
            
          }}>Search</button>
        </div>

        <button 
            className="filter-btn"
             onClick={ () => { 
              // filtre logic here
              
    // So here the filtered list will get stored On clicking the button         
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.1
              ) ;

             setListOfRestaurants(filteredList ) ; 

        } }
        
        >
          Top Rated Restaurants
          
          </button>
       </div>
       <div className="res-container">
  
          { filteredRestaurant.map( (restaurant) => (
            <RestaurantCard key = {restaurant.info.id } resData = { restaurant } />
            ) ) } 
  
         </div>
    </div>
    ) ;
} ;


/*

return  (
    <div className="body" > 
       <div className="filter">
        <button 
            className="filter-btn"
             onClick={ () => { 
              // filtre logic here
              
    // So here the filtered list will get stored On clicking the button         
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              ) ;

             setListOfRestaurants(filteredList) ; 

        
        } }>Top Rated Restaurants</button>
       </div>
       <div className="res-container">
  
          { listOfRestaurants.map( (restaurant) => (
            <RestaurantCard key = {restaurant.info.id } resData = { restaurant } />
            ) ) } ;
       
         </div>
    </div>
    ) ;
  } ;

*/

  export default Body ;