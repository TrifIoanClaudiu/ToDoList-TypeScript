import React, { FC, useContext } from 'react'
import "./todolist.scss"
import { tasksContext } from '../../Contexts/TasksContext';
export const TodoList: FC = () => {
    const { todoList } = useContext(tasksContext);
    const handleClick = (): void => {
        console.log(todoList);
    }
    return (
        <div className="todoList">
            <button onClick={handleClick}> + </button>
        </div>
    )
}