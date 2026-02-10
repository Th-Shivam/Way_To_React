// ab isme kyuki hmne react or react-dom already apne machine pe download kr liya hai 
// to hme unka cdn ka jrurt nhi padega 
// production me jo npm run build krte hai to bundler kaam krta hai , vit bhi ek type ka bundler hai 
// bundler hmare code ko ekdm optimize or compress krke deta hai 
// vite me babel nhi use krna padta hai , ye apna ESBuild use krta hai jo ki bahut fast hai 

import React from "react";
import ReactDOM from "react-dom/client";
const element = <h1>Hello World</h1>
const heading = React.createElement("h1", { id: "heading" }, "Hello World");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);