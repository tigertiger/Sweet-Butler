import * as React from 'react';
import { Link } from "react-router-dom";
import BungalowIcon from '@mui/icons-material/Bungalow';
import BungalowTwoToneIcon from '@mui/icons-material/BungalowTwoTone';
import BungalowOutlinedIcon from '@mui/icons-material/BungalowOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Grid from "@material-ui/core/Grid";

function Nav(){
  return (
    <div className="navBar">
      <Link className="navLink" to="/"><BungalowOutlinedIcon className="navIcon" /> Home</Link><br />
      <Link className="navLink" to="/cupboard"><ReceiptLongOutlinedIcon className="navIcon" /> Your Lists</Link><br />
      <Link className="navLink" to='/login'><LoginOutlinedIcon className="navIcon" /> Log In</Link><br />
      <Link className="navLink" to='/register'><LogoutOutlinedIcon className="navIcon" /> Sign Up</Link>

    </div>
  );
}

export default Nav;