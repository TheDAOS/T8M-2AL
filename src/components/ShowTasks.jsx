import { useContext, useEffect, useState } from "react";
import Task from "./Task";
import TasksContext from "../context/TasksContext";
import useTasks from "../firebase/database";
import Card from "./Card";

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};

function ShowTasks() {
    const [searchTerm, setSearchTerm] = useState('');

    const [priority, setPriority] = useState('All');
    const [progress, setProgress] = useState('All');

    const debouncedSearch = useDebounce(searchTerm, 300);

    const { tasksData } = useContext(TasksContext);
    const { getData } = useTasks();

    useEffect(() => {
        getData();
    }, [])

    // useEffect(() => {
    //     console.log(tasksData)
    // }, [tasksData])

    return (
        <div className="flex justify-center">
            <div className="flex flex-col gap-2">
                <Card>
                    <div className="flex flex-col gap-2">
                        <span className="ms-1 font-semibold text-2xl">Filters </span>

                        <input
                            type="text"
                            className='bg-sky-50 rounded-md p-2 border-sky-950 border-2'
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            placeholder="Search tasks..."
                        />

                        <div className="ms-1 flex gap-3">
                            <div>
                                <span className="font-semibold">Priority: </span>
                                <select
                                    className='bg-sky-50 rounded-md p-2 border-sky-950 border-2'
                                    value={priority}
                                    onChange={e => setPriority(e.target.value)}
                                >
                                    <option value='All'>All</option>
                                    <option value='High'>High</option>
                                    <option value='Normal'>Normal</option>
                                    <option value='Low'>Low</option>
                                </select>
                            </div>

                            <div>
                                <span className="font-semibold">Progress: </span>
                                <select
                                    className='bg-sky-50 rounded-md p-2 border-sky-950 border-2'
                                    value={progress}
                                    onChange={e => setProgress(e.target.value)}
                                >
                                    <option value='All'>All</option>
                                    <option value='true'>Completed</option>
                                    <option value='false'>Pending</option>
                                </select>
                            </div>


                        </div>

                    </div>
                </Card>
                {!tasksData && <h1>No Data!</h1>}
                {tasksData?.filter((task) => {
                    if (priority === 'All') return true;
                    if (task.priority === priority) return true;
                    return false
                }).filter((task) => {
                    if (progress === 'All') return true;
                    if (task.progress == (progress === 'true')) return true;
                    return false
                }).filter((task) => {
                    if (!debouncedSearch) return true;
                    return task.name.toLowerCase().includes(debouncedSearch.toLowerCase());
                }).map((task) => (<Task task={task} />))}
            </div>
        </div>
    );
}

export default ShowTasks;
