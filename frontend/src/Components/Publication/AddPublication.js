import { useState } from "react";
import axios from "axios";

const AddPublication = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        await axios
            .post(
                "http://localhost:3001/api/publications",
                {
                    title,
                    description,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then((response) => {
                console.log("Publication ajouté", response.data);
            })
            .catch((error) => {
                console.error(
                    "Erreur lors de l'ajout de la publication",
                    error.response ? error.response.data : error.message
                );
            });
    };

    return (
        <div>
            <h1>Ajouter une publication</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="titre de la publication"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="description de la publication"
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
};

export default AddPublication;
