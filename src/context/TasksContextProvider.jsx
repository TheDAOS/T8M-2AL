import { useState } from "react";
import TasksContext from "./TasksContext";

export function TasksContextProvider({ children }) {

    const [tasksData, setTasksData] = useState()

    return (
        <TasksContext.Provider value={{
           tasksData, setTasksData 
        }}>
            {children}
        </TasksContext.Provider>
    );
}