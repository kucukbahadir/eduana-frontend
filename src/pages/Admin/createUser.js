import React from "react";
import Card from "../../components/uiDashboard/Card";
import Table from "../../components/uiDashboard/Table";

const CreateUser = () => {
    return (
        <section className="">
            <form className="bg-white col p-4 m-2 rounded-lg max-w-900px">
                <h2>Create User</h2>
                <div className="create-user-info">
                    <label htmlFor="username" className="flexS">Username</label>
                    <input type="text" className="border w-full text-base m-auto px-2 py-1 rounded-lg focus:ring-0 focus:border-gray-600" placeholder='Username' required/>
                </div>
                <div className="create-user-info">
                    <label htmlFor="Email" className="form-label">Email</label>
                    <input type="text" className="border w-full text-base px-2 py-1 rounded-lg focus:ring-0 focus:border-gray-600" placeholder='Email' required/>
                </div>
                <div className="create-user-info">
                    <label htmlFor="Password" className="form-label">Username</label>
                    <input type="password" className="border w-full text-base px-2 py-1 rounded-lg focus:ring-0 focus:border-gray-600" placeholder='Password' required/>
                </div>
                <div className="create-user-info">
                    <label htmlFor="Role" className="form-label">Role</label>
                    <select className="border w-full text-base px-2 py-1 rounded-lg focus:ring-0 focus:border-gray-600" required>
                        <option value="admin">Admin</option>
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                        <option value="coordinato">Coordinator</option>
                        <option value="parrent">Parrent</option>
                    </select>
                </div>
            </form>
        </section>

    )
}

export default CreateUser;