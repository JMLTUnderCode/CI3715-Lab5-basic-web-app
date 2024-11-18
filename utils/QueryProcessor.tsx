export default function QueryProcessor(query: string): string {
	if (query.toLowerCase().includes("shakespeare")) {
		return (
			"William Shakespeare (26 April 1564 - 23 April 1616) was an " +
			"English poet, playwright, and actor, widely regarded as the greatest " +
			"writer in the English language and the world's pre-eminent dramatist."
		);
	}

	if (query.toLowerCase().includes("usb id")) {
		// TODO añade tu USB ID a continuación
		// TODO actualiza el caso de prueba correspondiente en __tests__
		return ("TU USB ID: 17-10303");
	}

	if (query.toLowerCase().includes("name")) {
		return ("Junior");
	}

	if (query.toLowerCase().includes("largest")) {
		const numbers = query.match(/\d+/g)?.map(Number) || [];
		return String(Math.max(...numbers));
	}

	if (query.toLowerCase().includes("plus")) {
		const numbers = query.match(/\d+/g)?.map(Number) || [];
		return String(numbers.reduce((a, b) => a + b, 0));
	}

	return "";
}