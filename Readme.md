## Episode - 1 Inception

# how to get react into our project

first way to add react into our project is through cdn links

# topics covered

Set up all the tools in your laptop
VS Code
Chrome
Extensions of Chrome
Create a new Git repo
Build your first Hello World program using,
Using just HTML
Using JS to manipulate the DOM
Using React
use CDN Links
Create an Element , create root , render root

const heading = React.createElement("h1", {id: "heading"}, "Namaste React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

Create nested React Elements
Use root.render
Learn about Arrow Functions before the next class

# Assignment

What is Emmet?
Difference between a Library and Framework?
What is CDN? Why do we use it?
Why is React known as React?
What is crossorigin in script tag?
What is difference between React and ReactDOM?
What is difference between react.development.js and react.production.js files via CDN?
What is async and defer?
what is cors
difference between library and framework

## Episode - 2 Igniting our app

# dependencies

how to introduce npm to your system
npm init
test command = jest
how to install parcel
npm install -D parcel
ingnite our using parcel
npx parcel index.html and then "main": "App.js", <-- ❌ REMOVE this line form package.json
npm install react to install react
npm install react-dom and change type to module in index.html
how to create production build : npx parcel build index.html and then it put this production build in dist

# lecture

npm : manages packages but does not stands for node package manager

package.json is configration file for npm created in json structure
and keep track of version of package installed into our system

Bundler: webPack, parcel, vite (bundle our app so that it can be shift to production )

two types of dependencies dev dependencies and normal dependencies
dev-dependencies for devlopment environment and normal dependencies are used in production environment
Parcel : Dev build
local server
HMR: hot module replacement
file watching algorithm written in c++
caching - faster builds
Image optimization
Minification of file , bundling of file , compressing so that it can be ship for production build
consistent hashing, code splitting , differential bundling(so your app run on older browser )
reliable caching, lazy dev build , tree shaking algorithm
different dev and production build

caret(^) : update the minor version if new version is introduced
tilde(~) : update the major versionn if new version is introduced

package-lock.json: keep track of exact version of all the dependencies and each dependency has their own package-lock.json and packge.json and they have their own dependency and this is transitive dependency

integrity in package-lock.json : it is hash it is because (it is working on my local but not working on production ) to verify that whatever in my machine is same version deployed onto the production

Node module: contain all the code related to all the dependencies

transitive dependencies : When you install a package in Node. js using npm or Yarn, that package might depend on other packages

If you have package-lock.json and package.json then you can re-create all your node_module so its important to put node_modeule in gitignore but not package-lock.json and package.json

npm : install package
npx : execute package

tree Shaking algorithm : remove unused code

dist: production build file are in dist forder after minification , tree shaking, cache , etc

browsersList : contain list of browser on which our web app definately works

# assignments

consistent hashing

## Episode - 3 Laying the foundation

# Dependence

# lecture

Script for sarting our projects in package.json

React Element: it is an object and when we render it onto the dom it became html element and also we have property createRoot and render to create and render root.

jsx : jsx and react are seprate but it make easy to write react code jsx is not html in js but it is html like syntax and xml like syntax. as jsx and javascript are different then how browser understand parcel (jsx code is transpiled before it reaches js engine)
jsx sanitize our data before running it prevent cross side scripting attack

babel is transpiling our code it take our code and transpile it that jsengine can understand used by react

react.create element -> reactElement -> js object -> html(render)

attributes = camelcase
if our jsx code is in single line then it is perfect but if it take more than one line than we have to wrap it inside () bracket

extensions : preetier, bracket pari colouriser, Eslint, better comments

React component: everything in react is component
two tyes of component are functional components and class based components
React functional components is normal javascript function that return a piece of jsx while createing react components name it with capital letter. we can also say it as a javascript function which return react element
how to render react components
<componentName/>
{componentName()}
<componentName></componentName>

both are same
const fn = () => {
return true;
}
const fn = () => true;

component composition : componenet inside another component

In jsx {} using this we can run any piece of js inside it
how to render react element {variableName}

# Assignment

babel

## Episode 4 Talk is cheap, show me the code

# lecture

Plan how our app look like clreate basic layout of it on excalidraw or figma
build this
header  
 logo
nav-items
body
search
restaurantcontainer
restaurentCard
img
name of restaurent, star rating, cuisines, etc
footer
copyright
links
address
contact

we can write inline style and style by creating style compnent using {} bracket directly in our app
style= {stylecomponent}
style= {{background-color = green}}

props: properties is short form for properties. To pass data dynamically to component we can pass it as prop in simple word props are normal argument to function as react component are normal function
we can use props using
{props.name}
to get data passed via react component
and we can also destructure it at function argument and this is also know as destructure on the fly
{resname, cuisine} and smae as
const {resname, cuisine} = props

Exploring Api of swiggy
config driver ui : website ui is driven by ui based on the ui website renders and changes according to ui

map, filter, reduce
when doing map or looking upto anything then we have to give a key over there as there in restaurentCard .
why: when we add new restaurent card react does not know where to put this card then react re-render the entire dom (all cards). If we give then id then it render one restaurent in dom. keys are very important don't forget it . and according to react don't use index becoz if order change it create problem
not using keys(not acceptable) <<<<<< index as key <<<<<< unique id(best practice)

{post index as key is anti-pattern robinpokorny.com}

## Episode 5 Let's get hooked

# lecture

Two types of exports and imports

In one file i can only write one default export  
default export and named exports
default export :
export default file_Name

import file_Name from "./path"

Named exports : just write export in front of variable and function
and named export is used to export multiple things from a file
export const rescard = ()=> {
function
}

import {rescard} from "./path"

# Hooks :

like normal javascript function given by react prebuild , utility function given by react

UseState
useState Hook: use to generate state variable to maintain state of component . superpowerfull variable help to keep data layer insync with ui layer
import from react like named import
const[listOfRestaurent, SetListOfRestaurent] = useState (resList);
we can deStructure it on the fly
const arr = useState(resList)
const [listOfRestaurent, setListOfRestaurent] = arr;
const [listOfRestaurent] = arr[0]
const [setlistOfRestaurent] = arr[1]

and whenever a state-variable update react re-render the componenets

# Reconciliation Algorithm:

also know as react fiber (new algorithm came in react 16 and after that this algorithm is know as react fiber and this react fiber is new way of finding the diff and updating the dom )

react create a virtual dom which is representation of actual dom
virtual dom : object representaion of actual dom like a react.create element which return an object

diff algorithm : find out difference between two virtual dom updated virtual dom and previous virtual dom for every render cycle

why React fast ?
because it do ifficient dom manipulation .
how?
because it has virtual dom and diff algorithm

read more about react architecture
https://github.com/acdlite/react-fiber-architecture

# assignment

can be use named export with default export

## Episode 6 Exploring the world

# lecture

Monolithic architecture: software development refers to an application where all components are tightly coupled and packaged as a single, indivisible unit.

Microservice architecture: a design approach where an application is structured as a collection of small, independent, and loosely coupled services.
and this approach of having different service for each and small thing is know as sepration of concerns and single responsibility principal
benifit of microservice is having different tech stack for each service
how these services are connected ?
all services run on their specific port and then port map to domain name

React is popular because its render cycle are very fast. React has the one of best render mechanism

# hook

useEffect
useEffect(() => {
console.log("useEffect called")
}, [])
take two argument function and an dependancy array
this useEffect callback will we called when componenet renders

useState
Login- Logout button to understand about usestate properly
we use useState because javascript variable doesn't automatically renders and because of that new changes doesn't display on dom so we use useState to create state variable
how we modify constant variable of usestate?
when we update the value react call the component with updated values

how react application make backend call and fetch data

cors policy : browser block api call from one origin to other . If ther is origin misMatch the browser blcok that api call and this is cors policy
cors chrome extension to bypass cors policy

Api restaurent path

json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants

json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants

Shimmer ui : a version of the UI that doesn't contain actual content, but instead mimics the layout and shapes of the content that will eventually appear.

rendering component based on condition is know as conditionl rendering
ternary operator to render shimmer if length == 0 other return data of api (cofig driven ui)

## Episode 6.1 Swiggy Api Issue

how get api and fetch data through it
inspect -> source -> referesh page and also select Fetch/XHR
use this api in your web app to fetch data
json viewer tool to read api data

example to acces restaurent list Path to api list of restaurent
: json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants

optional chaining : ?.

## Episode 6.2 Cors plugin issue solved

website doesn't work without cor extension
we have corsproxy.io
just append the url in front of api

## Episode 7 Finding the path

# lecture

UseEffect:
If no dependency array useEffect is called after every render of the component.
if there is an empty dependancy array useeffect is called on initial render and just once called
if dependancy array is [btnName] then it is called everytime btnName changes

UseState:
never create useState outside of functional component and it is used to create local state variable inside your functional component
alwys keep your use state variable on top as js in single threaded asynchronous language it run line by line
never use/create usestate inside if else, for loop, function it can create inconsistency in your programm and they are ment to be createted inside functional component on higher level

Routes :
using library React router dom
npm install react-router-dom
import creat browserRouter form react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const appRouter = createBrowserRouter([
{
path: "/",
element: <AppLayout />,
errorElement: <Error />,
},
{
path: "/about",
element: <About />,
},
{
path: "/contact",
element: <Contact />,
},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

React-router-dom give us access to hook
hook : useRouterError
give more information about error
import { useRouteError } from "react-router-dom";

const Error = () => {
const err = useRouteError();
console.log(err);
return (
<div>
<h1>Oops!!</h1>
<h2>SomeThing went wrong </h2>
<h3>{err.status}: {err.statusText}</h3>
</div>
)
}
export default Error;

Children Routes
Outlet : The Outlet component in React Router DOM serves as a placeholder within a parent route's component where matched child route components will be rendered. It is a fundamental part of creating nested routing structures and shared layouts in React applications.

Never use anchor tag in react to route to other page
<a href="/about">About Us </a>
why?
because of it the whole page got referesh due to which page take time to load
so insted of acheref we use link tage provided by react-router-dom
because it does not reload the whole page it just change the component
<Link to="/contact" >Contact Us</Link>

Everything in react is component and as we change routes we navigate through different pages and our browser will not reload page. It is just sing page and React is just interchanging the component and therefore react is know for single page application

Two type of routing in react app

- Client side Routing - everything is loaded into our page so no need to make network call our this application is an example of client side routing
- Server side Routing - when we have to make a newtwork request for different route

useparams hook by react-router-dom to get resid

{
resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
?.card?.card?.carousel[4]?.dish?.title
}

.cards[2] chec this for recomended 


resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
card?.info?.


resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6]

## Episode 8 Let's get Classy 
# lecture
 class based component: is normal javaScript class. It is a class which has render method that return some piece of jsx
 Example of class based component
 React.Component is a class present in react package

 Remember:
   - make a javaScript class 
   - extends React.Component from react and import react
   - render method that return some piece of jsx
   - export our class and then use it same as normal react Component

 class UserClass extends React.Component {
  render() {
    return (
      <div className="user-card">
        <h2>Name: Manpreet Singh</h2>
        <h3>Location: Punjab</h3>
        <h4>Contact: manpreets95828@gmail.com</h4>
      </div>
    );
  }
}

Example of functional component 
const User = () => {
  return <div className="user-card">
    <h2>Name: Manpreet Singh</h2>
    <h3>Location: Punjab</h3>
    <h4>Contact: manpreets95828@gmail.com</h4>
  </div>
}

export default User

Props inside class based component 
 <UserClass name = {" Manpreet Singh " } /> this is how me pass

how we recieve : we create a constructor 
constructor(props){
    super(props);
    console.log(props);
  }

  <h2>Name: {this.props.name}</h2> and this is how we use it in our render Method 

  example code 
  import React from "react";
class UserClass extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
  }
  render() {
    const  {name,location} = this.props;
    return (
      <div className="user-card">
        {/* <h2>Name: {this.props.name}</h2> */}
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: manpreets95828@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;

How to create state variable inside class based component 
functional component: 
we use hook to create state variable inside function components

class based component :
state is created whenever a class instence is created .
function is invoked, component render , load onto the webpage
mount and unmounting 

and that is the best place to create state , and recieve props 

  constructor(props){
    super(props);
    console.log(props);

    this.state = {
      count: 0,
    };
  }


<h1>count : {this.state.count}</h1>
this is how we create and use state variable in class based component

How to create two state variable 
function component : we simply create another variable 
const [count, setcount] = useState(0)
const [count1, setcout1] = useState(0)
and then we use these variable 

Class based components: 
our state is big object which contains all the state variable 
example 
  this.state = {
      count: 0,
      count2: 2,
    };

we can destructure them like this  const {count, count2} = this.state;
and use them directly like  <h1>count : {count}</h1>
                            <h1>count : {count2}</h1>

How to update these state variable inside class based component
In functional component we can directly use setVariable to update the variable 
In class based component:
never update state variable directly 
We can use this.setState function provided by react to update the state variable in class based component 
example 
        <h1>count : {count}</h1>
        <button onClick={() => this.setState({
          count: count + 1,
          count2: count2+1, // we can also update both together 
        })}>count Inc</button>



 Life cycle of react Class based components 
 how these class based component mounted onto the webpage 
   parent component is called 
   class based based component encountered 
     then constructor is called 
          render is called 

class Based component another important method 
componentDidMount(){
  
}
It is used to make api call inside it why?
load component then make api call fill the data , update data onto the dom   

 // class componet is called and loading 
     render method is called 
     when class based component is mounted on the dom 
     then this componentDidMount is called 

example : for class based component
            parent constructor 
            parent render 
            child constructor 
            child render
            child component did mount 
            parent component did mount 
          
how lifecycle method works when there are multiple children 
parent constructor 
parent render 

batch the render phase 
first child constructor 
first child render
second constructor 
second render

<Dom is updated in single Batch >
patch the commit phase 
first componentdidMount
second componentDidMount

parent componenetDidMount

ReactLifeCycle Diagram 
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

React will batch the render phase if there are multiple children and then commit phase will  batch and happen this is done because of optimization purposes 
as dom manipulation is most expensive operation in react 
so react batch the render phase and the commit phase and then it does dom manipulation using reconciliation , diffalgorithm 

How to Make api Call in class based components?
async componentDidMount(){
    console.log(this.props.name + "component did mount called")
    const data = await fetch("https://api.github.com/users/Manpreets59")
    const json = await data.json();
    console.log(json);
  }

componentDidUpdate is a lifecycle method in React class components that is invoked immediately after a component's updates are flushed to the DOM. This method is not called for the initial render of the component. 

mounting : showing on ui , 
unmounting : removing from ui 

Unmounting :
componentWillUnmount method  : called when we change the page or we are leaving the page or the page will remove from the dom 

useEffect and componenetDidMount are not same both are different thing 
useEffect has dependancy array and when dependancy array changes it is called 
but componentDidMount is called on initiall render and after that componentDidUpdate is called and when we change the page then componentDidUnMount is called

CleanUp
they are use to free up resources 
example we have done 
  this.timer = setInterval(() => {
    console.log("Namaste React");
  }, 1000);

we need to cleanup it when we leave the page or the component is unmount otherwise everyTime we render that page again it start another setInterval , when we create a mess we need to clear that mess also  
componentWillUnmount(){
  clearInterval(this.timer);
}

functional component Lefecycle 
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Namaste React op")
  }, 1000)
  console.log("useEffect Called")

  return () => {
    clearInterval(timer);
    console.log("useEffect Return")
  }

})

