import { useState } from "react";
import { ref, update } from "firebase/database";
import { todosFireBase } from '../firebase';

export const useUpdate = (setFlags) => {
    const [isUpdate, setIsUpdate] = useState(false);

    const onUpdate = (id, title) => {
        setIsUpdate(true)
            const todoFbRef = ref(todosFireBase, `todos/${id}`)
            update(todoFbRef, { title })
            .finally(()=>{
                setIsUpdate(false)
                setFlags()
            })
    }
    return { isUpdate, onUpdate }
}
