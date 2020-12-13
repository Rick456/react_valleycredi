import React, { Component } from "react";

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Repair from "./Repair";
import Pricing from "./Pricing";
import ContactUs from "./Contact Us";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Credit Repair</h1>
          <ul className="header">
            <li><NavLink to="/">Repair</NavLink></li>
            <li><NavLink to="/Pricing">Pricing</NavLink></li>
            <li><NavLink to ="/contactUs">Contact Us</NavLink></li>
          </ul>
          <div className="content">

          <Route exact path="/" component={Repair}/>
            <Route path="/Pricing" component={Pricing}/>
            <Route path="/ContactUs" component={ContactUs}/>
             
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;