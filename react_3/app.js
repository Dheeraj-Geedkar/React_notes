import React from "react" ;

//"react" Refers to react from node modules which we have downloaded from npm package

 import ReactDOM from "react-dom/client" ;

// React element = > is a object
// When we render this react element on DOM it becomes html element

// react element is not an html element

// Core React just creates the element
// Below line create react element using react
const heading  = React.createElement('h1' , { id:'heading'} , ' Namaste Dheeraj') ;  
//      |
//      \/
//   React Element      
// this line just created an object

// i/p parameter => 1 ) Tag which we want to create
//                  2 ) Give the attributes to the html element or tag created
//                  3 ) Children of tag element

// To render the heading on the div in index.html we have to first create the root
const root = ReactDOM.createRoot(document.getElementById('root') ) ;
// This will become the root of our react app
// If we want to render anything it will be rendered inside the root
// But to display on browser we will use ReactDOM

console.log(heading);


 // root.render(heading) ;

// When we perform render function . So ReactDom converts the object to html element and push it to browser
//Render function will replace ( not append ) everything which is inside the root , with everything which we are rendering 



//====================================================================================================================================

// In react if you want to create the element so it is a very long and bulky process so the react developer , developed JSX

// JSX is a Javascript syntax which is easier to create a react elements
// ISX is not a part of react
// We can write react without JSX also , but JSX makes developer life easy
// JSX has HTML like syntax , not html in javascript

// Below line create react element using JSX
// h1 tag of JSX

const jsxheading = <h1 id = 'heading' className="classjsx" tabIndex = "1" >Namaste from JSX </h1>  // => object 

//  <h1>"Namste from JSX "</h1>  => Becomes a react element ( object )

// Multi line JSX code = >Enclose code inside () brackets 

 // const jsxheading = (  <h1 id = 'heading' className="classjsx" tabIndex = "1" >
 // "Namste from JSX "
 // </h1>  )

console.log(jsxheading);

//  code =>  root.render(jsxheading) ;


//====================================================================================================================================
// React functional component => Javascript function which returns React element or JSX 


// create React functional component

const TitleComponent = () => {                               // preferred standard
     return <h1>Namaste from functional component title </h1> 
};
// return keyword and {} together use
// We can also use shorthand arrow function like

// or

// const HeadingComponent = () => <h1>Namaste from functional component </h1>

//  or

/*    const HeadingComponent = function() { 
           return <h1>Namaste from functional component </h1>
   }
*/

// or

// const HeadingComponent = () => (
//    <h1>Namaste from functional component </h1>
// ) ;

//****    create nested React functional component

const HeadingComponent2 = () => (
     <div class = 'container'> 
       <h1>Namaste from functional component 2 </h1>
     </div>
);
// multilines JSX code so use () and do not need return keyword and {}
  
// rendering a react component syntax     =>      
    root.render(<HeadingComponent2 /> ) ;


/* *********    To render one component inside another component  => Component composition
  code => 

const HeadingComponent2 = () => (
     <div class = 'container'> 
         <TitleComponent />        or     <TitleComponent> <TitleComponent />     
       <h1>Namaste from functional component 2 </h1>
     </div>
);

 root.render(<HeadingComponent2 /> ) ;

*/


/*  *********  Put or inject javascript code inside the JSX 

As we know that the components return JSX code or react element so we can inject javascript code inside the components of JSX code 

const num = 10000 ;

const HeadingComponent2 = () => (
     <div class = 'container'> 
         {num}
       <h1>Namaste from functional component 2 </h1>
     </div>
);

 root.render(<HeadingComponent2 /> ) ;

OR

const HeadingComponent2 = () => (
     <div class = 'container'> 
          {1100 + 472 }
         <h2>{num}</h2>
         <Title />
       <h1>Namaste from functional component 2 </h1>
     </div>
);

 root.render(<HeadingComponent2 /> ) ;

or 

const HeadingComponent2 = () => (
     <div class = 'container'> 
         {1100 + 472 }
       <h1>Namaste from functional component 2 </h1>
     </div>
);

 root.render(<HeadingComponent2 /> ) ;

*/ 

/*  *********  Put or inject React element inside the react component

const title = <h1 id = 'heading' className="classjsx" tabIndex = "1" >Namaste from JSX </h1> 

title => is a react element or javascript object or javascript variable

const HeadingComponent2 = () => (
     <div class = 'container'> 
     {title}
       <h1>Namaste from functional component 2 </h1>
     </div>
);

 root.render(<HeadingComponent2 /> ) ;

*/

/*   *********  Put or inject React element inside the react element

const elem = <h2> Heko World </h2>

const title = ( <h1 id = 'heading' className="classjsx" tabIndex = "1" >
         {elem}
       Namaste from JSX 
          </h1> ) ;

           root.render(title) ;

*/

/*    *********      Inject or call a method from the react component

const Title = () => (
     <div class = 'container'> 
       <h1>Namaste title </h1>
     </div>
);

const HeadingComponent2 = () => (
     <div class = 'container'> 
         { Title() }  or   <Title />
       <h1>Namaste from functional component 2 </h1>
     </div>
);

*/

/*  *********    Cross side scripting

Cross-site scripting (XSS) is a type of web security vulnerability that allows attackers to inject malicious scripts into a website. This can compromise the user's interaction with the site and allow the attacker to access their data

const data = api.getData() ;  => Can contain malicious code

const HeadingComponent2 = () => (
     <div class = 'container'> 
     {data}                                              => Gets executed
       <h1>Namaste from functional component 2 </h1>
     </div>
);

So normally if any data is inside the curly braces {} so JSX will run the code but JSX Will first purify / clean all the code then it will execute it so this way it prevents cross site scripting attacks

*/