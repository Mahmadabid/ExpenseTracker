import React, { useContext } from 'react'
import Bulb from "./Bulb.png";
import {  Globalbtn } from "../Context/GlobalState";

const Header = () => {
    
    let button = useContext(Globalbtn);

    return (
        
        <div className="head">
          <div className="header">
            <h2 className="align-head">Expense Tracker</h2>
            <button className={`${button[0]?'lit':'dark'} btn-size`} onClick={()=>{button[1](!button[0])}}><img className="size-img" src={Bulb} alt="Dark and Light Theme"/></button>
          </div>
          </div>
    )
}
export default Header;