console.log("render called")

render called 
useEffect called :  is called when a component is mount
UseEffect Return called : it works when a component is unMount



## Assignment
what is constructor (props) super(props) in our class based component constructor and why we always use it ?
async ComponentDidMount() and why can't we us async with useEffect callback function 



## Episode - 9 Optimizing our App
# Lecture
Single resposibility Principal :
creating a different component and assigning them a single responsibility example contact us . This is the good way of maintaining the code in modular fashion , modularity mean break down code into small- small module so that your code become more maintainable and testable 
example: if there is an issue with my restaurent card then i would determine it easily by testing that specific component  

 Hook : hook are like normal javascript function with special functionality given by react 
    - useState Hook 
    - useEffect Hook 
    - useParams
Hook is just a utility function we create custom hook to take responsibility of a component a give to a hook so that our code became more modular 

Custom Hook : Custom Hooks in React are JavaScript functions designed to extract and reuse logic from React components. They allow developers to encapsulate common functionalities that involve built-in React Hooks (like useState, useEffect, useContext, etc.) and share them across different components in a modular and organized way.

example :
import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  // Fetch data
  useEffect(() => {
    fetchData();
  }, [resId]);

  const fetchData = async () => {
    try {
      const data = await fetch(MENU_API + resId);
      const json = await data.json();
      setResInfo(json?.data || []);
    } catch (error) {
      console.error("Error fetching restaurant menu:", error);
    }
  };
  return resInfo;
};

