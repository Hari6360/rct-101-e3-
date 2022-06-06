import "./App.css";
import Login from "../src/pages/Login";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
	return (
		<div className="App">
			<>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Login" element={<Login />} />
				</Routes>
			</>
		</div>
	);
}

export default App;
