import React,{useState} from 'react';
import {getCurrentProductData} from "../Redux/Products/actions"
import {useEffect} from 'react';
import {takeData} from "../Redux/Products/actions";
import { Text } from '@chakra-ui/react'
import {useDispatch,useSelector} from "react-redux";
import { Filter } from '../components/Filter';
import { Product } from '../components/Product';
import { Grid, GridItem, Flex,Box, Button, HStack } from '@chakra-ui/react'
import {useParams} from 'react-router-dom';
// import { Product } from '../components/Product';

const ProductDetails =()=>{
    
    const loading=useSelector((state)=>state.product.loading);
    const error=useSelector((state)=>state.product.error);
    const products=useSelector((state)=>state.product.currentProduct);
    console.log(products);
    const dispatch= useDispatch();

    const {id}=useParams();
    console.log(id);

    const [size,setSize]=useState(null);

    useEffect(()=>{
        if(id){

            dispatch(getCurrentProductData(id))
        }
    },[dispatch,id])
     console.log(products);

 if(loading){
    return <h1>loading...</h1>
 }
 if(error){

    return<h1>Something went wrong</h1>
 }
 if(!products){

    return <h2>Product {id} not found</h2>
 }

    return (
        <Flex justify="center" align="center">
     <Product product={products}/>
     <Box>
        <Text>Choose a Size</Text>
        <HStack>
        {
            products.sizes.map((size)=>{
                return <Button key={size}
                onClick={()=>setSize(size)} >{size}</Button>
            })
        }
        </HStack>
        <Button m={5} p={4} bg="yellow" disabled={!size} >
            {!size? "Please select a size" :"ADD TO CART"}
        </Button>
       
     </Box>
        </Flex>
       
    )
}

export { ProductDetails}

// Object.keys(products).length===0