export default useRestaurantMenu;

this hook fetch a data and we use it to present menu of restaurants 

custom hook to check your internet status 
example : 
import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [OnlineStatus, setOnlineStatus] = useState(true);

  // check if online or offline
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  });

  // boolena value
  return OnlineStatus;
};
export default useOnlineStatus;
 
How to simulate your browser that you are offline ?
go to network tab and on top for internet status  wifi logo change it according to requirement No throttling, offline , fast 4g etc.

why we use use in hooks name ?
helps developers easily identify custom hooks and understand their purpose, promoting code clarity and maintainability. we can also write custom hook without writing use in their name but while linting it throw some error and react docs also suggest to use use in hook name 

How to make application more performant 
Instead of loading the entire application's code at once we load smaller bundle of these file based on the requirement different name for this process are : 
    - chunking
    - code splitting 
    - dynamic bundling 
    - lazy loading 
    - on demand loading 
    - dynamic import  etc are the variour name for same thing 
this bundle are like small application inside big one 

Example:
create another route on header grocery 
the js bundle of this page load when i enter in this page 
for this we use lazy  function
in main file App.js
import lazy as name import from react and then 
const Grocery = lazy(() => import("./components/Grocery"))
and in the main file remove this 
import Grocery from "./components/Grocery";

Now you get an erro componet suspend to synchronous operation 
now import suspense component as name import form react
import React, {lazy, Suspense} from "react";

