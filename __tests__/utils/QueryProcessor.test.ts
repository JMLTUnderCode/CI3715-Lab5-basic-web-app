import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    // TODO: Deberías actualizar la prueba a continuación después de añadir tu USB ID
    test('should return my USB ID', () => {
        const query = "what's your USB ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"TU USB ID: 17-10303"
    	));
    });

	test('should return my name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"Junior"
    	));
    });

	test('should return largest number', () => {
        const query = "Which of the following numbers is the largest: 86, 42, 35?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"86"
    	));
    });

	test('should return addition of numbers', () => {
        const query = "What is 46 plus 76?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"122"
    	));
    });

	test('should return minus of numbers', () => {
        const query = "What is 60 minus 88?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"-28"
    	));
    });

	test('should return multiplication of numbers', () => {
        const query = "What is 50 multiplied by 28?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"1400"
    	));
    });

	test('should return square and a cube of numbers', () => {
        const query = "Which of the following numbers is both a square and a cube: 293, 3364, 4205, 729, 64, 3059, 3047?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"293, 3364, 729, 64, 3047"
    	));
    });

	test('should return square and a cube of numbers', () => {
        const query = "Which of the following numbers are primes: 29, 71, 7, 68, 45?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"29, 7w1, 7"
    	));
    });

});
