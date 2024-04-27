import React from 'react'
import './TodoLoading.css'

function TodoLoading() {
    return (
        <div className='loader-container'>
          <div className='loader1'></div>
          <div className='loader2'></div>
        </div>
    );
  }

export { TodoLoading }