// // debug-demo.js
// // In short, the JavaScript debugger toolbar (like in Chrome DevTools or VS Code) usually has these buttons:

// // ▶ Continue / Resume (F8) → Runs code until the next breakpoint.

// // ⤵ Step Over (F10) → Run the current line; if it’s a function call, skip inside it.

// // ↘ Step Into (F11) → Go inside the function call on the current line.

// // ↩ Step Out (Shift+F11) → Finish the current function and return to the caller.

// // ⏹ Stop / Disconnect → End the debugging session.

// // ⏸ Pause / Break → Pause code execution at the current point.

// // ⟳ Restart → Restart the program/debugging session.
// // How to Test in VS Code Debugger:

// // Open this file (debug-demo.js) in VS Code.

// // Set a breakpoint on let numbers = [2, 3];.

// // Run debugger with Node.js (select “Run and Debug” → Node.js).

// // Use toolbar buttons:

// // Continue (▶) → runs to the next breakpoint.

// // Step Over (⤵) → executes a line without diving into functions.

// // Step Into (↘) → goes inside multiply().

// // Step Out (↩) → exits from inside multiply() back to addAndMultiply().

// // Restart (⟳) → restarts program from the beginning.

// // Stop (⏹) → ends debugging.

// function multiply(a, b) {
//   let result = a * b;   // Step Into here
//   return result;        // Step Out will finish this function
// }

// function addAndMultiply(x, y) {
//   let sum = x + y;               // Pause here
//   let product = multiply(x, y);  // Step Into goes inside multiply()
//   return { sum, product };
// }

// function main() {
//   let numbers = [2, 3];          // Place breakpoint here
//   let output = addAndMultiply(numbers[0], numbers[1]); // Test Step Over vs Step Into
//   console.log("Final result:", output); // Continue runs to here
// }

// main();

// math.js
function add(a, b) {
  return a + b;
}

// // module.exports = { add };
// export default { add };

// // test/math.test.js
// const { expect } = require("chai");
// const { add } = require("../math");

// describe("Unit Test for add()", () => {
//   it("should return 5 when adding 2 + 3", () => {
//     expect(add(2, 3)).to.equal(5); // This is the unit test
//   });
// });


