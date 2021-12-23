import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Brand from './Brand';

const ForPresentation = ({ text, text2 }) => {

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

        <h1 className={fadeProp.fade}><Brand /></h1>
        <h1 id="greebing1" className={fadeProp2.fade}>Sweet Butler</h1>
        <h1 id="greebing2" className={fadeProp3.fade}>Be Kind to Yourself</h1>

    </>
  )
}

ForPresentation.defaultProps = {
  text: 'Hello.'
}

ForPresentation.propTypes = {
  text: PropTypes.string,
  text: PropTypes.string
}

export default ForPresentation;