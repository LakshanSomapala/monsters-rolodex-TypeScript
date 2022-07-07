import Card from "../card/card.component";
import { Monster } from "../../App";

import "./card-list.styles.css";

type cardProps = {
	monsters: Monster[];
};

const CardList = (
	{ monsters }: cardProps 
) => (
	<div className="card-list">
		{monsters.map((monster) => {
			return <Card monsters={monster}></Card>;
		})}
	</div>
);

export default CardList;
