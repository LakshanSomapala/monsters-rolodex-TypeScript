import { useEffect, useState, ChangeEvent } from "react";
import { getData } from "./utils/data.utils";

// import logo from './logo.svg';
import CardList from "./component/card-list/card-list.component";
import SearchBox from "./component/search-box/search-box.component";
import "./App.css";

export type Monster = {
	id: string;
	name: string;
	email: string;
};

const App = () => {
	const [searchField, setSearchField] = useState("");
	const [monsters, setMonsters] = useState<Monster[]>([]);
	const [filteredMonsters, setFilteredMonsters] = useState(monsters);

	useEffect(() => {
		const fetchUsers = async () => {
			const users = await getData<Array<Monster>>(
				"https://jsonplaceholder.typicode.com/users"
			);
			setMonsters(users);
		};
		fetchUsers();
	}, []);

	useEffect(() => {
		const newFileteredMonsters = monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(searchField);
		});
		setFilteredMonsters(newFileteredMonsters);
	}, [monsters, searchField]);

	const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
		const searchFieldString = event.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);
	};

	return (
		<div className="App">
			<h1 className="app-title">Monsters Rolodex</h1>
			<SearchBox
				className="monsters-search-box"
				placeHolder="search monsters"
				onChangeHandler={onSearchChange}
			></SearchBox>
			<CardList monsters={filteredMonsters}></CardList>
		</div>
	);
};

export default App;
