import { useState, useEffect } from 'react'

export const useFetchData = (setPeople, setError) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:2014/people')
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка при загрузке данных')
        }
        return response.json()
      })
      .then(data => {
        setPeople(data)
        setError(null)
      })
      .catch(error => {
        setError('Ошибка при загрузке данных.')
        console.error(error);
      })
      .finally(() => setIsLoading(false))
  }, [setPeople, setError])

  return { isLoading }
}