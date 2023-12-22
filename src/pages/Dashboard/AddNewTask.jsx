import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from "react";

const AddNewTask = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState(new Date());

    const onSubmit = async data => {
        try {

            const surveyData = {
                title: data.title,
                category: data.category,
                description: data.description,
                options: ['Yes', 'No'],
                likes: 0,
                dislikes: 0,
                timestamp: new Date().toISOString(),
            };

            // Send the survey data to the server
            const response = await axiosSecure.post('/surveys', surveyData);

            if (response.data) {
                reset();
                navigate('/dashboard');
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${data.title} survey created successfully`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            console.error("Error creating survey:", error);
        }
    };

    return (
        <div>
            <h1 className="text-4xl">Add a New Task</h1>
            <div className="ml-24">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Title */}
                    <div className="form-control w-full my-6">
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
                    <div className="form-control w-full my-6">
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
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Deadline *</span>
                        </label>
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            minDate={new Date()} // Set minimum date to the current date
                            dateFormat="yyyy-MM-dd" // Customize date format as needed
                            placeholderText="Select Deadline"
                            className="input input-bordered w-full"
                        />
                    </div>
                    {/* <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Deadline *</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Deadline"
                            {...register("deadline", { required: true })}
                            className="input input-bordered w-full"
                        />
                    </div> */}

                    {/* Priority */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Priority *</span>
                        </label>
                        <select
                            defaultValue="default"
                            {...register("priority", { required: true })}
                            className="select select-bordered w-full"
                        >
                            <option disabled value="default">
                                Select Priority Level
                            </option>
                            <option value="Customer Satisfaction">Low</option>
                            <option value="Health & Wellness">Medium</option>
                            <option value="Career Development">High</option>
                        </select>
                    </div>
                    <button className="btn bg-green-900 text-white mt-5">
                        Add Task
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddNewTask;