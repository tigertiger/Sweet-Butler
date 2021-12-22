import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const Greeting = ({text}) => {

  const [fadeProp, setFadeProp] = useState({
    fade: 'fade-out',
  });

  useEffect(() => {
      const timeout = setInterval(() => {
        if(fadeProp.fade === 'fade-out'){
          setFadeProp({
            fade:'fade-in'
          })
        }
      }, 1000)
    return () => clearInterval(timeout)
  }, [fadeProp])

  return (
    <>
      <h1 className={fadeProp.fade}>{text}</h1>
    </>
  )
}

Greeting.defaultProps = {
  text: 'Hello.'
}

Greeting.propTypes = {
  text: PropTypes.string,
}

export default Greeting;