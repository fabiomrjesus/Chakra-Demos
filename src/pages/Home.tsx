import { Box, GridItem, SimpleGrid, Text, VStack, Image, Heading, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Home(){
    return <Box w="100%">
        <Center>
            <Heading as="h1">REACT - CHAKRA DEMOS</Heading>
        </Center>
        <SimpleGrid mt="5vh" w="50%" mx="auto" columns={3}>
            <GridItem>
                <Link to="storage">
                    <VStack>
                        <Image w="100px" h="auto" src="./images/storage.png"/>
                        <Text fontWeight="bold">Storage</Text>
                    </VStack>
                </Link>
            </GridItem>
        </SimpleGrid>    
    </Box> 

}