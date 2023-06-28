import React from "react";
import { 
    Routes,
    Route,
} from "react-router-dom";
import "./css/style.css"

import Bonus from "./pages/Bonus";

function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Bonus />} />
        </Routes>
    )
}

export default App;