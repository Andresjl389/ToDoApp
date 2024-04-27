import React, { useContext } from 'react';
import ReactDom from 'react-dom';
import './Modal.css'
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';

function Modal({ children }) {
    return ReactDom.createPortal(
        <div className='ModalBackground' >
            {children}
        </div>,
        document.getElementById('modal')
    )
}

export { Modal };