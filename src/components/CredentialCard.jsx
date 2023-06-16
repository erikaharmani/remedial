import React from "react";
import {Box, VStack, Text, IconButton} from '@chakra-ui/react';
import {EditIcon, DeleteIcon} from "@chakra-ui/icons";
import {useNavigate} from "react-router-dom";

function CredentialCard({credential, onDelete}) {
    const navigate = useNavigate();



    return (
        <Box position='relative'>
            <VStack align="start">
                <Text>{credential.name}</Text>
                <Text>{credential.url}</Text>
                <Text>Username: {credential.username}</Text>
                <Text>Password: {credential.password}</Text>
            </VStack>
            <Box position="absolute">
                <IconButton icon={<EditIcon />} onClick={() => navigate(`/credentials/${credential.id}/edit`)} />
                <IconButton icon={<DeleteIcon />} onClick={() => onDelete(credential.id)} />
            </Box>
        </Box>   
    )
}

export default CredentialCard;
