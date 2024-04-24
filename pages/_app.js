import "@/styles/globals.css";
import { ToDoListProvider } from '../src/contexts/todolist.context'
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
    <ToDoListProvider>
      <Component {...pageProps} />
    </ToDoListProvider>
  </ChakraProvider>
  )
}
