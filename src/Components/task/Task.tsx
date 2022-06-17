import React from 'react'
import "./Task.scss"
import { ITask } from '../../Interfaces'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
interface Props {
  task: ITask;
  completeTask(taskNameToDelete:string): void;
}


export const Task = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
      </div>
      <RemoveCircleOutlineIcon
        titleAccess='Delete this task'
        className='remove'
        onClick={() => {
          completeTask(task.taskName);
        }} />
    </div>
  )
}
