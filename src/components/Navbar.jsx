import React from "react";
import { Flex, Spacer, Image } from '@chakra-ui/react';
import { Routes, Route, Link } from "react-router-dom";

const Navbar=()=>{

    return (
        <Flex>
              <Image src='https://cdn.shopify.com/s/files/1/0258/2485/4100/files/flatheads-logo-new-hotizontal_180x_2x_bf74c8db-79f1-4904-b343-3b0e2681ec07_288x46.png?v=1647508945' 
              alt='Flatheads'
              height='25px'
              m={25} />
              <Spacer/>
              <Link to='http://'>Shop</Link>
            Home
            Men
            Women
            About
            Help
            icons..

        </Flex>
    );

};

export {Navbar};