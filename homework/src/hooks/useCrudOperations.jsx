import { useCallback } from 'react';
import axios from 'axios';

export const useCrudOperations = (setPeople, setError) => {
  const createPerson = useCallback(async (newPerson) => {
    try {
      const response = await axios.post('http://localhost:2014/people', newPerson);
      setPeople((prevPeople) => [...prevPeople, response.data]);
    } catch (error) {
      setError('Ошибка при создании человека.');
      console.error('Ошибка при создании человека:', error);
    }
  }, [setPeople, setError]);

  const deletePerson = useCallback(async (id) => {
    try {
      await axios.delete(`http://localhost:2014/people/${id}`);
      setPeople((prevPeople) => prevPeople.filter((person) => person.id !== id))
    } catch (error) {
      setError('Ошибка при удалении человека.')
      console.error('Ошибка при удалении человека:', error)
    }
  }, [setPeople, setError])

  return { createPerson, deletePerson }
}