import React, { useState, useEffect } from "react";
import axios from "axios";

function People() {
	const [isLoading, setLoading] = useState(true);
	const [starWarsDataPeople, setStarWarsDataPeople] = useState();
	const [urlPeople, setUrlPeople] = useState(
		`https://swapi.dev/api/people/?page=1`
	);

	useEffect(() => {
		axios.get(urlPeople).then((response) => {
			setStarWarsDataPeople(response.data);
			setLoading(false);
		});
	}, [urlPeople]);

	if (isLoading) {
		return (
			<div>
				<div>
					<h1>Personagens</h1>
					<button
						disabled={true}
					>
						 Pagina anterior
					</button>
					<button
						disabled={true}
					>
						Proxima pagina
					</button>
				</div>
				<div>
					Carregando
				</div>
			</div>
		);
	}

	const allPeopleOnPage = starWarsDataPeople.results.map((people) => {
		console.log(people);

		return (
			<div className="card card-people">
				<h2 key={people.name}>{people.name}</h2>
				<p>Genero: {people.gender}</p>
				<p>Ano de Nascimento: {people.birth_year}</p>
				<p>Altura: {people.height}</p>
				<p>Cor do Cabelo: {people.hair_color}</p>
				<p>Cor da pele: {people.skin_color}</p>
				<p>Cor do olho: {people.eye_color}</p>
				<br />
			</div>
		);
	});

	return (
		<div>
			<h1>Personagens</h1>
			<button
				onClick={previousPage}
				disabled={starWarsDataPeople.previous ? false : true}
			>
				Pagina Anterior
			</button>
			<button
				onClick={nextPeoplePage}
				disabled={starWarsDataPeople.next ? false : true}
			>
				Proxima Pagina
			</button>

			<main>{allPeopleOnPage}</main>
		</div>
	);

	function nextPeoplePage() {
		setLoading(true);
		setUrlPeople(starWarsDataPeople.next);
	}

	function previousPage() {
		setLoading(true);
		setUrlPeople(starWarsDataPeople.previous);
	}
}

export default People;