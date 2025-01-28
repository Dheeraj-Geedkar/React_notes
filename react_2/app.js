import React from "react" ;

//"react" Refers to react from node modules which we have downloaded from npm package

 import ReactDOM from "react-dom/client" ;

// single react element

// heading  => is a React element or JS object which is of type H1 is created 

/*


const heading = React.createElement("h1" ,    // 1st parameter is the JS object  ( ex : h1 ) 
     {
       id : "heading1" ,    // 2nd parameter is attributes of 1st parameter which is object
       xyz : "abc"
      } ,
 " Hello world! from  React!  ") ;  //  3rd parameter is the child which will go inside 1st parameter which is object
 
      // {}   => This object is a place where you will give attributes to your tag
      // props = {} (2nd parameter) + (3rd parameter) 

      console.log(heading);  // returns a object 
      
         
       const root = ReactDOM.createRoot(document.getElementById("root") );

       root.render(heading) ; 
      // Render method takes the object (heading) and convert it into heading tag html And put it in the DOM 



 */
      /******************************************************************************************************************** */ 

      /*  Q)   create nested react element

        <div id = "parent">
            <div id = "child">
                 <h1> this is h1 tag  </h1>
            </div>
        </div>         

      */

        /*

        const parent = React.createElement( 
          "div" ,                     // object 
          {id : "parent"} ,           // attribute
          React.createElement(       // child
               "div" ,                // object
               {id : "child"} ,       // attribute
               React.createElement(        // child
                    "h1" ,                          // object 
                    {} , " this is h1 tag " ) 
               // attribute    child
               )
           ) ;

           root.render(parent) ;

           */

           /******************************************************************************************************************** */ 

/*  Q)   create nested react element and manage siblings 

        <div id = "parent">
            <div id = "child">
                 <h1> this is h1 tag  </h1>
                 <h2> this is h2 tag  </h2>
            </div>
        </div>         

      */

        /*

        const parent2 = React.createElement( 
          "div" ,                    
          {id : "parent"} ,          
          React.createElement(  "div" , {id : "child"} ,      
              [ React.createElement( "h1" , {} , " this is h1 tag " ) , React.createElement( "h2" , {} , " this is h2 tag " ) ] 
               // for siblings use a array of childrens 
               )
           ) ;

           root.render(parent2) ;

           */

            /******************************************************************************************************************** */ 

/*  Q)   create nested react element and manage siblings 

        <div id = "parent">
            <div id = "child1">
                 <h1> this is h1 tag  </h1>
                 <h2> this is h2 tag  </h2>
            </div>
             <div id = "child2">
                 <h1> this is h1 tag  </h1>
                 <h2> this is h2 tag  </h2>
            </div>
        </div>         

      */

        const parent3 = React.createElement( "div" , {id : "parent"} ,          
          [ React.createElement(  "div" , {id : "child1"} ,      
              [ React.createElement( "h1" , {} , " cricket cup " ) , React.createElement( "h2" , {} , " this is h2 tag " ) ] ),
              React.createElement(  "div" , {id : "child2"} ,      
               [ React.createElement( "h1" , {} , " this is h1 tag " ) , React.createElement( "h2" , {} , " this is h2 tag " ) ]  )
          ]
               ) ;

               console.log(parent3);

               const root = ReactDOM.createRoot(document.getElementById("root") );

           root.render(parent3) ;