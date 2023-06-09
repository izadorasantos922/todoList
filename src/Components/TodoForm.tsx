import {useState, FormEvent} from 'react';
import { TodoTypeForm } from '../Types/Types';

const TodoForm: React.FC<TodoTypeForm> = ({addTodo}) => {
const [value, setValue] = useState<string | null>("");
const [category, setCategory] = useState<string | null>("");

function handleSubmit(e: FormEvent<HTMLFormElement>): void{
    e.preventDefault();
    if(!value || !category || value.length <= 3 || category.length <= 3) return;
    addTodo(value, category);
}
  return (
    <form action="" onSubmit={handleSubmit}>
      <h1>Create task</h1>
        <label htmlFor="" >Text</label>
        <input type="text" name="" id="" value={value || ""} onChange={(e) => setValue(e.target.value)}
        />
        <label htmlFor="">Category</label>
        <select name="" id="" value={category || ""} onChange={(e) => setCategory(e.target.value)}>
        <option value="" selected>Select</option>
            <option value="Home">Home</option>
            <option value="Study">Study</option>
            <option value="Work">Work</option>
        </select>
        <button type="submit">Criar</button>
    </form>
  )

}

export default TodoForm