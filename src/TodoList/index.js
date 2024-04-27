import './TodoList.css'

function TodoList({ children }){
    return(
        <ul className="ulOverflow">
            {children}
        </ul>
    )
}

export { TodoList }