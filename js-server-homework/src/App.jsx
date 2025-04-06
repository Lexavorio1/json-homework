import { useState, useEffect } from 'react'
import styles from './App.module.css'

export const App=()=>{
  const [todoList, setTodoList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    setIsLoading(true)
    fetch('https://jsonplaceholder.typicode.com/todos')
          .then((loadedData)=> loadedData.json())
          .then((loadedProducts)=>{
            setTodoList(loadedProducts)
          })
          .finally(()=>setIsLoading(false))
  }, [])

  return (
    <div className={styles.app}>
      <ul>
        {isLoading
            ? <div className={styles.loader}></div>
            : todoList.map(({ id, title, completed }) => (
              <li className={styles.list} key={id}>
                {title}
                <button className={completed ? styles.green : styles.red}>
                  {completed ? 'true' : 'false'}
                </button>
              </li>
              ))}
      </ul>
    </div>
  )
}
