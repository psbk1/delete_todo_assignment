import { Fragment } from 'react';
import { VStack } from '@chakra-ui/react'
import { useTodoList } from '@/src/contexts/todolist.context';
import TodoButton from '@/src/components/TodoButton';

export default function TodoButtonList () {
    const { list } = useTodoList();
    return (
        <Fragment>
            <VStack
            spacing={1}
            align='stretch'
        >
            {
                list
                    .filter(item=>item.deleted!=true)
                    .map(item=><TodoButton key={item.id} {...item} isDelete={true}/>)
            }
        </VStack>
        </Fragment>
    )
    
}