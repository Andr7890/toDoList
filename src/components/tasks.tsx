import { Task } from './task'
import styles from './tasks.module.css'
import { ITask } from '../App'
import { TbClipboardText } from 'react-icons/tb';

interface props {
    tasks: ITask[];
    onDelete:(taskId: string) => void;
    onComplete:(taskId: string) => void;
}

export function Tasks({ tasks, onDelete, onComplete }: props) {

    const tasksAmount = tasks.length;
    const completedTasks = tasks.filter(( task ) => task.isCompleted).length;

    return(
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>tarefas criadas</p>
                    <span>{tasksAmount}</span>
                </div>

                <div>
                    <p className={styles.textPurple}>concluídas</p>
                    <span>{completedTasks} de {tasksAmount}</span>
                </div>
            </header>

            <div className={styles.list}>
                {tasks.map((task) => (
                    <Task 
                    key={task.id} 
                    task={task} 
                    onDelete={onDelete} 
                    onComplete={onComplete} 
                    />

                ))}

                {tasks.length <= 0 && (
                    <section className={styles.empty}>
                        <TbClipboardText size={100} />
                        <div>
                            <p>Nada adicionado por aqui ainda </p>
                            <span>Que tal começar?</span>
                        </div>
                    </section>
                )}

            </div>
        </section>
    )
}