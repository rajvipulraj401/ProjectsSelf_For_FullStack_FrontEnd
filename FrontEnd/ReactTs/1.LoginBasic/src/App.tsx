// ---- Version 1 when we are not getting props ----

import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return (
    <>
      <div className="container">
        {isLoggedIn ? <h1>Welcome</h1> : <h1>Please login</h1>}

        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {" "}
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </>
  );
};

export default App;

// ---- Version 2 when we are getting props ----

// import React, { useState } from "react";
// import "./App.css";

// interface AppProps {
//   initialLoginState?: boolean;
//   welcomeMessage?: string;
//   loginMessage?: string;
// }

// const App = ({
//   initialLoginState = false,
//   welcomeMessage = "Welcome",
//   loginMessage = "Please login",
// }: AppProps) => {
//   // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(initialLoginState);
//   const [isLoggedIn, setIsLoggedIn] = useState<boolean | null | undefined>(
//     false
//   ); //(YE UNION HAI)
//   return (
//     <>
//       <div className="container">
//         {isLoggedIn ? <h1>{welcomeMessage}</h1> : <h1>{loginMessage}</h1>}

//         <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
//           {isLoggedIn ? "Logout" : "Login"}
//         </button>
//       </div>
//     </>
//   );
// };

// export default App;

// -----version 3:---- (direct using export interface and export const)

// export interface Person {
//   name: string;
//   age: number;
//   isMarried: boolean;
// }

// export const Person = (props: Person) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//       <p>This person {props.isMarried ? "is married" : "is single"}</p>
//     </div>
//   );
// };

// -----Version 4:---- (Forms with TypeScript - Complete Form Events)

// export interface Person {
//   name: string;
//   age: number;
//   isMarried: boolean;
// }

// export const Person = (props: Person) => {
//   const [personBio, setPersonBio] = useState<string | null>(null);
//   const [email, setEmail] = useState<string>("");
//   const [isFormValid, setIsFormValid] = useState<boolean>(false);

//   // Input change handler
//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setPersonBio(event.target.value);
//   };

//   // Email change handler
//   const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setEmail(event.target.value);
//   };

//   // Form submit handler
//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log("Form submitted with bio:", personBio);
//     console.log("Email:", email);
//   };

//   // Button click handler
//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     console.log("Button clicked!");
//   };

//   // Key press handler
//   const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
//     if (event.key === "Enter") {
//       console.log("Enter key pressed!");
//     }
//   };

//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//       <p>This person {props.isMarried ? "is married" : "is single"}</p>
//       <p>{props.name} Bio: {!personBio ? "No Bio Available" : personBio}</p>
//
//       <form onSubmit={handleSubmit}>
//         <input
//           onChange={handleChange}
//           onKeyPress={handleKeyPress}
//           placeholder="Enter bio"
//         />
//         <input
//           type="email"
//           onChange={handleEmailChange}
//           placeholder="Enter email"
//         />
//         <button type="submit" onClick={handleClick}>
//           Submit Form
//         </button>
//       </form>
//     </div>
//   );
// };

// ----- VERSION 6 **imp AB aage ka version ke liye tum jaake ⌚⌚⌚28 min⌚⌚ se wo second wala typescript with react wala pedro  ka video dekho***---------
/* **This is Advance**

Version 6:---

How to correctly use typescript when working with context Api ??*/
