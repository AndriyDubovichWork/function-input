export default function generateAutocomplete(
  searchTerm: string,
  autocomplete: Autocomplete[]
) {
  return autocomplete.filter((autocomplete) =>
    autocomplete.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}
