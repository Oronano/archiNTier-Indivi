import "./App.css";
import Login from "./Components/Login/Login";

import GetAllPublication from "./Components/Publication/GetAllPublications";
import AddProduct from "./Components/Publication/AddPublication";
import AddUser from "./Components/User/AddUser";

function App() {
    return (
        <div>
            <GetAllPublication />
            <Login />
            <AddUser />
            <AddProduct />
        </div>
    );
}

export default App;
