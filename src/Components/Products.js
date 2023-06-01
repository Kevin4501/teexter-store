import React from 'react';
import { useRef } from 'react';
import { Search, SentimentDissatisfied } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import {
  CircularProgress,
  Grid,
  InputAdornment,
  TextField,
  Typography
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState , useContext} from "react";
import Header from './Header';
import theme from '../theme';
import './Products.css'
import Filter from './Filter';
import CardProducts from './CardProducts';
import { Context } from './Context';

function Products(props) {
    const [userData , setUserData] = useState([]);
    const [uncheckedData , setUncheckedData] = useState([])
    async function fetchUserData(){
        try{
            const resp = await fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json")
            const data = await resp.json();
            console.log(data)
            setUserData(data)
            setUncheckedData(data)
        }
        catch(err){
            console.log(err)
        }
    } 
    useEffect(()=>{
        fetchUserData();
    },[1])
    
    const filterByColor = (event)=>{
        const {checked , value} = event.target;
        if(checked){
            const colorFilteredProducts = userData.filter((ele)=>ele.color===value);
            setUserData(colorFilteredProducts)

        }
        else if(!checked){
            setUserData(uncheckedData)
        }
    }
    const filterByGender = (event)=>{
        const {checked , value} = event.target;
        if(checked){
            const genderFilteredProducts = userData.filter((ele)=>ele.gender===value);
            setUserData(genderFilteredProducts)
        }
        else if(!checked){
            setUserData(uncheckedData)
        }
    }
    const filterByPrice = (event)=>{
        const {checked , value} = event.target;
        let selectedPrice = value.trim().split("-")
        let low = selectedPrice[0]
        let high = selectedPrice[1]
        console.log(low,high)
        if(checked){
            if(selectedPrice.length>1){
                let filteredPrice = userData.filter((datas)=>datas.price>=low && datas.price<=high)
                setUserData(filteredPrice)
            }
            else{
                let filteredPrice = userData.filter((datas)=>datas.price>=450)
                console.log(value)
                setUserData(filteredPrice)
            }
           
        }
        
        else{
            setUserData(uncheckedData)
        }
    }
    const filterByType = (event)=>{
        const{checked,value}=event.target;
        if(checked){
            const typeFilteredProducts = userData.filter((ele)=>ele.type===value)
            setUserData(typeFilteredProducts)
        }
        else if(!checked){
            setUserData(uncheckedData)
        }
    }
    console.log((userData))

    const searchHandler = (value) =>{
        let searchData = [];
        if(value.length>1){
            for(let i = 0 ; i<userData.length;i++){
                if(userData[i].name === value){
                    searchData.push(userData[i])
                }
                else if (userData[i].type === value){
                    searchData.push(userData[i])
                }
                else if(userData[i].name.split(" ").length>1){
        
                    if(userData[i].name.split(" ")[0].toLowerCase()===value.toLowerCase()){
                        searchData.push(userData[i])
                    }else if(userData[i].name.split(" ")[1].toLowerCase()===value.toLowerCase()){
                        searchData.push(userData[i])
                    }
                }
               }
        }
        else{
            searchData.push(...uncheckedData)
        }
     
       return searchData;
    }

    let timer
    
    const debounceSearch = (event, delay) => {
        clearTimeout(timer)
        timer = setTimeout(()=>{
            console.log(event.target.value)
            let result = searchHandler(event.target.value)
            setUserData(result)
        } , delay)
    
      };

    return (
        <div>
            <Typography theme={theme}>
            <Header />
           </Typography>
            
            <div className='search-wrapper'>
                <div className='input-holder'>
                    <input type = "text" placeholder="Look For Products" className = "search-input"onChange={(e)=>debounceSearch(e,1500)}></input>
                    <button className='filter-icon'><FilterListIcon/></button>
                </div>
                
            </div>
            <div className='outer-wrap'>  
            <div className='filter-div'><Filter datas = {userData} filterByColor={filterByColor} filterByGender={filterByGender} filterByPrice={filterByPrice} filterByType={filterByType}></Filter></div>
            <div className='card-products'>
                {
                    userData.map((users)=> <CardProducts datas = {users} />)
                }
           </div>
            </div>
        </div>
    );
}

export default Products;