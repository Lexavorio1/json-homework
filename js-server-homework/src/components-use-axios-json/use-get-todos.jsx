import { useState, useEffect } from "react";
import axios from 'axios';

export const useGetTodoList = (flagLoading) => {

    const [todoList, setTodoList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    
      useEffect(()=>{
        setIsLoading(true)
        axios.get('http://localhost:2016/todos')
              .then((loadedData)=> loadedData.data)
              .then((loadedProducts)=>{
                setTodoList(loadedProducts)
              })
              .finally(()=>setIsLoading(false))
      }, [flagLoading])

      return { todoList, isLoading}
}