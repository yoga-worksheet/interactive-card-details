import React, { useEffect } from "react";
import card_logo from "../../assets/images/card-logo.svg";

const InteractiveCard = ({ card }) => {
	let displayNumber = card.display || "0000000000000000";

	return (
		<div className="relative w-full h-[250px] md:basis-[45%] md:h-full">
			<div className="bg-card-front bg-cover flex flex-col justify-between w-full max-w-[85%] md:max-w-[420px] h-[150px] md:h-full md:max-h-[230px] p-5 md:p-7 rounded-md md:rounded-lg z-10 absolute bottom-0 left-0 md:top-0 md:bottom-auto shadow-lg">
				<img
					className="block h-[30px] self-start"
					src={card_logo}
					alt="card logo"
				/>
				<div className="text-white tracking-widest">
					<div className="flex text-lg md:text-2xl">
						{displayNumber.split("").map((element, index) =>
							index % 4 === 0 && index !== 0 ? (
								<span key={index} className="ml-2">
									{element}
								</span>
							) : (
								<span key={index}>{element}</span>
							)
						)}
					</div>
					<div className="flex justify-between text-[10px] md:text-[14px] mt-3">
						<span>{card.name || "JANE APPLESEED"}</span>
						<span>
							{card.month || "00"}/{card.year || "00"}
						</span>
					</div>
				</div>
			</div>
			<div className="bg-card-back bg-cover w-full max-w-[85%] md:max-w-[420px] h-[150px] md:h-full md:max-h-[230px] p-5 md:p-7 rounded-md md:rounded-lg absolute top-0 right-0 md:top-auto md:bottom-0 shadow-lg">
				<span className="block text-white text-[10px] md:text-lg translate-y-12 md:translate-y-[4.5rem] translate-x-[-15px] float-right">
					{card.cvc || "000"}
				</span>
			</div>
		</div>
	);
};

export default InteractiveCard;
