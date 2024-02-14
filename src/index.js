// import React from "react";
import  ReactDOM  from "react-dom/client";
import App from "./app";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
// we dont want to use this , snice react 18 version doesnot support.
// const header = <h1>This is my first project</h1>;//this is jsx experssion-virtual Dom
// console.log(header);
// React.createElement()// this is why we import the 'import React from "react";'
// ReactDOM.render(header,document.getElementById('root'));// the render method will renders a element from the Virtual dom into the real Dom
 const root=ReactDOM.createRoot(document.getElementById('root'));// we should import 'import  ReactDOM  from "react-dom/client";'we are calling this create root method, using that we create a root element
root.render(<App/>);// this will render items in the app.js

