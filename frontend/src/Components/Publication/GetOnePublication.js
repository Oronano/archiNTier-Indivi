import React, { useEffect, useState } from "react";
import axios from "axios";

const GetOnePublication = (id) => {
    const [publication, setPublication] = useState(null);

    useEffect(() => {
        const fetchPublication = async () => {
            try {
                const response = await axios.get(`/api/publications/${id}`);
                setPublication(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPublication();
    }, [id]);

    return (
        <div>
            <h1>{publication.title}</h1>
            <p>{publication.content}</p>
        </div>
    );
};

export default GetOnePublication;
