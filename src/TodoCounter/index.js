import React from 'react';
import './TodoCounter.css'
import { TodoContext } from '../TodoContext';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos
  } = React.useContext(TodoContext)
  let title = null
    if (totalTodos === 0) {
      title = (
          <div className="tittleContainer">
            <h1>No tienes TODO's pendientes</h1>
          </div>
      )
     }else if(totalTodos === completedTodos){
      title = (
        <div className="tittleContainer">
          <h1>Has completado todos los TODO's</h1>
        </div>
      )
     }
     
     else {
      title = (
        <div className="tittleContainer">
          <h1>Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODO'S </h1>
        </div>
      )
     }
     
     return (title);
}


export { TodoCounter }