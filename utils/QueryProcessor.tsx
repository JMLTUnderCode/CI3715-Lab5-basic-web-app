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

	// Función para multiplicar dos números representados como strings
	function multiply(num1: string, num2: string): string {
		const result = Array(num1.length + num2.length).fill(0);

		for (let i = num1.length - 1; i >= 0; i--) {
			for (let j = num2.length - 1; j >= 0; j--) {
				const mul = (num1[i].charCodeAt(0) - '0'.charCodeAt(0)) * (num2[j].charCodeAt(0) - '0'.charCodeAt(0));
				const sum = mul + result[i + j + 1];

				result[i + j + 1] = sum % 10; // Guardar el dígito
				result[i + j] += Math.floor(sum / 10); // Llevar la decena
			}
		}

		// Convertir el resultado a string
		return result.join('').replace(/^0+/, '') || '0'; // Eliminar ceros a la izquierda
	}

	// Función para calcular la potencia utilizando multiplicación de strings
	function power(base: string, exponent: number): string {
		let result = "1"; // Inicializar resultado como "1"
		for (let i = 0; i < exponent; i++) {
			result = multiply(result, base); // Multiplicar el resultado por la base
		}
		return result; // Retornar el resultado
	}

	if (query.toLowerCase().includes("power")) {
		const numbers = query.match(/\d+/g);
		if (numbers && numbers.length === 2) {
			const base = numbers[0]; // Mantener como string
			const exponent = parseInt(numbers[1]); // Exponente se convierte a Number

			// Calcular la potencia usando una función auxiliar
			const result = power(base, exponent);
			return result; // Retornar el resultado como string
		}
	}

	return "";
}