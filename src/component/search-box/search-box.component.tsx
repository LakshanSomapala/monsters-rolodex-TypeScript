import { ChangeEventHandler, ChangeEvent } from "react";
import "./search-box.styles.css";

//Declaring type script variables
// const name: string = "123454";
// //specify what is the retun value type
// const func: (a: string, b: number, c: boolean) => boolean = (a, b, c) => {
// 	return true;
// };
// //nothing retune
// const func2: (a: string, b: number, c: boolean) => void = (a, b, c) => {};

//INTERFACE
// interface ISearchBoxProps extends IChangeHandlerProps {
// 	className: string;
// 	placeHolder?: string; // this says expecting string but might not get it, can be null
// 	// same as placeHolder?: string | null
// }

// interface IChangeHandlerProps {
// 	onChangeHandler: (a: string) => void; // input string value and return nothing
// }

// //Interface overload, both correct
// interface ISearchBoxProps {
// 	className: string;
// 	placeHolder?: string; // this says expecting string but might not get it, can be null
// 	// same as placeHolder?: string | null
// }

// interface ISearchBoxProps {
// 	onChangeHandler: (a: string) => void; // input string value and return nothing
// }

//ANOTHER WAY - TYPES
type SearchBoxProps = {
	className: string;
	placeHolder?: string;
	// onChangeHandler: ChangeEventHandler<HTMLInputElement>; // input value HTMLInputElement
	onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void; // another way that we can define
};

// const SearchBox = ({
// 	className,
// 	placeHolder,
// 	onChangeHandler,
// }: ISearchBoxProps) => {

const SearchBox = ({
	className,
	placeHolder,
	onChangeHandler,
}: SearchBoxProps) => {
	return (
		<input
			className={`search-box ${className}`}
			type="search"
			placeholder={placeHolder}
			onChange={(e) => onChangeHandler(e)}
		/>
	);
};

export default SearchBox;
