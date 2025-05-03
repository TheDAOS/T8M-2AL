import { useState } from "react";
import Card from "./Card";
import useTasks from "../firebase/database";
import { useNavigate } from "react-router";

function AddTasks() {
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('Normal');

    const { addTask } = useTasks()
    let navigate = useNavigate();

    function handleClick() {
        addTask(title, priority)
        alert('Task Added Successfully...')
        navigate('/')
        setTitle('')
        setPriority('Normal')
    }

    return (
        <div className="flex justify-center">
            <Card>
                <div className="w-full flex justify-end flex-col flex-wrap">
                    <input
                        type="text"
                        className='bg-sky-50 rounded-md w-full p-2 border-sky-950 border-2 mb-2'
                        placeholder="Enter Task Name"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required
                    />

                    <div className="w-full flex justify-evenly items-center align-middle">
                        <div>
                            <span className="font-semibold">Priority: </span>
                            <select
                                className='bg-sky-50 rounded-md p-2 border-sky-950 border-2 mb-2'
                                value={priority}
                                onChange={e => setPriority(e.target.value)}
                            >
                                <option value='High'>High</option>
                                <option value='Normal'>Normal</option>
                                <option value='Low'>Low</option>
                            </select>
                        </div>

                        <button
                            className="bg-sky-700 text-sky-50 font-semibold p-2 shadow-md border-2 border-sky-800 rounded-md cursor-pointer hover:bg-sky-600 w-30 ms-auto"
                            onClick={handleClick}
                        >
                            Add Task
                        </button>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default AddTasks;