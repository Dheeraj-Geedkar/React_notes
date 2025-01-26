/*


// Step 1 ) Create react element ( core react)

const heading = React.createElement('h1' , { id: "heading" , xyz : 'abc'} , " Hello world from React!" ) ;

// React.createElement() => Creates an javascript object not a tag
// takes three input arguments
//   ( tag you want to create  ,  object  ,  Content we want to inject inside the tag / Children of the particular tag element)
// {} object in above tag is the place where we will give the attribute to our tag 
// heading = > is not a heading tag , It is an js object or react element
// in console => console.log(heading) ;  => We get props Contains children's and attributes which we pass in

// Step 2 ) Create react element ( Here since we want to render or inject the data or element into the root element so therefore we are manipulating the DOM structure so therefore we need reactDOM

const root = ReactDOM.createRoot( document.getElementById('root') ) ;

// root => The route is created inside the react , In the root all the react codes , injected codes will be run

// Step 3 ) Now render or inject the heading tag inside the root element 

root.render(heading) ;

// render()  => job is basically to take this object ( heading )  , create that h1 tag which the browser understands and put that up inside the root inside that root element that you put in over here or Put that tag on the web page

console.log(heading) ;

// returns object


*/ 


// ================================================================================================================================= 

// Create this type of structure with the help of react

  /*    <div id="parent">
           <div id="child">
               <h1></h1>
               <h2></h2>
           </div>
        </div> 

        In this structure to make siblings (h1 , h2) in div object . So in the 3rd input parameter we have to pass the children's in the array And if we have only one child so just to pass the child not the array
*/

/*
         Solution to above problem

const parent = React.createElement(
     'div' , 
     { id : 'parent'} , 
      React.createElement( 
        'div' ,
         { id : 'child'} , 
        [ React.createElement( 'h1' , {} ," Hello World from h1 tag ") , React.createElement( 'h2' , {} ," Hello World from h2 tag ") ] ) ) ;

         const root = ReactDOM.createRoot( document.getElementById('root') ) ;

         root.render(parent) ;

        console.log(parent) ;


        */

// ================================================================================================================================= 

// Create this type of structure with the help of react

  /*    <div id="parent">
           <div id="child1">
               <h1></h1>
               <h2></h2>
           </div>
           <div id="child2">
               <h1></h1>
               <h2></h2>
           </div>
        </div> 

       
*/

const parent = React.createElement(
    'div' , 
    { id : 'parent'} , 
    [
     React.createElement( 
       'div' ,
        { id : 'child1'} , 
       [ React.createElement( 'h1' , {} ," Hello World from h1 tag ") , React.createElement( 'h2' , {} ," Hello World from h2 tag ") ] ) 
       , 
       React.createElement( 
        'div' ,
         { id : 'child2'} , 
        [ React.createElement( 'h1' , {} ," Hello World from h1 tag ") , React.createElement( 'h2' , {} ," Hello World from h2 tag ") ] )] ) ;

        const root = ReactDOM.createRoot( document.getElementById('root') ) ;

        root.render(parent) ;

       console.log(parent) ;