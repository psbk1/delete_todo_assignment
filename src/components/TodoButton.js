import { useEffect, useState } from 'react';
import { Button } from '@chakra-ui/react'
import { useTodoList } from '@/src/contexts/todolist.context';
export default function TodoButton ({isDelete,isRecovery,...item}) {
    const {  deleteItemById, recoveryItemById } = useTodoList();
    if (isDelete === isRecovery) {
        throw new Error("invalid TodoButton function please check isDelete & isRecovery is not equivalent");
    }
    
    useEffect(()=>{
        if (isRecovery === true) {
            const recoveryIn5Sec = setTimeout(() => {
                recoveryItemById(item.id)
            }, 5000);
            return () => clearTimeout(recoveryIn5Sec)
        }
    },[isRecovery])
    return (
        <Button 
            colorScheme='teal' 
            variant='outline' 
            onClick={ ()=> {
                if (isDelete===true) {
                    deleteItemById(item.id)
                }
                if (isRecovery===true) {
                    recoveryItemById(item.id)
                }
            }}
            >
            {item.name}
        </Button>
    )
    
}