import React from 'react'
import './TodoSearch.css'
import { TodoContext } from '../TodoContext';

function TodoSearch() {
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext)
    return (
        <input placeholder="Cortar la cebolla" className="search"
        value={searchValue}
        onChange={ (event) =>{
          // console.log('Escribiste en el ToDoSearch');
          // console.log(event);
          // console.log(event.target);
          // console.log(event.target.value);
          setSearchValue(event.target.value)
        } }/>
    );
  }

export { TodoSearch }