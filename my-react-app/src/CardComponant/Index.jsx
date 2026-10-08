//import React from 'react';
import './CardIndex.css';
import m1 from "../assets/m1.jpeg";

export const Index = (props) => {
  // console.log(props.user);
  return (
    <>
    <center>
    <div className="mycard">
      <h3>Card</h3>
      <p>Card content goes here.</p> 
 
      <img src={m1} alt="Image" className="mycard-image"/>
      <h3>{props.user} </h3>
      <p>I'm a Web developer.</p>

    </div>
    </center>
    </>
  );
}
