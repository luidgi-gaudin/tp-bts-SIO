function CreateAllCars() {
	return [
		{
			marque: "BMW",
			modele: "X5",
			annee: 2019,
			prix: 100000,
			kilometrage: 12700,
		},
		{
			marque: "Audi",
			modele: "Q7",
			annee: 2018,
			prix: 90000,
			kilometrage: 12000,
		},
		{
			marque: "Mercedes",
			modele: "GLE",
			annee: 2017,
			prix: 80000,
			kilometrage: 11000,
		},
		{
			marque: "Toyota",
			modele: "Land Cruiser",
			annee: 2016,
			prix: 70000,
			kilometrage: 10000,
		},
		{
			marque: "Nissan",
			modele: "Patrol",
			annee: 2015,
			prix: 60000,
			kilometrage: 9000,
		},
		{
			marque: "BMW",
			modele: "X5",
			annee: 2019,
			prix: 100000,
			kilometrage: 12700,
		},
		{
			marque: "Audi",
			modele: "Q7",
			annee: 2018,
			prix: 90000,
			kilometrage: 12000,
		},
		{
			marque: "Mercedes",
			modele: "GLE",
			annee: 2017,
			prix: 80000,
			kilometrage: 11000,
		},
		{
			marque: "Toyota",
			modele: "Land Cruiser",
			annee: 2016,
			prix: 70000,
			kilometrage: 10000,
		},
		{
			marque: "Nissan",
			modele: "Patrol",
			annee: 2015,
			prix: 60000,
			kilometrage: 9000,
		},
	];
}

function date() {
	let datefinal = new Date().getFullYear() + 2005;
	alert(datefinal);
}

function GetAllCars() {
	let cars = CreateAllCars();
	return cars;
}

const categorie = ["marque", "modele", "annee", "prix", "kilometrage"];

const tableau = document.getElementById("tbody");

function ShowAllCars() {
	let cars = GetAllCars();
	cars.forEach(function (car) {
		const row = tableau.insertRow();
		for (let i = 0; i < 5; i++) {
			let cell = row.insertCell(i);
			cell.innerHTML = car[categorie[i]];
		}
	});
}
