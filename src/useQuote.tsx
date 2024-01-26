import { useEffect, useState } from 'react';
import { TQuoteApiRes, TQuoteState } from './types';
import { randomDefaultQuote } from './utils';

export const useQuote = (): TQuoteState => {
  const defaultQuote = randomDefaultQuote;
  const [quoteState, setQuoteStates] = useState<TQuoteState>({
    quote: defaultQuote,
    isLoading: false,
    hasError: false,
  });

  const fetchQuote = async () => {
    try {
      setQuoteStates({
        ...quoteState,
        isLoading: true,
        hasError: false,
      });
      const quoteRes = await fetch('https://dummyjson.com/quotes?limit=20');
      const res: TQuoteApiRes = await quoteRes.json();
      const validQuote = res.quotes.find(({ quote }) => quote.length < 80);
      setQuoteStates({
        isLoading: false,
        hasError: false,
        quote: validQuote?.quote || defaultQuote,
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
