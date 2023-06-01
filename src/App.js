import logo from './logo.svg';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import './App.css';
import Header from './Components/Header';
import { Typography } from "@mui/material";
import theme from './theme';
import { Routes,Route ,Switch, Router } from 'react-router-dom'
import Products from './Components/Products';
import CartPage from './Components/CartPage';
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<Products />}/>
        <Route path="/cartpage" element={<CartPage/>}/>
        </Routes>
        
    </div>
  );
}

export default App;
