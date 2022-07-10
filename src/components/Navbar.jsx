import React from "react";
import { Text, Flex, Spacer, Image, Icon } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import {BsSearch,BsBasket3} from "react-icons/bs";
import {RiUserLine} from "react-icons/ri";
import {} from "react-icons/bs"

const Navbar=()=>{

    return (
        <Flex
        bg="white"
        borderBottom="1px solid #b1b3b5"
        p={1}
        align="center"
        justify="center">

            <Link to="/">
            <Image src='https://cdn.shopify.com/s/files/1/0258/2485/4100/files/flatheads-logo-new-hotizontal_180x_2x_bf74c8db-79f1-4904-b343-3b0e2681ec07_288x46.png?v=1647508945' 
              alt='Flatheads'
              height='25px'
              m={25} 
              />
            </Link>
            
              {/* <Spacer/> */}
              
              <Text m={10}>
              <Link to='/collections/all'>Shop</Link>
              </Text>
             
             <Text m={10}>
              <Link to='/'>Home</Link>
              </Text>
            
              <Text m={10}>
              <Link to='/'>Men</Link>
              </Text>
           
              <Text m={10}>
              <Link to='/'>Women</Link>
              </Text>
           
              <Text m={10}>
              <Link to='/'>About</Link>
              </Text>
            
              <Text m={10}>
              <Link to='/'>Help</Link>
              </Text>

              <Spacer/> 

              <Icon boxSize="20px"mx={4} as={BsSearch}/>
              <Icon boxSize="20px"w={5} h={6} as={RiUserLine}/>
              <Icon boxSize="20px"w={5} h={6} as={BsBasket3}/>

              <Spacer/>
            
        </Flex>
    );

};

export {Navbar};