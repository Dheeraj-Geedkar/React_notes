import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () =>{

  // ====================================================================================================================================================
 // for ex Normal javascript variable            
 /*               |
                  |
                 \ /
  let listOfRestaurants = [
    {
      type: 'restaurant',
      data: {
        id: '334475',
        name: 'KFC',
        cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
        cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
        costForTwo: 40000,
        deliveryTime: 36,
        avgRating: '3.8',
      },
    },
    {
      type: 'restaurant',
      data: {
        id: '334476',
        name: 'Dominos',
        cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
        cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
        costForTwo: 40000,
        deliveryTime: 36,
        avgRating: '4.8',
      },
    },
    {
      type: 'restaurant',
      data: {
        id: '334477',
        name: 'McDonals',
        cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
        cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
        costForTwo: 40000,
        deliveryTime: 36,
        avgRating: '4.2',
      },
    },
  ];
  
  return(
    <div className="body" > 
       <div className="filter">
        <button 
            className="filter-btn"
             onClick={ () => { 
              // filtre logic here

              listOfRestaurants = listOfRestaurants.filter(
                (res) => res.data.avgRating > 4
              ) ;
              console.log(listOfRestaurants);
              
 // So out of three restaurant cards , after filtering we get two cards on the console , but the two cards are not visible on the web page as ui   

 // But we need a feature that the filtered result should be visible on the web page as ui also           
        } }>Top Rated Restaurants</button>
       </div>
       <div className="res-container">
  
  
          { listOfRestaurants.map( (restaurant) => (
            <RestaurantCard key = {restaurant.data.id} resData = { restaurant } />
            ) ) } ;
       
         </div>
    </div>
    ) ;
  } ;

  */

    // ====================================================================================================================================================

  // for ex Local state variable            
  //            |                      function
  //            |                       |
  //           \ /                     \/

  /*
  const [listOfRestaurants , setListOfRestaurants] = useState([
    {
    data: {
      id: '334475',
      name: 'KFC',
      cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
      cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
      costForTwo: 40000,
      deliveryTime: 36,
      avgRating: '3.8',
    },
  },
  {
    data: {
      id: '334476',
      name: 'Dominos',
      cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
      cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
      costForTwo: 40000,
      deliveryTime: 36,
      avgRating: '4.8',
    },
  },
  {
    data: {
      id: '334477',
      name: 'McDonals',
      cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
      cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
      costForTwo: 40000,
      deliveryTime: 36,
      avgRating: '4.2',
    },
  },
]) ;

//Initially the local state variable will get initialized by the default values which we set inside the use state([]) . So to modify the local state variable we will not use simple method like equal to and assign the value , But we will use a setVariable method ,to update the local state variable value
  
  return(
    <div className="body" > 
       <div className="filter">
        <button 
            className="filter-btn"
             onClick={ () => { 
              // filtre logic here
              
    // So here the filtered list will get stored On clicking the button         
              const filteredList = listOfRestaurants.filter(
                (res) => res.data.avgRating > 4
              ) ;

             setListOfRestaurants(filteredList) ; 
              
 // setListOfRestaurants(filteredList) => 
 // 
 // Here we are sending the filtered list to the local variable and updating its value On click of the button By the help of setmethod .

 // So on clicking the button in the web page we get to see the filtered result on the web page ui . Hence our goal for the functioning of the button is completed of top rated restaurants

        
        } }>Top Rated Restaurants</button>
       </div>
       <div className="res-container">
  
          { listOfRestaurants.map( (restaurant) => (
            <RestaurantCard key = {restaurant.data.id} resData = { restaurant } />
            ) ) } ;
       
         </div>
    </div>
    ) ;
  } ;

// From the normal javascript variable code if we Use the state variable then also we get all the elements present in the listOfRestaurants Onto Web page but we have to filter the result 

// So we needed to modify the state variable , By the use of second input parameter inside the state variable declaration , The function is used to update the list


*/

// ====================================================================================================================================================

 // for ex Local state variable            
  //            |                      function
  //            |                       |
  //           \ /                     \/
  const [listOfRestaurants , setListOfRestaurants] = useState(resList) ;

  // Therefore we have passed the resList data by default so it will get initially stored inside the listOfRestaurants .

//Initially the local state variable will get initialized by the default values which we set inside the use state([]) . So to modify the local state variable we will not use simple method like equal to and assign the value , But we will use a setVariable method ,to update the local state variable value
  
  return(
    <div className="body" > 
       <div className="filter">
        <button 
            className="filter-btn"
             onClick={ () => { 
              // filtre logic here
              
    // So here the filtered list will get stored On clicking the button         
              const filteredList = listOfRestaurants.filter(
                (res) => res.data.avgRating > 4
              ) ;

             setListOfRestaurants(filteredList) ; 
              
 // setListOfRestaurants(filteredList) => 
 // 
 // Here we are sending the filtered list to the local variable and updating its value On click of the button By the help of setmethod .

 // So on clicking the button in the web page we get to see the filtered result on the web page ui . Hence our goal for the functioning of the button is completed of top rated restaurants

        
        } }>Top Rated Restaurants</button>
       </div>
       <div className="res-container">
  
          { listOfRestaurants.map( (restaurant) => (
            <RestaurantCard key = {restaurant.data.id} resData = { restaurant } />
            ) ) } ;
       
         </div>
    </div>
    ) ;
  } ;


  export default Body ;