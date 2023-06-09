export type TodoType = {
    id: number,
    isCompleted?: boolean,
    text: string,
    category: string,
}

export type TodoTypeForm = {
    addTodo: (text: string, category: string) => void
}

export interface StringSearch{
    input: string;
    setInput: React.Dispatch<React.SetStateAction<string>>;
}

export interface TodoProps {
    todo: TodoType,
    removeTodo: (id:number) => void, 
    complete: (id:number) => void
  }