import React from 'react';
import {useEffect} from 'react';
import {takeData} from "../Redux/Products/actions";
import { Text } from '@chakra-ui/react'
import {useDispatch,useSelector} from "react-redux";
import { Filter } from '../components/Filter';
import { Product } from '../components/Product';
import { Grid, GridItem } from '@chakra-ui/react'

const ProductDetails =()=>{
    
    const loading=useSelector((state)=>state.loading);
    const error=useSelector((state)=>state.error);
    const products=useSelector((state)=>state.products);
    console.log(products);
    const dispatch= useDispatch();

    useEffect(()=>{
        if(products?.length===0){

            dispatch(takeData)
        }
    },[dispatch,products.length])

    return (
        <div>
     <h2>Product Details</h2>
        </div>
       
    )
}

export { ProductDetails}