import { useState } from "react";
import QueryProcessor from "../utils/QueryProcessor";
import styles from '../styles/Home.module.css'; // Importa el módulo CSS

export default function Home() {
	const [query, setQuery] = useState<string>("");

	return (
		<div className={`${styles.main}`}> {/* Usa la clase del módulo CSS */}
			<h1 className={`${styles.center}`}>Welcome!!</h1>
			<p>Please enter your query in the box below:</p>
			<input
				type="text"
				value={query}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setQuery(e.target.value)
				}
				className={`${styles.card}`}
			/>
			<div className={``}>
				{QueryProcessor(query) == "" ? "No Match" : QueryProcessor(query)}
			</div>
		</div>
	);
}
