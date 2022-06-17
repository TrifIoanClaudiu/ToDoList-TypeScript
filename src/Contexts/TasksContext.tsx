import { createContext} from "react";
import { ITask } from "../Interfaces";

interface todoListContext {
    todoList: ITask[],
    setTodoList:(data: ITask[]) => void
}

const initialTodoList: todoListContext = {
    todoList:[{
        taskName: "",
        deadline: "",
    }],
    setTodoList: (data) => {}
}


export const tasksContext = createContext<todoListContext>(initialTodoList)