import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Questions from './Questions';

const Greeting = ({ text, text2 }) => {

  const [fadeProp, setFadeProp] = useState({
    fade: 'fade-out',
  });

  const [fadeProp2, setFadeProp2] = useState({
    fade: 'fade-out',
  });

  const [fadeProp3, setFadeProp3] = useState({
    fade: 'fade-out',
  });

  useEffect(() => {
    const timeout = setInterval(() => {
      if (fadeProp.fade === 'fade-out') {
        setFadeProp({
          fade: 'fade-in'
        })
      }
      if (fadeProp.fade === 'fade-in') {
        setFadeProp2({
          fade: 'fade-in'
        })
      }
      if (fadeProp2.fade === 'fade-in') {
        setFadeProp3({
          fade: 'fade-in'
        })
      }
    }, 1000)
    return () => clearInterval(timeout)
  }, [fadeProp, fadeProp2])

  return (
    <>

        <h1 id="greebing1" className={fadeProp.fade}>{text}</h1>
        <h1 id="greebing2" className={fadeProp2.fade}>{text2}</h1>
        <h1 className={fadeProp3.fade}><Questions /></h1>

    </>
  )
}

Greeting.defaultProps = {
  text: 'Hello.'

}

Greeting.propTypes = {
  text: PropTypes.string
}

export default Greeting;