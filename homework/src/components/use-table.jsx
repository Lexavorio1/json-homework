import React from 'react'
import styles from '../App.module.css'

export const Table = ({ people, isLoading, onDelete }) => {
  if (isLoading) {
    return <div className={styles.loading}>Загрузка...</div>
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Имя</th>
          <th>Профессия</th>
          <th>Теги</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {people.map((person) => (
          <tr key={person.id}>
            <td>{person.name}</td>
            <td>{person.profession}</td>
            <td>{person.tags.join(', ')}</td>
            <td>
              <button 
              className={styles.red}
              onClick={() => onDelete(person.id)}>Удалить</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}