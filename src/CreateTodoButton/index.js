import React from 'react'
import './CreateTodoButton.css'
import { TodoContext } from '../TodoContext'

function CreateTodoButton({ click }){

    return(
        <div className='ButtonContainer'>
            <button className='CreateButton'
            onClick={click}>+</button>
        </div>
        
    )
}

export { CreateTodoButton }