import React from 'react';
import Greeting from './../components/Greeting';
import Questions from '../components/Questions';

function Welcome() {
  return (
    <>
    <div>
      <Greeting text2="How Are You Feeling?" />
    </div>
    <div>
      <Questions />
    </div>
    </>
  )
}

export default Welcome;
