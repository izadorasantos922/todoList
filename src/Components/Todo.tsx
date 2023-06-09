
import React from 'react'
import { TodoProps } from '../Types/Types';


const Todo: React.FC<TodoProps> = ({todo, removeTodo, complete}) => {

  return (
    <div className="todo" style={{textDecoration: todo.isCompleted ? 'line-through' : ""}}>
       {Object.keys(todo).length > 0 &&
       <>
        <div>
        <p>{todo.text}</p>
        <p>( {todo.category} )</p>
        </div>
        <div>
          <button type="submit" onClick={() => complete(todo.id)}>Complete</button>
          <button type="submit" onClick={() => removeTodo(todo.id)} className='btn'><i className="bi bi-trash3"></i></button>
        </div>
        </>
        }

        </div>
  )
}

export default Todo