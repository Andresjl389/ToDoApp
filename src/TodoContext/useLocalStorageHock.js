import React from "react";


function useLocalStorage(itemName, initialValue) {
  
  const [item, setItem] = React.useState(initialValue)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  
  
  React.useEffect(() => {
    setTimeout(() => {
      try{
        const localStorageItem = localStorage.getItem(itemName)
      
        let parsedItem;
        if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue))
            parsedItem = []
          }else{
            parsedItem = JSON.parse(localStorageItem)
            setItem(parsedItem)
          }
  
          setLoading(false)
        }catch(error){
        setLoading(false)
        setError(true)
      }
    }, 2000)

    },[])

    
  
    
    const saveItems = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem)
    }
  
    return {
      item, 
      saveItems,
      loading,
      error
    }
  }
  

export { useLocalStorage } 


// const defaultTodos = [
//   {text: 'Tarea 1', completed: true},
//   {text: 'Tarea 2', completed: true},
//   {text: 'Tarea 3', completed: false},
//   {text: 'Tarea 4', completed: true},
//   {text: 'Tarea 5', completed: false},
  
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

// localStorage.removeItem('TODOS_V1')