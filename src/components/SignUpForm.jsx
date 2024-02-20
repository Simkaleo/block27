import { useState } from "react";


export default function SignUpForm () {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);

// Question - I put the const above the export function. should it always be placed under the export default function? 


  // state
  async function handleSubmit (event) {
    event.preventDefault();
    // console.log("My vision was CHICKen ParmiGIANA! 🍝")
  

// Because the network request could fail, start by writing a try/catch block in our handleSubmit function. After you preventDefault delete your console.log and replace it with a try/catch. In your catch block, pass the error.message to your setError function. This way, we can store a server error in the application state and display it.

  try {
    const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup");
      const result = await response.json();
      console.log(result); 
    }

  } catch (error) {
    console.error(error.message);
  }
}


// use Effect? Ask the question 




// return
  return (
    <>
    {/* Why is there the syntax spread? */}
  <h2>Sign Up</h2>;
  {error && <p>{error}</p>}
{/* the above is just the way to do it */}


{/* // create a form element with two inputs and a button with the text "submit" nested inside. To keep the application accessible to screen readers, make sure to nest your input tags inside a parent label tag with appropriate text. */}

{/* Solution Provided is the following: 
<input value={username} onChange={(e) => setUsername(e.target.value)} /> */}
    <form onSubmit={handleSubmit}>
<label for= "text">Username:
<input value={username}
onChange={(e) => (
  setUsername(e.target.value)}
  // is there a typo in tagert in the text provided? also should it be event or e?
  />
 </label>
//  QUESTION is the order important below? I have them switched. 
<label input= {password}>Password:
<input type="password"
onChange={(e) => (
  setUsername(e.target.value)
  />
 
  </label>
  <button type="submit">Submit</button> 
 {/* Why is this so different from the solution provided. Do we not need to do so much? */}
  </form>
  </>
  ); 
}