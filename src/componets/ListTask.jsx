import Task from "./Task";
import "../styles/main.css"
import { useAppContext } from "../contexts/Context";

export default function ListTask() {
    const { listTasks, openTask, setOpenTask } = useAppContext();

    return (
        <div id="list-task-container" className="list-task-container">
            { listTasks.length == 0 && 
                <div className="no-tasks">
                    <h1>No tasks</h1>
                </div>
            }

            {
                listTasks.map((elem) => (
                    <Task 
                        title={ elem.title } 
                        description={ elem.description }
                        id={ elem.id } 
                        openTask={ openTask }
                        setOpenTask={ setOpenTask }
                        key={ elem.id }>
                    </Task>
                ))
            }
        </div>
    );
}