import { createContext, useContext, useState, useCallback, useEffect, useMemo } from 'react';
import { v4 as uuidv4, } from 'uuid';
const ToDoListContext = createContext(null);
const ToDoList = [
    {
        type: 'Fruit',
        name: 'Apple',
    },
    {
        type: 'Vegetable',
        name: 'Broccoli',
    },
    {
        type: 'Vegetable',
        name: 'Mushroom',
    },
    {
        type: 'Fruit',
        name: 'Banana',
    },
    {
        type: 'Vegetable',
        name: 'Tomato',
    },
    {
        type: 'Fruit',
        name: 'Orange',
    },
    {
        type: 'Fruit',
        name: 'Mango',
    },
    {
        type: 'Fruit',
        name: 'Pineapple',
    },
    {
        type: 'Vegetable',
        name: 'Cucumber',
    },
    {
        type: 'Fruit',
        name: 'Watermelon',
    },
    {
        type: 'Vegetable',
        name: 'Carrot',
    },
]
export function ToDoListProvider({children}) {
    const [list, setList] = useState(ToDoList.map(todo=>{return {...todo,deleted:false,timestamp:undefined,id:uuidv4()}}));
    const types = useMemo(
        ()=>list
            .map(item=>item.type)
            .reduce((accumulator, currentValue)=>{
                return accumulator.includes(currentValue)?
                    accumulator :
                    [...accumulator,currentValue];
            },[])
        ,list)
    const deleteItemById = useCallback((id)=>{
        setList(old=>
            old.map(todo=>{
                if(todo.id===id){
                    todo.deleted=true;
                    todo.timestamp=Date.now()
                }
                return todo;
            })
        )
    }, list)
    const recoveryItemById = useCallback((id)=>{
        setList(old=>
            old.map(todo=>{
                if(todo.id===id){
                    todo.deleted=false;
                    todo.timestamp=undefined
                }
                return todo;
            })
        )
    }, list)
    return (
        <ToDoListContext.Provider value={{list,types,deleteItemById,recoveryItemById}}>{children}</ToDoListContext.Provider>
    );
}
export function useTodoList() {
    const context = useContext(ToDoListContext);
    if (!context) {
        throw new Error("You need to wrap ToDoListProvider.");
    }
    return {
        list: context.list,
        deleteItemById: context.deleteItemById,
        recoveryItemById: context.recoveryItemById,
        types: context.types,
    };
}