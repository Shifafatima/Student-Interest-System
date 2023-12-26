import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({ email: "", password: "" });

    const { email, password } = credentials;

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("button clicked");
        const response = await fetch("http://localhost:5000/api/admin/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        const json = await response.json();
        if (json.success) {
            navigate("/addStudent");
        } else {
            console.log(json);
            alert(json.error);
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="bg-gray-100 min-h-screen flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full border-4 border-purple-400">
                    <h1 className="text-xl font-bold mb-4 text-center">LOGIN</h1>
                    <h6 className="text-sm font-medium mb-6 text-center">
                        Use Email "xyz@gmail.com" Password "xyz"
                    </h6>
                    <div className="mb-4">
                        <input
                            onChange={onChange}
                            name="email"
                            type="email"
                            placeholder="email@example.com"
                            className="email-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:border-pink-400"
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            onChange={onChange}
                            name="password"
                            type="password"
                            placeholder="password"
                            className="email-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:border-pink-400"
                        />
                    </div>
                    <button
                        onClick={handleSubmit}
                        className="bg-pink-400 hover:bg-pink-300 text-white font-bold py-2 px-4 rounded-full w-full mb-4"
                    >
                        Login
                    </button>
                </div>
            </div>
        </>
    );
};

export default Login;
