import React, { createContext, useState } from 'react'
import Child from './Child';

// export const myContext = createContext(); 
// init a 'context' object
// this must be created OUTSIDE of the function component
// the context must also be exported

export default function LargeProject() {

  const [count, setCount] = useState(0);

  // const contextValue = { count, setCount }

  return (
    // wrap the 'children' in the provider element
    // the 'value' attribute will be visible to all nested children
    // <myContext.Provider value={contextValue} >
      <div>
        Large Project, count: {count}
        <Child />
      </div>
    // </myContext.Provider>
  )
}
