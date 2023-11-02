import { useEffect, useState } from 'react';
import { TQuoteState } from './types';

export const useQuote = (): TQuoteState => {
	const [quoteState, setQuoteStates] = useState<TQuoteState>({} as TQuoteState);

	const fetchQuote = async () => {
		try {
			setQuoteStates({
				...quoteState,
				isLoading: true,
				hasError: false,
			});
			const quoteRes = await fetch('https://dummyjson.com/quotes/random');
			const { quote } = await quoteRes.json();
			setQuoteStates({
				isLoading: false,
				hasError: false,
				quote,
			});
		} catch (error) {
			setQuoteStates({
				...quoteState,
				isLoading: false,
				hasError: true,
			});
		}
	};

	useEffect(() => {
		fetchQuote();
	}, []);

	return quoteState;
};
