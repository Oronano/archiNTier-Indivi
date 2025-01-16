import { useState } from "react";
import axios from "axios";

const AddUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
            .post("http://localhost:3001/api/users", {
                name,
                email,
                password,
            })
            .then((response) => {
                console.log("User created:", response.data);
            })
            .catch((error) => {
                console.error(
                    "Error creating user:",
                    error.response ? error.response.data : error.message
                );
            });
    };

    return (
        <div>
            <h1>Ajouter un utilisateur</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nom"
                    onChange={(e) => setName(e.target.value)}
                />
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
                <button type="submit">Créer</button>
            </form>
        </div>
    );
};

export default AddUser;
