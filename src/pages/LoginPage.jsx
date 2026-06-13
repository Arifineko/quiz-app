import { useState } from "react";
import { useNavigate } from "react-router";

const LoginPage = ({ setIsLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();
    const userName = "admin";
    const passWord = "123";

    const handleLogin = (e) => {
        e.preventDefault()

        if (username === userName && password === passWord) {
            setIsLogin(true)
            navigate("/quiz")
        } else {
            alert("Invalid username or password. Please try again.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleLogin}
                className="bg-white p-8 rounded-lg w-full max-w-sm"
            >
                <h1 className="text-2xl font-bold mb-6 text-center">Login to Start Quiz</h1>
                <input
                    type="text"
                    placeholder="Username"
                    className="w-full border px-4 py-2 rounded-2xl mb-4"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border px-4 py-2 rounded-2xl mb-4"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-2xl hover:bg-blue-600"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;