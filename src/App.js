import "./styles.css";
import React from "react"

import {Button} from "./button"


export default function App() {
  let [count,setcount] = React.useState(0)
  let[theme,settheme]=React.useState("dark")
  return (
    
      <div className="App">
      <h1>{count}</h1>
      <Button theme= {theme} onClick={()=>{
        setcount(count+1)
      }}>inc</Button>
      <Button theme = {theme} onClick={()=>{
        setcount(count-1)
      }}>dsc</Button>
 <br/>
 <br/>
      <button onClick={()=> {
        settheme(theme==="dark" ? "light" : "dark") 
      }}>change theme</button>
    </div>
   
    
  );
}
