import React, { useState } from "react";

const Form = ({
	card,
	nameHandler,
	numberHandler,
	monthHandler,
	yearHandler,
	cvcHandler,
	submitHandler,
}) => {
	const [error, setError] = useState({
		name: false,
		number: false,
		month: false,
		year: false,
		cvc: false,
	});

	return (
		<form
			className="flex flex-col gap-4 tracking-widest"
			onSubmit={(e) => {
				e.preventDefault();
				submitHandler();
			}}
		>
			<div className="group">
				<label className="text-xs text-veryDarkViolet" htmlFor="name">
					CARDHOLDER NAME
				</label>
				<input
					className={`border ${
						error?.name && "ring-1 ring-error"
					} w-full mt-1 py-2 px-3 rounded-[10px] focus:outline-none focus:ring-1 focus:ring-gradient-to-l focus:from-color1 focus:to-color2 placeholder:text-lightGrayishViolet placeholder:font-[700]`}
					type="text"
					id="name"
					placeholder="e.g. Jane Appleseed"
					value={card.name}
					onChange={(event) => {
						nameHandler(event.target.value);
						event.target.value.length &&
							setError((prev) => ({ ...prev, name: false }));
					}}
					onInvalid={() =>
						setError((prev) => ({ ...prev, name: true }))
					}
					required
				/>
				{error?.name && (
					<span className="text-xs tracking-tight text-error mt-1">
						Can't be blank
					</span>
				)}
			</div>
			<div className="group">
				<label className="text-xs text-veryDarkViolet" htmlFor="number">
					CARD NUMBER
				</label>
				<input
					className={`border ${
						error?.number && "ring-1 ring-error"
					} w-full mt-1 py-2 px-3 rounded-[10px] focus:outline-none focus:ring-1 focus:ring-gradient-to-l focus:from-color1 focus:to-color2 placeholder:text-lightGrayishViolet placeholder:font-[700]`}
					type="text"
					id="number"
					placeholder="e.g. 1234 5678 9123 0000"
					value={card.number}
					onChange={(event) => {
						numberHandler(event.target.value);
						event.target.value.length &&
							setError((prev) => ({ ...prev, number: false }));
					}}
					onInvalid={() =>
						setError((prev) => ({ ...prev, number: true }))
					}
					pattern="^[0-9]*$"
					required
				/>
				{error?.number &&
					(!card.number.length ? (
						<span className="text-xs tracking-tight text-error mt-1">
							Can't be blank
						</span>
					) : (
						<span className="text-xs tracking-tight text-error mt-1">
							Wrong format, numbers only
						</span>
					))}
			</div>
			<div className="flex gap-5 justify-between">
				<div className="flex-1">
					<label
						className="text-xs text-veryDarkViolet"
						htmlFor="date"
					>
						EXP. DATE (MM/YY)
					</label>
					<div className="flex justify-between gap-2">
						<div className="group">
							<input
								className={`border ${
									error?.month && "ring-1 ring-error"
								} w-full mt-1 py-2 px-3 rounded-[10px] focus:outline-none focus:ring-1 focus:ring-gradient-to-l focus:from-color1 focus:to-color2 placeholder:text-lightGrayishViolet placeholder:font-[700]`}
								type="number"
								id="date"
								placeholder="MM"
								value={card.month}
								onChange={(event) => {
									monthHandler(event.target.value);
									event.target.value.length &&
										setError((prev) => ({
											...prev,
											month: false,
										}));
								}}
								onInvalid={() =>
									setError((prev) => ({
										...prev,
										month: true,
									}))
								}
								required
							/>
							{error?.month && (
								<span className="text-xs tracking-tight text-error mt-1">
									Can't be blank
								</span>
							)}
						</div>
						<div className="group">
							<input
								className={`border ${
									error?.year && "ring-1 ring-error"
								} w-full mt-1 py-2 px-3 rounded-[10px] focus:outline-none focus:ring-1 focus:ring-gradient-to-l focus:from-color1 focus:to-color2 placeholder:text-lightGrayishViolet placeholder:font-[700]`}
								type="number"
								placeholder="YY"
								value={card.year}
								onChange={(event) => {
									yearHandler(event.target.value);
									event.target.value.length &&
										setError((prev) => ({
											...prev,
											year: false,
										}));
								}}
								onInvalid={() =>
									setError((prev) => ({
										...prev,
										year: true,
									}))
								}
								required
							/>
							{error?.year && (
								<span className="text-xs tracking-tight text-error mt-1">
									Can't be blank
								</span>
							)}
						</div>
					</div>
				</div>
				<div className="flex-1">
					<label
						className="text-xs text-veryDarkViolet"
						htmlFor="cvc"
					>
						CVC
					</label>
					<input
						className={`border ${
							error?.cvc && "ring-1 ring-error"
						} w-full mt-1 py-2 px-3 rounded-[10px] focus:outline-none focus:ring-1 focus:ring-gradient-to-l focus:from-color1 focus:to-color2 placeholder:text-lightGrayishViolet placeholder:font-[700]`}
						type="text"
						id="cvc"
						placeholder="e.g. 123"
						value={card.cvc}
						onChange={(event) => {
							cvcHandler(event.target.value);
							event.target.value.length &&
								setError((prev) => ({
									...prev,
									cvc: false,
								}));
						}}
						onInvalid={() =>
							setError((prev) => ({
								...prev,
								cvc: true,
							}))
						}
						required
					/>
					{error?.cvc && (
						<span className="text-xs tracking-tight text-error mt-1">
							Can't be blank
						</span>
					)}
				</div>
			</div>
			<button className="bg-veryDarkViolet text-white text-lg py-3 px-5 rounded-lg mt-5">
				Confirm
			</button>
		</form>
	);
};

export default Form;
