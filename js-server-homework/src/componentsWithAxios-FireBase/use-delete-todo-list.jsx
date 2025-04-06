import { useState } from "react"
import { ref, remove } from "firebase/database"
import { todosFireBase } from '../firebase'

export const useDelete = (setFlags) => {
    const [isDelete, setIsDelete] = useState(false);

    const onDelete = (id) => {
        setIsDelete(true)
            const todoFbRef = ref(todosFireBase, `todos/${id}`)
            remove(todoFbRef)
            .finally (()=>{
                setIsDelete(false)
                setFlags()
            })
    }

    return { isDelete, onDelete };
}