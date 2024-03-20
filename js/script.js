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

function ShowAllCars() {
	let cars = GetAllCars();
	cars.forEach(function (car) {
		let tableau = document.getElementById("tbody");
		let row = tableau.insertRow();
		let cell1 = row.insertCell(0);
		let cell2 = row.insertCell(1);
		let cell3 = row.insertCell(2);
		let cell4 = row.insertCell(3);
		let cell5 = row.insertCell(4);
		cell1.innerHTML = car.marque;
		cell2.innerHTML = car.modele;
		cell3.innerHTML = car.annee;
		cell4.innerHTML = car.prix;
		cell5.innerHTML = car.kilometrage;
	});
}
