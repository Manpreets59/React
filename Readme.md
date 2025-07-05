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
 Create an Element
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
npx parcel index.html and then "main": "App.js",     <-- ❌ REMOVE this line form package.json
npm install react  to install react
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

tree Shaking algorithm :  remove unused code 

dist: production build file are in dist forder after minification , tree shaking, cache , etc 

browsersList : contain list of browser on which our web app definately works


assignments
consistent hashing