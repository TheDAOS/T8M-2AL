import useTasks from "../firebase/database";
import Card from "./Card";
import { useNavigate } from "react-router";

function Task({ task }) {

    const { toggleProgress, deleteTask } = useTasks()

    let navigate = useNavigate();

    const handlePriority = (priority) => {
        switch (priority) {
            case 'High':
                return 'border-orange-500'

            case 'Normal':
                return 'border-sky-600'

            case 'Low':
                return 'border-green-400'

            default:
                return 'border-sky-600'
        }
    }

    return (
        <Card>
            <div className="flex w-full justify-between items-center gap-2">
                <div className="flex justify-between items-center">
                    <div className={`border-4 rounded-full p-2 ${handlePriority(task.priority)}`}></div>
                    <span className="font-semibold ms-1">{task.title}</span>
                </div>

                <div className="flex gap-2">
                    <button
                        className="bg-sky-700 text-sky-50 font-semibold p-2 shadow-md border-2 border-sky-800 rounded-md cursor-pointer hover:bg-sky-600"
                        onClick={() => toggleProgress(task)}
                    >
                        {task.progress ? 'Completed' : "Pending"}
                    </button>

                    <button
                        className="bg-sky-700 text-sky-50 font-semibold p-2 px-4 shadow-md border-2 border-sky-800 rounded-md cursor-pointer hover:bg-sky-600"
                        onClick={() => navigate(`/edit/${task.id}/${task.title}/${task.progress}/${task.priority}`)}
                    >
                        Edit
                    </button>

                    <button
                        className="bg-sky-700 text-sky-50 font-semibold p-2 shadow-md border-2 border-sky-800 rounded-md cursor-pointer hover:bg-pink-600"
                        onClick={() => deleteTask(task)}
                    >
                        Remove
                    </button>
                </div>
            </div>
        </Card>
    )
}


export default Task