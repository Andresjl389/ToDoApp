import { AiFillDelete } from "react-icons/ai";
import { FaCheck } from "react-icons/fa6";
import './TodoItem.css'

function TodoItem( props ){
    return (
      <li>
        <span className={`icon check ${props.completed && "check--active"}`}
        onClick={props.onComplete}
        ><FaCheck />
        </span>
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--conplete"}`}>{ props.text }</p>
        <span className={`delete icon-delete`}
        onClick={props.onDelete}
        ><AiFillDelete />
      </span>
      </li>
    );
  }

export { TodoItem }