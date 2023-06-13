//Use state Hook is use to enable state management in React function component.
//—---------------------------------------------

import React, { useState } from 'react'

function FunctionComponent() {
  let [x, setX] = useState(0)

  function updateCount() {
    setX(x + 1)
  }

  return (
    <div>
      <h3>Count: {x}</h3>
      <button onClick={updateCount}>Click here</button>
    </div>
  )
}

export default FunctionComponent
