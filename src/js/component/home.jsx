import React from "react";
import Navbar from "./navbar";
import Card from "./card";
import Jumbotron from "./Jumbotron";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
		<Navbar />
		<Jumbotron />
		<Card />
		</>
	);
};

export default Home;
