import React from "react";
import icon_complete from "../../assets/images/icon-complete.svg";

const CompleteMessage = ({ resetHandler }) => {
	return (
		<div className="grid place-items-center gap-3">
			<img className="mb-5" src={icon_complete} alt="icon complete" />
			<h1 className="text-3xl tracking-[0.25rem] text-veryDarkViolet">
				THANK YOU
			</h1>
			<p className="text-darkGrayishViolet tracking-wide">
				We've added your card details
			</p>
			<button
				onClick={resetHandler}
				className="w-full bg-veryDarkViolet text-white text-lg py-3 px-5 rounded-lg mt-5"
			>
				Continue
			</button>
		</div>
	);
};

export default CompleteMessage;
