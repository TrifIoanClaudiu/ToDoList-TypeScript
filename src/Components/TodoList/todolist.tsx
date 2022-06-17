import React, { FC, useContext } from 'react'
import "./todolist.scss"
import { tasksContext } from '../../Contexts/TasksContext';
import { ITask } from '../../Interfaces';
import { Task } from '../task/Task';
export const TodoList: FC = () => {
    const { todoList, setTodoList } = useContext(tasksContext);
    
    const completeTask = (taskNameToDelete: string): void =>{
        setTodoList(todoList.filter((task) =>{
            return task.taskName !== taskNameToDelete;
        }))
    };
    return (
        <div className="todoList">
            <div className="headers">
                <h1>Task Deadline</h1>
            </div>
                {todoList.map((task: ITask, key: number) => (
                    <Task task={task} key={key} completeTask={completeTask} />
                ))

                }
        </div>
    )
}