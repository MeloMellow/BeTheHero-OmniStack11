import React, { useState } from 'react';

import Header from './Header';

function App() {
  let [counter, setCounter] = useState(0);

  function inc(){
    setCounter(counter+1);
    console.log(counter);
  }

  return (<>
    <Header>Contador: {counter}</Header>
    <button onClick={inc} >Increment</button>
  </>);
}

export default App;
