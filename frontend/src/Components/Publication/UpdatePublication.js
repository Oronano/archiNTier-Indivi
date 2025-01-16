import axios from "axios";

export const updatePublication = async (id, updatedData) => {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.put(
            `http://localhost:3001/api/publications/${id}`,
            updatedData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        console.log(
            `Publication with id ${id} updated successfully`,
            response.data
        );
    } catch (error) {
        console.error(
            `Error updating publication with id ${id}:`,
            error.response ? error.response.data : error.message
        );
    }
};
