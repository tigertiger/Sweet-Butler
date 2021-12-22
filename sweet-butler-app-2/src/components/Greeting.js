import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const Greeting = ({text, text2}) => {
  
  const [fadeProp, setFadeProp] = useState({
    fade: 'fade-out',
  });

  const [fadeProp2, setFadeProp2] = useState({
    fade: 'fade-out',
  });
  
  useEffect(() => {
    const timeout = setInterval(() => {
      if(fadeProp.fade === 'fade-out'){
        setFadeProp({
          fade:'fade-in'
        })
      }
      if(fadeProp.fade === 'fade-in') {
        setFadeProp2({
          fade:'fade-in'
        })
      }
    }, 1000)
    return () => clearInterval(timeout)
  }, [fadeProp])

  return (
    <>
      <h1 className={fadeProp.fade}>{text}</h1>
      <h1 className={fadeProp2.fade}>{text2}</h1>
    </>
  )
}

Greeting.defaultProps = {
  text: 'Hello.'
}

Greeting.propTypes = {
  text: PropTypes.string,
  text: PropTypes.string
}

export default Greeting;