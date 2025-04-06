import { useState } from "react";
import axios from 'axios';

export const useUpdate = (setFlags) => {
    const [isUpdate, setIsUpdate] = useState(false)
    const onUpdate = (id, title) => {
        setIsUpdate(true)
        const newTitle = prompt("Введите новый текст дела", title)
        if (newTitle && newTitle.trim() !== "") {
            axios.put(`http://localhost:2016/todos/${id}`, { title: newTitle })
            .then((delResponse) => delResponse.data)
            .then((delResponse)=>{
            console.log('Дело удалено', delResponse)
            setFlags()
        })
        .finally(()=>setIsUpdate(false))
        }
    }

    return { isUpdate, onUpdate }
}