import { useReducer } from "react";
import todoReducer from "../reducers/todoReducer";

// interface Todo {
//   id: number;
//   value: number;
// }

const Todo = () => {
//   const [todos, setTodos] = useState<Todo[]>([]);
    const [todos, dispatch] = useReducer(todoReducer, []);

  const generateRandomNumber = (): number => {
    return Math.floor(Math.random() * 1000);
  };

  // Add new todo
  const addTodo = () => {
    // const newTodo: Todo = {
    //   id: Date.now(),
    //   value: generateRandomNumber(),
    // };
    // setTodos([...todos, newTodo]);

    //// using useReducer
    dispatch({type: 'ADD', todo: {id: generateRandomNumber(), title: 'todo: ' + generateRandomNumber(),}})
  };

  // Delete a todo
  const deleteTodo = (id: number) => {
    // setTodos(todos.filter((todo) => todo.id !== id));

    ////using useReducer
    dispatch({type: 'DELETE', todoId: id})
  };

  return (
    <>
      <h1 className="text-center">Todo list</h1>
      <div className="container mt-5">
        <h1 className="mb-4">Todo List</h1>
        <button className="btn btn-primary mb-3" onClick={addTodo}>
          Add Todo
        </button>
        <ul className="list-group">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {todo.title}
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
