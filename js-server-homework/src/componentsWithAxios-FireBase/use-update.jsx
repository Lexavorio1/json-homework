import { useState } from "react";
import { ref, update } from "firebase/database";
import { todosFireBase } from '../firebase';

export const useUpdate = (setFlags) => {
    const [isUpdate, setIsUpdate] = useState(false);

    const onUpdate = (id, title) => {
        setIsUpdate(true)
        const newTitle = prompt("Введите новый текст дела", title)
        const todoFbRef = ref(todosFireBase, `todos/${id}`)
        update(todoFbRef, { 
            title: newTitle })
        setIsUpdate(false)
        setFlags()
    }
    return { isUpdate, onUpdate }
}
