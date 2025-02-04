import React, { useState } from "react";
import { FaYoutubeSquare, FaGoogleDrive } from "react-icons/fa";
import {  GraduationCap } from 'lucide-react';
function AddCourseMaterial() {
    const [form, setForm] = useState({
        materialName: "",
        doctorName: "",
        youtubeLink: "",
        driveLink: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted", form);
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">

            <header className="bg-blue-600 text-white py-4 px-6 flex items-center justify-center shadow-md">
                <GraduationCap className="w-6 h-6 mr-2" />
                <h1 className="text-xl font-bold mb-0">Academy Guide</h1>
            </header>
        <div className="flex justify-center items-center min-h-screen bg-gray-100 w-5/6 m-auto">
            <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md w-5/6 ">
                <h2 className="text-2xl font-bold mb-4">Add New Course Material</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Material Name</label>
                        <input
                            type="text"
                            name="materialName"
                            value={form.materialName}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter material name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Doctor Name</label>
                        <input
                            type="text"
                            name="doctorName"
                            value={form.doctorName}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter doctor name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">YouTube Link</label>
                        <div className="relative">
                            <FaYoutubeSquare className="absolute left-2 top-3 text-gray-500" />
                            <input
                                type="url"
                                name="youtubeLink"
                                value={form.youtubeLink}
                                onChange={handleChange}
                                className="w-full p-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="https://www.youtube.com/..."
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Google Drive Link</label>
                        <div className="relative">
                            <FaGoogleDrive className="absolute left-2 top-3 text-gray-500" />
                            <input
                                type="url"
                                name="driveLink"
                                value={form.driveLink}
                                onChange={handleChange}
                                className="w-full p-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="https://drive.google.com/..."
                            />
                        </div>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                        Add Material
                    </button>
                </form>
            </div>
            </div>
        </div>

    );
}

export default AddCourseMaterial;