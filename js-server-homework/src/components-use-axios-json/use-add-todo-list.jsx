import { useState } from "react";
import axios from 'axios';


export const useAddTodoList = (setFlags) => {
    const [isCreating, setIsCreating] = useState(false)
    const onAdd = (title) => {
        setIsCreating(true)
        axios.post('http://localhost:2016/todos', {
            title,
        })
        .then((rawResponse) => rawResponse.data)
        .finally(()=>{
            setFlags()
            setIsCreating(false)
        })
    }

    return {
        isCreating,
        onAdd,
    }
}