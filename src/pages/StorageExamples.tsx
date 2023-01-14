import { Accordion, Box, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Text, VStack, HStack, Input, Button } from "@chakra-ui/react"
import { useState } from "react";
import { useSessionStorage } from "usehooks-ts";

export default function StorageExamples()
{
    return <Accordion allowMultiple>
        <BrowserStorage/>
        <BrowserStorageVsStorageHook/>
    </Accordion>
}

export interface AccordionSectionProps
{
    header:string,
    children:any
}

export function AccordionSection({header, children}:AccordionSectionProps)
{
    const headerText = {w:"100%", fontWeight:"bold", fontSize:"1.25vw"}
    return <AccordionItem>
        <h2>
        <AccordionButton>
            <Box as="span" flex='1' textAlign='left' {...headerText}>
                {header}
            </Box>
            <AccordionIcon />
        </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
            {children}
        </AccordionPanel>
    </AccordionItem>
}

export function BrowserStorage()
{
    const headerText = {w:"100%", fontWeight:"bold", fontSize:"1.25vw"}
    const sectionText = {w:"100%", fontSize:"0.9vw"}
    return <AccordionSection header="Storing data in your browser">
        <VStack align='flex-start' alignItems='flex-start' {...sectionText} >
                <Text>There are three main ways to store data in your browser. </Text>
                <HStack w="100%">
                    <VStack w="100%">
                        <Text {...headerText}>Cookies</Text>
                        <Text {...sectionText}>👍Supported by almost all browsers</Text>
                        <Text {...sectionText}>👉Stores non-sensitive data</Text>
                        <Text {...sectionText}>👍Has expiration date</Text>
                        <Text {...sectionText}>👎It's only able to store 4kb of data</Text>
                        <Box mx="auto" bg="#eeeeee" {...sectionText}>
                            <Text>const data = document.cookie.getItem("data")</Text>
                            <Text>document.cookie = "data=value")</Text>
                        </Box>
                    </VStack>
                    <VStack w="100%">
                        <Text {...headerText}>Session storage</Text>
                        <Text {...sectionText}>👉Data is deleted when the tab closes</Text>
                        <Text {...sectionText}>👉Stores sensitive data</Text>
                        <Text {...sectionText}>👍Allows up to 5MB of storage</Text>
                        <Text {...sectionText}>👎The data is not sent in a request</Text>
                        <Box bg="#eeeeee" {...sectionText}>
                            <Text>const data = window.sessionStorage.getItem("data")</Text>
                            <Text>window.sessionStorage.setItem("data", "value")</Text>
                        </Box>
                    </VStack>
                    <VStack w="100%">
                        <Text {...headerText}>Local storage</Text>
                        <Text {...sectionText}>👉Data is not deleted when the browser closes</Text>
                        <Text {...sectionText}>👍Great for offline storage</Text>
                        <Text {...sectionText}>👍Allows up to 10MB of storage</Text>
                        <Text {...sectionText}>👎The data is not sent in a request</Text>
                        <Box bg="#eeeeee" {...sectionText}>
                            <Text>const data = window.localStorage.getItem("data")</Text>
                            <Text>window.localStorage.setItem("data", "value")</Text>
                        </Box>
                    </VStack>
                </HStack>
            </VStack>
    </AccordionSection>
}

export function BrowserStorageVsStorageHook()
{
    const headerText = {w:"100%", fontWeight:"bold", fontSize:"1.25vw"}
    const sectionText = {w:"100%", fontSize:"0.9vw"}
    const tokenName="token_storage_test"
    const [token1, setToken1] = useState("");
    const [token2Input, setToken2Input] = useState("");
    const [token2, setToken2] = useSessionStorage(tokenName, "");
    const token = window.sessionStorage.getItem(tokenName)
    return <AccordionSection header="Browser Storage vs using hooks">
                <VStack align='flex-start' alignItems='flex-start' {...sectionText}  >
                    <Text>You can store data on your browser with either local or session storage. Browser stored data can't be fetched when the window loads. </Text>
                    <Box bg="#eeeeee" textAlign="left">
                        <Text>{"const token = window.sessionStorage.getItem(\"token\")"}</Text>
                        <Text>{"return <Text>{token}</Text>"}</Text>
                    </Box>
                    <HStack w="100%">
                        <HStack w="100%">
                            <Input w="30%"  value={token1} onChange={(e)=>setToken1(e.target.value)} type="text"/>
                            <Button w="10%" onClick={()=>{window.sessionStorage.setItem(tokenName, token1)}}>Try me</Button>
                            <Text> Data Update - {token}</Text>
                        </HStack>
                    </HStack>

                    <Text>With the useSessionStorage/useLocalStorage hook, however, the content is automatically updated and you can use it as a control mechanism</Text>
                    <Box bg="#eeeeee" textAlign="left">
                        <Text>{"const [token, setToken] = useSessionStorage(\"token\")"}</Text>
                        <Text>{"return <Text>{token}</Text>"}</Text>
                    </Box>
                    <HStack w="100%">
                        <Input w="30%"  value={token2Input} onChange={(e)=>setToken2Input(e.target.value)} type="text"/>
                        <Button w="10%"  onClick={()=>{setToken2(token2Input)}}>Try me</Button>
                        <Text> Data Update - {token2}</Text>
                    </HStack>
                </VStack>
            </AccordionSection>
}