import { useState } from "react"
import { ref, push } from "firebase/database"
import { todosFireBase } from '../firebase'

export const useAddTodoList = (setFlags) => {
    const [isCreating, setIsCreating] = useState(false)

    const onAdd = (title) => {
        setIsCreating(true)
        
            const todosFbRef = ref(todosFireBase, 'todos')
            push(todosFbRef, {
                title, 
            })
            setFlags()
            setIsCreating(false)
    }

    return {
        isCreating,
        onAdd,
    }
}