export const rocketQuotes = [
	'We nailed the orbit to well within target parameters...pretty much a bullseye.',
	'Uncharted territory. ... Nobody has ever made a fully reusable, orbital rocket.',
	'Designed to make life multiplanetary.',
];
export const randomRQuote = () => {
	const quote = Math.floor(Math.random() * rocketQuotes.length);
	return rocketQuotes[quote];
};
