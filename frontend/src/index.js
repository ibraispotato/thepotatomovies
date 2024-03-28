import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { TextContextProvider } from "./backendcontext/textContext"
import {USerRegistrationProvider} from "./backendcontext/usercontext"
import {FavContextProvider} from "./backendcontext/favcontext.js"
import {Showfavorite} from "./backendcontext/showcontext.js"




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <TextContextProvider>
    <USerRegistrationProvider>
    <FavContextProvider>
        <Showfavorite>
          
            <App />
          
        </Showfavorite>
        </FavContextProvider>
    </USerRegistrationProvider>
  </TextContextProvider>

);

reportWebVitals();