import { FC, ChangeEvent, useState, useContext, useEffect } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import "./header.scss"
import { tasksContext } from '../../Contexts/TasksContext';
import { ITask } from '../../Interfaces';
export const Header: FC = () => {

    const [task, setTask] = useState<string>("");
    const [deadline, setDeadline] = useState<string>("");
    const {todoList, setTodoList} = useContext(tasksContext);
    
    const loadTasks = (): ITask[] => {
        const taskJSON = localStorage.getItem('list');
        if (taskJSON == null) return [];
        return JSON.parse(taskJSON);
    }
    
    const tasks : ITask[] = loadTasks();

    useEffect(()=>{
        const updateTasks = ():void =>{
            setTodoList(tasks);
        }
        updateTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const handleChange = (e: ChangeEvent<HTMLInputElement>):void =>{
        if(e.target.name === "task"){
            setTask(e.target.value);
        }
        if(e.target.name === "deadline"){
            setDeadline(e.target.value);
        }
    }
    useEffect(()=>{
        localStorage.setItem('list', JSON.stringify(todoList));
    }, [todoList])

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