why suspense?
This is because it take some time before loading the component so we use suspense to wrap component
and give a placeholder Or fallback which what should react render when code is not available and fallback is passed in jsx form 

and wrap route like this 
      {
        path: "/grocery",
        element: <Suspensefallback={<h1>Loading....</h1>}>
        <Grocery />
        </Suspense>,
      },

# Assignment

## Episode - 10 Jo Dikhta hai, vo bikta hai 
# lecture 
Ui library
sass and scss : css
Style component 
Material ui , chakra ui, bootstrap, ant design
tailwind css
post css

Advantage of tailwind : don't need to change files to write css 
It is very-lightweight because ship unused css

disadvantages of tailwind: It load the code with classed and code became less readable and also there is initial learning curve for developers 

## Episode - 11 Data is the new oil 
# lecture 
Higher order components :  A Higher-Order Component (HOC) in React is an advanced technique for reusing component logic. It is a function that takes a component as an argument and returns a new component with enhanced functionality or behavior. 

Why we use, when we use , what component does it take and what component it return ?  

example of higher order component: 
// Higher order component to add a promoted labelif the restaurant is promoted 
// intput- RestaurantCard => RestaurantCardPromoted 

export const withPromotedLabel = (RestaurentCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurentCard {...props}/>
      </div>
    )
  }
}

