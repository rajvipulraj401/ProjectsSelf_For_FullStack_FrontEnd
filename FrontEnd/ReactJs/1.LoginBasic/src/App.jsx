// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   return (
//     <>
//       <div className="container">
//         {isLoggedIn ? <h1>Welcome</h1> : <h1>Please login</h1>}

//         <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
//           {" "}
//           {isLoggedIn ? "Logout" : "Login"}
//         </button>
//       </div>
//     </>
//   );
// };

// export default App;

// // ----Version 2----(little advanced)
// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleLogin = async () => {
//     setIsLoading(true);

//     // Simulate API call delay
//     await new Promise((resolve) => setTimeout(resolve, 1500));

//     setIsLoggedIn(true);
//     setIsLoading(false);
//   };

//   const handleLogout = () => setIsLoggedIn(false);

//   return (
//     <div className="container">
//       {isLoggedIn ? <h1>Welcome</h1> : <h1>Please login</h1>}

//       <button
//         onClick={isLoggedIn ? handleLogout : handleLogin}
//         disabled={isLoading}
//       >
//         {isLoading ? (
//           <>
//             <span className="spinner"></span>
//             Loading...
//           </>
//         ) : isLoggedIn ? (
//           "Logout"
//         ) : (
//           "Login"
//         )}
//       </button>
//     </div>
//   );
// };

// export default App;

// ------Version 3------(advanced with a popup)------------

// // ----Version 3----(with popup alerts)
// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleLogin = async () => {
//     setIsLoading(true);

//     // Simulate API call delay
//     await new Promise((resolve) => setTimeout(resolve, 1500));

//     setIsLoggedIn(true);
//     setIsLoading(false);

//     // Success popup
//     alert("🎉 Successfully logged in! Welcome!");
//   };

//   const handleLogout = () => {
//     // Confirmation dialog
//     const confirmLogout = window.confirm("Are you sure you want to log out?");

//     if (confirmLogout) {
//       setIsLoggedIn(false);
//       alert("👋 You have been logged out successfully!");
//     }
//   };

//   return (
//     <div className="container">
//       {isLoggedIn ? <h1>Welcome</h1> : <h1>Please login</h1>}

//       <button
//         onClick={isLoggedIn ? handleLogout : handleLogin}
//         disabled={isLoading}
//       >
//         {isLoading ? (
//           <>
//             <span className="spinner"></span>
//             Loading...
//           </>
//         ) : isLoggedIn ? (
//           "Logout"
//         ) : (
//           "Login"
//         )}
//       </button>
//     </div>
//   );
// };

// export default App;

// // -----------VERSION 4 :-- CUSTOM popup and  ADVANCED VERSION-----
// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [showSuccessPopup, setShowSuccessPopup] = useState(false);
//   const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

//   const handleLogin = async () => {
//     setIsLoading(true);
//     await new Promise((resolve) => setTimeout(resolve, 1500));
//     setIsLoggedIn(true);
//     setIsLoading(false);
//     setShowSuccessPopup(true);
//   };

//   const handleLogout = () => {
//     setShowLogoutConfirm(true);
//   };

//   const confirmLogout = () => {
//     setIsLoggedIn(false);
//     setShowLogoutConfirm(false);
//     alert("👋 You have been logged out successfully!");
//   };

//   const cancelLogout = () => {
//     setShowLogoutConfirm(false);
//   };

//   return (
//     <div className="container">
//       {isLoggedIn ? <h1>Welcome</h1> : <h1>Please login</h1>}

//       <button
//         onClick={isLoggedIn ? handleLogout : handleLogin}
//         disabled={isLoading}
//       >
//         {isLoading ? (
//           <>
//             <span className="spinner"></span>
//             Loading...
//           </>
//         ) : isLoggedIn ? (
//           "Logout"
//         ) : (
//           "Login"
//         )}
//       </button>

//       {/* Success Popup */}
//       {showSuccessPopup && (
//         <div className="popup-overlay">
//           <div className="success-popup">
//             <div className="success-icon">✅</div>
//             <h3>Success!</h3>
//             <p>You have successfully logged in!</p>
//             <button onClick={() => setShowSuccessPopup(false)}>OK</button>
//           </div>
//         </div>
//       )}

//       {/* Logout Confirmation */}
//       {showLogoutConfirm && (
//         <div className="popup-overlay">
//           <div className="confirm-popup">
//             <div className="warning-icon">⚠️</div>
//             <h3>Confirm Logout</h3>
//             <p>Are you sure you want to log out?</p>
//             <div className="button-group">
//               <button className="cancel-btn" onClick={cancelLogout}>
//                 Cancel
//               </button>
//               <button className="confirm-btn" onClick={confirmLogout}>
//                 Logout
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

// ----Version 5----(with snackbar notifications)
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    show: false,
    message: "",
    type: "",
  });

  const showSnackbar = (message, type) => {
    setSnackbar({ show: true, message, type });
    setTimeout(() => {
      setSnackbar({ show: false, message: "", type: "" });
    }, 3000);
  };

  const handleLogin = async () => {
    setIsLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoggedIn(true);
    setIsLoading(false);
    showSnackbar("🎉 Successfully logged in! Welcome!", "success");
  };

  const handleLogout = () => {
    // Confirmation dialog
    const confirmLogout = window.confirm("Are you sure you want to log out?");

    if (confirmLogout) {
      setIsLoggedIn(false);
      showSnackbar("👋 You have been logged out successfully!", "info");
    }
  };

  return (
    <div className="container">
      {isLoggedIn ? <h1>Welcome</h1> : <h1>Please login</h1>}

      <button
        onClick={isLoggedIn ? handleLogout : handleLogin}
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <span className="spinner"></span>
            Loading...
          </>
        ) : isLoggedIn ? (
          "Logout"
        ) : (
          "Login"
        )}
      </button>

      {/* Snackbar */}
      {snackbar.show && (
        <div className={`snackbar ${snackbar.type}`}>
          <span className="snackbar-icon">
            {snackbar.type === "success" ? "✅" : "ℹ️"}
          </span>
          <span className="snackbar-message">{snackbar.message}</span>
          <button
            className="snackbar-close"
            onClick={() => setSnackbar({ show: false, message: "", type: "" })}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
