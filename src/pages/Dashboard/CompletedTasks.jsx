import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const CompletedTasks = () => {
    const [tasksData, setTasksData] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axiosPublic.get('/tasks');
                setTasksData(response.data); 
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };
        fetchTasks();
    }, [axiosPublic]);

    // Filter tasks based on status "Completed"
    const completedTasks = tasksData.filter(task => task.status === "Completed");

    return (
        <div>
            <h2 className="text-3xl mx-auto my-5">Completed</h2>
            <div className="grid mx-auto gap-5">
                {completedTasks.map(task => (
                    <div key={task._id} className="p-4 border border-r-4 border-b-4 border-green-600 rounded-md text-center space-y-1 shadow-md bg-white">
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

export default CompletedTasks;
