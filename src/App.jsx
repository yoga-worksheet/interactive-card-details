import InteractiveCard from "./components/InteractiveCard/InteractiveCard";
import CompleteMessage from "./components/CompleteMessage/CompleteMessage";
import Form from "./components/Form/Form";
import { useState } from "react";

const App = () => {
	const [submitted, setSubmitted] = useState(false);
	const [card, setCard] = useState({
		name: "",
		number: "",
		display: "",
		month: "",
		year: "",
		cvc: "",
	});

	const nameHandler = (name) => {
		if (name.length <= 20) {
			setCard((prev) => ({
				...prev,
				name: name.toUpperCase(),
			}));
		}
	};

	const numberHandler = (number) => {
		if (number.length <= 16) {
			let numberContainer = "";
			numberContainer += number;
			for (let i = 1; i <= 16 - number.length; i++) {
				numberContainer += "0";
			}
			setCard((prev) => ({
				...prev,
				number,
				display: numberContainer,
			}));
		}
	};

	const monthHandler = (month) => {
		if (
			month.length <= 2 &&
			parseInt(month) <= 12 &&
			parseInt(month) >= 1
		) {
			setCard((prev) => ({
				...prev,
				month,
			}));
		}
	};

	const yearHandler = (year) => {
		if (year.length <= 2) {
			setCard((prev) => ({
				...prev,
				year,
			}));
		}
	};

	const cvcHandler = (cvc) => {
		const checkNumber = /^[0-9]*$/gi;
		if (cvc.length <= 3 && checkNumber.test(cvc)) {
			setCard((prev) => ({
				...prev,
				cvc,
			}));
		}
	};

	const submitHandler = () => setSubmitted(true);

	const resetHandler = () => {
		setSubmitted(false);
		setCard({
			name: "",
			number: "",
			display: "",
			month: "",
			year: "",
			cvc: "",
		});
	};

	return (
		<main className="w-full h-full md:h-screen bg-mobile md:bg-desktop bg-no-repeat px-5 py-8 md:p-0 md:grid md:place-items-center">
			<section className="flex flex-col md:flex-row md:justify-around md:items-center gap-5 w-full md:h-full md:max-h-[500px] md:max-w-[1150px] md:m-auto">
				<InteractiveCard card={card} />
				<div className="py-5 px-2 md:basis-[40%]">
					{submitted ? (
						<CompleteMessage resetHandler={resetHandler} />
					) : (
						<Form
							card={card}
							nameHandler={nameHandler}
							numberHandler={numberHandler}
							monthHandler={monthHandler}
							yearHandler={yearHandler}
							cvcHandler={cvcHandler}
							submitHandler={submitHandler}
						/>
					)}
				</div>
			</section>
		</main>
	);
};

export default App;
