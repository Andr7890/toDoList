import styles from './task.module.css'
import { ITask } from '../App'
import { TbTrash } from 'react-icons/tb'
import { BsCheckCircleFill } from 'react-icons/bs';

interface Props {
    task: ITask
    onDelete: (taskId: string) => void;
    onComplete:(taskId: string) => void;
}

export function Task({ task, onDelete, onComplete }: Props) {
  
    return (
        <div className={styles.task}>
            <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
              {task.isCompleted ? <BsCheckCircleFill /> : <div />}
            </button>

            <p className={task.isCompleted ? styles.textCompleted : ""}> 
                {task.title}
            </p>

            <button className={styles.deleteButton}> <TbTrash size={20} onClick={() => onDelete(task.id)} /> </button>
        </div>
    )
}