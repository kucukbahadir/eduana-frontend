import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Navbar from "./components/Navbar";
import NoPage from "./pages/noPage.js";
import StudentDashboard from './pages/dashboards/studentDashboard';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <main className="App-main">
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/dashboard" element={<StudentDashboard/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;
