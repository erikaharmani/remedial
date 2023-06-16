import {useState, useEffect} from 'react';
import {Heading, VStack, Box, FormControl, FormLabel, Input, Button} from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';

function EditCredentialPage() {

    const navigate = useNavigate();
    
    const params = useParams();

    const fetchDetailById = async (id) => {
        try {
          const response = await fetch(`http://localhost:3366/credentials/${id}`)
          const data = await response.json();

          setName(data.name);
          setUrl(data.url);
          setUsername(data.username);
          setPassword(data.password);
          
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
      fetchDetailById(params.id);
    }, [params.id]);

    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          await fetch(`http://localhost:3366/credentials/${params.id}`, {
              method: "PATCH",
              headers: {
                  "Content-type": "application/json",
              },
              body: JSON.stringify({
                nama: name,
                url: url,
                username: username,
                password: password,
              }),
          })

          navigate("/credentials")
        } catch (error) {
          console.error(error);
        }
    };

    return (
        <VStack spacing={6} width='100%'>
            <Heading as='h2' size='xl'>
                Edit Credentials
            </Heading>
            <Box>
                <form onSubmit={handleSubmit}>
                    <VStack>
                        <FormControl>
                            <FormLabel>Nama</FormLabel>
                            <Input type="text" placeholder="please enter your name" onChange={(e) => setName(e.target.value)} value={name}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>URL</FormLabel>
                            <Input type="text" placeholder="please enter url" onChange={(e) => setUrl(e.target.value)} value={url}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Username</FormLabel>
                            <Input type="text" placeholder="please enter username" onChange={(e) => setUsername(e.target.value)} value={username}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Password</FormLabel>
                            <Input type="text" placeholder="please enter password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                        </FormControl>
                        <Button colorScheme="pink" type="submit" >
                            Edit Credential
                        </Button>
                    </VStack>
                </form>
            </Box>
        </VStack>
    );
}

export default EditCredentialPage;