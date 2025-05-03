import axios from 'axios';
import { useContext } from 'react';
import TasksContext from '../context/TasksContext';
import AuthContext from '../context/AuthContext';

const URL = 'https://task-manager-application-14596-default-rtdb.firebaseio.com/tasks';

// i missed Redux from question

const useTasks = () => {
    const { setTasksData } = useContext(TasksContext);
    const { user } = useContext(AuthContext);

    const getData = async () => {
        try {
            // console.log(user);
            if (user && user.uid) {
                const response = await axios.get(`${URL}/${user.uid}.json`);

                const tasks = response.data ? Object.entries(response.data).map(([id, task]) => ({ id, ...task })) : null;

                setTasksData(tasks);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const addTask = async (title, priority) => {
        try {
            if (user && user.uid) {
                const newTask = {
                    title: title,
                    priority: priority,
                    progress: false,
                };

                await axios.post(`${URL}/${user.uid}.json`, newTask);

                await getData();
            }
        } catch (error) {
            console.error('Error adding task:', error);
        }
    }

    const toggleProgress = async (task) => {
        try {
            task.progress = !task.progress;
            const updatedStatus = { progress: task.progress };

            await axios.patch(`${URL}/${user.uid}/${task.id}.json`, updatedStatus);

            await getData();
        } catch (error) {
            console.error(error);
        }
    };

    const deleteTask = async (task) => {
        try {
            await axios.delete(`${URL}/${user.uid}/${task.id}.json`);
            alert('Task Deleted');
            await getData();
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    const updateTask = async (id, updatedTask) => {
        try {
            if (user && user.uid) {
                await axios.patch(`${URL}/${user.uid}/${id}.json`, updatedTask);
                await getData();
            }
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    return { getData, addTask, toggleProgress, deleteTask, updateTask };
};

export default useTasks;
