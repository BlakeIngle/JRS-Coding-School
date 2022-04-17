import React, { useContext } from 'react'

// import { myContext } from './LargeProject'; 
// we must import the context var from the provider

export default function GreatGreatGrandChild() {

  /* 
   * this child must update the 'count' state var at the root
   * of the 'LargeProject' which is 4 decendants deep
   *
   * passing the state variable and the setState function 
   * is technically allowed, but creates a ton of room for error
   *
   * instead, since this project is 'large' and 'complex' we 
   * can take advantage of the 'useContext' hook to skip passing
   * our props all the way down through children components
   * that really do not need those props
   */

  // destructure the props of our context value object
  // const { count, setCount } = useContext(myContext);

  function handleButtonClicked() {
    // setCount(count + 1);
  }

  return (
    <div>
      GreatGreatGrandChild
      <button onClick={handleButtonClicked}>
        +
      </button>
    </div>
  )
}
