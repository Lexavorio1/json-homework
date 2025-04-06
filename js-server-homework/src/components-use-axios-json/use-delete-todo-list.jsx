import { useState } from "react";
import axios from 'axios';

export const useDelete = (setFlags) => {
    const [isDelete, setIsDelete] = useState(false)
    const onDelete = (id) => {
        setIsDelete(true)
        axios.delete(`http://localhost:2016/todos/${id}`)
        .then((delResponse) => delResponse.data)
        .then((delResponse)=>{
            console.log('Дело удалено', delResponse)
            setFlags()
        })
        .finally(()=>setIsDelete(false))
    }

    return { isDelete, onDelete }
}