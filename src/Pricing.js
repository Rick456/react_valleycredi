import React, { Component } from "react";
 
class Pricing extends Component {
  render() {
    return (
      <div>
        <h2>Pricing</h2>
        <p>We offer several different types of pricing, please call us at 
            555-555-5555:</p>
        <ol>
          <li>Basic- $59.99</li>
          <li>Silver- $69.99</li>
          <li>Gold- $74.99</li>
          <li>Platinum- $99.99</li>
        </ol>
      </div>
    );
  }
}
 
export default Pricing;