and this is how we use it 

const RestaurantCardPromoted = withPromotedLabel(RestaurentCard);

              {
                /* If the restaurent is promoted then add a promoted label to it  */
                restaurent?.info?.promoted ? (
                  <RestaurantCardPromoted
                    key={restaurent?.info.id}
                    resData={restaurent?.info}
                  />
                ) : (
                  <RestaurentCard
                    key={restaurent?.info.id}
                    resData={restaurent?.info}
                  />
                )
              }

Lifting the state up:
"Lifting state up" in React is a technique for sharing state between multiple components by moving the state to their closest common ancestor. This pattern ensures a single source of truth for the shared data and promotes consistency across components that depend on that state.
controled and uncontroled component:

why we write like this when encounter an @ c.card?.card?.["@type"]

Accordian for EachRestaurant Menu :
Accordian has two thing accordian header and accordian data

<ItemList items= {data.itemsCards} />
items.map ((item) => itemCards)
key = ( item.card.info.id)

custom Accordian for menu items: added a feature that when one component of accordian is open then the rest got closed 

React dev tool chrome extension 
The React Developer Tools Chrome extension introduces two primary components within the Chrome DevTools interface when inspecting a React application:
Components Tab:
This tab displays a hierarchical tree representation of all the React components rendered on the page.
Selecting a component in the tree allows for inspection of its current state, props, and hooks in a panel on the right.
Values for state and props can be modified in real-time, which can be useful for debugging and testing different scenarios.
It provides options to navigate to the source code of a component, log component data to the console, and inspect the underlying DOM element.
A search bar is available to quickly locate specific components within the tree.
Profiler Tab:
This tab is used for analyzing the performance of a React application.
It allows recording and visualizing the rendering process of components over time.
Tools like the Flame Chart and Ranked Chart help identify performance bottlenecks and optimize rendering performance.
It provides insights into how components interact and re-render, aiding in identifying and improving slow-rendering components. 

