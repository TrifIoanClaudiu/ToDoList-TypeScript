import { FC, useState } from 'react';
import './App.css';
import { Header } from './Components/Header/header';
import { TodoList } from './Components/TodoList/todolist';
import { tasksContext } from "./Contexts/TasksContext"
import { ITask } from './Interfaces';

const App: FC = () => {
  const [todoList, setTodoList] = useState<ITask[]>([]);
  return (
    <div className="App">
      <tasksContext.Provider value={{ todoList, setTodoList }}>
        <Header />
        <TodoList />
      </tasksContext.Provider>
    </div>
  );
}

export default App;
