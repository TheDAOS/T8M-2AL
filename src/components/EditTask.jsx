import { useState } from "react";
import Card from "./Card";
import useTasks from "../firebase/database";
import { useNavigate, useParams } from "react-router";

function Edit() {
    const { id, title, progress, priority } = useParams();

    const [titleForm, setTitleForm] = useState(title);
    const [progressForm, setProgressForm] = useState(progress);
    const [priorityForm, setPriorityForm] = useState(priority);

    const { updateTask } = useTasks()
    let navigate = useNavigate();

    function handleClick() {
        const updatedTask = {
            title: titleForm,
            progress: progressForm,
            priority: priorityForm,
        };

        updateTask(id, updatedTask)
        alert('Task Updated...')
        navigate('/');
    }

    return (
        <div className="flex justify-center">
            <Card>
                <div className="w-full flex justify-end flex-col flex-wrap">
                    <input
                        type="text"
                        className='bg-sky-50 rounded-md w-full p-2 border-sky-950 border-2 mb-2'
                        placeholder="Enter Task Name"
                        value={titleForm}
                        onChange={e => setTitleForm(e.target.value)}
                        required
                    />


                    <div className="flex gap-2 justify-start">
                        <div>
                            <span className="font-semibold">Priority: </span>
                            <select
                                className='bg-sky-50 rounded-md p-2 border-sky-950 border-2 mb-2'
                                value={priorityForm}
                                onChange={e => setPriorityForm(e.target.value)}
                            >
                                <option value='High'>High</option>
                                <option value='Normal'>Normal</option>
                                <option value='Low'>Low</option>
                            </select>
                        </div>

                        <div>
                            <span className="font-semibold">Progress: </span>
                            <select
                                className='bg-sky-50 rounded-md p-2 border-sky-950 border-2'
                                value={progressForm}
                                onChange={e => setProgressForm(e.target.value)}
                            >
                                <option value='true'>Completed</option>
                                <option value='false'>Pending</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex justify-end gap-2">
                        <button
                            className="bg-sky-700 text-sky-50 font-semibold p-2 shadow-md border-2 border-sky-800 rounded-md cursor-pointer hover:bg-sky-600 w-30"
                            onClick={() => navigate('/')}
                        >
                            Back
                        </button>
                        <button
                            className="bg-sky-700 text-sky-50 font-semibold p-2 shadow-md border-2 border-sky-800 rounded-md cursor-pointer hover:bg-sky-600 w-30"
                            onClick={handleClick}
                        >
                            Update
                        </button>
                    </div>

                </div>
            </Card>
        </div>
    )
}

export default Edit;