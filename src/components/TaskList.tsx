import { PlusCircle } from "phosphor-react";
import { ChangeEvent, useState } from "react";
import { Task } from "./Task";
import styles from "./TaskList.module.css"
import emptyListIcon from '../assets/empty-state-icon.svg'

const list: string[] = []

export function TaskList() {
    const [taskList, setTaskList] = useState(list);
    const [inputText, setInputText] = useState('');
    const [checkedCount, setCheckedCount] = useState(0);


    function handleAddNewTask() {
        setTaskList([...taskList, inputText]);
        setInputText('');
    }

    function handleChangeInputText(event: ChangeEvent<HTMLInputElement>) {
        setInputText(event.target.value);
    }

    function onDeleteTask(taskToDelete: string) {
        const taskListWithoutDeleted = taskList.filter(task => {
            return task != taskToDelete
        });
        setTaskList(taskListWithoutDeleted);
    }

    function onCheckTask(isChecked: boolean) {
        if (isChecked) {
            setCheckedCount((state) => {
                return state + 1;
            })
        } else if (!isChecked) {
            setCheckedCount((state) => {
                return state - 1;
            })
        }
    }

    return (
        <div>
            <div className={styles.newTask}>
                <input placeholder="Adicione uma nova tarefa" value={inputText} onChange={handleChangeInputText} />
                <button onClick={handleAddNewTask}>
                    Criar <PlusCircle weight='bold' size={20} />
                </button>
            </div>

            <div className={styles.list}>
                <header className={styles.listHeader}>
                    <strong>
                        Tarefas criadas
                        <span>{taskList.length}</span>
                    </strong>

                    <strong>
                        Concluídas
                        <span>{checkedCount} de {taskList.length}</span>
                    </strong>
                </header>

                {(taskList.length != 0) ?
                    <>
                        {taskList.map(item => {
                            return <Task key={item} content={item} onDeleteTask={onDeleteTask} onCheckTask={onCheckTask} />
                        })}

                    </>
                    :
                    <>
                        <div className={styles.emptyList}>
                            <img src={emptyListIcon} />
                            <strong> Você ainda não tem tarefas cadastradas</strong>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </div>

                    </>
                }

            </div>

        </div>
    );
}