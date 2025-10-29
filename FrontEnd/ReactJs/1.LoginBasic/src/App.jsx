import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
