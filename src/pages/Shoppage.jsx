import React from 'react';
import {useEffect} from 'react';
import {takeData} from "../Redux/Products/actions";
import { Text } from '@chakra-ui/react'
import {useDispatch,useSelector} from "react-redux";
import { Filter } from '../components/Filter';
import { Product } from '../components/Product';
import { Grid, GridItem } from '@chakra-ui/react'

const Shoppage =()=>{
    
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
       <Text>Shop All</Text>
        <Filter/>
        {
            loading ?
            <h1>Entities loading</h1>
            : error ?
            <h1>Something went wrong, please try again</h1>
            :<Grid templateColumns='repeat(3, 1fr)' gap={6}>
                {
                    products.length>0 && products.map((product)=>{
                        return <Product key={product.id} product={product}/>
                    })
                }
            </Grid>
        }
        </div>
       
    )
}

export {Shoppage}