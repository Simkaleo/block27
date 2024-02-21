import { useState, useEffect } from "react"

function Authenticate ({token, setToken}) {
  const [successMessage, setSuccessMessage] = useState(null)
  const [error, setError] = useState (null);
  console.log(token)

  async function handleClick() {
    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate',
      {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      });
      const result = await response.json();
      setSuccessMessage(result.message)
      console.log(result.message)
    } catch (error){
      setError(error.message);
      console.error(error.message)
    }
  }

  return (
    <>
<h2>Authenticate</h2>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            <button onClick={handleClick}>Authenticate Token!</button>
    {/* <button onClick={handleClick}>Authenticate!</button>
    {success ? <div>Successfully Authenticated!</div> : <div>Authenticate Token</div>} */}
    </>
  );
}

export default Authenticate