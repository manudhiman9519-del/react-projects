//import { useState } from "react"
//import React from "react"

// Events ==> user action krta h  

// 1. onClick = button pr click krna 

// function App() {

//     function handleClick() {
//         alert("Button clicked!");
//         // console.log("clicked");
//     }
//     return (   
//         <button onClick={handleClick}>
//             Click Me
//         </button>         
//         //arrow function se krte h to new fun bnane jaruri nhi hota
// //          <button onClick={() => alert("Clicked")}>       
// //     Click Me
// // </button>
//     );
//  }

// export default App;

//onDoubleClick = user double click kre
// function App() {

//     function handleDoubleClick() {
//         alert("Double Click!");
//     }

//     return (
//         <button onDoubleClick={handleDoubleClick}>
//             Double Click Me
//         </button>
//     );
// }

// export default App;

//3.onMouseEnter = mouse kisi element ke upr aaye
// function App() {

//     // function handleMouseEnter() {
//     //    // console.log("Mouse entered");
//     //    alert("Mouse entered");
//     // }

    // return (
//         // <button onMouseEnter={handleMouseEnter}>
//         //     Hover Me
//         // </button>
//         <button onMouseEnter={()=>alert("Hover")}>
//             button
//         </button>
{/* <div onMouseLeave={() => console.log("Mouse left")}>
    Move mouse here
</div>
    );
} */}

// export default App;

//4.onChange = Ye input fields ke liye bahut important hai.(jo bhi user type kare)
// function App() {

//     function handleChange(event) {
//        console.log(event.target.value);
//     //    console.log("Typing...")
//     }

//     return (
//         <input
//             type="text"
//             onChange={handleChange}
//         />
//     );
// }

//export default App;

//5. onSubmit = Form submit karne ke liye:
// function App() {

//     function handleSubmit(event) {

//         event.preventDefault();

//         alert("Form Submitted");

//     }

//     return (
//         <form onSubmit={handleSubmit}>

//             <input type="text" />

//             <button type="submit">
//                 Submit
//             </button>

//         </form>
//     );
// }

// export default App;

//6. onKeyDown =  Keyboard ki key press karne par:
// function App() {

//     function handleKeyDown(event) {
//         console.log(event.key);
//     }

//     return (
//         <input onKeyDown={handleKeyDown} />
//     );
// }

// export default App;

//7. onBlur = Jab user input se bahar click karta hai, tab onBlur chalta hai
// function App() {

//     function handleBlur() {
//         console.log("Input se bahar aa gaye");
//     }

//     return (
//         <input
//             type="text"
//             placeholder="Enter Name"
//             onBlur={handleBlur}
//         />
//     );
// }

// export default App;

//8. onFocus = Jab user input ke andar click karta hai ya input ko select karta hai, tab onFocus chalta hai.

// function App() {

//     function handleFocus() {
//         console.log("Input par focus hua");
//     }

//     return (
//         <input
//             type="text"
//             placeholder="Enter Name"
//             onFocus={handleFocus}
//         />
//     );
// }
// export default App;


//Hooks = it is a special function jo react ke functional compoents me extra features use krne dete h

//import React, { useState } from 'react';
import { useState } from "react";         

//const App = () => {
function App(){

const [count,SetCount] = useState(0);
function incounter(){
    SetCount (count+1)
}
function decounter(){
    SetCount (count-1)
}

function fiveincrement(){
  SetCount(count+5)
}
function fivedecrement(){
  SetCount(count-5)
}


  return (
    <div>
      <h1>My Number is : {count}</h1>
      <button onClick={incounter}> + </button> {""}
      <button onClick={decounter}>-</button> <br/>
      <button onClick={fiveincrement}>+5</button> {""}
      <button onClick={fivedecrement}>-5</button>
    </div>
  )
}

export default App