controled and uncontroled index :
initially accordian are controlling thenselves now i have take the power and give it to parent now at a time only one accoridan is expanded and rest are closed 

ifcomponent is controlling itself then it is called uncontroled component
and if parent is controlling a component then it is called  controlled component
and give power to parent to control component is also know as lifting the state up for more (https://react.dev/learn/sharing-state-between-components#lifting-state-up-by-example)

props drilling: Prop drilling is an anti-pattern where the developer passes down a prop through multiple levels of components simply to access data defined higher up the tree in a deeply nested level.
and sometimes there is no need of that data passed by some components but we have to pass data because our deeply nested level component require props and this cause our code look mess and less readable for this we have react-context 

React Context :  is a feature in React that enables components to share data and state across the component tree without the need for "prop drilling." Prop drilling refers to the practice of passing props down manually through multiple levels of nested components, even if intermediate components don't directly use those props.

Core Components:
createContext: This function is used to create a Context object.
Context.Provider: This component is used to wrap a part of your component tree and provides a value prop. All components within this provider's subtree can access the provided value.
useContext Hook: This hook is used within a functional component to consume the value provided by the nearest Context.Provider for that specific Context.
How it works:
You create a Context using createContext. Then, you wrap the part of your component tree that needs access to this context with a Context.Provider, passing the data you want to share via the value prop. Finally, any descendant component needing this data can use the useContext hook to access it directly.
When to use it:
React Context is ideal for sharing data that is considered "global" or applicable to a large section of your application's UI, reducing the complexity and verbosity associated with prop drilling in deeply nested component structures. While suitable for many scenarios, for highly complex global state management or side effects, dedicated state management libraries like Redux or Zustand might be considered.

Example how we create context = 
import { createContext } from "react";
const userContext = createContext({
    loggedInUser: "Guest",
})

export default userContext;

and this is how we use it 
const {loggedInUser} = useContext(userContext);

we have to way to access data through context
hook like above example and second is mostly used in class based component 
<userContext.Consumer>
{(data) => console.log(data)}
{(loggedInUser) => <h1>{loggedInUser}</h1>}
</userContext.Consumer>

we have contextProvider to update the data of in our app after fetching it from api 
Example : wrap our entire app insdie context.provider and then give value that can be updated in our entire app and this is done in our root level file 
 return (
    <userContext.Provider value={{loggedInUser: userName}}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </userContext.Provider>
  );
};

    import userContext from "./utils/userContext";
const AppLayout = () => {
  const [userName, setUserName] = useState(0);
  //authentication logic
  useEffect(() => {
    const data = {
      name: "Manpreet Singh",
    };
    setUserName(data.name);
  }, []);

  and also i can use my provider for specific portion i can use context.provider for my header and my value are only access inside my header 
  and i can create multiple context and i can override anywhere i want

   return (
    <userContext.Provider value={{loggedInUser: userName}}>
    // here i hava userName value fetch through api 
      <div className="app">
      <userContext.Provider value={{loggedInUser: "elon Musk"}}>
        <Header />
        // only inside header provider i have elon musk 
        </userContext.Provider>
        <Outlet />
      </div>
    </userContext.Provider>
  );
};