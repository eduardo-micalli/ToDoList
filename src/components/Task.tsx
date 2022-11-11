import { CheckCircle, Circle, Trash } from 'phosphor-react';
import { useState } from 'react';
import styles from './Task.module.css';


interface TaskItem {
    content: string;
    onDeleteTask: (taskContent: string) => void;
    onCheckTask: (isChecked: boolean) => void;
}

export function Task({ content, onDeleteTask, onCheckTask }: TaskItem) {
    const [isChecked, setIsChecked] = useState(false);

    function handleDeleteTask() {
        onDeleteTask(content);
    }

    function handleCheckTask() {
        setIsChecked(!isChecked);
        onCheckTask(!isChecked);
    }

    return (
        <div className={styles.task}>
            <div className={styles.taskItems}>
                {(isChecked) ?
                    <>
                        <button onClick={handleCheckTask} className={styles.checked}><CheckCircle size={24} weight='fill' /></button>
                        <p className={styles.contentChecked}>{content}</p>
                    </>
                    :
                    <>
                        <button onClick={handleCheckTask} className={styles.unchecked}><Circle size={24} /></button>
                        <p>{content}</p>
                    </>
                }
            </div>

            <button onClick={handleDeleteTask} className={styles.trash}><Trash size={24} /></button>
        </div>
    );
}