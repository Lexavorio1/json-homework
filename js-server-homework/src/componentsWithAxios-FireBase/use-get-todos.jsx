import { useState, useEffect } from "react"
import { ref, onValue } from 'firebase/database'
import { todosFireBase } from '../firebase'

export const useGetTodoList = () => {
    const [todoList, setTodoList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        const todosFbRef = ref(todosFireBase, 'todos')
        return onValue(todosFbRef, (snapshot) => {
                const loadedTodos = snapshot.val()
                if (loadedTodos) {
                    const todosArray = Object.keys(loadedTodos).map(key => ({
                        id: key,
                        ...loadedTodos[key]
                    }));
                    setTodoList(todosArray);
                } else {
                    setTodoList([]);
                }
                setIsLoading(false)
        })
    }, [])

    return { todoList, isLoading }
}