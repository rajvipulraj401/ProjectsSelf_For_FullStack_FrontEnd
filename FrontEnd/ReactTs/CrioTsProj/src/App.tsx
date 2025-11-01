// This is version 1 of tsx where we dont have any props
import React from "react";
import "./App.css";
const App: React.FC = () => {
  const HandleClick = () => {};

  /**
   * ✅ TypeScript me function type karne ke 2 tarike hain:
   *
   * ------------------------------------------------
   * 1) Reusable Function Type (Contract)
   *    - Use `type` OR `interface`
   *    - Yaha return type dena COMPULSORY hota hai
   * ------------------------------------------------
   *
   * --- (A) Using `type`
   *
   *    type AddFn = (a: number, b: number) => number;
   *    const add: AddFn = (a, b) => a + b;
   *
   *
   * --- (B) Using `interface`
   *
   *    interface AddFnInterface {
   *      (a: number, b: number): number;
   *    }
   *
   *    const add2: AddFnInterface = (a, b) => a + b;
   *
   *
   * ------------------------------------------------
   * 2) Inline Function Typing
   *    - Direct function definition
   *    - Return type OPTIONAL (TS infer kar leta hai)
   * ------------------------------------------------
   *
   * ✅ Recommended simple inline function
   *
   *    const multiply = (a: number, b: number) => a * b;
   *
   *
   * ✅ If you want to explicitly mention return type
   *
   *    const multiply2 = (a: number, b: number): number => a * b;
   *
   *
   * ------------------------------------------------
   * ✅ React Event Handler Example (Very Common)
   *    - Event ka type dena zaroori hota hai
   *    - Return type infer ho jata hai (void)
   * ------------------------------------------------
   *
   *    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
   *      console.log("clicked");
   *    };
   *
   *
   * ------------------------------------------------
   * 📌 RULE TO REMEMBER
   * ------------------------------------------------
   * If you're defining a function type (type/interface) → return type must be written
   * If you're writing function directly → return type optional if obvious
   */

  //   ------
  /**
 *  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
  console.log("clicked");
};
 */

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) =>
    console.log("clicked");

  /**
   * 
   * 
   * Note--- agr button ke jagah kisi aur pe click dkh rhe the toh upar waala code
   * aise likhta 
   * 
   *
 const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
  console.log("div clicked");
};

   * | Action                 | Type                                    |
| ---------------------- | --------------------------------------- |
| Button click           | `React.MouseEvent<HTMLButtonElement>`   |
| Input change           | `React.ChangeEvent<HTMLInputElement>`   |
| Select dropdown change | `React.ChangeEvent<HTMLSelectElement>`  |
| Form submit            | `React.FormEvent<HTMLFormElement>`      |
| Keyboard events        | `React.KeyboardEvent<HTMLInputElement>` |
| Focus event            | `React.FocusEvent<HTMLInputElement>`    |

   */

  return (
    <>
      <div className="app-container">
        <h1>Public Holiday Tracker</h1>
        {/* 
        <select>
          <option value="alok">alok</option>
          <option value="alok">alok</option>
        </select> */}
        <label htmlFor="country">Select Country</label>
        <div className="main-content">
          <select id="country" name="country">
            <option value="">-- choose --</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
          </select>

          <button onClick={handleClick}>Fetch Holidays</button>
        </div>
      </div>
    </>
  );
};

export default App;

/**
 *
 *
 * interface ya toh type (ye dono same kaam krta hai thora likhne ka syntax alag hai ...)
 *
 */
