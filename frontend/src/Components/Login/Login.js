import { useState } from "react";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
            .post("http://localhost:3001/api/users/login", {
                email,
                password,
            })
            .then((response) => {
                console.log("User logged in:", response.data.token);
                localStorage.setItem("token", response.data.token);
            })
            .catch((error) => {
                console.error(
                    "Error logging in User:",
                    error.response ? error.response.data : error.message
                );
            });
    };

    return (
        <div>
            <h1>Se connecter</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Mot de passe"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Se connecter</button>
            </form>
        </div>
    );
};

export default Login;
