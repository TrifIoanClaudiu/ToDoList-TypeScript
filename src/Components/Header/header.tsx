import { FC, ChangeEvent, useState, useContext } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import "./header.scss"
import { tasksContext } from '../../Contexts/TasksContext';
export const Header: FC = () => {

    const [task, setTask] = useState<string>("");
    const [deadline, setDeadline] = useState<string>("");
    const {todoList, setTodoList} = useContext(tasksContext);

    const handleChange = (e: ChangeEvent<HTMLInputElement>):void =>{
        if(e.target.name === "task"){
            setTask(e.target.value);
        }
        if(e.target.name === "deadline"){
            setDeadline(e.target.value);
        }
    }

    const addTask = ():void => {
        const newTask = {taskName:task, deadline:deadline};
        setTodoList([...todoList, newTask]);
        setTask("");
        setDeadline("");
    }

  
    return (
        <div className="header">
            <div className="inputs">
                <h1>To do list</h1>
                <input type="text" placeholder='Task...' name='task' value={task} onChange={handleChange}/>
                <input type="text" placeholder="When to do it? (Day)" name='deadline' value={deadline} onChange={handleChange}/>
            </div>
            <AddCircleIcon className='AddButton' titleAccess='Add task' onClick={addTask} />
        </div>
    )
}