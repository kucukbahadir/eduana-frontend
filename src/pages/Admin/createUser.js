import React from "react";
import Card from "../../components/uiDashboard/Card";
import Table from "../../components/uiDashboard/Table";

const CreateUser = () => {
    return (
        <section className="create-user">
            <form className="bg-white flex-col p-4 ">
                <h2>Create User</h2>
                <div className="create-user-info">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="field" placeholder='Username' required/>
                </div>
                <div className="create-user-info">
                    <label htmlFor="Email" className="form-label">Email</label>
                    <input type="text" className="field" placeholder='Email' required/>
                </div>
                <div className="create-user-info">
                    <label htmlFor="Password" className="form-label">Username</label>
                    <input type="password" className="field" placeholder='Password' required/>
                </div>
                <div className="create-user-info">
                    <label htmlFor="Role" className="form-label">Role</label>
                    <select className="field" placeholder='Role' required>
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