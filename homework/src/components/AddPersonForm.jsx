import React, { useState } from 'react';
import Select from 'react-select';
import styles from '../App.module.css';
import { colourStyles } from './SelectStyles';

export const AddPersonForm = ({ onAdd, onCancel }) => {
    const [name, setName] = useState('');
    const [profession, setProfession] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
  
    const tagOptions = [
      { value: 'Трудолюбивый', label: 'Трудолюбивый', color: '#007bff' },
      { value: 'Ответственный', label: 'Ответственный', color: '#28a745' },
      { value: 'Креативный', label: 'Креативный', color: '#dc3545' },
      { value: 'Внимательный', label: 'Внимательный', color: '#ffc107' },
      { value: 'Ленивый', label: 'Ленивый', color: '#ddadad' },
      { value: 'Безответственный', label: 'Безответственный', color: '#800080' },
      { value: 'Мужичок из 90-ых', label: 'Мужичок из 90-ых', color: '#A0522D' },
    ];
  
    const handleTagChange = (selectedOptions) => {
      setSelectedTags(selectedOptions || []);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newPerson = {
        name,
        profession,
        tags: selectedTags.map((tag) => tag.value),
      };
      onAdd(newPerson)
      setName('')
      setProfession('')
      setSelectedTags([])
    };
  
    return (
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="name">Имя:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />
  
        <label htmlFor="profession">Профессия:</label>
        <input
          type="text"
          id="profession"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          className={styles.input}
        />
  
        <label htmlFor="tags">Теги:</label>
        <Select
          isMulti
          options={tagOptions}
          value={selectedTags}
          onChange={handleTagChange}
          placeholder="Выберите теги"
          className={styles.select}
          styles={colourStyles}
        />
  
        <button type="submit" className={styles.button}>Добавить</button>
        <button type="button" className={styles.button} onClick={() => {
            onCancel();
            setName('');
            setProfession('');
            setSelectedTags([]);
        }}>Отмена</button>
      </form>
    );
  };