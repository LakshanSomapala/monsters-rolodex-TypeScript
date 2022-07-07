import Card from "../card/card.component";
import { Monster } from "../../App";
import "./card-list.styles.css";

type cardProps = {
	monsters: Monster[];
};

const CardList = (
	{ monsters }: cardProps // no need to de-structuring parameters as we pass only one parameter, no return we implicitly return coz nothing else to return
) => (
	<div className="card-list">
		{monsters.map((monster) => {
			return <Card monsters={monster}></Card>;
		})}
	</div>
);

export default CardList;
