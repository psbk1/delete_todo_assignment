import { Fragment } from 'react';
import { VStack,Box,Heading  } from '@chakra-ui/react'
import { useTodoList } from '@/src/contexts/todolist.context';
import TodoButton from '@/src/components/TodoButton';

export default function DeletedView({
    type="View header for list type"
}){
    const { list } = useTodoList();

    return (
        <Fragment>
            <VStack
                spacing={1}
                align='stretch'
            >
                <Box>
                    <Heading as='h4' size='md' textAlign="center">
                        {type}
                    </Heading>
                </Box>
                {
                list
                    .filter(item=>item.deleted===true && item.type===type)
                    .sort((a,b)=>a.timestamp-b.timestamp)
                    .map(item=><TodoButton key={item.id} {...item} isRecovery={true}/>)
                }
            </VStack>
        </Fragment>
    )
}