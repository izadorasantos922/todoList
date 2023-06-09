import { useEffect, useState } from 'react';
import './App.css';
import { TodoType } from './Types/Types';
import TodoForm from './Components/TodoForm';
import Todo from './Components/Todo';
import Search from './Search';

const getLocalStorage = () => {
  const todo = localStorage.getItem('todos');
  if (todo !== null && todo !== "") {
    return JSON.parse(todo);
  } else {
    return [];
  }
};

function App() {
  const [todos, setTodos] = useState<TodoType[]>(getLocalStorage());
 const [input, setInput] = useState<string>("")

  useEffect(() =>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

 function addTodo(text: string, category: string){
  const newTodos = [ ...todos,
    {
      id: Math.floor(Math.random() * 1000),
      text,
      category,
      isCompleted: false,
    }

  ]
  setTodos(newTodos);
 }

 function removeTodo(id: number): void{
  const newTodos = [...todos]
  const filtered = newTodos.filter((todo) => todo.id !== id ? todo : null);
  setTodos(filtered)
 }

 function complete(id: number): void{
  const newTodos = [...todos];
  const completed = newTodos.map((todo) => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted }  : todo);
  setTodos(completed);
 }

  return (
    <div className="app">
      <h1>Todo List</h1>
      <Search input={input} setInput={setInput}/>
      <div className="todo-list">
        {todos
        .filter((todo) => todo.text.toLowerCase().includes(input.toLowerCase()))
        .map((todo) =>(
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} complete={complete}/>
        ))}
      </div> 
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App
