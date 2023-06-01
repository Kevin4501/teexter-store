import React from 'react';
import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Rating,
    Typography,
  } from "@mui/material";
import Box from "@mui/material/Box";
import theme from '../theme';
import './Header.css';
import { useHistory, Link } from "react-router-dom";
function Header(props) {

    return (
        <div>
            <ul className='navBar'>
            <li className='Text'><Typography theme= {theme} variant="h4" >TeexTer-Store</Typography></li>
            <li>
                <Button ><p className='product' ><Link to ="/">Products</Link></p></Button>
                <Button> <Link to = "/cartpage"><AddShoppingCartOutlined /></Link></Button>
            </li>
            
            </ul>
          
        </div>
    );
}

export default Header;