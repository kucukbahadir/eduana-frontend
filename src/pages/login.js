import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const tasksJimmy = [
    {   id: 1,
        title: "To do 1", 
        description: "Text",
        dueDate: new Date(),
        priority: "Low" 
    },
];

function Login() {
    const [name, setName] = useState("");
    const nav = useNavigate();

    function handleLogin(event) {
        event.preventDefault();  // Prevent reloading the page
        
        if (name === "Jimmy") {
            // sets the user's name in the session storage
            console.log(name);
            sessionStorage.setItem("nameUser", name);

            console.log(tasksJimmy);
            localStorage.setItem("tasksUser", JSON.stringify(tasksJimmy));
            //nav("/todo/${name}");
            nav("/home");
        } else { 
            alert("Invalid"); 
        }
    }

    return (
        <form method="get" onSubmit={handleLogin}>
            <input 
                className="form-control text-gray-800"
                type="text" 
                name="name" 
                value={name} 
                placeholder="Name?"
                onChange={(e) => setName(e.target.value)} // Update useState of "name" when input changes
            />
        </form>
    );
}
 
export default Login;
