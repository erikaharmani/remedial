import React from 'react';
import {Box, Flex, Heading, Spacer, Link as ChakraLink} from "@chakra-ui/react";
import {Link as RouterLink} from 'react-router-dom'

function Header() {
    return (
        <Box>
            <Flex>
                <ChakraLink as={RouterLink} _hover={{textDecoration: 'none'}} to='/' />
                <Heading as="h1" size="lg">
                  Password Manager</Heading>
            </Flex>
        </Box>
    );
}

export default Header;
