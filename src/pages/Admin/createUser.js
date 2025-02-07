import React from "react";
import "./CreateUser.css"; 


const CreateUser = () => {
    function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }

    return (
        <section className="create-user-container">
            <form className="create-user-form" onSubmit={handleSubmit}>
            <h2>Create User</h2>
            <input type="text" name="username" placeholder="Name" required />
            <input type="password" name="password" placeholder="Password" required />
            <input type="email" name="email" placeholder="Email" required />
            <select name="role" required>
            <option value="admin">Admin</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="coordinator">Coordinator</option>
            <option value="parent">Parent</option>
            </select>
            <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default CreateUser;
