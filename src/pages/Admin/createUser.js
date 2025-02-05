import React from "react";

const CreateUser = () => {
    function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }

    return (
        <section className="flex items-center justify-center min-h-screen">
            <form
                method="post"
                className="bg-white shadow-md p-6 rounded-lg w-96"
                onSubmit={handleSubmit}
            >
                <h2 className="text-4xl font-semibold mb-4 text-gray-700">Create User</h2>

                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-600 font-medium mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="w-full border border-gray-300 text-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                        placeholder="Name"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-600 font-medium mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full border border-gray-300 text-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                        placeholder="Password"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-600 font-medium mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full border border-gray-300 text-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                        placeholder="Email"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="role" className="block text-gray-600 font-medium mb-2">
                        Role
                    </label>
                    <select
                        id="role"
                        name="role"
                        className="w-full border border-gray-300 text-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                        required
                    >
                        <option value="admin">Admin</option>
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                        <option value="coordinator">Coordinator</option>
                        <option value="parent">Parent</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 font-medium hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                >
                    Submit
                </button>
            </form>
        </section>
    );
};

export default CreateUser;
