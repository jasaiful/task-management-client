import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import 'react-datepicker/dist/react-datepicker.css';


const AddNewTask = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm(); // Include formState for error handling
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const onSubmit = async data => {
        try {

            const taskData = {
                title: data.title,
                description: data.description,
                deadline: data.deadline,
                priority: data.priority,
                status: data.status,
            };

            // Send the task data to the server
            const response = await axiosSecure.post('/tasks', taskData);

            if (response.data) {
                reset();
                navigate('/dashboard');
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${data.title} added successfully`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            console.error("Error creating task:", error);
        }
    };

    return (
        <div>
            <h1 className="text-4xl text-center underline">Add a New Task</h1>
            <div className="ml-24">
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* Title */}
                    <div className="form-control w-full my-3">
                        <label className="label">
                            <span className="label-text">Title *</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Survey Title"
                            {...register("title", { required: true })}
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Description */}
                    <div className="form-control w-full my-3">
                        <label className="label">
                            <span className="label-text">Description </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Description"
                            {...register("description", { required: true })}
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Deadline */}
                    <div className="form-control w-full my-3">
                        <label htmlFor="deadline" className="label">
                            <span className="label-text">Deadline *</span>
                        </label>
                        <input
                            type="date"
                            {...register("deadline", { required: true })}
                            id="deadline"
                            className={`input input-bordered w-full ${errors.deadline ? 'border-red-500' : ''}`}
                        />
                        {errors.deadline && (
                            <span className="error-message">Deadline is required</span>
                        )}
                    </div>

                    {/* Priority */}
                    <div className="form-control w-full my-3">
                        <label htmlFor="priority" className="label">
                            <span className="label-text">Priority *</span>
                        </label>
                        <select
                            defaultValue="default"
                            {...register("priority", { required: true })}
                            id="priority"
                            className={`select select-bordered w-full ${errors.priority ? 'border-red-500' : ''}`}
                        >
                            <option disabled value="default">
                                Select Priority Level
                            </option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                        {errors.priority && (
                            <span className="error-message">Priority is required</span>
                        )}
                    </div>
                    {/* Status */}
                    <div className="form-control w-full my-3">
                        <label htmlFor="priority" className="label">
                            <span className="label-text">Status </span>
                        </label>
                        <select
                            defaultValue="To-Do"
                            {...register("status", { required: true })}
                            className={`select select-bordered w-full ${errors.status ? 'border-red-500' : ''}`}
                        >
                            <option disabled value="default">
                                Select Status
                            </option>
                            <option value="To-Do">To-Do</option>
                            <option value="On-Going">On-Going</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                    <button className="btn bg-teal-600 w-full text-white mt-5">
                        Add Task
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddNewTask;
