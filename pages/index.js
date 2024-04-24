import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { SimpleGrid,Box,VStack,Button } from '@chakra-ui/react'
import TodoButtonList from '@/src/components/TodoButtonList';
import DeletedView from '@/src/components/DeletedView';
import { useTodoList } from '@/src/contexts/todolist.context';
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const { types } = useTodoList();
  return (
    <>
      <Head>
        <title>Auto Delete Todo List</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <SimpleGrid columns={types.length+1} spacing={10}>
          <Box height="100%">
            <TodoButtonList/>
          </Box>
          {
            types.map((type,index) =>(
              <Box height="100%" key={index}>
                <DeletedView type={type} />
              </Box>
            ))
          }
        </SimpleGrid>
      </main>
    </>
  );
}
