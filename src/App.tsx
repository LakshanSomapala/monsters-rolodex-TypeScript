import { Component, useEffect, useState, ChangeEvent } from "react";
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
	// const [searchField, setSearchField] = useState(""); // [value, setValue], string variabel
	// const [monsters, setMonsters] = useState([]); // array variable
	// const [filteredMonsters, setFilteredMonsters] = useState(monsters);

	//For type script
	const [searchField, setSearchField] = useState(""); // [value, setValue], string variabel
	const [monsters, setMonsters] = useState<Monster[]>([]); // array variable, tell what type is expecting for the variables (passing generic argumenst)
	const [filteredMonsters, setFilteredMonsters] = useState(monsters);
	/**
	 * above searchField, we dont need to explicitly tell for useState this is going to be string coz, type script knwo this is sting because we explicitly typed when initialize. But arry TS cannot guess
	 */

	// useEffect(() => {
	//  fetch("https://jsonplaceholder.typicode.com/users")
	//      .then((response) => response.json())
	//      .then((users) => setMonsters(users));
	// }, []); // this fetch will fired only when component mount (initial state of the program) because of empty array which means no dependancis to be change to re-render this hook.

	//For type script
	useEffect(() => {
		const fetchUsers = async () => {
			// const users = await getData<Monster[]>("https://jsonplaceholder.typicode.com/users");//here define what type we getting back "Monster" type array
			const users = await getData<Array<Monster>>(
				"https://jsonplaceholder.typicode.com/users"
			); //here define what type we getting back "Monster" type array, another way of define array
			setMonsters(users);
		};
		fetchUsers(); //calling the function
	}, []); // this fetch will fired only when component mount (initial state of the program) because of empty array which means no dependancis to be change to re-render this hook.

	useEffect(() => {
		const newFileteredMonsters = monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(searchField);
		});
		setFilteredMonsters(newFileteredMonsters);
	}, [monsters, searchField]); // this hook will call every time when monsters or searchField value changes.

	const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
		//retun void, nothing return
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

// class App extends Component { //sadasdasdadwssa
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//     console.log('constructor');
//   }

// componentDidMount() { // when react renders first time this will occuer. this happens only onces.
//   console.log('componentDidMount');
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) =>
//       this.setState(
//         () => {
//           return { monsters: users };
//         }
//       )
//     );
// }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     })
//     console.log(event);
//   }

//   render() {
//     console.log('render');
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         {/* <input className='search-box' type='search' placeholder='search monsters' onChange={onSearchChange} /> */}
//         {/* {filteredMonsters.map((monster) => {
//           return (
//             <div key={monster.id}>
//               <h1>{monster.name}</h1>
//             </div>
//           );
//         })} */}

//         {/* Move to component */}
//         <SearchBox
//           className='monsters-search-box'
//           placeHolder='search monsters'
//           onChangeHandler={onSearchChange}
//         ></SearchBox>
//         <CardList monsters={filteredMonsters}></CardList>
//       </div>
//     );
//   }
// }

export default App;
