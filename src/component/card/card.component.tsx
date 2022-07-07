import { Monster } from "../../App";
import "./card.styles.css";

type cardProps = {
	monsters: Monster;
};

const Card = ({ monsters }: cardProps) => {
	const { id, name, email } = monsters;
	return (
		<div className="card-container" key={id}>
			<img
				alt={`monster ${name}`}
				src={`https://robohash.org/${id}?set=set2&size=180x180`}
			/>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
};

export default Card;
