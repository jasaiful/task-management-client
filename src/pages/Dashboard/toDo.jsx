import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const ToDo = () => {
    const [tasksData, setTasksData] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axiosPublic.get('/tasks');
                setTasksData(response.data); // Update state with fetched tasks data
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };
        fetchTasks();
    }, [axiosPublic]);

    const toDoTasks = tasksData.filter(task => task.status === "To-Do");

    return (
        <div>
            <h2 className="text-3xl mx-auto my-5">To-Do List</h2>
            <div className="grid mx-auto gap-5">
                {toDoTasks.map(task => (
                    <div key={task._id} className="p-4 border border-r-4 border-b-4 border-teal-600 rounded-md text-center space-y-1 shadow-md bg-white">
                        <h3 className="text-xl font-semibold">{task.title}</h3>
                        <p className="">{task.description}</p>
                        <p className="text-red-600">Deadline: {task.deadline}</p>
                        <p className="">Task Priority: {task.priority}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ToDo;
