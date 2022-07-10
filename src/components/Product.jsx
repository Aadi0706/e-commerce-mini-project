import React,{useState} from "react";
import {Text,Image, Box, HStack} from "@chakra-ui/react";
import { useNavigate } from "react-router";

const Product=({product})=>{

    const {id,name,color,images,gender,original_price,final_price}=product;

    const [image,setImage]=useState(images[0]);

    const navigate=useNavigate();
    
    const showOtherImage=()=>{

        setImage(images[1]);
    };

    const showOriginalImage=()=>{
        setImage(images[0]);
    }


    return (
       
        <Box onMouseEnter={showOtherImage}
            onMouseLeave={showOriginalImage}
            onClick={()=>navigate(`/collections/all/${id}`)}>

        <Image src={image} alt={name+"shoe"}></Image>
        <Text>{name +" | " + color +" | " + gender}</Text>

        <HStack justify="center" >
            <Text as="b">{final_price}</Text>
            <Text as="s" color="gray">{original_price}</Text>
        </HStack>
        </Box>
    )
};

export {Product};