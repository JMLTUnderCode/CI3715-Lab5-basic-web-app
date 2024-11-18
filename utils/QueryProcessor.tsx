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

	if (query.toLowerCase().includes("minus")) {
		const numbers = query.match(/\d+/g)?.map(Number) || [];
		return String(numbers.reduce((a, b) => a - b));
	}

	if (query.toLowerCase().includes("multiplied")) {
		const numbers = query.match(/\d+/g)?.map(Number) || [];
		return String(numbers.reduce((a, b) => a * b, 1));
	}

	// Función para verificar si un número es un cuadrado perfecto
	function isPerfectSquare(num: number): boolean {
		const sqrt = Math.sqrt(num);
		return Number.isInteger(sqrt) && sqrt * sqrt === num; // Verifica que sqrt sea un entero
	}

	// Función para verificar si un número es un cubo perfecto
	function isPerfectCube(num: number): boolean {
		const cbrt = Math.cbrt(num);
		return Number.isInteger(cbrt) && cbrt * cbrt * cbrt === num; // Verifica que cbrt sea un entero
	}

	if (query.toLowerCase().includes("both a square and a cube")) {
		// Extraer los números del query
		const numbers = query.match(/\d+/g)?.map(Number) || [];
		// Filtrar los números que son tanto cuadrados como cubos perfectos
		const results = numbers.filter(num => isPerfectSquare(num) && isPerfectCube(num));
		// Retornar los números como un string separado por coma
		return results.length > 0 ? results.join(", ") : "No numbers found";
	}

	// Función para verificar si un número es primo
	function isPrime(num: number): boolean {
		if (num <= 1) return false;
		for (let i = 2; i <= Math.sqrt(num); i++) {
			if (num % i === 0) return false;
		}
		return true;
	}

	if (query.toLowerCase().includes("primes")) {
		// Extraer los números del query
		const numbers = query.match(/\d+/g)?.map(Number) || [];
		// Filtrar los números primos
		const primes = numbers.filter(isPrime);
		// Retornar los números primos como un string separado por coma
		return primes.length > 0 ? primes.join(", ") : "No primes found";
	}

	return "";
}