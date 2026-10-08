// import { Navbar } from './MYCOMPONANTS/Navbar';
// import { Home } from './MYCOMPONANTS/Home';
// import { About } from "./MYCOMPONANTS/About";
// import { Contact } from "./MYCOMPONANTS/Contact";
// import { Footer } from "./MYCOMPONANTS/Footer";
// import { Service } from "./MYCOMPONANTS/Service";


// function App() {
//   return (
//     <>
//       <Navbar/>  
//       <Home/>
//       <About/>
//       <Service/>
//       <Contact/>
//       <Footer/>
//       {/* <Index user="Manu" age={22}/> 
//       <Index user="Tanu"/>  */}
//     </>
//   )
// }
// export default App;


//Routing
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Dashboard from "./Components/dashboard";
// import Profile from "./Components/profile";
// import Settings from "./Components/settings";
// import Order from "./Components/Order";



import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Service from"./Components/Service";

function App() {
  return (
    <BrowserRouter>

      <Navbar />
{/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;








    //    <BrowserRouter>


            // <Routes>

            //      <Route path="/" element={<Home />} />

            //     <Route path="/about" element={<About />} />

            //     <Route path="/contact" element={<Contact />} />

            //      <Route path="/services" element={<Service />} /> 


//                   {/* Nested Routes */}

//                 {/* <Route
//                     path="/dashboard"
//                     element={<Dashboard />}
//                 />

//                     <Route
//                         path="profile"
//                         element={<Profile />}
//                     />

//                     <Route
//                         path="settings"
//                         element={<Settings />}
//                     />

//                     <Route
//                         path="orders"
//                         element={<Order/>}
//                     /> */}

//                 </Routes>

//         </BrowserRouter>



//Events ==> user action krta h 

//1. onClick = button pr click krna
// function App() {

//     // function handleClick() {
//     //     alert("Button clicked!");
//     //     // console.log("clicked");
//     // }

//     return (
//         // <button onClick={handleClick}>
//         //     Click Me
//         // </button>
//         <button onClick={() => alert("Clicked")}>     // arrow function 
//     Click Me
// </button>
//     );
// }

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

//import React, { useState } from 'react';
// import { useState } from "react";         

// //const App = () => {
// function App(){

// const [count,SetCount] = useState(0);
// function incounter(){
//     SetCount (count+1)
// }
// function decounter(){
//     SetCount (count-1)
// }

//   return (
//     <div>
//       <h1>My Number is : {count}</h1>
//       <button onClick={incounter}> + </button> {""}
//       <button onClick={decounter}>-</button>
//     </div>
//   )
// }

// export default App














