import React, {useState} from 'react'
import { MainPageLayout } from '../components/MainPageLayout'

export const Input = () => {
  const [input, setInput] = useState('');

  const onInputChange = (event) => {
    setInput(event.target.value)
  }

  //Search JavaScript event key codes
  const onKeyDown = (event) => {
    if(event.keyCode === 13) {
      // function goes here
    }
  };

  return (
    <>
      <input 
        type="text"
        placeholder ="What Can I Help With?"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />

      <button type="button">
        Add
      </button>
    </>
  )
}