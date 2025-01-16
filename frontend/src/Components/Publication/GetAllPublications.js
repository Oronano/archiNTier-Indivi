import { useState, useEffect } from "react";
import axios from "axios";
import { deletePublication } from "./DeletePublication";
import { updatePublication } from "./UpdatePublication";

const GetAllPublications = () => {
    const [publications, setPublications] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [currentPublication, setCurrentPublication] = useState(null);
    const [updatedTitle, setUpdatedTitle] = useState("");
    const [updatedDescription, setUpdatedDescription] = useState("");

    const getPublications = async () => {
        await axios
            .get("http://localhost:3001/api/publications")
            .then((response) => {
                setPublications(response.data.data.publications);
            })
            .catch((error) => {
                console.error(
                    "Error fetching publications:",
                    error.response ? error.response.data : error.message
                );
            });
    };

    const handleDelete = async (id) => {
        await deletePublication(id);
        getPublications();
    };

    const handleUpdate = (publication) => {
        setCurrentPublication(publication);
        setUpdatedTitle(publication.title);
        setUpdatedDescription(publication.description);
        setIsPopupOpen(true);
    };

    const handleSubmitUpdate = async () => {
        const updatedData = {
            title: updatedTitle,
            description: updatedDescription,
        };
        await updatePublication(currentPublication._id, updatedData);
        setIsPopupOpen(false);
        getPublications();
    };

    const handleCancelUpdate = () => {
        setIsPopupOpen(false);
    };

    useEffect(() => {
        getPublications();
    }, []);

    return (
        <div>
            <h1>Liste des publications</h1>
            <ul>
                {publications.map((publication) => (
                    <li key={publication._id}>
                        <strong>Title:</strong> {publication.title} -{" "}
                        <strong>Description:</strong> {publication.description}
                        <button onClick={() => handleUpdate(publication)}>
                            Update
                        </button>
                        <button onClick={() => handleDelete(publication._id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>

            {isPopupOpen && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>Update Publication</h2>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSubmitUpdate();
                            }}
                        >
                            <label>
                                Title:
                                <input
                                    type="text"
                                    value={updatedTitle}
                                    onChange={(e) =>
                                        setUpdatedTitle(e.target.value)
                                    }
                                />
                            </label>
                            <label>
                                Description:
                                <input
                                    type="text"
                                    value={updatedDescription}
                                    onChange={(e) =>
                                        setUpdatedDescription(e.target.value)
                                    }
                                />
                            </label>
                            <button type="submit">Valider</button>
                            <button type="button" onClick={handleCancelUpdate}>
                                Annuler
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GetAllPublications;
