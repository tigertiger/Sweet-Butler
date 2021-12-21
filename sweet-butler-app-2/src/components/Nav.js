import * as React from 'react';
import { Link } from "react-router-dom";

function Nav(){
  return (
    <div>

      <Link to='/login'>Log In</Link>
      <Link to='/register'>Sign Up</Link>

    </div>
  );
}

export default Nav;