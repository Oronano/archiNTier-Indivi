import axios from "axios";

export const deletePublication = async (id) => {
    try {
        const token = localStorage.getItem("token");
        await axios.delete(`http://localhost:3001/api/publications/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(`Publication with id ${id} deleted successfully`);
    } catch (error) {
        console.error(
            `Error deleting publication with id ${id}:`,
            error.response ? error.response.data : error.message
        );
    }
};
