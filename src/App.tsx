import {Box, ChakraProvider, theme} from "@chakra-ui/react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { useSessionStorage } from "usehooks-ts"
import Token from "./pages/Token"
import Home from "./pages/Home"
import StorageExamples from "./pages/StorageExamples"

export const App = () => {
    
    const [token, setToken] = useSessionStorage("token", undefined);

    const storage = {path:"/storage", element:<StorageExamples/>}
    const tokenTest = {path:"/token", element:<Token/>}
    const home = {path:"/", element:<Home/>}
    const router = createBrowserRouter([storage, tokenTest, home]);
    return <ChakraProvider theme={theme}>
      <Box mx="auto" w="90%" mt="5%">
        <RouterProvider router={router}/>
      </Box>
    </ChakraProvider>
  }
