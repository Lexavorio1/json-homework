import React, { useState } from 'react';
import styles from './App.module.css';
import { Table, AddPersonForm } from './components';
import { useFetchData, useCrudOperations } from './hooks';

export const App = () => {
  const [showForm, setShowForm] = useState(false)
  const [people, setPeople] = useState([])
  const [error, setError] = useState(null)

  const { isLoading, fetchData } = useFetchData('http://localhost:2014/people', setPeople, setError)
  const { createPerson, deletePerson } = useCrudOperations(setPeople, setError)

  useState(() => {
        fetchData()
    }, [])

  const handleAddPerson = async (newPerson) => {
    await createPerson(newPerson);
    setShowForm(false);
  }

  const handleDeletePerson = async (id) => {
    await deletePerson(id);
  }

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  }

  return (
    <div className={styles.app}>
      <h1>Список людей</h1>

      <button className={styles.addButton} onClick={toggleFormVisibility}>
        {showForm ? 'Скрыть форму' : 'Добавить человека'}
      </button>

      {showForm && (
        <AddPersonForm
          onAdd={handleAddPerson}
          onCancel={toggleFormVisibility}
        />
      )}

      {error && <div className={styles.error}>Ошибка: {error}</div>}

      <Table
        people={people}
        isLoading={isLoading}
        onDelete={handleDeletePerson}
      />
    </div>
  )
}