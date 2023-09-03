import React, { useState } from "react";
import logo from "./assets/logo.png";
import "./App.css";
import Main from "./components/Main";
import People from "./components/People";

function App() {
	const [selectedComponent, setSelectedComponent] = useState("Main");

	return (
		<>
			<nav>
        <img src={logo} alt="" />
				<button onClick={() => setSelectedComponent("Main")}>Início</button>
				
				<button onClick={() => setSelectedComponent("People")}>Personagens</button>
			</nav>
			<div id="ctn-main">
				{selectedComponent === "Main" && <Main />}
				
				{selectedComponent === "People" && <People />}
			</div>
		</>
	);
}

export default App;