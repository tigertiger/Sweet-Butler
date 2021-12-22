import React from 'react';
import Greeting from './../components/Greeting';

function Welcome() {
  return (
    <>
    <div>
      <Greeting />
    </div>
    <div>
      <Greeting text="How Are You Feeling?" />
    </div>
    <div>
      <h3>Questions Block Will Go Here</h3>
    </div>
    </>
  )
}

export default Welcome;
