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




## Assignment
what is super(props) in our class based component constructor and why we always use it ?
