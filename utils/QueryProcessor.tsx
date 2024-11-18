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
	if (query.toLowerCase().includes("your name")) {
		// TODO añade tu USB ID a continuación
		// TODO actualiza el caso de prueba correspondiente en __tests__
		return ("JuniorLara");
	}
	return "";
}
