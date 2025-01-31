const RestaurantCard = (props) =>{

    //   console.log(props);  => props{  resData { data  {  name , cuisines } } } 
    
     const{ resData} = props
     
    //  console.log(resData); = > resData { data  {  name , cuisines } }
   
    // Optional chaining or Object destructing ( Optimum approach )
   const { name , cuisines , avgRating , costForTwo , deliveryTime } = resData?.data ;
     
    return (
       <div className="res-card" style = {{ backgroundColor : "rgb(211, 211, 211)" }}> 
                                           {/* iniline css applied   */}


           {/* <img className="res-logo" src={ 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/' +
                                                         resData.data.cloudinaryImageId } alt="res-logo"/> */}

           {/* Here in the image source we first have the common cdn link then cloudinery id but now it is disabled by Swiggy so cannot use it else this format will be used while fetching the image from the api from back end                                               */}
         
          
            {/* <img className="res-logo" src ={ require ( {src = {  resData.data.imgsrc } } ) } alt="res-logo" /> */}

            {/* <img className="res-logo" src={ require("./pavBhaji.jpg"  ) } alt="res-logo"/> */}

           {/* <h3> { resData.data.name }</h3> */}

          {/* or We can use    <h3> { props.resData.data.name }</h3> */}
            <h3> { name }</h3>
           <h4> { cuisines.join(" , ") }</h4>
           {/*     .join(", ") To make Json array format datain the web page in comma separated form    */}
           <h4> { avgRating } stars </h4>
           <h4> ₹ { costForTwo / 100  } FOR TWO </h4>
           {/* Cost is in Paisa so divide by 100 To convert it into rupee */}
           <h4> { deliveryTime } minutes</h4>
      </div>
    ) ;
}; 

export default RestaurantCard ;