import { useState } from 'react';

export default function useAutocomplete(
  autocomplete: Autocomplete[],
  searchTerm: string
) {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const filteredSuggestions = autocomplete.filter((autocomplete) =>
    autocomplete.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}
