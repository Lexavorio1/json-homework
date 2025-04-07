export const useCrudOperations = (setPeople, setError) => {

  const createPerson = (newPerson) => {
    fetch('http://localhost:2014/people', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPerson),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка при создании человека');
        }
        return response.json();
      })
      .then(data => {
        setPeople(prevPeople => [...prevPeople, data])
      })
      .catch(error => {
        setError('Ошибка при создании человека.', error)
      })
  }

  const deletePerson = (id) => {
    fetch(`http://localhost:2014/people/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка при удалении человека');
        }
        setPeople(prevPeople => prevPeople.filter(person => person.id !== id));
      })
      .catch(error => {
        setError('Ошибка при удалении человека.')
        console.error('Ошибка при удалении человека:', error)
      })
  }

  return { createPerson, deletePerson };
}